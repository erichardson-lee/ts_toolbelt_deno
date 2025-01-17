import {Match} from './_Internal.ts'
import {Extends} from './Extends.ts'
import {Equals} from './Equals.ts'
import {Contains} from './Contains.ts'

/**
 * Check whether `A` is similar to `A1` or not. In other words, it is a compact
 * type that bundles [[Equals]], [[Extends]], [[Contains]], comparison types.
 * @param A to be compared
 * @param A1 to compare to
 * @param match (?=`'default'`) to change precision
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt.ts'
 *
 * type test0 = A.Is<'a', 'a' | 'b', 'extends->'> // True
 * type test1 = A.Is<'a' | 'b', 'a', 'extends->'> // Boolean
 *
 * type test2 = A.Is<'a', 'a' | 'b', '<-extends'> // Boolean
 * type test3 = A.Is<'a' | 'b', 'a', '<-extends'> // True
 *
 * type test4 = A.Is<'a', 'a' | 'b', 'contains->'> // True
 * type test5 = A.Is<'a' | 'b', 'a', 'contains->'> // False
 *
 * type test6 = A.Is<'a', 'a' | 'b', '<-contains'> // False
 * type test7 = A.Is<'a' | 'b', 'a', '<-contains'> // True
 *
 * type test8 = A.Is<'a', 'a' | 'b', 'equals'>      // False
 * type test9 = A.Is<'b' |'a', 'a' | 'b', 'equals'> // True
 * ```
 */
export type Is<A extends any, A1 extends any, match extends Match = 'default'> = {
    'default'   : Extends<A,   A1>
    'contains->': Contains<A,  A1>
    'extends->' : Extends<A,   A1>
    '<-contains': Contains<A1, A>
    '<-extends' : Extends<A1,  A>
    'equals'    : Equals<A1,   A>
}[match]
