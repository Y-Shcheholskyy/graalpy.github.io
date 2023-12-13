# Python REST Application

This example provides a demonstration of using the Python [Requests](https://pypi.org/project/requests/) module to call a REST API. It shows how to create a standalone executable from this application using GraalPy and GraalVM Native Image.

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration. Consider Oracle GraalPy for the best experience. Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it. 
    
    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Install the `requests` package using `pip`:
    ```bash
    pip install requests
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
    graalpy astronauts.py
    ```

    Now continue and create a native executable from this Python application, using [GraalVM ahead-of-time Native Image compilation](https://www.graalvm.org/latest/reference-manual/native-image/).

5. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

6. Create a standalone executable based on your _astronauts.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)

    ```bash
    graalpy -m standalone native \
        --module astronauts.py \
        --output astronauts \
        --venv <venv-dir>
    …
    Finished generating 'astronauts' in 22m 33s.
    ```

7. Run the executable, as follows:
    ```bash
    ./astronauts
    ```
    You should see a similar output:
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

* [Python Requests Package](https://pypi.org/project/requests/)
* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)