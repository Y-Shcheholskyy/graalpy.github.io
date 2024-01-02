## Analyzing Python Source Code Coverage

#### Coverage

GraalPy provides its own implementation of the [Coverage.py tool](https://pypi.org/project/coverage/) to measure code coverage of Python programs.
Enable it using the `--coverage` command-line option. 
(For details, use the `graalpy --help:tools` command.)

1. [Create an example application](getting-started/demo-application/).

2. Run the script using the `--coverage` command-line option:
    ```bash
    graalpy --coverage currency_exchange.py
    ```


#### Trace

The standard Python `trace` module is also provided.
> Note: This works in the same way as CPython.
The programmatic API also works, with some limitations: it does not currently track calls, only line counts and called functions.

Use the same example application as above, and run the following command:

```bash
graalpy -m trace -c -s currency_exchange.py
```
