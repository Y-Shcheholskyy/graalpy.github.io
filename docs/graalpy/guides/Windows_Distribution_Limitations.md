---
layout: docs-layout
title: GraalPy Windows Distribution
permalink: /graalpy/reference/windows-distribution/
---

# GraalPy Windows Distribution

The GraalPy preview build for Windows that you can [download](https://github.com/oracle/graalpython/releases/) has several known issues:

- JLine treats Windows a dumb terminal, no autocomplete and limited editing capabilities in the REPL
- Interactive help() in the REPL doesn't work
- Inside venvs:
  - graalpy.cmd and graalpy.exe are broken
  - pip.exe cannot be used directly
  - pip has trouble with cache file loading, use `--no-cache-dir`
  - Only pure Python binary wheels can be installed, no native extensions or source builds
  - To install a package, use `myvenv/Scripts/python.cmd -m pip --no-cache-dir install <pkg>`
- Running from PowerShell works better than running from CMD, various scripts will fail on the latter