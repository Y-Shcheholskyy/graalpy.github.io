{% for item in site.data.guide_list.docs %}
  {%- assign guide_page = site.pages | where: "path", item | first -%}
  {{ guide_page.content }}
{% endfor %}