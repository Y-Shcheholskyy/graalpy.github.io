---
layout: docs-layout
title: Getting Started
permalink: /getting-started/
toc: true
---

# Get Started with Python in Java

GraalPy is a Python 3.x compliant runtime. 
GraalPy is a Python solution for Java, offering the following **advantages** for the Java developers:

* GraalPy brings modern Python data science libraries into Java applications. Safely embed Python libraries in Java projects thanks to GraalPy.
* GraalPy is a Python 3 replacement for Jython. Use Java libraries from Python or move your Jython applications to GraalPy for high performance and modern language features, while preserving an easy interoperability with Java.
* Possibility to create native executables using GraalVM Native Image. Since Python libraries are embed in Java, you can easily generate native images of this Java-Python application to achieve an instantaneous startup.

<br>

## Create a Java Python Application

You can easily add Python in your Java code using Maven or Gradle build tools. 

### Maven

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

### Gradle

[missing content]

<br>

## Learn more

- Proceed to the in-depth [reference documentation](reference/Reference.md) to learn more about GraalPy and Java integration.
- Examine possible use cases and run [Python in Java example applications](examples/java-python-examples.md) yourself. 

<br>