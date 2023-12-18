---
layout: docs-layout
title: Getting Started
permalink: /getting-started/
toc: true
---

## Using GraalPy from Java

We publish Maven artefacts to use GraalPy from a GraalVM JDK, Oracle JDK, or OpenJDK.
The quickest way to get started is to just use our Maven Archetype to generate a project that embeds Python libraries into Java:

```bash
mvn archetype:generate
  -DarchetypeGroupId=org.graalvm.python
  -DarchetypeArtifactId=graalpy-archetype-polyglot-app
  -DarchetypeVersion=24.0.0
```

This will generate an embeddding with Python and our own Maven Plug-in to manage Python packages.
It uses the [GraalVM SDK Polyglot API](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/package-summary.html) with additional support from our plug-in for managing Python virtual environments and integrating Python package dependencies with a Maven workflow.
Depending on which supported JDK you run embedded GraalPy, the level of optimizations varies, as described [here](https://www.graalvm.org/latest/reference-manual/embed-languages/#runtime-optimization-support).
The archetype Java code and *pom.xml* file are heavily documented and browsing the generated code should explain all this embedding lets you do.
We recommend browsing the archetype even if you wish to create a custom embedding using something other than Maven to give you an idea of how to achieve your desired result.
You can check our guide to [embedding GraalVM languages in Java](https://www.graalvm.org/latest/reference-manual/embed-languages/) for generic setup instructions.

####  Access control and security for Python scripts

Embedding GraalPy into Java works with the [GraalVM Polyglot Sandbox](https://www.graalvm.org/latest/reference-manual/embed-languages/#controlling-access-to-host-functions).
Specific to GraalPy are the way the operating system interface is exposed to Python scripts.
By default all access is routed through Java interfaces, but some packages rely on details of POSIX APIs and require [direct native access](/reference/os_interfaces/).

####  Code loading performance

Parsing Python code requires time so in an embedding please observe the general advice for embedding GraalVM languages related to [code caching](https://www.graalvm.org/latest/reference-manual/embed-languages/#code-caching-across-multiple-contexts).
Furthermore, some Python libraries require loading a large amount of code on startup before they can do any work.
Due to the Python language design, incremental parsing is not possible and for some seeimingly inoccuous scripts the parser may represent a significant fraction of runtime and memory.
To mitigate this, GraalPy can cache the bytecode generated during parsing in *.pyc* files, [if appropriate file system access is configured](/reference/parser_details/).

####  Using GraalVM Native Image with GraalPy embeddings

GraalVM Native Image supports [AOT compilation](https://www.graalvm.org/latest/reference-manual/embed-languages/#build-native-executables-from-polyglot-applications) of Java applications that include GraalVM languages, including GraalPy.
GraalPy provides [some additional options](/reference/native-executables/) to optimize such AOT compiled executables depending on the desired workloads.

## Replacing CPython with GraalPy

If you want to use GraalPy as a replacement for *CPython*, you want to download the native distribution of GraalPy.
These are the most compatible, since they most closely resemble the structure of CPython installation packages.
In addition to being compatible with standard CPython use cases, GraalPy also supports the [GraalVM tools](/reference/tooling/) for debugging and monitoring and exposes some [additional options](/reference/options/) to tweak the runtime behaviour.
Furthermore, GraalPy offers a unique deployment mode for Python applications.
In contrast to Python applications running on CPython that need to ship Python source code and interpreter to be self-contained, Python applications on GraalPy can be compiled to [a single self-contained binary](/reference/standalone-applications/) that embeds all needed resources.

<a name="downloading"></a>
####  Linux
The easiest way to install GraalPy on Linux is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.0 using Pyenv, run the following commands:

```bash
% pyenv install graalpy-23.1.0
% pyenv shell graalpy-23.1.0
```

Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).
Find the download that matches the pattern *graalpy-XX.Y.Z-linux-amd64.tar.gz*.
Uncompress the file and update your PATH variable to include to the *graalpy-XX.Y.Z-linux-amd64/bin* directory.

####  macOS
The easiest way to install GraalPy on macOS is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.0 using Pyenv, run the following commands:

```bash
% pyenv install graalpy-23.1.0
% pyenv shell graalpy-23.1.0
```

Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).
Find the download that matches the pattern *graalpy-XX.Y.Z-macos-aarch64.tar.gz*.
Uncompress the file and update your PATH variable to include to the *graalpy-XX.Y.Z-macos-aarch64/bin* directory.

You will also need to remove the quarantine attribute.
To do this, run the following:

```bash
% sudo xattr -r -d com.apple.quarantine /path/to/GRAALPYTHON_HOME
```

For example

```bash
% sudo xattr -r -d com.apple.quarantine ~/.pyenv/versions/graalpy-23.1.0
```

####  Windows
There is a GraalPy build for Windows that you can [download](https://github.com/oracle/graalpython/releases/).
Find the download that matches the pattern *graalpy-XX.Y.Z-windows-amd64.zip*.
Be aware that the Windows distribution of GraalPy has [more limitations](/reference/windows_distribution/) than either the macOS or Linux one, so not all features and packages may work as well as they do on the Unices.

## Replacing Jython or using Java libraries from Python

To use *Java* libraries from Python or to move on from *Jython* applications, you need to download the JVM-based GraalPy distribution.
To do so, just replace *graalpy* with *graalpy-jvm* in the [download instructions](#downloading) above.

Be aware that Jython targets the no longer supported Python version 2, while GraalPy targets the modern Python version 3.
To migrate code from Python 2 to Python 3 you should follow [the official guide from the Python community](https://docs.python.org/3/howto/pyporting.html).
Once your Jython code is Python 3 compatible you may use our [Jython migration guide](/reference/jython/) to iron out other differences between GraalPy and Jython.

Calling Java from Python in general is the same as for [any other GraalVM language](/reference/interoperability/).
In addition, GraalPy has a few convenience modules for [Java interoperability](/reference/java_interoperability/) that make using Java libraries from Python a breeze.

## Related Documentation

* [User Guides](guides/Guides.md)
* [Reference Documentation](/reference/Reference.md)
