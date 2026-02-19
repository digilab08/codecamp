<script setup>
import { computed } from 'vue'
import hljs from 'highlight.js'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
})

// Process the raw code string into highlighted HTML
const highlightedHtml = computed(() => {
  if (!props.code) return ''
  return hljs.highlight(props.code, { language: 'javascript' }).value
})
</script>

<template>
  <div class="code-block">
    <pre><code class="hljs language-javascript" v-html="highlightedHtml"></code></pre>
  </div>
</template>
