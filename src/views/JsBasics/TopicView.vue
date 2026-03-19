<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import ChallengeCard from '@/components/ChallengeCard.vue'
import { jsBasicsTopics, buildJsBasicsTopicRoute } from '@/data/jsBasicsChallenges'

const route = useRoute()

const topic = computed(() => jsBasicsTopics.find((entry) => entry.id === route.params.topicId))

const breadcrumbItems = computed(() => {
  if (!topic.value) {
    return { 'JavaScript Grundlagen': '/js-basics' }
  }

  return {
    'JavaScript Grundlagen': '/js-basics',
    [topic.value.title]: buildJsBasicsTopicRoute(topic.value.id),
  }
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <Breadcrumbs :items="breadcrumbItems" />

    <template v-if="topic">
      <h2 class="text-2xl font-semibold text-primary">{{ topic.title }}</h2>

      <ChallengeCard
        v-for="challenge in topic.challenges"
        :key="challenge.id"
        :challenge="challenge"
        :storage-prefix="topic.storagePrefix"
        language="javascript"
      />
    </template>

    <div v-else class="card bg-base-100 shadow">
      <div class="card-body gap-4">
        <h2 class="card-title text-error">Thema nicht gefunden</h2>
        <p>Dieses JsBasics-Thema existiert nicht.</p>
        <RouterLink to="/js-basics" class="btn btn-outline btn-primary w-fit">
          Zurück zur Übersicht
        </RouterLink>
      </div>
    </div>
  </div>
</template>
