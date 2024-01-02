## Installing GraalPy

#### Linux

The easiest way to install GraalPy on Linux is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.1 using Pyenv, run the following commands:
```bash
pyenv install graalpy-23.1.1
```
```bash
pyenv shell graalpy-23.1.1
```

Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).

1. Find the download that matches the pattern _graalpy-XX.Y.Z-linux-amd64.tar.gz_ or _graalpy-XX.Y.Z-linux-aarch64.tar.gz_ (depending on your platform) and download.
2. Uncompress the file and update your `PATH` environment variable to include to the _graalpy-XX.Y.Z-linux-amd64/bin_ (or _graalpy-XX.Y.Z-linux-aarch64/bin_) directory.

#### macOS

The easiest way to install GraalPy on macOS is to use [Pyenv](https://github.com/pyenv/pyenv) (the Python version manager).
To install version 23.1.1 using Pyenv, run the following commands:
```bash
pyenv install graalpy-23.1.1
```
```bash
pyenv shell graalpy-23.1.1
```
Alternatively, you can download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases).

1. Find the download that matches the pattern _graalpy-XX.Y.Z-macos-amd64.tar.gz_ or _graalpy-XX.Y.Z-macos-aarch64.tar.gz_ (depending on your platform) and download. 
2. Remove the quarantine attribute.
    ```bash
    sudo xattr -r -d com.apple.quarantine /path/to/graalpy
    ```
    For example:
    ```bash
    sudo xattr -r -d com.apple.quarantine ~/.pyenv/versions/graalpy-23.1.1
    ```
3. Uncompress the file and update your `PATH` environment variable to include to the _graalpy-XX.Y.Z-macos-amd64/bin_ (or _graalpy-XX.Y.Z-macos-aarch64/bin_) directory.

#### Windows

1. Find and download a compressed GraalPy installation file from [GitHub releases](https://github.com/oracle/graalpython/releases) that matches the pattern _graalpy-XX.Y.Z-windows-amd64.tar.gz_.  
2. Uncompress the file and update your `PATH` variable to include to the _graalpy-XX.Y.Z-windows-amd64/bin_ directory.

>Note: The Windows distribution of GraalPy has [more limitations](Windows_Distribution_Limitations.md) than its Linux or macOS counterpart, so not all features and packages may be available.