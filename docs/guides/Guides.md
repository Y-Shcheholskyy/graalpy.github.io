---
layout: docs-layout
title: Guides
permalink: /guides/
toc: true
---

<!--
Data for the guides is in _data/guide_list.yml
-->

# Guides

{% for item in site.data.guide_list.docs %}
  {%- assign guide_page = site.pages | where: "path", item | first -%}
  {{ guide_page.content }}
{% endfor %}