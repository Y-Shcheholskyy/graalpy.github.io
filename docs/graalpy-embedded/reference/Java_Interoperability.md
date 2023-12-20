---
layout: docs-layout
title: Java Interoperability
permalink: /docs/java_interoperability/
toc: true
---

# Java Interoperability

## Java Host Interop API

To interoperate with Java (only when running on the JVM), you can use the `java` module:
```python
>>> import java
>>> BigInteger = java.type("java.math.BigInteger")
>>> myBigInt = BigInteger.valueOf(42)
>>> # public Java methods can just be called
>>> myBigInt.shiftLeft(128)
<JavaObject[java.math.BigInteger] at ...>
>>> # Java method names that are keywords in Python can be accessed using `getattr`
>>> getattr(myBigInt, "not")()
<JavaObject[java.math.BigInteger] at ...>
>>> byteArray = myBigInt.toByteArray()
>>> # Java arrays can act like Python lists
>>> list(byteArray)
[42]
```

For packages under the `java` package, you can also use the normal Python import syntax:
```python
>>> import java.util.ArrayList
>>> from java.util import ArrayList
>>>
>>> java.util.ArrayList == ArrayList
True
>>> al = ArrayList()
>>> al.add(1)
True
>>> al.add(12)
True
>>> al
[1, 12]
```

In addition to the `type` built-in method, the `java` module exposes the following methods as well:

Built-in                 | Specification
---                      | ---
`instanceof(obj, class)` | returns `True` if `obj` is an instance of `class` (`class` must be a foreign object class)
`is_function(obj)`       | returns `True` if `obj` is a Java host language function wrapped using Truffle interop
`is_object(obj)`         | returns `True` if `obj` if the argument is Java host language object wrapped using Truffle interop
`is_symbol(obj)`         | returns `True` if `obj` if the argument is a Java host symbol, representing the constructor and static members of a Java class, as obtained by `java.type`

```python
>>> ArrayList = java.type('java.util.ArrayList')
>>> my_list = ArrayList()
>>> java.is_symbol(ArrayList)
True
>>> java.is_symbol(my_list)
False
>>> java.is_object(ArrayList)
True
>>> java.is_function(my_list.add)
True
>>> java.instanceof(my_list, ArrayList)
True
```

Learn more about the Polyglot API and languages interoperability from [GraalPy's Interoperability guide](../../graalpy/reference/Interoperability.md).

###  Access Control and Security for Python Scripts

Embedding GraalPy into Java works with the [GraalVM Polyglot Sandbox](https://www.graalvm.org/latest/reference-manual/embed-languages/#controlling-access-to-host-functions).
The way the operating system interface is exposed to Python scripts is GraalPy-specific.
By default all access is routed through Java interfaces, but some packages rely on details of POSIX APIs and require [direct native access](OS_Interfaces.md).

###  Code Loading Performance

Parsing Python code requires time so in an embedding, observe the general advice for embedding GraalVM languages related to [code caching](https://www.graalvm.org/latest/reference-manual/embed-languages/#code-caching-across-multiple-contexts).
Furthermore, some Python libraries require loading a large amount of code on startup before they can do any work.
Due to the Python language design, incremental parsing is not possible and for some seeimingly inoccuous scripts, the parser may represent a significant fraction of runtime and memory.
To mitigate this, GraalPy can cache the bytecode generated during parsing in *.pyc* files, [if appropriate file system access is configured](Parser_Details.md).