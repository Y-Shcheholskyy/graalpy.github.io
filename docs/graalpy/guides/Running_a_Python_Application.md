## Running a Python Application

The `graalpy` launcher can be used in interactive mode or to run a script.

The following example demonstrates how to run a Python script, and then compile it into a native executable file. 
The application uses the Python [Pyfiglet ASCII art package](https://www.geeksforgeeks.org/python-ascii-art-using-pyfiglet-module/).

1. Install the `pyfiglet` package using `pip` in your virtual environment:
    ```bash
    pip install pyfiglet
    ```

2. Copy the following contents into a file named _text_styler.py_:
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

3. Use the following command to run the script, with some example arguments:
    ```bash
    graalpy text_styler.py Welcome to GraalPy!
    ```
    Now continue and create a native executable for this Python application.

4. Create a standalone executable. (For more information about the command-line options, see [Standalone Python Applications](../reference/Standalone_Applications.md).)

    ```bash
    graalpy -m standalone native \
        --module text_styler.py \
        --output text_styler \
        --venv <venv-dir>
    ```
    Substitute `<venv-dir>` with your virtual environment directory.

5. Run the application from a native standalone executable:
    ```bash
    ./text_styler Welcome to GraalPy!
    ```
    You should see the same output as earlier. 

Thanks to the GraalPy `standalone` tool, you can turn a Python application into a self-contained native executable!

<br>