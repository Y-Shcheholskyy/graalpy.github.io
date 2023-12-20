## Creating a Virtual Environment

The best way of using GraalPy is from a [venv](https://docs.python.org/3/library/venv.html) virtual environment.
This generates wrapper scripts and makes the implementation usable from a shell as the standard Python interpreter. 

1. Create a virtual environment with GraalPy, running the following command:
    ```bash
    graalpy -m venv <venv-dir>
    ```
    For example:
    ```bash
    graalpy -m venv ~/.virtualenvs/graalpy-23.1.1
    ```

2. Activate the environment in your shell session run:
    ```bash
    source <venv-dir>/bin/activate
    ```
    For example:
    ```bash
    source ~/.virtualenvs/graalpy-23.1.1/bin/activate
    ```

Multiple executables are available in the virtual environment, including: `python`, `python3`, and `graalpy`.

> Note: To deactivate the Python environment (and return to your shell), use the following command:
> ```bash
> deactivate
> ```

<br>