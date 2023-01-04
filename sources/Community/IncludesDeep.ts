import {Match} from '../Any/_Internal.ts'
import {UnionOf} from '../Object/UnionOf.ts'
import {Next} from '../Iteration/Next.ts'
import {Prev} from '../Iteration/Prev.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Is} from '../Any/Is.ts'
import {Boolean} from '../Boolean/_Internal.ts'
import {Cast} from '../Any/Cast.ts'
import {Pos} from '../Iteration/Pos.ts'

/**
 * @hidden
 */
type _IncludesDeep<O, M extends any, match extends Match, limit extends number, I extends Iteration = IterationOf<0>> = {
    0: _IncludesDeep<O extends object ? UnionOf<O> : O, M, match, limit, Next<I>>
    1: 1
    2: 0
}[
    Pos<Prev<I>> extends limit // if we go past the limit
    ? 2                        // end the loop here
    : Is<O, M, match>          // if 0 => continue, if 1 => end
]

/**
 * Check whether `O`, or its sub-objects have fields that match `M`
 * where the maximum allowed depth is set with `limit`.
 *
 * @param O to be inspected
 * @param M to check field type
 * @param match (?=`'default'`) to change precision
 * @param limit (?=`'10'`) to change the check depth
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 * @author millsp, ctrlplusb
 */
export type IncludesDeep<O extends object, M extends any, match extends Match = 'default', limit extends number = 10> =
    _IncludesDeep<O, M, match, limit> extends infer X
    ? Cast<X, Boolean>
    : never
