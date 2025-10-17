<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToLections() {
  router.push(`lection`)
}
</script>

<template>
  <main class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-3 gap-3">
    <button class="btn btn-accent" @click="goToLections">Lections</button>
    <a href="https://blockly.games" class="btn btn-primary">Blockly Games</a>
    <a href="https://knightsoftheflexboxtable.com/" class="btn btn-primary"
      >Knights of the Flexbox Table</a
    >
    <a href="https://www.jshero.net/home.html" class="btn btn-secondary">JS-Hero</a>
    <a href="https://tailwindcss.com/docs/styling-with-utility-classes" class="btn btn-secondary"
      >Tailwind CSS</a
    >
    <a href="https://daisyui.com/docs/themes/" class="btn btn-secondary">daisyUi</a>
    <a href="https://play.bakgame.de/PhishingQuiz" class="btn btn-primary">Phishing Quiz</a>
    <a
      href="https://wordwall.net/de/embed/e8a6e8d2220f48fcb38bc09ca5a30d57?themeId=22&templateId=45&fontStackId=1"
      class="btn btn-primary"
      >Schlag das Passwort</a
    >
  </main>
</template>
