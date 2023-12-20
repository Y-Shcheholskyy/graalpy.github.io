---
layout: docs-layout
title: Interoperability
permalink: /docs/polyglot-api/
toc: true
---

# Interoperability with GraalVM Languages

GraalPy provides interoperability with languages supported by GraalVM (languages implemented with the [Truffle framework](https://www.graalvm.org/latest/graalvm-as-a-platform/language-implementation-framework/)).

The best way to create a polyglot Python application is to use the [GraalVM SDK Polyglot API](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/package-summary.html).

## Polyglot API

Since GraalVM supports several other programming languages including JavaScript, R, Ruby, and those that compile to LLVM bitcode, it also provides a Python API to interact with them.
In fact, GraalVM uses this API internally when executing Python native extensions using the [GraalVM LLVM runtime](https://www.graalvm.org/latest/reference-manual/llvm/).

Other languages are only available for a GraalPy JVM distribution.

> A GraalPy JVM distribution contains Python in the JVM configuration. To distinguish between the default, native, and the JVM configuration, the downloadable file has `-jvm` in the name. See [GraalPy releases](https://github.com/oracle/graalpython/releases/).

You can install other languages into GraalPy. For that, use `libexec/graalpy-polyglot-get` from the distribution's root directory.
To install Ruby, for example:
```shell
libexec/graalpy-polyglot-get ruby
```

You can import the `polyglot` module to interact with other languages:
```python
>>> import polyglot
```

You can evaluate some inlined code from another language:
```python
>>> polyglot.eval(string="1 + 1", language="ruby")
2
```

You can evaluate some code from a file, by passing the path to it:
```python
>>> with open("./my_ruby_file.rb", "w") as f:
...    f.write("Polyglot.export('RubyPolyglot', Polyglot)")
41
>>> polyglot.eval(path="./my_ruby_file.rb", language="ruby")
<foreign object at ...>
```

You can import a global value from the entire polyglot scope:
```python
>>> ruby_polyglot = polyglot.import_value("RubyPolyglot")
```

This global value should then work as expected:
    
* Accessing attributes assumes it reads from the `members` namespace.
    ```python
    >>> ruby_polyglot.to_s
    <foreign object at ...>
    ```

* Calling methods on the result tries to do a straight invoke and falls back to reading the member and trying to execute it.
    ```python
    >>> ruby_polyglot.to_s()
    Polyglot
    ```

* Accessing items is supported both with strings and numbers.
    ```python
    >>> ruby_polyglot.methods()[10] is not None
    True
    ```

You can export some object from Python to other supported languages so they can import it:
```python
>>> foo = object()
>>> polyglot.export_value(value=foo, name="python_foo")
<object object at ...>
>>> jsfoo = polyglot.eval(language="js", string="Polyglot.import('python_foo')")
>>> jsfoo is foo
True
```

The export function can be used as a decorator.
In this case the function name is used as the globally exported name:
```python
>>> @polyglot.export_value
... def python_method():
...     return "Hello from Python!"
```

Here is an example of how to use the JavaScript Regular Expression Engine to match Python strings:
```python
>>> js_re = polyglot.eval(string="RegExp()", language="js")

>>> pattern = js_re.compile(".*(?:we have (?:a )?matching strings?(?:[!\\?] )?)(.*)")

>>> if pattern.exec("This string does not match"):
...    raise SystemError("that shouldn't happen")

>>> md = pattern.exec("Look, we have matching strings! This string was matched by Graal.js")

>>> "Here is what we found: '%s'" % md[1]
"Here is what we found: 'This string was matched by Graal.js'"
```

This program matches Python strings using the JavaScript Regular Expression object.
Python reads the captured group from the JavaScript result and prints it.

As a more complex example, see how you can read a file using R, process the data in Python, and use R again to display the resulting data image, using both the R and Python libraries in conjunction.
To run this example, first install the required R library:
```bash
R -e 'install.packages("https://www.rforge.net/src/contrib/jpeg_0.1-8.tar.gz", repos=NULL)'
```

This example also uses [image_magix.py](../assets/image_magix.py) and works on a JPEG image input (you can try with [this image](../assets/python_demo_picture.jpg)).
The files have to be in the same directory that the script below is located in and run from.
```python
import polyglot
import sys
import time
sys.path.insert(0, ".")
from image_magix import Image

load_jpeg = polyglot.eval(string="""function(file.name) {
    library(jpeg)
    jimg <- readJPEG(file.name)
    jimg <- jimg*255
    jimg
}""", language="R")

raw_data = load_jpeg("python_demo_picture.jpg")

# the dimensions are R attributes; define function to access them
getDim = polyglot.eval(string="function(v, pos) dim(v)[[pos]]", language="R")

# Create object of Python class 'Image' with loaded JPEG data
image = Image(getDim(raw_data, 2), getDim(raw_data, 1), raw_data)

# Run Sobel filter
result = image.sobel()

draw = polyglot.eval(string="""function(processedImgObj) {
    require(grDevices)
    require(grid)
    mx <- matrix(processedImgObj$`@data`/255, nrow=processedImgObj$`@height`, ncol=processedImgObj$`@width`)
    grDevices:::awt()
    grid.raster(mx, height=unit(nrow(mx),"points"))
}""", language="R")

draw(result)
time.sleep(10)
```

## Interop Types

The interop protocol defines different "types" which can overlap in all kinds of ways and have restrictions on how they can interact with Python.

### Interop Types to Python

Most importantly and upfront: all foreign objects passing into Python have the Python type `foreign`.
There is no emulation of i.e., objects that are interop booleans to have the Python type `bool`.
This is because interop types can overlap in ways that the Python built-in types cannot, and it would not be clear what should take precedence.
Instead, the `foreign` type defines all of the Python special methods for type conversion that are used throughout the interpreter (methods such as `__add__`, `__int__`, `__str__`, `__getitem__`, etc.) and these try to do the right thing based on the interop type (or raise an exception.)

Types not listed in the below table have no special interpretation in Python right now.

| Interop type | Python interpretation                                                                                                                                                                                                                                                                                                |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Null         | It is like None. Important to know: interop null values are equal, but not identical! This was done because JavaScript defines two "null-like" values; `undefined` and `null`, which are *not* identical                                                                                                             |
| Boolean      | Behaves like Python booleans, including the fact that in Python, all booleans are also integers (1 and 0 for true and false, respectively)                                                                                                                                                                           |
| Number       | Behaves like Python numbers. Python only has one integral and one floating point type, but it cares about the ranges in some places such as typed arrays.                                                                                                                                                            |
| String       | Behaves like Python strings.                                                                                                                                                                                                                                                                                         |
| Buffer       | Buffers are also a concept in Python's native API (albeit a bit different). Interop buffers are treated like Python buffers in some places (such as `memoryview`) to avoid copies of data.                                                                                                                              |
| Array        | Arrays can be used with subscript access like Python lists, with integers and slices as indices.                                                                                                                                                                                                                     |
| Hash         | Hashes can be used with subscript access like Python dicts, with any hashable kind of object as key. "Hashable" follows Python semantics, generally all interop types with identity are deemed "hashable". Note that if an interop object is both Array and Hash, the behavior of the subscript access is undefined. |
| Members      | Members can be read using normal Python ~.~ notation or the `getattr` etc. functions.                                                                                                                                                                                                                                 |
| Iterable     | Iterables are treated like Python objects with an `__iter__` method, that is, they can be used in loops and other places that accept Python iterables.                                                                                                                                                               |
| Iterator     | Iterators are treated like Python objects with a `__next__` method.                                                                                                                                                                                                                                                  |
| Exception    | Interop exceptions can be caught in generic `except` clauses.                                                                                                                                                                                                                                                          |
| MetaObject   | Interop meta objects can be used in subtype and `isinstance` checks                                                                                                                                                                                                                                                    |
| Executable   | Executable objects can be executed as functions, but never with keyword arguments.                                                                                                                                                                                                                                   |
| Instantiable | Instantiable objects behave like executable objects (similar to how Python treats this)                                                                                                                                                                                                                              |

### Python to Interop Types

| Interop type | Python interpretation                                                                                                             |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------|
| Null         | Only `None`.                                                                                                                      |
| Boolean      | Only subtypes of Python `bool`. Note that in contrast to Python semantics, Python `bool` is *never* also an interop number.       |
| Number       | Only subtypes of `int` and `float`.                                                                                               |
| String       | Only subtypes of `str`.                                                                                                           |
| Array        | Any object with a `__getitem__` and a `__len__`, but not if it also has `keys`, `values`, and `items` (like `dict` does.)         |
| Hash         | Only subtypes of `dict`.                                                                                                          |
| Members      | Any Python object. Note that the rules for readable/writable are a bit ad-hoc, since checking that is not part of the Python MOP. |
| Iterable     | Anything that has an `__iter__` method or a `__getitem__` method.                                                                 |
| Iterator     | Anything with a `__next__` method.                                                                                                |
| Exception    | Any Python `BaseException` subtype.                                                                                               |
| MetaObject   | Any Python `type`.                                                                                                                |
| Executable   | Anything with a `__call__` method.                                                                                                |
| Instantiable | Any Python `type`.                                                                                                                |