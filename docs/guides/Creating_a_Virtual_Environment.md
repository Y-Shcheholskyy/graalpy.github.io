---
layout: page
title: Creating a Virtual Environment
permalink: /guides/creating_a_virtual_environment/
---
The best way of using GraalPy is from a [venv](https://docs.python.org/3/library/venv.html) virtual environment.
This generates wrapper scripts and makes the implementation usable from a shell as the standard Python interpreter. 
To create a virtual environment with GraalPy, run the following command:


```bash
% graalpy -m venv <venv-dir>
# For example
# graalpy -m venv ~/.virtualenvs/graalpy-23.1.0
```

To activate the environment in your shell session run:

```bash
% source <venv-dir>/bin/activate
# For example
# source ~/.virtualenvs/graalpy-23.1.0/bin/activate
```

Multiple executables are available in the virtual environment, including: `python`, `python3`, and `graalpy`.

>Note: To deactivate the Python environment (and return to your shell), use the following command:
  ```bash
  % deactivate
  ```
