import {Function} from './Function.ts'
import {Parameters} from './Parameters.ts'
import {Length as LLength} from '../List/Length.ts'

/**
 * Extract arguments' length from a [[Function]]
 * @param F to extract from
 * @returns [[String]] or `number`
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt.ts'
 *
 * const fn = (a1: any, a2: any) => {}
 *
 * type test0 = F.LengthOf<typeof fn>               // 2
 *
 * type test1 = F.LengthOf<(a1?: any) => any>       // 0 | 1
 *
 * type test2 = F.LengthOf<(...a: any[]) => any>    // number
 * ```
 */
export type Length<Fn extends Function> =
    LLength<Parameters<Fn>>
