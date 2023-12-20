---
layout: docs-layout
title: Creating Standalone Java Applications with GraalPy Embedded
permalink: /graalpy-embedded/reference/standalone-applications/
toc: true
---

# Creating Standalone Java-Python Applications with GraalPy

With GraalPy, you can generate a skeleton Maven project that sets up a polyglot embedding of Python packages into Java.
The polyglot skeletons are set up with Maven to generate a standalone binary for a simple Java-Python HelloWorld example and can be used as a starting point or inspiration for further Java-Python polyglot development.

### Prerequisite

- GraalPy version 23.1.0 or higher. See the [GraalPy releases page](https://github.com/oracle/graalpython/releases) and the [installation guide](../graalpy/guides/Installing_GraalPy.md). 

## Embedding GraalPy in a Java Application

To generate a Java-Python polyglot project skeleton, run the `polyglot_app` subcommand of GraalPy's `standalone` module:
```bash
graalpy -m standalone polyglot_app --output-directory MyJavaApplication
```

It creates a Java project _MyJavaApplication_. 
The project includes a _pom.xml_ file that makes it easy to generate a GraalVM native executable using, for example, [Maven plugin for Native Image building](https://graalvm.github.io/native-build-tools/latest/maven-plugin.html).
You can open this Maven project with any Java IDE and edit the main class that was created to modify the Python embedding.

To build the application, run: 
```bash
mvn -Pnative package
```
It packages the project and creates a native executable.

Take a look at the generated _pom.xml_ file.
There are some options to tweak the performance and footprint trade-off.
Review the [Python Native Images documentation](Native_Images.md) to find out how to remove other unwanted components and further reduce the binary size.

The generated project should be viewed as a starting point.
It includes the entire Python standard library, so the Python code can invoke all of the standard library code.
The resources can be manually pruned to reduce the included Python libraries to the necessary amount, reducing both the size of the package and the time to start up.
This Java example demonstrates some useful default options for the Python context, but other settings may be desirable to further control what the Python code is allowed to do.