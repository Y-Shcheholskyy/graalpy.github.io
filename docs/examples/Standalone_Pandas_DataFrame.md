---
layout: examples
title: Standalone Pandas DataFrame
permalink: /examples/standalone_pandas_dataframe/
description: This example provides a demonstration of creating a standalone executable from your Python application, using GraalVM Native Image.
---
{{ page.description }}
It is based on the [Pandas DataFrame](/examples/pandas_dataframe/) example.

1. Follow the steps in the [Pandas DataFrame](/examples/pandas_dataframe/) example.

2. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

3. Create a native executable based on your _pandas\_dataframe.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module pandas_dataframe.py \
        --output pandas_dataframe \
        --venv <venv-dir>
    …
    Finished generating 'pandas_dataframe' in 44m 23s.
    ```

4. Run the executable, as follows:

    ```bash
    % ./pandas_dataframe
    ```

5. You should see output similar to the following:

    ```
    Columns: Index(['Year', 'Gender', 'Cohort', 'State', 'Drivers'], dtype='object')
    Columns: Index(['Gender', 'State', 'Drivers'], dtype='object')
    Columns: Index(['Gender', 'State', 'Gendered Drivers'], dtype='object')
          Gender                 State     Gendered Drivers
    0       Male               Alabama           44,770,863
    1       Male                Alaska            6,402,589
    2       Male               Arizona           50,844,724
    3       Male              Arkansas           24,792,143
    4       Male            California          296,009,227
    5       Male              Colorado           43,628,516
    6       Male           Connecticut           32,485,753
    7       Male              Delaware            7,751,544
    8       Male  District of Columbia            4,778,169
    9       Male               Florida          164,698,416
    10      Male               Georgia           72,401,349
    ...
    1213  Female        South Carolina           39,961,258
    1214  Female          South Dakota            7,187,206
    1215  Female             Tennessee           55,918,498
    1216  Female                 Texas          181,965,115
    1217  Female                  Utah           19,891,081
    1218  Female               Vermont            6,495,959
    1219  Female              Virginia           67,262,073
    1220  Female            Washington           57,718,009
    1221  Female         West Virginia           15,741,762
    1222  Female             Wisconsin           49,130,644
    1223  Female               Wyoming            4,721,641
    Total number of drivers: 5036203656
    ```

### Related Documentation
* [Pandas DataFrame](/examples/pandas_dataframe/)
* [Standalone Python Applications](/reference/standalone-applications/)