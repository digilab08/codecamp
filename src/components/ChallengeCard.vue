<script setup>
import { computed } from 'vue'
import CodingChallenge from '@/components/CodingChallenge.vue'

const props = defineProps({
  challenge: {
    type: Object,
    required: true,
  },
  storagePrefix: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'javascript',
  },
})

const storageName = computed(() => {
  if (!props.storagePrefix) return props.challenge.id
  return `${props.storagePrefix}-${props.challenge.id}`
})
</script>

<template>
  <div class="card bg-base-100 shadow">
    <div class="card-body gap-4">
      <div>
        <h3 class="card-title text-lg">{{ challenge.title }}</h3>
        <p>{{ challenge.text }}</p>
      </div>

      <CodingChallenge
        :storage-name="storageName"
        :max-points="challenge.maxPoints"
        :code="challenge.code"
        :question="challenge.question"
        :correct-answer="challenge.correctAnswer"
        :language="language"
      />
    </div>
  </div>
</template>
