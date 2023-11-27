---
layout: docs-layout
toc_group: examples
link_title: Pandas DataFrame Example
title: Pandas DataFrame Example
permalink: /examples/pandas_dataframe/
description: This example provides a demonstration of using the Python [`requests`](https://pypi.org/project/requests/) and [`pandas`](https://pandas.pydata.org/) modules to manipulate data from an open source dataset provided by the US government.
---

# Pandas DataFrame Example

{{ page.description }}


1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `requests` and `pandas` packages (and their dependencies):

    ```bash
    % pip install requests
    % pip install pandas
    ```

3. Copy the following contents into a file named _pandas\_dataframe.py_:

    ```python
    import pandas as pd
    
    # USA Licensed Drivers, by state, gender, and age group
    # https://catalog.data.gov/dataset/licensed-drivers-by-state-gender-and-age-group
    url = "https://data.transportation.gov/api/views/xfkb-3bxx/rows.csv"
    df = pd.read_csv(url)
    
    print("Columns: " + str(df.columns))
    
    # Remove the year and cohort columns
    df.drop(labels = ["Year", "Cohort"], axis= 1, inplace = True)
    print("Columns: " + str(df.columns))
    
    # Group by gender and state with the sum in a new column
    df["Gendered Drivers"] = df.groupby(["Gender", "State"])["Drivers"].transform("sum")
    
    # Remove the duplicate rows
    df.drop_duplicates(subset=["Gender", "State"], inplace = True)
    
    # Remove the Drivers column
    df.drop(labels = ["Drivers"], axis= 1, inplace = True)
    print("Columns: " + str(df.columns))
    
    # Print all the rows in the table
    pd.set_option("display.max_rows", None)
    pd.set_option('display.float_format', '{:20,.0f}'.format)
    print(df)
    
    # #Print the total number of drivers
    print("Total number of drivers: " + str(int(df["Gendered Drivers"].sum())))
    ```

4. Run the script:

    ```bash
    % graalpy pandas_dataframe.py
    ```

5. You should output similar to the following:

    ```
    Columns: Index(['Year', 'Gender', 'Cohort', 'State', 'Drivers'], dtype='object')
    Columns: Index(['Gender', 'State', 'Drivers'], dtype='object')
    Columns: Index(['Gender', 'State', 'Gendered Drivers'], dtype='object')
          Gender                 State  Gendered Drivers
    0        Male               Alabama               0.0
    1        Male                Alaska               0.0
    2        Male               Arizona               0.0
    3        Male              Arkansas               0.0
    4        Male            California            5732.0
    ...       ...                   ...               ...
    54700  Female                Nevada            8208.0
    54702  Female            New Jersey           41967.0
    54731  Female  District of Columbia            3655.0
    54833  Female  District of Columbia          479540.0
    54867  Female             Tennessee        12095538.0
    
    [37712 rows x 3 columns]
    Total number of drivers: 39285916075.0
    ```

### Related Documentation
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)