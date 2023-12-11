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
            <h1 class="hi__title">Run your applications faster 
              <br>and more efficiently with GraalPy</h1>
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
        GraalPy is a Python 3.10 compliant runtime.
        It is already compatible with many machine learning and data science libraries from the rich Python ecosystem and more are being added.

        GraalPy uses state-of-the-art JIT and GC of the GraalVM project to speed up Python code at runtime.
        When C extensions are involved, GraalPy closely matches CPython performance.
      </h5>
    </div>
  </div>
</section>

<!-- Benefits -->
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
            <h5>Get access to multiple language ecosystems and tools out of the box
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
            <h5>Control Python permissions when embedding Python in Java or GraalVM Native Images
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
          <h5>On average, GraalPy is 4.3x faster than CPython.</h5>
        </div>
        <div>
          <img src='{{ "/resources/img/home/graalpy-chart.svg" | relative_url }}' alt="graal python chart">
        </div>
        <div class="pyperform__text pyperform__text-bot">
          <h5>Geomean speedup over CPython on
            the <a href="https://pyperformance.readthedocs.io/" target="_blank">Python Performance</a>
            suite<br><small>(Note that
              Jython can only run a subset of the benchmarks due to the missing
              Python 3 support)</small></h5>
        </div>
      </div>
    </div>
  </div>
</section>
