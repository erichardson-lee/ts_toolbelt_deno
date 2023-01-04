import {Next} from '../Iteration/Next.ts'
import {Prepend} from './Prepend.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Extends} from '../Any/Extends.ts'
import {Pos} from '../Iteration/Pos.ts'

/**
 * @hidden
 */
type __Repeat<N extends number, A, L extends List = [], I extends Iteration = IterationOf<0>> = {
    0: __Repeat<N, A, Prepend<L, A>, Next<I>>
    1: L
}[Extends<Pos<I>, N>]

/**
 * @hidden
 */
export type _Repeat<A extends any, N extends number, L extends List = []> =
    __Repeat<N, A, L> extends infer X
    ? Cast<X, List>
    : never

/**
 * Fill a [[List]] with `N` times `A`
 * @param A to fill with
 * @param N to repeat it
 * @param L (?=`[]`) to be filled
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Repeat<A extends any, N extends number, L extends List = []> =
    N extends unknown
    ? L extends unknown
      ? _Repeat<A, N, L>
      : never
    : never
