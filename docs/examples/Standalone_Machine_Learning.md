---
layout: page
title: Standalone Machine Learning
permalink: /examples/standalone_machine_learning/
description: This example provides a demonstration of creating a standalone executable from your Python application, using GraalVM Native Image.
---
{{ page.description }}
It is based on the [Machine Learning](/examples/machine_learning/) example.

1. Follow the steps in the [Machine Learning](/examples/machine_learning/) example.

2. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

3. Create a native executable based on your _irises.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module irises.py \
        --output irises \
        --venv <venv-dir>
    …
    Finished generating 'irises' in 20m 25s.
    ```

4. Run the executable, as follows:

    ```bash
    % ./irises
    ```

5. You should see output similar to the following:

    ```
    Feature names: ['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']
    Response names: ['setosa' 'versicolor' 'virginica']
    Features training: (105, 4)
    Features testing: (45, 4)
    Responses training: (105,)
    Responses testing: (45,)
    Accuracy: 0.9777777777777777
    ```

### Related Documentation
* [Currency Exchange](/examples/currency_exchange/)
* [Standalone Python Applications](/reference/standalone-applications/)