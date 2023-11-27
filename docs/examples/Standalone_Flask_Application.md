---
layout: examples
toc_group: examples
link_title: Standalone Flask Example
title: Standalone Flask Example
permalink: /examples/standalone_flask_application/
description: This example provides a demonstration of creating a standalone [Flask](https://flask.palletsprojects.com/en/3.0.x/) application, using GraalVM Native Image.
---

# Standalone Flask Example

{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `flask` package (and its dependencies):

    ```bash
    % pip install flask
    ```

3. Copy the following contents into a file named _hello\_flask.py_. 
It is adapted from the Flask [Quickstart](https://flask.palletsprojects.com/en/3.0.x/quickstart/) documentation.
    >Note: This code takes a slightly unconventional approach.
    Instead of using Flask's built-in application discovery behavior, the code explicitly calls the `main` function.
    This approach is required by GraalVM Native Image.

    ```python
    from flask import Flask
      
    app = Flask(__name__)
      
    @app.route('/')
    # ‘/’ URL is bound with hello_flask() function.
    def hello_flask():
        return 'Hello Flask'
      
    # main function
    if __name__ == '__main__':
      
        # run() method of Flask class runs the application
        # on the local development server.
        app.run()
    ```

4. Use the following command to run the script:

    ```bash
    % graalpy hello_flask.py
    ```

5. You should see output similar to:

    ```
    * Serving Flask app 'hello_flask'
    * Debug mode: off
    WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
    * Running on http://127.0.0.1:5000
    Press CTRL+C to quit
    ```

6. Visit the URL with a web browser, and you should see something like:
![Hello Flask](/examples/assets/Hello_Flask.png)

7. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

8. Create a native executable based on your _hello\_flask.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module hello_flask.py \
        --output hello_flask \
        --venv <venv-dir>
    …
    Finished generating 'hello_flask' in 24m 19s.
    ```

8. Run the executable, as follows:
    ```bash
    % ./hello_flask
    ```
And you should see the same output as earlier.

### Related Documentation
* [Getting Started](/getting_started/)
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Standalone Python Applications](/reference/standalone-applications/)