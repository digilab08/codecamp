import { computed } from 'vue'
import { defineStore } from 'pinia'
import { usePointStorage } from '@/composables/usePointStorage'
import {
  jsBasicsTopics,
  buildChallengeStorageName,
  buildJsBasicsTopicRoute,
} from '@/data/jsBasicsChallenges'

export const useJsBasicsPointsStore = defineStore('jsBasicsPoints', () => {
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

  return {
    topicProgress,
    totalReceivedPoints,
    totalMaxPoints,
  }
})
