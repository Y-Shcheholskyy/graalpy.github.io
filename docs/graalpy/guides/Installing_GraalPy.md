## Installing GraalPy

####  Linux and macOS

The easiest way to install GraalPy on Linux is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.0 using Pyenv, run the following commands:
```bash
pyenv install graalpy-23.1.1
```
```bash
pyenv shell graalpy-23.1.1
```

Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).

1. Find the download that matches the pattern _graalpy-XX.Y.Z-linux-amd64.tar.gz_ and download.
2. Uncompress the file and update your PATH variable to include to the _graalpy-XX.Y.Z-linux-amd64/bin_ directory.

####  macOS

The easiest way to install GraalPy on macOS is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.0 using Pyenv, run the following commands:
```bash
pyenv install graalpy-23.1.1
```
```bash
pyenv shell graalpy-23.1.1
```
Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).

1. Find the download that matches the pattern _graalpy-XX.Y.Z-macos-aarch64.tar.gz_ and download. 
2. Remove the quarantine attribute.
    ```bash
    sudo xattr -r -d com.apple.quarantine /path/to/graalpy
    ```
    For example:
    ```bash
    sudo xattr -r -d com.apple.quarantine ~/.pyenv/versions/graalpy-23.1.0
    ```
3. Uncompress the file and update your `PATH` variable to include to the _graalpy-XX.Y.Z-macos-aarch64/bin_ directory.

####  Windows

There is a GraalPy build for Windows. 

1. Find and download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases) that matches the pattern _graalpy-XX.Y.Z-windows-amd64.tar.gz_.  
2. Uncompress the file and update your `PATH` variable to include to the _graalpy-XX.Y.Z-windows-amd64/bin_ directory.

Be aware that the Windows distribution of GraalPy has [more limitations](../reference/Windows_Distribution.md) than either the macOS or Linux one, so not all features and packages may work as well as they do on the Unices.