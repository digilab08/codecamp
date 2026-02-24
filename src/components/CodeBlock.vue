<script setup>
import { computed } from 'vue'
import hljs from 'highlight.js'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
})

// Process the raw code string into highlighted HTML
const highlightedHtml = computed(() => {
  if (!props.code) return ''
  return hljs.highlight(props.code, { language: props.language }).value
})
</script>

<template>
  <div class="code-block">
    <pre><code class="hljs" :class="`language-${language}`" v-html="highlightedHtml"></code></pre>
  </div>
</template>
