## Analyzing Python Source Code Coverage

### Coverage

GraalPy provides its own implementation of the [Coverage.py tool](https://pypi.org/project/coverage/) for measuring code coverage of Python programs.
It can be enabled by passing the `--coverage` command-line option. 
(For details, use the `graalpy --help:tools` command.)

Start by [creating a demo application](Creating_a_Demo_Application.md).

Then run the script with `graalpy` and enable the code coverage:
```bash
graalpy --coverage currency_exchange.py
```

It prints code coverage histogram.

{::options parse_block_html="true" /}
<details><summary markdown="span">Coverage (Click to expand)</summary>
```bash
------------------------------------------------------------------------------------------------------------------------------------------------
Code coverage histogram.
  Shows what percent of each element was covered during execution
------------------------------------------------------------------------------------------------------------------------------------------------
 Path                                                                                                       |  Statements |    Lines |    Roots
------------------------------------------------------------------------------------------------------------------------------------------------
 <venv-dir>/lib/python3.10/site-packages/_distutils_hack/__init__.py           |       0.00% |    0.00% |    0.00%
 <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py                       |      56.10% |   56.14% |   55.26%
 <venv-dir>/lib/python3.10/site-packages/bs4/builder/__init__.py               |      79.12% |   78.84% |   50.00%
 ...
 <install-dir>/lib/python3.10/ntpath.py                               |      10.89% |   11.09% |    3.03%
 <install-dir>/lib/python3.10/operator.py                             |       5.65% |    5.78% |    4.11%
 <install-dir>/lib/python3.10/os.py                                   |       8.11% |    7.76% |   15.22%
 ...
 <install-dir>/lib/python3.10/traceback.py                            |      19.95% |   19.17% |   10.87%
 ...
 <src-dir>/currency_exchange.py                                       |     100.00% |  100.00% |  100.00%
------------------------------------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

<br>

### Trace

The standard Python `trace` module is also provided.
> Note: This works in the same way as CPython.
The programmatic API also works, with some limitations: it does not currently track calls, only line counts and called functions.

Using the same _currency\_exchange.py_ application, run it with the tracing tool enabled:
```bash
graalpy -m trace -c -s currency_exchange.py
```

It prints the tracing information.

{::options parse_block_html="true" /}
<details><summary markdown="span">Trace (Click to expand)</summary>
```bash
lines   cov%   module   (path)
    9   100%   __about__   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/__about__.py)
   51   100%   __future__   (<install-dir>/lib/python3.10/__future__.py)
    1   100%   __init__   (<venv-dir>/lib/python3.10/site-packages/pyfiglet/fonts/__init__.py)
...
```
</details>
{::options parse_block_html="false" /}

<br>