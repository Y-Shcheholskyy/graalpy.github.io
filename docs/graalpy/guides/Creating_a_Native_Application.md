## Creating a Native Application with GraalPy

GraalPy enables you to create a Python application or library as a native application or JAR file with no external dependencies.
The [Truffle framework](https://github.com/oracle/graal/tree/master/truffle) on which GraalPy is built, combined with the [Sulong LLVM runtime](https://github.com/oracle/graal/tree/master/sulong) that GraalPy leverages for managed execution of Python's native extensions, completely virtualizes all filesystem accesses, including those to the standard library and installed packages.

GraalPy includes a module to create Python binaries for Linux, macOS, and Windows. 
The modules bundles everything into a single file.

GraalPy can also generate a skeleton Maven project to embed Python packages into a Java application.
The polyglot skeletons are set up with Maven to generate a native binary for a simple Java-Python HelloWorld example and can be used as a starting point or inspiration for further Java-Python polyglot development.

>Note: **Prerequisite** GraalPy distribution starting from version 23.1.0. See the [GraalPy releases page](https://github.com/oracle/graalpython/releases).

Suppose there is a simple Python script, _my_script.py_, that does some useful work when run directly.
To distribute it as a native binary, run the following command:

```bash
graalpy -m standalone native \
      --module my_script.py \
      --output my_binary
```

It generates a native _my_binary_ file which includes the Python code, the GraalPy runtime, and the Python standard library in a single, self-contained executable.
Use `graalpy -m standalone native --help` for further options.

#### Security Considerations

Creating a native executable or a JAR file that includes Python code could be seen as a mild form of obfuscation, but it does not protect your source code.
Python source code are not stored verbatim into the executable (only the GraalPy bytecode is stored), but bytecode is easy to convert back into Python source code.
If you require stronger protection for the included Python source code, consider, for example, encrypting of the resources before building the native executable, and adding appropriate decryption into the generated virtual file system.
