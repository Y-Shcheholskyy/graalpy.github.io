---
layout: docs-layout
title: Getting Started
permalink: /getting-started/
toc: true
---

# Getting Started

You can easily add GraalPy to your Java application using Maven or Gradle build tools. 

## Maven

Generate a skeleton Maven project to embed Python packages into Java using Maven artefacts.
You can use GraalPy from GraalVM JDK, Oracle JDK, or OpenJDK using one of the many [GraalPy artefacts](https://mvnrepository.com/artifact/org.graalvm.python). For example, the following command generates a Java application with embedded GraalPy:

```bash
mvn archetype:generate
  -DarchetypeGroupId=org.graalvm.python
  -DarchetypeArtifactId=graalpy-archetype-polyglot-app
  -DarchetypeVersion=24.0.0
```

It uses the [GraalVM SDK Polyglot API](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/package-summary.html) with additional support to manage Python virtual environments and integrate Python package dependencies with a Maven workflow.

> Note: The performance of the GraalPy runtime depends on the JDK in which you embed it. For more information, see [Runtime Optimization Support](https://www.graalvm.org/latest/reference-manual/embed-languages/#runtime-optimization-support).

The archetype Java code and the _pom.xml_ file are heavily documented and the generated code describes available features. (If you do not wish to use Maven, the archetype Java code also provides guidance to create a custom embedding.)

For generic setup instructions, see [embedding GraalVM languages in Java](https://www.graalvm.org/latest/reference-manual/embed-languages/).

## Gradle

[missing content]


## Related Documentation

- [Reference documentation](reference/Reference.md)
- [Example applications](examples/java-python-examples.md)
- [Embedding GraalVM languages in Java](https://www.graalvm.org/latest/reference-manual/embed-languages/)