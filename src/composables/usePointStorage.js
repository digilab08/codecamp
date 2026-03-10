import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const DEFAULT_RECEIVED_POINTS = -1

const normalizeEntry = (entry = {}) => {
	const availablePoints = Number(entry.availablePoints ?? 0)
	const receivedPoints = Number(entry.receivedPoints ?? DEFAULT_RECEIVED_POINTS)

	return {
		availablePoints: Number.isFinite(availablePoints) ? availablePoints : 0,
		receivedPoints: Number.isFinite(receivedPoints)
			? receivedPoints
			: DEFAULT_RECEIVED_POINTS,
	}
}

const normalizeMap = (pointMap = {}) =>
	Object.fromEntries(
		Object.entries(pointMap).map(([name, points]) => [name, normalizeEntry(points)]),
	)

export function usePointStorage(storageKey = 'points-by-name', initialValue = {}) {
	const pointsByName = useStorage(storageKey, normalizeMap(initialValue))
	pointsByName.value = normalizeMap(pointsByName.value)

	const entries = computed(() => pointsByName.value)

	const getPoints = (name) => pointsByName.value[name]

	const setPoints = (name, points) => {
		pointsByName.value = {
			...pointsByName.value,
			[name]: normalizeEntry(points),
		}
	}

	const setAvailablePoints = (name, availablePoints) => {
		const current = pointsByName.value[name] ?? {}
		setPoints(name, { ...current, availablePoints })
	}

	const setReceivedPoints = (name, receivedPoints) => {
		const current = pointsByName.value[name] ?? {}
		setPoints(name, { ...current, receivedPoints })
	}

	const removePoints = (name) => {
		const next = { ...pointsByName.value }
		delete next[name]
		pointsByName.value = next
	}

	const resetPoints = (nextValue = {}) => {
		pointsByName.value = normalizeMap(nextValue)
	}

	return {
		entries,
		getPoints,
		setPoints,
		setAvailablePoints,
		setReceivedPoints,
		removePoints,
		resetPoints,
	}
}
