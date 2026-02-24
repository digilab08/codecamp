<script setup>
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue'

// CodeMirror core
import { basicSetup } from 'codemirror'
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'

// Language, autocomplete und Lint
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion } from '@codemirror/autocomplete'
import { lintGutter } from '@codemirror/lint'

import { oneDark } from '@codemirror/theme-one-dark'

// DOM-Referenz und Editor-Instanz
const editorContainer = ref(null)
const view = shallowRef(null)

onMounted(() => {
  const state = EditorState.create({
    extensions: [basicSetup, javascript(), autocompletion(), lintGutter(), oneDark],
  })

  view.value = new EditorView({ state, parent: editorContainer.value })
})

onBeforeUnmount(() => {
  if (view.value) view.value.destroy()
})

const getCode = () => (view.value ? view.value.state.doc.toString() : '')

const setCode = (newCode) => {
  if (!view.value) return
  const transaction = view.value.state.update({
    changes: { from: 0, to: view.value.state.doc.length, insert: newCode },
  })
  view.value.dispatch(transaction)
}

defineExpose({ getCode, setCode })
</script>
<template>
  <div class="rounded-md overflow-hidden [&_.cm-editor]:h-full [&_.cm-scroller]:overflow-auto">
    <div ref="editorContainer" class="text-left"></div>
  </div>
</template>
