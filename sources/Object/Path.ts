import {Key} from '../Any/Key.ts'
import {Cast} from '../Any/Cast.ts'
import {Extends} from '../Any/Extends.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Next} from '../Iteration/Next.ts'
import {Pos} from '../Iteration/Pos.ts'
import {List} from '../List/List.ts'
import {Length} from '../List/Length.ts'
import {At} from '../Any/At.ts'

/**
 * @ignore
 */
type _Path<O, P extends List<Key>,  I extends Iteration = IterationOf<0>> = {
    0: _Path<At<O, P[Pos<I>]>, P, Next<I>>
    1: O
}[Extends<Pos<I>, Length<P>>]

/**
 * Get in `O` the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Path<O extends any, P extends List<Key>> =
    _Path<O & {}, P> extends infer X
    ? Cast<X, any>
    : never
