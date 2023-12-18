---
layout: docs-layout
title: Java Interoperability
permalink: /reference/java_interoperability/
toc: true
---

<h4>Table of Contents</h4>
  * this unordered seed list will be replaced by toc as unordered list
  {:toc}

## The Java Host Interop API

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

For packages under the `java` package, you can also use the normal Python import
syntax:
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

In addition to the `type` built-in method, the `java` module exposes the following
methods as well:

Built-in                  | Specification
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

Learn more in a dedicated [GraalPy Interoperability guide](/reference/interoperability).
