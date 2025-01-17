import {Record} from './Record.ts'
import {Key} from '../Any/Key.ts'
import {IntersectOf} from '../Union/IntersectOf.ts'
import {ComputeRaw} from '../Any/Compute.ts'

/**
 * @hidden
 */
export type _Invert<O extends Record<Key, Key>> =
  ComputeRaw<IntersectOf<
    { // swaps the key and the value
      [K in keyof O]: Record<O[K], K>
    }[keyof O]
  >>

/**
 * Swaps the keys and values of an [[Object]] (if applicable)
 * @param O
 * @returns [[Object]]
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt.ts'
 *
 * enum E {
 *  A = 'Av',
 *  B = 'Bv',
 *  C = 'Cv',
 *  D = 'Dv',
 *  X = 1
 * }
 *
 * type O = {
 *  A: 'Av'
 *  B: 'Bv'
 *  C: 'Cv'
 *  D: 'Dv'
 *  X: 1
 * }
 *
 * type test0 = O.Invert<typeof E>
 * type test1 = O.Invert<O>
 * ```
 */
export type Invert<O extends Record<keyof O, Key>> =
    O extends unknown
    ? _Invert<O>
    : never
