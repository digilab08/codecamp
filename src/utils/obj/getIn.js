/**
 * Traverses an object along a string key path.
 * Returns the final value if reachable; otherwise returns undefined.
 * @param {object} obj - The root object to traverse.
 * @param {string[]} path - Array of keys to follow in order.
 * @returns {*|undefined}
 */
export function objGetIn(obj, path = []) {
  console.log({ obj, path })
  let current = obj

  for (const key of path) {
    if (current == null) return undefined
    current = current[key]
  }

  return current
}
