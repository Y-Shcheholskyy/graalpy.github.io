---
layout: page
title: Currency Exchange
permalink: /examples/currency_exchange/
description: This example provides a demonstration of using the Python [`requests`](https://pypi.org/project/requests/) and [`beautifulsoup`](https://www.crummy.com/software/BeautifulSoup/) modules to scrape a web page.
---
{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `requests` and `bs4` packages (and their dependencies):

    ```bash
    % pip install requests
    % pip install bs4
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
    % graalpy currency_exchange.py
    ```

5. A CSV file is produced, similar to [_currency\_exchange.csv_](assets/currency_exchange.csv).

### Related Documentation
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)