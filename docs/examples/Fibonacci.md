# Fibonacci Sequence Application

This example provides a demonstration of creating a standalone executable from a Python application, using GraalPy and GraalVM Native Image.
A demo application is a Python program that prints Fibonacci numbers using recursion.

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration. Consider Oracle GraalPy for the best experience. Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it. 
    
    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Copy the following contents into a file named _fib.py_:

    ```python
    import sys
    
    def minus_one(n):
        return n - 1
    
    def minus_two(n):
        return n - 2
    
    def fib(n):
        if n < 1:
            return 0
        else:
            if n < 2:
                return 1
            else:
                return fib(minus_one(n)) + fib(minus_two(n))         
    
    script_args = sys.argv[1:]
    if len(script_args) == 1:
        param = script_args[0]
    else:
        print("Provide one integer argument")
        exit
    try:
        param_int = int(param)
    except ValueError:
        print("Provide one integer argument")
        exit
    print(f"The result is {fib(param_int)}")
    ```

3. Use the following command to run the script, with an example argument:
    ```bash
    graalpy fib.py 4
    ```
    
    Now continue and create a native executable from this Python application, using [GraalVM ahead-of-time Native Image compilation](https://www.graalvm.org/latest/reference-manual/native-image/).

4. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

5. Create a standalone executable based on your _fib.py_ script.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)

    ```bash
    graalpy -m standalone native \
        --module fib.py \
        --output fib \
        --venv <venv-dir>
    ```

4. Run the executable, as follows:

    ```bash
    ./fib 4
    ```
    You should see a similar output:
    ```
    The result is 3
    ```

### Related Documentation

* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)