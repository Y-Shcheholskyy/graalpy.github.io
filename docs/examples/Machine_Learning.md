# Machine Learning with Python scikit-learn Library

This example provides a demonstration of using [`scikit-learn`](https://scikit-learn.org/stable/) (a free machine learning library for Python) to model a dataset of Iris plants. 
The demo shows how to create a standalone executable from this application using GraalPy. 
GraalPy comes with a module that can create Python single-file native binaries for Linux, Windows, and macOS.

1. [Install GraalPy](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/) in the **native** configuration (default). Then [create a Virtual Environment](https://y-shcheholskyy.github.io/graalpy.github.io/guides/#creating-a-virtual-environment) and activate it.
    
    >Consider **Oracle GraalPy** for the best experience. It is licensed under the [GraalVM Free Terms and Conditions (GFTC)](https://www.oracle.com/downloads/licenses/graal-free-license.html) license, which permits use by any user including commercial and production use.

2. Install the `scikit-learn` package (and its dependencies) using `pip`:
    ```bash
    pip install scikit-learn
    ```

3. Copy the following contents into a file named _irises.py_.
(The names `sklearn` and `scikit-learn` both refer to the same package.)

    ```python
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn import metrics
    
    # Import the Iris Plants Dataset from the datasets module of sklearn
    from sklearn.datasets import load_iris
    
    # Import the class to split the dataset into training and testing datasets
    from sklearn.model_selection import train_test_split
    
    # Load the Iris Plants dataset
    iris_ds = load_iris()
    print("Feature names:", iris_ds.feature_names)
    print("Response names:", iris_ds.target_names)
    
    # Separate the dataset into _features_ and _responses_
    features = iris_ds.data
    responses = iris_ds.target
    
    # Split the Iris Plants dataset into testing and training datasets, split 30:70
    features_training, features_testing, responses_training, responses_testing = train_test_split(
            features, responses, test_size=0.3, random_state=1
    )
    
    # Print the shapes of the training and testing datasets
    print("Features training: " + str(features_training.shape))
    print("Features testing: " + str(features_testing.shape))
    print("Responses training: " + str(responses_training.shape))
    print("Responses testing: " + str(responses_testing.shape))
    
    # Create a K nearest neighbors classifier
    classifier_knn = KNeighborsClassifier(n_neighbors=4)
    # Create clusters of the training datasets based on their similarities
    classifier_knn.fit(features_training, responses_training)
    # Use the classifier to predict a dataset
    responses_prediction = classifier_knn.predict(features_testing)
    # Find the accuracy by comparing actual response with predicted response
    print("Accuracy:", metrics.accuracy_score(responses_testing, responses_prediction))
    ```

4. Use the following command to run the script:
    ```bash
    graalpy irises.py
    ```
    You should see a similar output:
    ```
    Feature names: ['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']
    Response names: ['setosa' 'versicolor' 'virginica']
    Features training: (105, 4)
    Features testing: (45, 4)
    Responses training: (105,)
    Responses testing: (45,)
    Accuracy: 0.9777777777777777
    ```

    Now continue and create a native executable from this Python application.

5. Unset your `JAVA_HOME` environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

6. Create a standalone executable based on your _irises.py_ script.
(For more information about the command-line options, see [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/).)
    ```bash
    graalpy -m standalone native \
        --module irises.py \
        --output irises \
        --venv <venv-dir>
    ```

7. Run the executable, as follows:
    ```bash
    ./irises
    ```
    You should see the same output as earlier.

### Related Documentation

* [scikit-learn: machine learning in Python](https://scikit-learn.org/stable/)
* [GraalPy Getting Started](https://y-shcheholskyy.github.io/graalpy.github.io/getting-started/)
* [Standalone Python Applications](https://y-shcheholskyy.github.io/graalpy.github.io/reference/standalone-applications/)