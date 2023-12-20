---
layout: docs-layout
title: GraalPy Getting Started
permalink: /graalpy/
toc: true
---

# Getting Started with GraalPy

GraalPy provides a Python 3.x compliant runtime. A primary goal is to support PyTorch, SciPy, and their constituent libraries, as well as to work with other data science and machine learning libraries from the rich Python ecosystem.
GraalPy is distributed as an ahead-of-time compiled native executable, compact in size.

GraalPy provides the following **capabilities**:

* Replacement for CPython. Use GraalPy as a replacement for CPython. It is the most compatible, since it most closely resembles the structure of CPython installation packages.
* Unique deployment mode for Python applications. Compile a Python application on GraalPy to [a single self-contained binary](Creating_Standalone_Applications.md) that embeds all needed resources.
* Access to GraalVM's language ecosystems and tools. GraalPy can run many standard Python tools as well as tools from the GraalVM ecosystem.

<br>

## GraalPy Distributions

GraalVM is available as **Oracle GraalPy** and **GraalPy Community**.

* Oracle GraalPy provides the best experience: it comes with additional optimizations, is significantly faster and more memory-efficient.
Oracle GraalPy is built on top of Oracle GraalVM, and is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.
Redistribution is permitted as long as it is not for a fee.

* GraalPy Community is built on top of GraalVM Community Edition, and is fully open-source.

To distinguish between them, GraalPy Community has the suffix `-community` in its name.

```bash
# Oracle GraalPy
graalpy-<version>-<os>-<arch>.tar.gz
# GraalPy Community
graalpy-community-<version>-<os>-<arch>.tar.gz
```
<br>

{% include_relative Installing_GraalPy.md %}

{% include_relative Creating_a_Virtual_Environment.md %}

{% include_relative Installing_a_Package.md %}

{% include_relative Running_a_Python_Application.md %}

{% include_relative GraalPy_Options.md %}

{% include_relative Tooling_Support.md %}