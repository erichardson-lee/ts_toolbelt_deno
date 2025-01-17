import {Concat} from './Concat.ts'
import {Append} from './Append.ts'
import {Cast} from '../Any/Cast.ts'
import {Length} from './Length.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Next} from '../Iteration/Next.ts'
import {Pos} from '../Iteration/Pos.ts'
import {List} from './List.ts'
import {UnionOf} from './UnionOf.ts'
import {Naked} from './_Internal.ts'
import {Extends} from '../Any/Extends.ts'
import {Boolean} from '../Boolean/_Internal.ts'
import {Not} from '../Boolean/Not.ts'
import {And} from '../Boolean/And.ts'

/**
 * @hidden
 */
type UnNestLoose<L extends List> =
    (UnionOf<L> extends infer UL    // make `L` a union
    ? UL extends unknown            // for each in union
      ? UL extends List             // if its an array
        ? UnionOf<UL>               // make it a union
        : UL                        // or leave as it is
      : never
    : never
    )[] & {}                        // make result array

/**
 * @hidden
 */
type Flatter<L extends List, LN extends List, I extends Iteration> =
    L[Pos<I>] extends infer LP // handle if undefined
    ? LP extends List
      ? Concat<LN, L[Pos<I>]> // if it's a  list
      : Append<LN, L[Pos<I>]> // if it's an item
    : never

/**
 * @hidden
 */
type UnNestStrict<L extends List, LN extends List = [], I extends Iteration = IterationOf<0>> = {
    0: UnNestStrict<L, Flatter<L, LN, I>, Next<I>>
    1: LN
}[Extends<Pos<I>, Length<L>>]

/**
 * @hidden
 */
type __UnNest<L extends List, strict extends Boolean> = {
    0: UnNestLoose<L>
    1: UnNestStrict<L>
}[And<Not<Extends<number, Length<L>>>, strict>]

/**
 * @hidden
 */
export type _UnNest<L extends List, strict extends Boolean> =
    __UnNest<Naked<L>, strict> extends infer X
    ? Cast<X, List>
    : never

/**
 * Remove a dimension of `L`
 * @param L to un-nest
 * @param strict (?=`1`) `0` to not preserve tuples
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type UnNest<L extends List, strict extends Boolean = 1> =
    L extends unknown
    ? _UnNest<L, strict>
    : never
