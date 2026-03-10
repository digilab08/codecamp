<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: 'Falsche Antwort. Versuche es erneut.',
  },
  successMessage: {
    type: String,
    default: 'Richtige Antwort!',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['success', 'failure'])

const inputValue = ref('')
const resultSuccess = ref(false)
const hasSubmitted = ref(false)

const message = computed(() => {
  if (!hasSubmitted.value) return ''
  return resultSuccess.value ? props.successMessage : props.errorMessage
})

watch(inputValue, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    hasSubmitted.value = false
  }
})

const submitAnswer = () => {
  const val = inputValue.value
  if (val === '') return

  const isCorrect = val == props.correctAnswer

  if (isCorrect) {
    resultSuccess.value = true
    hasSubmitted.value = true
    emit('success', { value: val, correct: true })
  } else {
    resultSuccess.value = false
    hasSubmitted.value = true
    emit('failure', { value: val, correct: false })
  }
}
</script>

<template>
  <div>
    <label class="fieldset">
      <span class="label">{{ question }}</span>
      <div class="join">
        <input
          class="input text-input join-item"
          v-model="inputValue"
          type="text"
          @keyup.enter="submitAnswer"
          :disabled="resultSuccess || disabled"
        />
        <button
          class="btn btn-primary join-item"
          @click="submitAnswer"
          :disabled="!inputValue || resultSuccess || disabled"
        >
          Antwort überprüfen
        </button>
      </div>
    </label>
    <p v-if="message !== ''" :class="resultSuccess ? 'text-success' : 'text-error'">
      {{ message }}
    </p>
  </div>
</template>
