---
layout: docs-layout
toc_group: reference
permalink: /reference/
link_title: Reference Documentation
title: Reference Documentation
---

# GraalPy Reference Documentation

{% comment %}
  The list of docs for this page is in _data/reference_list.yml
{% endcomment %}

<ul>
   {% for item in site.data.reference_list.docs %}
      {%- assign reference_page = site.pages | where: "path", item | first -%}
      <li><a class="page-link" href="{{ reference_page.url | relative_url }}">{{ reference_page.title | escape }}</a></li>
   {% endfor %}
</ul>