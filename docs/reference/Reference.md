---
layout: docs-layout
title: GraalPy Reference Documentation
permalink: /reference/
toc: true
---

# GraalPy Reference Documentation
{% comment %}
  The list of docs for this page is in _data/reference_list.yml
{% endcomment %}

{% for item in site.data.reference_list.docs %}
   {%- assign reference_page = site.pages | where: "path", item | first -%}
   {{ reference_page.content }}
{% endfor %}