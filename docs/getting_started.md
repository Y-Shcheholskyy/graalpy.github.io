---
layout: page
title: Getting Started
permalink: /getting_started/
---

<h4>Table of Contents</h4>
* this unordered seed list will be replaced by toc as unordered list
{:toc}

## Installing GraalPy

### Linux and macOS
The easiest way to install GraalPy on Linux and macOS platforms is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager) or [Conda-Forge](https://conda-forge.org/) (Conda-Forge provides GraalPy Community only).
For example, to install version 23.1.0 using `pyenv`, run the following commands:

```bash
% pyenv install graalpy-23.1.0
 
Downloading graalpy-23.0.0.tar.gz...
-> https://github.com/oracle/graalpython/releases/download/graal-23.1.0/graalpython-23.1.0-macos-amd64.tar.gz
Installing graalpy-23.1.0...
Installed graalpy-23.1.0 to ~/.pyenv/versions/graalpy-23.1.0
 
% pyenv shell graalpy-23.1.0
```

Alternatively, download a compressed GraalPy installation file appropriate for your platform from https://github.com/oracle/graalpython/releases.
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
There is currently no installer for Windows. 
Instead, follow the instructions on [github.com](https://github.com/oracle/graalpython#user-content-building-from-source) to build GraalPy from source.

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

Copy the following content into a file named _helloworld.py_:

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

### Related Documentation
{:.no_toc}
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Running a Python Application](/guides/running_a_python_application/)
