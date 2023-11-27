---
layout: guides
toc_group: guides
permalink: /guides/
link_title: User Guides
title: User Guides
---

# GraalPy User Guides

<ul>
   {% for item in site.data.guide_list.docs %}
      {%- assign guide_page = site.pages | where: "path", item | first -%}
      <li><a class="page-link" href="{{ guide_page.url | relative_url }}">{{ guide_page.title | escape }}</a></li>
   {% endfor %}
</ul>