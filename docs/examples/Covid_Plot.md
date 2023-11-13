---
layout: page
title: Covid Plot
permalink: /examples/covid_plot/
description: This example provides a demonstration of the use of [Matplotlib](https://matplotlib.org/), a visualization library for Python, combined with [`pandas`](https://pandas.pydata.org/), an open source data analysis and manipulation tool.
---
{{ page.description }}

>**Prerequisites**: A recent version of [CMake](https://cmake.org/) is required to install the matplotlib package. (For more information, see [Installing CMake](https://cmake.org/install/).)

>Note: GraalPy does not implement the [Tkinter](https://docs.python.org/3/library/tkinter.html) user interface, so some features of matplotlib may not work as expected.

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `requests`, `pandas`, and `matplotlib` packages (and their dependencies):

    ```bash
    % pip install requests
    % pip install pandas
    % pip install matplotlib
    ```

3. Copy the following contents into a file named _covid\_plot.py_.
(It uses data from the [Open Disease Data API](https://disease.sh/).)

    ```python
    import requests
    import pandas as pd
    import matplotlib.pyplot as plt
    import datetime
    import math
    import sys
    
    # Use an ISO 3-letter country code as listed at https://www.worlddata.info/countrycodes.php
    script_args = sys.argv[1:]
    if len(script_args) == 1:
        country_code = script_args[0]
    else:
        print("Country code '{country_code}' not recognised. Select a country code from https://www.worlddata.info/countrycodes.php".format(country_code=country_code))
        exit
    url = "https://disease.sh/v3/covid-19/historical/{country_code}?lastdays=30".format(country_code=country_code)
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to retrieve data for {url}: {reason}".format(url=url, reason=response.reason))
        exit()
    response_json = response.json()
    country = response_json["country"]
    timeline = response_json["timeline"]
    # Convert the dates
    dates = list(map(lambda d: datetime.datetime.strptime(d, "%m/%d/%y").strftime("%Y-%m-%d"), timeline["cases"].keys()))
    cases = list(map(lambda c: math.log10(c), timeline["cases"].values()))
    deaths = list(map(lambda d: math.log10(d), timeline["deaths"].values()))
    df = pd.DataFrame(dict(Dates=dates, Cases=cases, Deaths=deaths))
    df.plot(x="Dates", y=["Cases", "Deaths"], kind="bar", title=country)
    filename = "{country}_covid_plot.png".format(country=country)
    print("Writing plot to file: {filename}".format(filename=filename))
    plt.savefig(filename)
    ```

4. Use the following command to run the script, with an example argument:

    ```bash
    % graalpy covid_plot.py POL
    ```

5. The script creates a file named _Poland\_covid\_plot.png_ with content similar to:
    ![Covid Plot for Poland](/examples/assets/Poland_covid_plot.png)

### Related Documentation
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)
* [Pandas DataFrame](/examples/pandas_dataframe/)
