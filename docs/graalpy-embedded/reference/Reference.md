---
layout: docs-layout
title: GraalPy Embedded Reference
permalink: /graalpy-embedded/reference/
toc: true
---

# GraalPy Embedded Reference Documentation
{% comment %}
  The list of docs for this page is in _data/reference_list.yml
{% endcomment %}

<ul>
   {% for item in site.data.reference_list.docs %}
      {%- assign reference_page = site.pages | where: "path", item | first -%}
      <li><a class="page-link" href="{{ reference_page.url | relative_url }}">{{ reference_page.title | escape }}</a></li>
   {% endfor %}
</ul>

{::options parse_block_html="true" /}
<details><summary markdown="span">(Click to expand)</summary>

### [Polyglot API](Interoperability.md)
### [Java Interoperability](Java_Interoperability.md)
### [Jython Migration Guide](Jython.md)
### [Native GraalPy Images](Native_Images.md)
### [Operating System Interfaces Supported by GraalPy](OS_Interfaces.md)
### [Python Code Parsing and pyc Files](Parser_Details.md)
### [Creating Standalone Java-Python Applications with GraalPy](Standalone_Embedded_Applications.md)

</details>
{::options parse_block_html="false" /}