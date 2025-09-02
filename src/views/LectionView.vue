<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import MarkdownViewer from '@/components/MarkdownViewer.vue'

const mdLoaders = import.meta.glob('../lections/**/*.md', { query: '?raw' })

function toRel(key) {
  return key.replace(/^.*?\/lections\//, '')
}
const allRelFiles = computed(() => Object.keys(mdLoaders).map(toRel).sort())

const route = useRoute()

const reqPath = computed(() => {
  const p = route.params.catchAll
  const raw = Array.isArray(p) ? p.join('/') : p || ''
  return decodeURIComponent(String(raw)).replace(/^\/+|\/+$/g, '')
})

const mode = ref('loading')
const mdSource = ref('')
const currentFileRel = ref(null)
const dirListing = ref({ dirs: [], files: [] })

function resolveFileRel(path) {
  const candidates = []
  const trimmed = path.replace(/^\/+|\/+$/g, '')
  if (!trimmed) candidates.push('index.md')

  candidates.push(trimmed)

  if (!trimmed.endsWith('.md')) candidates.push(`${trimmed}.md`)

  for (const c of candidates) {
    if (allRelFiles.value.includes(c)) return c
  }
  return null
}

/**
 * Liefert eine flache Auflistung der direkten Unterordner und Dateien eines Verzeichnisses.
 * @param {string} path relativer Pfad (z.B. "", "foo/bar")
 * @returns {DirListing}
 */
function listDirectory(path) {
  const prefix = path ? path.replace(/\/+$/, '') + '/' : ''
  /** @type {Set<string>} */
  const dirSet = new Set()
  /** @type {{ name: string, rel: string }[]} */
  const files = []

  for (const rel of allRelFiles.value) {
    if (!rel.startsWith(prefix)) continue
    const rest = rel.slice(prefix.length)
    const slashIdx = rest.indexOf('/')
    if (slashIdx !== -1) {
      // Ein Eintrag in einem Unterordner -> nur den ersten Segmentnamen sammeln
      dirSet.add(rest.slice(0, slashIdx))
    } else {
      // Datei direkt in diesem Verzeichnis
      files.push({ name: rest.replace(/\.md$/, ''), rel })
    }
  }

  return {
    dirs: Array.from(dirSet).sort(),
    files: files.sort((a, b) => a.name.localeCompare(b.name)),
  }
}

/**
 * Sucht den Glob-Key (Vite) zu einem relativen Pfad.
 * @param {string} rel z.B. "foo/bar.md"
 * @returns {string | null}
 */
function keyFromRel(rel) {
  for (const key in mdLoaders) if (toRel(key) === rel) return key
  return null
}

/**
 * Lädt den View-State (Datei/Verzeichnis/404) entsprechend des reqPath.
 * Asynchron, weil Dateiinhalt bei Bedarf lazy importiert wird.
 */
async function evaluate() {
  mode.value = 'loading'
  mdSource.value = ''
  currentFileRel.value = null
  dirListing.value = { dirs: [], files: [] }

  const fileRel = resolveFileRel(reqPath.value)
  if (fileRel) {
    const key = keyFromRel(fileRel)
    if (key) {
      // @ts-ignore - Vite Glob Loader liefert Promise<string>
      const content = await mdLoaders[key]()
      mdSource.value = String(content)
      currentFileRel.value = fileRel
      mode.value = 'file'
      return
    }
  }

  // Kein File -> Verzeichnis prüfen
  const listing = listDirectory(reqPath.value)
  if (listing.dirs.length || listing.files.length) {
    dirListing.value = listing
    mode.value = 'dir'
    return
  }

  // Weder Datei noch Verzeichnis gefunden
  mode.value = 'missing'
}

onMounted(evaluate)
watch(() => route.params.catchAll, evaluate)

/**
 * Hilfs-Utilities für Links & Darstellung
 */

/**
 * Breadcrumbs (jedes Segment anklickbar)
 * @type {import('vue').ComputedRef<{label: string, to: string}[]>}
 */
const breadcrumbs = computed(() => {
  const parts = reqPath.value ? reqPath.value.split('/') : []
  const crumbs = [{ label: 'Lections', to: '/lection' }]
  let acc = ''
  for (const p of parts) {
    acc = acc ? `${acc}/${p}` : p
    crumbs.push({ label: p, to: `/lection/${acc}` })
  }
  return crumbs
})

/**
 * Baut einen Ziel-Link für einen Unterordner des aktuellen Verzeichnisses.
 * @param {string} dirName
 */
function toDirLink(dirName) {
  return reqPath.value ? `/lection/${reqPath.value}/${dirName}` : `/lection/${dirName}`
}

/**
 * Baut einen Ziel-Link zu einer Datei im aktuellen Verzeichnis.
 * @param {{ name: string, rel: string }} file
 */
function toFileLink(file) {
  // Link ohne .md-Endung
  const pathNoExt = file.rel.replace(/\.md$/, '')
  return `/lection/${pathNoExt}`
}

/**
 * Formatiert Dateinamen hübscher als Titel.
 * @param {string} name
 */
function prettyTitle(name) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <!-- Breadcrumbs -->
    <nav class="text-sm mb-6 flex flex-wrap gap-1 items-center">
      <RouterLink
        v-for="(c, idx) in breadcrumbs"
        :key="c.to"
        :to="c.to"
        class="underline-offset-2 hover:underline"
      >
        <span>{{ c.label }}</span>
      </RouterLink>
      <span v-if="breadcrumbs.length" class="text-neutral-400">&nbsp;</span>
    </nav>

    <!-- Loading -->
    <div v-if="mode === 'loading'" class="opacity-70">Lädt …</div>

    <!-- Directory Overview -->
    <div v-else-if="mode === 'dir'" class="space-y-6">
      <header>
        <h1 class="text-2xl font-semibold">
          Übersicht
          <span v-if="reqPath">/ {{ reqPath }}</span>
          <span v-else>/ (Wurzel)</span>
        </h1>
      </header>

      <section v-if="dirListing.dirs.length">
        <h2 class="text-lg font-medium mb-2">Ordner</h2>
        <ul class="list-disc pl-6">
          <li v-for="dir in dirListing.dirs" :key="dir">
            <RouterLink :to="toDirLink(dir)" class="underline-offset-2 hover:underline">
              {{ prettyTitle(dir) }}
            </RouterLink>
          </li>
        </ul>
      </section>

      <section v-if="dirListing.files.length">
        <h2 class="text-lg font-medium mb-2">Dateien</h2>
        <ul class="list-disc pl-6">
          <li v-for="file in dirListing.files" :key="file.rel">
            <RouterLink :to="toFileLink(file)" class="underline-offset-2 hover:underline">
              {{ prettyTitle(file.name) }}
            </RouterLink>
          </li>
        </ul>
      </section>

      <p v-if="!dirListing.dirs.length && !dirListing.files.length" class="opacity-70">
        Dieser Ordner ist leer.
      </p>
    </div>

    <!-- File View -->
    <div v-else-if="mode === 'file'">
      <article>
        <MarkdownViewer :source="mdSource" />
      </article>
    </div>

    <!-- Not Found -->
    <div v-else class="space-y-4">
      <h1 class="text-xl font-semibold">Nichts gefunden</h1>
      <p>
        Der Pfad <code>/lection/{{ reqPath }}</code> existiert nicht.
      </p>
      <RouterLink to="/" class="inline-block rounded-md px-4 py-2 border hover:bg-neutral-50">
        Zur Startseite
      </RouterLink>
      <div>
        <RouterLink
          to="/lection"
          class="inline-block rounded-md px-4 py-2 border hover:bg-neutral-50"
        >
          Zur Übersicht
        </RouterLink>
      </div>
    </div>
  </div>
</template>
