import {Iteration} from './Iteration.ts'

/**
 * Get the position of `I` (**string**)
 * @param I to query
 * @returns [[String]]
 * @example
 * ```ts
 * import {I} from 'ts-toolbelt.ts'
 *
 * type i = I.IterationOf<'20'>
 *
 * type test0 = I.Key<i>         // '20'
 * type test1 = I.Key<I.Next<i>> // '21'
 * ```
 */
export type Key<I extends Iteration> =
    `${I[0]}`
