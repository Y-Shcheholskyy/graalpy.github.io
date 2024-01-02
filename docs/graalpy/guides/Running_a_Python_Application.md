## Running a Python Application

The `graalpy` launcher can be used in interactive mode or to run a script.

The following example demonstrates how to run a Python script, and then compile it into a native executable. 
The application uses the Python [Pyfiglet ASCII art package](https://www.geeksforgeeks.org/python-ascii-art-using-pyfiglet-module/).

1. Install `graalpy` and [Create a Virtual Environment](#creating-a-virtual-environment), then activate it.

2. Install the `pyfiglet` package using `pip` in your virtual environment:
    ```bash
    pip install pyfiglet
    ```

3. Copy the following contents into a file named _text_styler.py_:
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

5. You should see output similar to

    ```bash
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

5. Create a native executable. (For more information about the command-line options, see [Creating Native Applications with GraalPy](#creating-native-applications-with-graalpy).)

    ```bash
    graalpy -m standalone native \
        --module text_styler.py \
        --output text_styler \
        --venv <venv-dir>
    ```
    Substitute `<venv-dir>` for your virtual environment directory.

6. Run the application from a native executable:
    ```bash
    ./text_styler Welcome to GraalPy!
    ```
    You should see the same output as above. 
