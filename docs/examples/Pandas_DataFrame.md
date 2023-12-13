# DataFrame Application Using Python Requests and Pandas

This example provides a demonstration of using the Python [Requests](https://pypi.org/project/requests/) and [Pandas](https://pandas.pydata.org/) modules to manipulate data from an open source dataset provided by the US government.
It shows how to create a standalone executable from this application using GraalPy and GraalVM Native Image. 

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration. Consider Oracle GraalPy for the best experience. Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it. 
    
    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Install the `requests` and `pandas` packages (and their dependencies) using `pip`:
    ```bash
    pip install requests
    pip install pandas
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
    graalpy pandas_dataframe.py
    ```
    Now continue and create a native executable from this Python application, using [GraalVM ahead-of-time Native Image compilation](https://www.graalvm.org/latest/reference-manual/native-image/).

5. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

6. Create a standalone executable based on your _pandas_dataframe.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)
    
    ```bash
    graalpy -m standalone native \
        --module pandas_dataframe.py \
        --output pandas_dataframe \
        --venv <venv-dir>
    ```

7. Run the executable, as follows:
    ```bash
    ./pandas_dataframe
    ```
    You should see a similar output:
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

* [Pyhton Pandas Package](https://pandas.pydata.org/)
* [Python Requests Package](https://pypi.org/project/requests/)
* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)