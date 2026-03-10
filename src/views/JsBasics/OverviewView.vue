<script setup>
import { storeToRefs } from 'pinia'
import { useJsBasicsPointsStore } from '@/stores/jsBasicsPoints'

const jsBasicsPointsStore = useJsBasicsPointsStore()
const { topicProgress, totalReceivedPoints, totalMaxPoints } = storeToRefs(jsBasicsPointsStore)
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
