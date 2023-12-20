---
layout: docs-layout
title: Getting Started
permalink: /graalpy-embedded/
toc: true
---

# Get Started with GraalPy in Java

GraalPy is a Python 3.x compliant runtime. 
GraalPy offers different **advantages** for the Java developers:

* GraalPy brings modern Python data science libraries into Java applications. Safely embed Python libraries in Java projects thanks to GraalPy.
* GraalPy is a Python 3 replacement for Jython. Use Java libraries from Python or move your Jython applications to GraalPy for high performance and modern language features, while preserving an easy interoperability with Java.
* Possibility to create native executables using GraalVM Native Image. Since Python libraries are embed in Java, you can easily generate native images of this Java-Python application to achieve an instantaneous startup.

Here you will find information how to get started in each case.

<br>

## Embedding Python in Java

With GraalPy you can safely embed Python in your Java code. 
There are two ways to create a sample Java-Python project and achieve that quickly.

<br>

### Using Maven Artefacts

You can generate a skeleton Maven project that sets up an embedding of Python packages into Java using Maven artefacts.
There are [GraalPy artefacts](https://mvnrepository.com/artifact/org.graalvm.python) to use GraalPy from a GraalVM JDK, Oracle JDK, or OpenJDK.
This is the quickest way to get started and generate a project that embeds Python libraries into Java:

```bash
mvn archetype:generate
  -DarchetypeGroupId=org.graalvm.python
  -DarchetypeArtifactId=graalpy-archetype-polyglot-app
  -DarchetypeVersion=24.0.0
```

This generates an embeddding with Python.
It uses the [GraalVM SDK Polyglot API](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/package-summary.html) with additional support from the plugin for managing Python virtual environments and integrating Python package dependencies with a Maven workflow.

Depending on which supported JDK you run embedded GraalPy, the level of optimizations varies, as described [here](https://www.graalvm.org/latest/reference-manual/embed-languages/#runtime-optimization-support).
The archetype Java code and the _pom.xml_ file are heavily documented and browsing the generated code should explain what this embedding lets you do.
We recommend browsing the archetype even if you wish to create a custom embedding using something other than Maven to give you an idea of how to achieve your desired result.
You can check our guide to [embedding GraalVM languages in Java](https://www.graalvm.org/latest/reference-manual/embed-languages/) for generic setup instructions.

<br>

### Using GraalPy Standalone Tool

Another way is to generate a Java-Python application with the GraalPy `standalone` tool.
This tool creates a Maven project skeleton and generates a standalone binary for a simple Java-Python HelloWorld example.
You can use it as a starting point or inspiration for further Java-Python polyglot development.

1. To use the `standalone` tool, install GraalPy version **23.1.0** or higher for your operating system, as described in the [installation guide](../graalpy/guides/Installing_GraalPy.md). 

2. To generate a Java-Python project, pass the `polyglot_app` subcommand to the `standalone` tool:
    ```bash
    graalpy -m standalone polyglot_app --output-directory MyJavaApplication
    ```
    It creates a Java project _MyJavaApplication_. 
    You can open this Maven project with any Java IDE and edit the main class that was created to modify the Python embedding.

3. To build the application, run: 
    ```bash
    mvn -Pnative package
    ```
    It packages the project and creates a native executable.

Take a look at the generated _pom.xml_ file. 
The project includes the [Maven plugin for Native Image building](https://graalvm.github.io/native-build-tools/latest/maven-plugin.html) that makes it easy to generate a GraalVM native executable.

There are some options to tweak the performance and footprint trade-off.
Review the [Python Native Images documentation](Native_Images.md) to find out how to remove other unwanted components and further reduce the binary size.

The generated project should be viewed as a starting point.
It includes the entire Python standard library, so the Python code can invoke all of the standard library code.
The resources can be manually pruned to reduce the included Python libraries to the necessary amount, reducing both the size of the package and the time to start up.
This Java example demonstrates some useful default options for the Python context, but other settings may be desirable to further control what the Python code is allowed to do.

<br>

## Replacing Jython with GraalPy

To use Java libraries from Python or to move on from Jython applications, use the JVM-based GraalPy distribution.
> A GraalPy JVM distribution contains Python in the JVM configuration. To distinguish between the default, native, and the JVM configuration, the downloadable file has `-jvm` in the name. See [GraalPy releases](https://github.com/oracle/graalpython/releases/).

Be aware that Jython targets the no longer supported Python 2, while GraalPy supports the modern Python 3.
To migrate code from Python 2 to Python 3, follow [the official guide from the Python community](https://docs.python.org/3/howto/pyporting.html).
Once your Jython code is Python 3 compatible, use our [Jython migration guide](Jython.md) to iron out other differences between GraalPy and Jython.

Calling Java from Python, in general, is the same as for [any other GraalVM language](Interoperability.md).
In addition, GraalPy has a few convenience modules for [Java interoperability](Java_Interoperability.md) that make using Java libraries from Python as easy as possible.

<br>

## Creating Native Executables with Python Embeddings

GraalVM Native Image supports [ahead-of-time (AOT) compilation](https://www.graalvm.org/latest/reference-manual/embed-languages/#build-native-executables-from-polyglot-applications) of Java applications that include including GraalPy.
GraalPy provides [some additional options](Native_Images.md) to optimize such AOT compiled executables depending on the desired workloads.

<br>