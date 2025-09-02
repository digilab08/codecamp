/**
 * Reduce over an object's own enumerable string keys (Object.keys order).
 * Reducer signature: (key, value, acc) => newAcc
 *
 * @param {object} obj - Source object.
 * @param {(key: string, value: any, acc: any) => any} reducer - Called with (key, value, acc).
 * @param {*} [initialValue] - Optional initial accumulator.
 * @returns {*} The reduced value.
 *
 * Notes:
 * - Throws if obj is empty and no initialValue is provided (mirrors Array.reduce).
 * - Iterates only own enumerable string keys (Object.keys).
 *   If you need symbols too, see the commented alternative below.
 */
export function objReduce(obj, reducer, initialValue) {
  if (obj == null) throw new TypeError('objReduce: obj is null or undefined')
  if (typeof reducer !== 'function') throw new TypeError('objReduce: reducer must be a function')

  const keys = Object.keys(obj) // own enumerable string keys
  const hasInit = arguments.length >= 3

  if (keys.length === 0) {
    if (!hasInit)
      throw new TypeError('objReduce: cannot reduce empty object without an initialValue')
    return initialValue
  }

  let acc = hasInit ? initialValue : obj[keys[0]]
  for (let i = hasInit ? 0 : 1; i < keys.length; i++) {
    const k = keys[i]
    const v = obj[k]
    acc = reducer(k, v, acc)
  }
  return acc
}
