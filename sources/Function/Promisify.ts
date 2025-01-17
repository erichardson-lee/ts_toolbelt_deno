import {Function} from './Function.ts'
import {Parameters} from './Parameters.ts'
import {Return} from './Return.ts'
import {Promise} from '../Any/Promise.ts'

/**
 * Creates a promisified version of a `Function` `F`
 * @param F to promisify
 * @returns async F
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt.ts'
 *
 * type test0 = F.Promisify<(a: number) => number> // (a: number) => Promise<number>
 * ```
 */
export type Promisify<F extends Function> =
    (...args: Parameters<F>) => Promise<Return<F>>
