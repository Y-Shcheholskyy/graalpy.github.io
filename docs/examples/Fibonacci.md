---
layout: examples
toc_group: examples
link_title: Fibonacci Example
title: Fibonacci Example
permalink: /examples/fibonacci/
description: This example provides a demonstration of a small Python script.
---

# Fibonacci Example

{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

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
    % graalpy fib.py 4
    ```

4. You should see output similar to
    ```
    The result is 3
    ```
### Related Documentation
* [Getting Started](/getting_started/)
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)