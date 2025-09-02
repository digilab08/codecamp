export function objMap(obj, fn) {
  if (obj == null || typeof obj !== 'object') {
    throw new TypeError('Erstes Argument muss ein Objekt sein.')
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Zweites Argument muss eine Funktion sein.')
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const pair = fn(key, value)
      if (!Array.isArray(pair) || pair.length !== 2) {
        throw new TypeError('Callback muss ein [key, value]-Array zurückgeben.')
      }
      return pair
    }),
  )
}
