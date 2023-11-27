---
layout: examples
toc_group: examples
link_title: Standalone Python REST API Example
title: Standalone Python REST API Example
permalink: /examples/standalone_astronauts/
description: This example provides a demonstration of creating a standalone executable from your Python application, using GraalVM Native Image. 
---

# Standalone Python REST API Example

{{ page.description }}

It is based on the [Astronauts](/examples/astronauts/) example.

1. Follow the steps in the [Astronauts](/examples/astronauts/) example.

2. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

3. Create a native executable based on your _astronauts.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module astronauts.py \
        --output astronauts \
        --venv <venv-dir>
    …
    Finished generating 'astronauts' in 22m 33s.
    ```

4. Run the executable, as follows:

    ```bash
    % ./astronauts
    ```

5. You should see output similar to the following:

    ```
    ISS
            Oleg Artemyev
            Denis Matveev
            Sergey Korsakov
            Kjell Lindgren
            Bob Hines
            Samantha Cristoforetti
            Jessica Watkins
    Tiangong
            Cai Xuzhe
            Chen Dong
            Liu Yang
    ```

    That is, the names of the spacecraft and their occupants.

### Related Documentation
* [Astronauts](/examples/astronauts/)
* [Standalone Python Applications](/reference/standalone-applications/)