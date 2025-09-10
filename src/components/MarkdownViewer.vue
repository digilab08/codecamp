<!-- 
  MarkdownViewer Component Documentation
  ---------------------------------------
  This component renders Markdown content as HTML using Vue's computed properties.

  Libraries required:
    - MarkdownIt: Primary library for parsing Markdown. (npm install markdown-it)
    - markdown-it-highlightjs: Plugin for syntax highlighting in code blocks. (npm install -D highlight.js)
    - markdown-it-anchor: Plugin that automatically produces anchor links for headings. (npm install markdown-it-anchor)
    - DOMPurify: Library to sanitize the rendered HTML and prevent potential XSS vulnerabilities. (npm install dompurify)
    - Taiwind Prose: Auto Tailwind design npm install -D @tailwindcss/typography

  Component Props:
    - source (String, required): The Markdown text to be converted to HTML.
    - class (String, optional): Additional CSS classes to be applied to the container element.
    - sanitize (Boolean, optional): Flag to indicate whether the rendered HTML should be sanitized. Defaults to true.

  Notes:
    - The Markdown is rendered with support for HTML, linkification, and typographic enhancements.
    - The computed property 'renderedHtml' processes and optionally sanitizes the output before it is rendered.
-->
<script setup>
import MarkdownIt from 'markdown-it'
import hljsPlugin from 'markdown-it-highlightjs'
import anchor from 'markdown-it-anchor'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const props = defineProps({
  source: { type: String, required: true },
  class: { type: String, default: '' },
  sanitize: { type: Boolean, default: true },
})

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })
  .use(hljsPlugin)
  .use(anchor)
const renderedHtml = computed(() => {
  let html = md.render(props.source)
  if (props.sanitize) html = DOMPurify.sanitize(html)
  return html
})
</script>

<template>
  <div v-html="renderedHtml" class="prose max-w-full" :class="class"></div>
</template>
