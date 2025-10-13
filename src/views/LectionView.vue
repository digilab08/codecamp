<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import SubSitesOverview from '@/components/SubSitesOverview.vue'
import { objMap } from '@/utils/obj/map.js'
import { pathsToTree } from '@/utils/pathsToTree'
import { objGetIn } from '@/utils/obj/getIn'

const mdLoaders = import.meta.glob('@/lection/**/*.md', { query: '?raw' })
const mdLoadersCleaned = objMap(mdLoaders, (key, value) => [
  key.replace(/^.*?\/lection\/|\.md$/g, ''),
  value,
])
const mdTree = pathsToTree(mdLoadersCleaned)

const route = useRoute()
const routeArray = computed(() => {
  const p = route.params.catchAll
  return Array.isArray(p) ? p : p ? [p] : []
})

const currentContent = computed(() => {
  return objGetIn(mdTree, routeArray.value)
})

const currentMd = ref('')
watch(
  currentContent,
  async (newContent) => {
    if (typeof newContent === 'function') {
      const fileObj = await newContent()
      currentMd.value = fileObj.default
    } else {
      currentMd.value = ''
    }
  },
  { immediate: true },
)

const isFolder = computed(() => {
  return typeof currentContent.value === 'object'
})

const breadcrumbs = computed(() => {
  return breadcrumbsObj(routeArray.value)
})

function nameCleanup(name) {
  name = name.replace(/_/g, ' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function breadcrumbsObj(pathArr = []) {
  let accPath = '/lection'
  const result = { Lection: accPath }

  for (const segment of pathArr) {
    accPath += `/${segment}`
    result[nameCleanup(segment)] = accPath
  }
  return result
}
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex flex-col gap-3 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5">
      <Breadcrumbs :items="breadcrumbs"></Breadcrumbs>
      <SubSitesOverview v-if="isFolder" :items="currentContent" />
      <MarkdownViewer v-else :source="currentMd" :sanitize="false" />
    </div>
  </div>
</template>
