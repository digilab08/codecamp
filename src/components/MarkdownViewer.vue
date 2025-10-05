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
import { computed, onUpdated, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  source: { type: String, required: true },
  class: { type: String, default: '' },
  sanitize: { type: Boolean, default: true },
})

const copyCodePlugin = (md) => {
  const defaultRender =
    md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const codeBlock = defaultRender(tokens, idx, options, env, self)
    const code = token.content

    if (token.info) {
      const encodedCode = encodeURIComponent(code)
      const copyButton = `
        <button class="copy-code-btn btn btn-ghost btn-circle absolute top-3 right-3 material-icons" onclick="copyCode(this)" title="Copy Code" data-code="${encodedCode}">
          content_copy
        </button>
      `
      return `<div class="relative">${copyButton}${codeBlock}</div>`
    }

    return codeBlock
  }
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })
  .use(hljsPlugin)
  .use(anchor)
  .use(copyCodePlugin)
const renderedHtml = computed(() => {
  let html = md.render(props.source)
  if (props.sanitize) html = DOMPurify.sanitize(html)
  return html
})

let elements = []
const onCopyClick = (event) => {
  const el = event.currentTarget
  const code = decodeURIComponent(el.getAttribute('data-code'))
  navigator.clipboard.writeText(code).then(() => {
    el.innerText = 'check'
    setTimeout(() => {
      el.innerText = 'content_copy'
    }, 1000)
  })
}

function removeEventListeners() {
  elements.forEach((el) => {
    el.removeEventListener('click', onCopyClick)
  })
}

onUpdated(() => {
  removeEventListeners()
  elements = document.querySelectorAll('.copy-code-btn')
  elements.forEach((el) => {
    el.addEventListener('click', onCopyClick)
  })
})

onUnmounted(() => {
  removeEventListeners()
})
</script>

<template>
  <div v-html="renderedHtml" class="prose max-w-full" :class="class"></div>
</template>
