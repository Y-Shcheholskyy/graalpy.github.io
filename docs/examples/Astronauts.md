---
layout: learn
title: Astronauts
permalink: /examples/astronauts/
description: This example provides a demonstration of using the Python [`requests`](https://pypi.org/project/requests/) module to call a REST API.
---
# Astronauts
{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `requests` package using `pip`:

    ```bash
    % pip install requests
    ```

3. Copy the following contents into a file named _astronauts.py_:

    ```python
    import requests
    
    response = requests.get("http://api.open-notify.org/astros.json")
    people = response.json()['people']
    crafts = dict()
    for person in people:
        craft_name = person['craft']
        person_name = person['name']
        if craft_name not in crafts:
            crafts[craft_name] = []
        crafts[craft_name].append(person_name)
    for craft in crafts:
        print(craft)
        for person in crafts[craft]:
            print(f"\t{person}")
    ```

4. Run the script:

    ```bash
    % graalpy astronauts.py
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
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)
