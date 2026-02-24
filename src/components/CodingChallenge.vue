<script setup>
import { computed, watch } from 'vue'
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

const { entries, setPoints } = usePointStorage(props.storageKey)

if (entries.value[props.storageName] === undefined) {
  setPoints(props.storageName, { availablePoints: props.maxPoints, receivedPoints: -1 })
}

const points = entries.value[props.storageName]
const isSolved = computed(() => points.receivedPoints !== -1)

function handleSuccess() {
  console.log(points.availablePoints)
  points.receivedPoints = points.availablePoints
  console.log(points.receivedPoints)
  emit('success', points.receivedPoints)
}

function handleFailure() {
  let nextPoints = points.availablePoints / 2
  if (nextPoints < 1) {
    nextPoints = 1
  }
  points.availablePoints = nextPoints
  emit('pointsChanged', nextPoints)
}

const successMessage = computed(
  () => 'Richtige Antwort! ' + points.receivedPoints + ' Punkte erhalten.',
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
