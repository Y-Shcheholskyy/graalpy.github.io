# Styled Text with Pyfiglet Package

This example provides a demonstration of the [Pyfiglet](https://www.geeksforgeeks.org/python-ascii-art-using-pyfiglet-module/) ASCII art package with GraalPy. The demo shows how to create a standalone executable from this application, using GraalPy. 
GraalPy comes with a module that can create Python single-file native binaries for Linux, Windows, and macOS.

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration (default). Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it. 

    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Install the `pyfiglet` package using `pip`:
    ```bash
    pip install pyfiglet
    ```

3. Copy the following contents into a file named _text\_styler.py_:

    ```python
    import pyfiglet
    import sys
    
    script_args = sys.argv[1:]
    if len(script_args) > 0:
        text = ' '.join(script_args)
    else:
        text = "Provide a string"
    result = pyfiglet.figlet_format(text, font="slant")
    print(result)
    ```

4. Use the following command to run the script, with some example arguments:

    ```bash
    graalpy text_styler.py Welcome to GraalPy!
    ```
    You should see a similar output:
    ```
    _       __     __                             __     
    | |     / /__  / /________  ____ ___  ___     / /_____
    | | /| / / _ \/ / ___/ __ \/ __ `__ \/ _ \   / __/ __ \
    | |/ |/ /  __/ / /__/ /_/ / / / / / /  __/  / /_/ /_/ /
    |__/|__/\___/_/\___/\____/_/ /_/ /_/\___/   \__/\____/
                                                            
      ______                 ______        __
      / ____/________ _____ _/ / __ \__  __/ /
    / / __/ ___/ __ `/ __ `/ / /_/ / / / / /
    / /_/ / /  / /_/ / /_/ / / ____/ /_/ /_/ 
    \____/_/   \__,_/\__,_/_/_/    \__, (_)  
                                  /____/
    ```

    Now continue and create a native executable from this Python application.

5. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

6. Create a standalone executable based on your _text\_styler.py_ script.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)

    ```bash
    graalpy -m standalone native \
        --module text_styler.py \
        --output text_styler \
        --venv <venv-dir>
    ```
7. Run the executable, as follows:
    ```bash
    ./text_styler Welcome to GraalPy!
    ```
    You should see the same output as earlier.

### Related Documentation

* [Pyfiglet Package](https://www.geeksforgeeks.org/python-ascii-art-using-pyfiglet-module/)
* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)