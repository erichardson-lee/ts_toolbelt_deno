import {_Negate} from './Negate.ts'
import {_IsNegative} from './IsNegative.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'

/**
 * @hidden
 */
export type _Absolute<N extends Iteration> = {
    0: N
    1: _Negate<N>
}[_IsNegative<N>]

/**
 * Get the absolute value of a [[Number]]
 * @param N to absolute
 * @returns `string | number | boolean`
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt.ts'
 *
 * type test0 = N.Absolute<'-20'>      // '20'
 *
 * type test1 = N.Absolute<'-20', 's'> // '20'
 * type test2 = N.Absolute<'-20', 'n'> //  20
 * ```
 */
export type Absolute<N extends number> =
    N extends unknown
    ? _Absolute<IterationOf<N>>[0]
    : never
