---
layout: page
title: GraalPy Distributions
permalink: /reference/distributions/
---
As of **GraalVM for JDK 21**, GraalPy is available as separate "standalones" from GraalVM: Oracle GraalPy and GraalPy Community.
Oracle GraalPy provides the best experience: it comes with additional optimizations, is significantly faster and more memory-efficient.

* Oracle GraalPy is built on top of Oracle GraalVM, and is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.
Redistribution is permitted as long as it is not for a fee.

* GraalPy Community is built on top of GraalVM Community Edition, and is fully open-source.

To distinguish between them, GraalPy Community has the suffix `-community` in its name.

```
# Oracle GraalPy
graalpy-<version>-<os>-<arch>.tar.gz
# GraalPy Community
graalpy-community-<version>-<os>-<arch>.tar.gz
```

Two runtime options are available for both Oracle GraalPy and Community GraalPy: Native and JVM.

* In the Native configuration, GraalPy is compiled ahead-of-time to a standalone native executable. 
This means that you do not need a JVM installed on your system to use it and it is compact in size.
* In the JVM configuration, you can use Java interoperability easily, and peak performance may be higher than the native configuration.
A JVM standalone that comes with a JVM has the `-jvm` suffix in its name: `graalpy-jvm-<version>-<os>-<arch>.tar.gz`.

| Configuration:     | Native (default) | JVM           |
| ------------------ | ---------------: | ------------: |
| Time to start | faster | slower |
| Time to reach peak performance | faster | slower |
| Peak performance (also considering Garbage Collection) | good | best |
| Java host interoperability | needs configuration | works |