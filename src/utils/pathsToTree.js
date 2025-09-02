import { objReduce } from '@/utils/obj/reduce'

/**
 * Builds a nested tree from a flat path->value map.
 * - Flexible depth: splits by `sep` and creates missing branches.
 * - If a segment already exists and isn't an object, it will be overwritten with an object (simple conflict strategy).
 *
 * @param {Record<string, any>} paths
 * @param {string} [sep='/'] - path separator
 * @returns {Record<string, any>}
 */
export function pathsToTree(paths, sep = '/') {
  return objReduce(
    paths,
    (path, value, tree) => {
      if (typeof path !== 'string') return tree

      // Normalize and split into segments
      const parts = path.split(sep).filter(Boolean)
      if (parts.length === 0) return tree

      // Walk/create the branch
      let node = tree
      parts.slice(0, -1).forEach((dir) => {
        if (node[dir] == null) {
          node[dir] = {}
        }
        node = node[dir]
      })

      // Assign leaf value
      node[parts[parts.length - 1]] = value
      return tree
    },
    {},
  )
}
