<script setup>
import MarkdownIt from 'markdown-it'
import hljsPlugin from 'markdown-it-highlightjs'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const props = defineProps({
  source: { type: String, required: true },
  class: { type: String, default: '' },
  sanitize: { type: Boolean, default: true },
})

const md = new MarkdownIt({ html: true, linkify: true, typographer: true }).use(hljsPlugin)
const renderedHtml = computed(() => {
  let html = md.render(props.source)
  if (props.sanitize) html = DOMPurify.sanitize(html)
  return html
})
</script>

<template>
  <div v-html="renderedHtml" class="prose max-w-full" :class="class"></div>
</template>
