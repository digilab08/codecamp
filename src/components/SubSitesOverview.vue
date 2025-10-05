<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  /**
   * Map of labels to route paths.
   * Example: { Home: {path: '/', type: 'folder'}, Documents: {path: '/documents', type: 'folder'}, 'Document A': {path: '/documents/a', type: 'file'} }
   * Iteration order follows the insertion order of the object's keys (except integer-like keys).
   * @type {Object.<string, {path: string, type: string}>}
   */
  items: {
    type: Object,
    required: true,
  },
  class: {
    type: String,
    default: 'w-full',
  },
})

const route = useRoute()

function nameCleanup(name) {
  name = name.replace(/_/g, ' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const itemsArray = computed(() => {
  return Object.entries(props.items).map(([pathName, content]) => {
    const name = nameCleanup(pathName)
    const isFolder = typeof content === 'object'
    const path = `${route.path}/${pathName}`
    return { name, path, isFolder }
  })
})

function getIcon(isFolder) {
  return isFolder ? 'folder' : 'article'
}
</script>

<template>
  <div class="@container/SubSites" :class="class">
    <div
      class="grid gap-3 grid-cols-2 @[900px]/SubSites:grid-cols-3 @[1200px]/SubSites:grid-cols-4 @[1500px]/SubSites:grid-cols-5 @[1800px]/SubSites:grid-cols-6"
    >
      <RouterLink
        v-for="subSite in itemsArray"
        :key="subSite"
        :to="subSite.path"
        class="btn text-lg font-bold"
        :class="subSite.isFolder ? 'btn-primary' : 'btn-secondary'"
      >
        <i class="material-icons">{{ getIcon(subSite.isFolder) }}</i>
        {{ subSite.name }}
      </RouterLink>
    </div>
  </div>
</template>
