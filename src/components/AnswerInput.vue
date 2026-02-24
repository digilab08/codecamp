<script setup>
import { ref, watch } from 'vue'

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
const message = ref('')

watch(inputValue, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    message.value = ''
  }
})

const submitAnswer = () => {
  const val = inputValue.value
  if (val === '') return

  const isCorrect = val == props.correctAnswer

  if (isCorrect) {
    resultSuccess.value = true
    message.value = props.successMessage
    emit('success', { value: val, correct: true })
  } else {
    resultSuccess.value = false
    message.value = props.errorMessage
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
