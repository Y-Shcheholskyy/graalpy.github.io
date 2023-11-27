---
layout: docs-layout
toc_group: examples
link_title: GraalPy Examples
title: GraalPy Examples
permalink: /examples/
---

# Examples to Run on GraalPy

{% comment %}
  The list of docs for this page is in _data/example_list.yml
{% endcomment %}

<table>
  <tr>
    <th>Title</th>
    <th>Description</th>
  </tr>
  {% for item in site.data.example_list.docs %}
    {%- assign example_page = site.pages | where: "path", item | first -%}
    <tr>
      <td><a class="page-link" href="{{ example_page.url | relative_url }}">{{ example_page.title | escape }}</a></td>
      <td>{{ example_page.description | markdownify }}</td>
    </tr>
   {% endfor %}
</table>