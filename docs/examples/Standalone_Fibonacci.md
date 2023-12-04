---
layout: learn
title: Standalone Fibonacci
permalink: /examples/standalone-fibonacci/
description: This example provides a demonstration of creating a standalone executable from your Python application, using GraalVM Native Image.
---

<a href='{{ "/examples/" | relative_url }}' class="btn btn-back">&lt; Back</a>

# Standalone Fibonacci
{{ page.description }} 
It is based on the [Fibonacci](/examples/fibonacci/) example.

1. Follow the steps in the [Fibonacci](/examples/fibonacci/) example.

2. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

3. Create a native executable based on your _fib.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module fib.py \
        --output fib \
        --venv <venv-dir>
    …
    Finished generating 'fib' in 20m 25s.
    ```

4. Run the executable, as follows:

    ```bash
    % ./fib 4
    ```

5. You should see output similar to the following:

    ```
    The result is 3
    ```

### Related Documentation
* [Fibonacci](/examples/fibonacci/)
* [Standalone Python Applications](/reference/standalone-applications/)