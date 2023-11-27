---
layout: docs-layout
toc_group: examples
link_title: Standalone Python `requests` and `beautifulsoup` Example
title: Standalone Python `requests` and `beautifulsoup` Example
permalink: /examples/standalone_currency_exchange/
description: This example provides a demonstration of creating a standalone executable from your Python application, using GraalVM Native Image.
---

# Standalone Python `requests` and `beautifulsoup` Example

{{ page.description }}

It is based on the [Currency Exchange](/examples/currency_exchange/) example.

1. Follow the steps in the [Currency Exchange](/examples/currency_exchange/) example.

2. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

3. Create a native executable based on your _currency\_exchange.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module currency_exchange.py \
        --output currency_exchange \
        --venv <venv-dir>
    …
    Finished generating 'currency_exchange' in 25m 42s.
    ```

4. Run the executable, as follows:

    ```bash
    % ./currency_exchange
    ```

5. A CSV file is produced, similar to [_currency\_exchange.csv_](/examples/assets/currency_exchange.csv).

### Related Documentation
* [Currency Exchange](/examples/currency_exchange/)
* [Standalone Python Applications](/reference/standalone-applications/)