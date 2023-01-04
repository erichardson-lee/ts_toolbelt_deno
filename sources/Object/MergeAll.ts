import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Merge} from './Merge.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Next} from '../Iteration/Next.ts'
import {Length} from '../List/Length.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {Depth} from './_Internal.ts'
import {BuiltIn} from '../Misc/BuiltIn.ts'

/**
 * @hidden
 */
type __MergeAll<O extends object, Os extends List<object>, depth extends Depth, ignore extends object, fill extends any, I extends Iteration = IterationOf<0>> = {
    0: __MergeAll<Merge<O, Os[Pos<I>], depth, ignore, fill>, Os, depth, ignore, fill, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
 * @hidden
 */
export type _MergeAll<O extends object, Os extends List<object>, depth extends Depth, ignore extends object, fill extends any> =
    __MergeAll<O, Os, depth, ignore, fill> extends infer X
    ? Cast<X, object>
    : never

/**
 * [[Merge]] a list of [[Object]]s into `O`. Merges from left to right, first
 * items get completed by the next ones (last-in completes).
 * @param O to start with
 * @param Os to merge
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @param ignore (?=`BuiltIn`) types not to merge
 * @param fill (?=`undefined`) types of `O` to be replaced with ones of `O1`
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type MergeAll<O extends object, Os extends List<object>, depth extends Depth = 'flat', ignore extends object = BuiltIn, fill extends any = undefined> =
    O extends unknown
    ? Os extends unknown
      ? _MergeAll<O, Os, depth, ignore, fill>
      : never
    : never
