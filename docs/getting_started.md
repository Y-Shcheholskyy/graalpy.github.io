---
layout: docs-layout
title: Getting Started
permalink: /getting-started/
toc: true
---

## Installing GraalPy

### Linux and macOS
The easiest way to install GraalPy on Linux and macOS platforms is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.0 using `pyenv`, run the following commands:

```bash
% pyenv install graalpy-23.1.0
% pyenv shell graalpy-23.1.0
```

Alternatively, download a compressed GraalPy installation file appropriate for your platform from [GitHub releases](https://github.com/oracle/graalpython/releases).
For example, for Linux, download a file that matches the pattern _graalpy-XX.Y.Z-linux-amd64.tar.gz_.
Uncompress the file and and update your PATH variable as necessary.
If you are using macOS Catalina or later, you may need to remove the quarantine attribute.
To do this, run the following:

```bash
% sudo xattr -r -d com.apple.quarantine /path/to/GRAALPYTHON_HOME
```

For example

```bash
% sudo xattr -r -d com.apple.quarantine ~/.pyenv/versions/graalpy-23.1.0
```

### Windows
There is a GraalPy preview build for Windows that you can [download](https://github.com/oracle/graalpython/releases/).
It supports installation of pure Python packages via `pip`.

## Hello World!

### Invoke the Python Interpreter

Start the Python interactive shell from the command line, using the command `graalpy`, then enter the following line at the Python shell prompt (identified by `>>>`), followed by **CR**.

```bash
>>> print("Hello World!")
```

You should see the output displayed directly, followed by the shell prompt

```
Hello World!
>>>
```

### Invoke a Python Script

Copy the following contents into a file named _helloworld.py_:

```python
print("Hello World!")
```

Start `graalpy` and pass the file name as an argument

```bash
% graalpy helloworld.py
```

You should see the following output
```
Hello World!
```

#### Related Documentation

* [User Guides](guides/Guides.md)
* [Reference Documentation](reference/Reference.md)
