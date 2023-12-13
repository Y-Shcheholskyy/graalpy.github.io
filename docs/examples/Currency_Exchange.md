# Python Requests and BeautifulSoup Modules Application

This example provides a demonstration of using the Python [Requests](https://pypi.org/project/requests/) and [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) packages to scrape a web page. It shows how to create a standalone executable from this application using GraalPy and GraalVM Native Image. 

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration. Consider Oracle GraalPy for the best experience. Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it. 
    
    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Install the `requests` and `bs4` packages (and their dependencies) using `pip`:

    ```bash
    pip install requests
    pip install bs4
    ```

3. Copy the following contents into a file named _currency\_exchange.py_:

    ```python
    import requests
    from bs4 import BeautifulSoup
    import csv
    
    csv_file = open("currency_exchange.csv", "w", 1)
    csv_writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
    csv_writer.writerow(['Exchange', 'Last Price', '% Change'])
    page = requests.get('https://www.reuters.com/markets/stocks/us/')
    soup = BeautifulSoup(page.text, 'html.parser')
    table_node = soup.find("table", {"aria-label": "Currencies"})
    table_body_node = table_node.find("tbody")
    row_nodes = table_body_node.find_all("tr")
    for r in row_nodes:
        header_node = r.find("th")
        exchange_name = header_node.text
        last_price_node = header_node.next_sibling
        change_node = last_price_node.next_sibling
        sign_node = change_node.find("span", {"aria-hidden": "true"})
        if sign_node:
            sign_text = sign_node.text
            change_percent_node = sign_node.next_sibling
            change_percent_text = change_percent_node.text
        else:
            sign_text = ""
            change_percent_text = ""
        csv_writer.writerow([exchange_name, last_price_node.text, sign_text + change_percent_text])
    csv_file.close()
    ```

4. Run the script:

    ```bash
    graalpy currency_exchange.py
    ```
    A CSV file is produced, similar to [_currency\_exchange.csv_](assets/currency_exchange.csv).

    Now continue and create a native executable from this Python application, using [GraalVM ahead-of-time Native Image compilation](https://www.graalvm.org/latest/reference-manual/native-image/).

5. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

6. Create a standalone executable based on your _currency\_exchange.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)

    ```bash
    graalpy -m standalone native \
        --module currency_exchange.py \
        --output currency_exchange \
        --venv <venv-dir>
    …
    ```
7.  Run the executable, as follows:
    ```bash
    ./currency_exchange
    ```
    A CSV file, _currency\_exchange.csv_, is produced as expected.

### Related Documentation

* [Python Requests Package](https://pypi.org/project/requests/)
* [Python BeautifulSoup Package](https://www.crummy.com/software/BeautifulSoup/)
* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)