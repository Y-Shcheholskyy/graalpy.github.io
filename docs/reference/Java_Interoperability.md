---
layout: reference
title: Java Interoperability
permalink: /reference/java_interoperability/
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

## Embedding GraalPy in a Java Application

The best way to embed GraalPy is to use the [GraalVM SDK Polyglot API](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/package-summary.html).

As of GraalVM for JDK 21, all necessary artifacts can be downloaded directly from Maven Central. 
All artifacts relevant to embedders can be found in the Maven dependency group [`org.graalvm.polyglot`](https://central.sonatype.com/namespace/org.graalvm.polyglot).

To embed GraalPy into a Java host application, add GraalPy as a Maven dependency or explicitly put the JAR on the module path. Below is the Maven configuration for a Python embedding:
```xml
<dependency>
    <groupId>org.graalvm.polyglot</groupId>
    <artifactId>polyglot</artifactId>
    <version>23.1.0</version>
</dependency>
<dependency>
    <groupId>org.graalvm.polyglot</groupId>
    <artifactId>python</artifactId>
    <version>23.1.0</version>
    <scope>runtime</scope>
    <type>pom</type>
</dependency>
```

The `<scope>runtime</scope>` parameter is only necessary if you need the runtime dependency.

Depending on which supported JDK you run embedded GraalPy, the level of optimizations varies, as described [here](https://www.graalvm.org/latest/reference-manual/embed-languages/#runtime-optimization-support).

Learn more in a dedicated [GraalPy Interoperability guide](/reference/interoperability). See also the [Embedding Languages documentation](https://www.graalvm.org/latest/reference-manual/embed-languages/) on how a guest language like Python can possibly interact with Java.

## Including packages in a Java application

When using Python from Java via the GraalVM embedder APIs, some preparation is required to make packages available to the runtime.
After you have created a `venv` virtual environment and installed your required packages, the virtual environment is made available to the Python embedded in Java by setting a context option.
A good idea is to include the entire virtual environment directory as a resource, and use Java's resource API:

```java
String venvExePath = getClass().
        getClassLoader().
        getResource(Paths.get("venv", "bin", "graalpy").toString()).
        getPath();

Context ctx = Context.newBuilder("python").
        allowIO(true).
        option("python.Executable", venvExePath).
        build();

ctx.eval("python", "import site");
```

The initial `import site` instruction loads the Python standard library module `site`, which sets up the library paths.
To do so, it uses the path of the Python executable that is currently running.
For a language such as Python, which is built around the filesystem, this makes sense, but in a Java embedding context, there is no Python executable running.
This is what the `python.Executable` option is for: it reports which executable _would be_ running if we were running Python directly inside your virtual environment.
That is enough to make the machinery work and any packages inside the virtual environment available to the Python embedded in Java.

A simple virtual environment is already quite heavy, because it comes with the machinery to install more packages.
For a Java distribution, you can strip down the virtual environment.
Just run these inside the top-level virtual environment directory:

```bash
find . -type d -name "__pycache__" -exec rm -rf "{}" ";"
rmdir include
rm bin/*
rmdir bin
rm lib/python3.*/site-packages/easy_install.py
rm -rf lib/python3.*/site-packages/pip*
```

Some packages may require the following, but most do not, so you can also remove these, but be aware that it _may_ break a few packages:

```bash
rm -rf lib/python3.*/site-packages/setuptools*
rm -rf lib/python3.*/site-packages/pkg_resources*
```

The GraalPy `standalone` module can be used to generate a Maven project skeleton that includes all necessary setup for a venv embedding into  Java application.
Run `graalpy -m standalone polyglot_app --help` for more information.
