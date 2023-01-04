import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Prepend} from '../List/Prepend.ts'
import {Prev} from '../Iteration/Prev.ts'
import {Next} from '../Iteration/Next.ts'
import {Cast} from '../Any/Cast.ts'
import {Way} from '../Iteration/_Internal.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {Pos} from '../Iteration/Pos.ts'

/**
 * @hidden
 */
type RangeForth<From extends Iteration, To extends Iteration, L extends List = []> = {
    0: RangeForth<Prev<From>, To, Prepend<L, Pos<From>>>
    1: L
}[Extends<From, To>]

/**
 * @hidden
 */
type RangeBack<From extends Iteration, To extends Iteration, L extends List = []> = {
    0: RangeBack<Next<From>, To, Prepend<L, Pos<From>>>
    1: L
}[Extends<From, To>]

/**
 * @hidden
 */
type __Range<From extends Iteration, To extends Iteration, way extends Way> = {
    '->': RangeForth<To, Prev<From>> // Reverse logic to work naturally #`Prepend`
    '<-': RangeBack<From, Next<To>>  // Works in reverse mode (default) #`Prepend`
}[way]

/**
 * @hidden
 */
export type _Range<From extends number, To extends number, way extends Way> =
    __Range<IterationOf<From>, IterationOf<To>, way> extends infer X
    ? Cast<X, (string | number)[]>
    : never

/**
 * Create a range of * *number**s
 * @param From to start with
 * @param To to end with
 * @param way (?=`'->'`) to reverse it
 * @returns `string[] | number[] | boolean[]`
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt.ts'
 *
 * type test0 = N.Range<'-2', '1'>            // ['-2', '-1', '0', '1']
 * type test1 = N.Range<'-2', '1', '->'>      // ['-2', '-1', '0', '1']
 * type test2 = N.Range<'-2', '1', '<-'>      // ['1', '0', '-1', '-2']
 * ```
 */
export type Range<From extends number, To extends number, way extends Way = '->'> =
    From extends unknown
    ? To extends unknown
      ? _Range<From, To, way>
      : never
    : never
