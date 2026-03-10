<script setup>
import ChallengeCard from '@/components/ChallengeCard.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

const variableChallenges = [
  {
    id: 'var-1',
    title: 'Variable lesen',
    text: 'Eine Variable speichert einen Wert. Hier wird eine Variable `name` erstellt.',
    code: `let name = 'Sam';`,
    question: 'Welchen Wert hat die Variable name nach der Zuweisung?',
    correctAnswer: 'Sam',
    maxPoints: 10,
  },
  {
    id: 'var-2',
    title: 'Wert ändern',
    text: 'Mit einer neuen Zuweisung kann sich der Inhalt einer Variable ändern.',
    code: `let points = 2;
points = points + 3;`,
    question: 'Welchen Wert hat die Variable points nach diesem Vorgang?',
    correctAnswer: '5',
    maxPoints: 10,
  },
  {
    id: 'var-3',
    title: 'Rechnen mit mehreren Variablen',
    text: 'Du kannst mehrere Variablen zusammen in einer Rechnung verwenden.',
    code: `let apples = 4;
let pears = 3;
let fruits = apples + pears;`,
    question: 'Welchen Wert hat die Variable fruits nach diesem Vorgang?',
    correctAnswer: '7',
    maxPoints: 10,
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <Breadcrumbs
      :items="{ 'JavaScript Grundlagen': '/js-basics', Variablen: '/js-basics/variablen' }"
    />
    <h2 class="text-2xl font-semibold text-primary">Variablen</h2>

    <ChallengeCard
      v-for="challenge in variableChallenges"
      :key="challenge.id"
      :challenge="challenge"
      storage-prefix="js-basics-variablen"
      language="javascript"
    />
  </div>
</template>
