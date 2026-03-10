<script setup>
import { computed, watchEffect } from 'vue'
import CodeBlock from './CodeBlock.vue'
import AnswerInput from './AnswerInput.vue'
import { usePointStorage } from '@/composables/usePointStorage'

const props = defineProps({
  maxPoints: {
    type: Number,
    required: true,
  },
  storageName: {
    type: String,
    default: '',
  },
  storageKey: {
    type: String,
    default: 'points-by-name',
  },
  code: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['success', 'pointsChanged'])

const DEFAULT_POINTS = -1

const { getPoints, setPoints, setAvailablePoints, setReceivedPoints } = usePointStorage(
  props.storageKey,
)

watchEffect(() => {
  if (!props.storageName) {
    return
  }

  if (getPoints(props.storageName) === undefined) {
    setPoints(props.storageName, { availablePoints: props.maxPoints, receivedPoints: DEFAULT_POINTS })
  }
})

const points = computed(
  () => getPoints(props.storageName) ?? { availablePoints: props.maxPoints, receivedPoints: DEFAULT_POINTS },
)

const isSolved = computed(() => points.value.receivedPoints !== DEFAULT_POINTS)

function handleSuccess() {
  const nextReceivedPoints = points.value.availablePoints
  setReceivedPoints(props.storageName, nextReceivedPoints)
  emit('success', nextReceivedPoints)
}

function handleFailure() {
  let nextPoints = points.value.availablePoints / 2
  if (nextPoints < 1) {
    nextPoints = 1
  }
  setAvailablePoints(props.storageName, nextPoints)
  emit('pointsChanged', nextPoints)
}

const successMessage = computed(
  () => 'Richtige Antwort! ' + points.value.receivedPoints + ' Punkte erhalten.',
)
</script>

<template>
  <div class="coding-challenge-container">
    <div class="w-full flex justify-end">
      <div class="points-badge" :class="{ 'bg-success': isSolved }">
        Punkte: {{ points.availablePoints }}
      </div>
    </div>

    <CodeBlock :code="code" :language="language" />
    <div class="w-full flex justify-center">
      <AnswerInput
        :question="question"
        :correct-answer="correctAnswer"
        :success-message="successMessage"
        @success="handleSuccess"
        @failure="handleFailure"
        :disabled="points.receivedPoints !== -1 || disabled"
      />
    </div>
  </div>
</template>
