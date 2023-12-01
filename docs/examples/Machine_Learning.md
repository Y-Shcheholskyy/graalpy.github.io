---
layout: learn
title: Machine Learning
permalink: /examples/machine-learning/
description: This example provides a demonstration of using [`scikit-learn`](https://scikit-learn.org/stable/) (a free machine learning library for Python) to model a dataset of Iris plants.
---
# Machine Learning
{{ page.description }}

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Install the `scikit-learn` package (and its dependencies):

    ```bash
    % pip install scikit-learn
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
    % graalpy irises.py
    ```

5. You should see output similar to:

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
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Installing a Package](/guides/installing_a_package/)