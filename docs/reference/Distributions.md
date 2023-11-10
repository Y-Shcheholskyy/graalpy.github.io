---
layout: page
title: GraalPy Distributions
permalink: /reference/distributions/
---
As of GraalVM for JDK 21, the Python runtime (GraalPy) is available as a standalone distribution. 

A GraalPy standalone built on top of Oracle GraalVM (Oracle GraalPy) is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use. Redistribution is permitted as long as it is not for a fee.
Oracle GraalPy provides the best experience: it comes with additional optimizations, is significantly faster and more memory-efficient.

A GraalPy standalone built on top of GraalVM Community Edition (GraalPy Community) is fully open-source.
To distinguish between them, GraalPy Community has the suffix `-community` in the name.

```bash
# Oracle GraalPy
graalpy-<version>-<os>-<arch>.tar.gz
# GraalPy Community
graalpy-community-<version>-<os>-<arch>.tar.gz
```

Two language runtime options are available for both Oracle and Community GraalPy: Native and JVM.
In the Native configuration, GraalPy is ahead-of-time compiled to a standalone native executable. 
This means that you do not need a JVM installed on your system to use it and it is size-compact.
In the JVM configuration, you can use Java interoperability easily, and peak performance may be higher than the native configuration.
A JVM standalone that comes with a JVM has the `-jvm` suffix in the name: `graalpy-jvm-<version>-<os>-<arch>.tar.gz`.

| Configuration:     | Native (default) | JVM           |
| ------------------ | ---------------: | ------------: |
| Time to start | faster | slower |
| Time to reach peak performance | faster | slower |
| Peak performance (also considering GC) | good | best |
| Java host interoperability | needs configuration | works |