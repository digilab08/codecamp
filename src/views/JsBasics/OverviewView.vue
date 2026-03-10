<script setup>
import { computed } from 'vue'
import { usePointStorage } from '@/composables/usePointStorage'
import {
  jsBasicsTopics,
  buildChallengeStorageName,
  buildJsBasicsTopicRoute,
} from '@/data/jsBasicsChallenges'

const { entries } = usePointStorage('points-by-name')

const topicProgress = computed(() =>
  jsBasicsTopics.map((topic) => {
    let receivedPoints = 0
    let maxPoints = 0
    let solvedChallenges = 0

    for (const challenge of topic.challenges) {
      maxPoints += challenge.maxPoints

      const key = buildChallengeStorageName(topic, challenge)
      const entry = entries.value[key]
      const received = entry?.receivedPoints ?? -1

      if (received >= 0) {
        receivedPoints += received
        solvedChallenges += 1
      }
    }

    return {
      id: topic.id,
      title: topic.title,
      route: buildJsBasicsTopicRoute(topic.id),
      receivedPoints,
      maxPoints,
      solvedChallenges,
      challengeCount: topic.challenges.length,
    }
  }),
)

const totalReceivedPoints = computed(() =>
  topicProgress.value.reduce((sum, topic) => sum + topic.receivedPoints, 0),
)

const totalMaxPoints = computed(() =>
  topicProgress.value.reduce((sum, topic) => sum + topic.maxPoints, 0),
)
</script>

<template>
  <div class="card bg-base-100 shadow">
    <div class="card-body gap-4">
      <h2 class="card-title text-2xl text-primary">Übersicht</h2>
      <p>Wähle ein Thema aus, um mit den JavaScript-Grundlagen zu starten.</p>

      <div class="stats bg-base-200 w-fit">
        <div class="stat">
          <div class="stat-title">Gesamtpunkte</div>
          <div class="stat-value text-primary">{{ totalReceivedPoints }}</div>
          <div class="stat-desc">von {{ totalMaxPoints }} erreichbaren Punkten</div>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div
          v-for="topic in topicProgress"
          :key="topic.id"
          class="flex flex-col gap-2 rounded-box border border-base-300 p-4"
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-semibold">{{ topic.title }}</h3>
            <span class="badge badge-outline">{{ topic.receivedPoints }} / {{ topic.maxPoints }} Punkte</span>
          </div>
          <p class="text-sm opacity-80">
            Gelöst: {{ topic.solvedChallenges }} von {{ topic.challengeCount }} Aufgaben
          </p>
          <RouterLink :to="topic.route" class="btn btn-outline btn-primary w-fit">
            Zu {{ topic.title }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
