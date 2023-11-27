---
layout: examples
title: Styled Text
permalink: /examples/styled_text/
description: This example provides a demonstration of the [Pyfiglet](https://www.geeksforgeeks.org/python-ascii-art-using-pyfiglet-module/) ASCII art package.
---
{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `pyfiglet` package using `pip`:
    ```bash
    % pip install pyfiglet
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
    % graalpy text_styler.py Welcome to GraalPy!
    ```

5. You should see output similar to

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

### Related Documentation
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)