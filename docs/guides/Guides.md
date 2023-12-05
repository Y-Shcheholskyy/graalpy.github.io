---
layout: docs-layout
title: Guides
permalink: /guides/
---
Lorem Ipsum

{% comment %}
  The list of docs for this page is in _data/guide_list.yml
{% endcomment %}


<ul>
   {% for item in site.data.guide_list.docs %}
      {%- assign guide_page = site.pages | where: "path", item | first -%}
      <li><a class="page-link" href="{{ guide_page.url | relative_url }}">{{ guide_page.title | escape }}</a></li>
   {% endfor %}
</ul>