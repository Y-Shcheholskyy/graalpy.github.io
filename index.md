---
layout: base
title: Welcome to GraalPy!
---

<section>
  <div>
    <div class="hi">
      <div class="container">
        <div class="hi__row">
          <div class="hi__body">
            <h1 class="hi__title">GraalPy: Bringing the Python Ecosystem to the JVM</h1>
            <div class="hi__buttons">
              <a href='{{ "/downloads/" | relative_url }}' class="btn btn-primary">Download</a>
              <a href='{{ "/docs/getting-started/" | relative_url }}' class="btn btn-primary">Get Started</a>
            </div>
          </div>
          <div class="hi__image">
            <img src='{{ "/resources/img/home/python-logo.svg" | relative_url }}' alt="python-icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home__overview">
  <div class="container">
    <div class="home__overview-text">
      <h5>
        GraalPy is a Python 3.10 compliant runtime that you can easily embed in your Java applications.
        <br>
        It is compatible with the most popular machine-learning and data-science libraries (and we are working on more).
        <br>
        It speeds up Python code at runtime by using the state-of-the-art JIT compiler and garbage collector provided by the GraalVM project.
      </h5>
    </div>
  </div>
</section>

<!-- Benefits -->

<!-- 
Need to add the following
GraalPy is a Python solution for Java, offering the following **advantages** for the Java developers:

* GraalPy brings modern Python data science libraries into Java applications. Safely embed Python libraries in Java projects thanks to GraalPy.
* GraalPy is a Python 3 replacement for Jython. Use Java libraries from Python or move your Jython applications to GraalPy for high performance and modern language features, while preserving an easy interoperability with Java.
* Possibility to create native executables using GraalVM Native Image. Since Python libraries are embed in Java, you can easily generate native images of this Java-Python application to achieve an instantaneous startup.
-->

<section class="content-section">
  <div class="pybenefits">
    <div class="container">
      <h3 class="pybenefits__maintitle">Benefits</h3>
      <div class="pybenefits__row">
        <div class="pybenefits__card">
          <div class="pybenefits__icon">
            <img src='{{ "/resources/img/home/high-peformance-icon.svg" | relative_url }}' alt="high performance icon">
          </div>
          <div class="pybenefits__title">
            <h4>High Performance</h4>
          </div>
          <div class="pybenefits__text">
            <h5>GraalPy optimizes your Python code and runs native extensions at full speed
            </h5>
          </div>
        </div>
        <div class="pybenefits__card">
          <div class="pybenefits__icon">
            <img src='{{ "/resources/img/home/interoperability-icon.svg" | relative_url }}' alt="interoperability icon">
          </div>
          <div class="pybenefits__title">
            <h4>Interoperability</h4>
          </div>
          <div class="pybenefits__text">
            <h5>Access the Python ecosystems and tools out of the box
            </h5>
          </div>
        </div>
        <div class="pybenefits__card">
          <div class="pybenefits__icon">
            <img src='{{ "/resources/img/home/managed-exec-icon.svg" | relative_url }}'
              alt="improved security advantage icon">
          </div>
          <div class="pybenefits__title">
            <h4>Managed Embedding</h4>
          </div>
          <div class="pybenefits__text">
            <h5>Control permissions when embedding your Python code in your Java application
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Benchmarks -->
<section class="content-section">
  <div class="wrapper">
    <div class="pyperform">
      <div class="container">
        <h3 class="pypage__title">Faster Python</h3>
        <div class="pyperform__text">
          <h5>On average, GraalPy is 4.3 times faster than CPython.</h5>
        </div>
        <div>
          <img src='{{ "/resources/img/home/graalpy-chart.svg" | relative_url }}' alt="graal python chart">
        </div>
        <div class="pyperform__text pyperform__text-bot">
          <h5>Geomean speedup over CPython on the <a href="https://pyperformance.readthedocs.io/" target="_blank">Python Performance</a>
            suite
            <br>
            <span style="font-size: smaller;">
              (<strong>Note</strong>: Jython can only run a subset of the benchmarks because it is not compliant with Python 3)
            </span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>
