<script setup>
import { computed, ref } from 'vue'
import CodeBlock from './CodeBlock.vue'
import AnswerInput from './AnswerInput.vue'

const props = defineProps({
  maxPoints: {
    type: Number,
    required: true,
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
})

const emit = defineEmits(['success', 'pointsChanged'])

const currentPoints = ref(props.maxPoints)

const handleSuccess = () => {
  emit('success', currentPoints.value)
}

const handleFailure = () => {
  currentPoints.value = currentPoints.value / 2
  emit('pointsChanged', currentPoints.value)
}

const successMessage = computed(
  () => 'Richtige Antwort! ' + currentPoints.value + ' Punkte erhalten.',
)
</script>

<template>
  <div class="coding-challenge-container">
    <div class="w-full flex justify-end">
      <div class="points-badge">Punkte: {{ currentPoints }}</div>
    </div>

    <CodeBlock :code="code" />
    <div class="w-full flex justify-center">
      <AnswerInput
        ref="answerInputRef"
        :question="question"
        :correct-answer="correctAnswer"
        :success-message="successMessage"
        @success="handleSuccess"
        @failure="handleFailure"
      />
    </div>
  </div>
</template>
