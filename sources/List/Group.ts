import {_Drop} from './Drop.ts'
import {_Take} from './Take.ts'
import {Cast} from '../Any/Cast.ts'
import {Append} from './Append.ts'
import {List} from './List.ts'
import {Extends} from '../Any/Extends.ts'

/**
 * @hidden
 */
type __Group<L extends List, N extends number, LN extends List = []> = {
    0: __Group<_Drop<L, N>, N, Append<LN, _Take<L, N>>>
    1: LN
}[Extends<L, List<never>>]

/**
 * @hidden
 */
export type _Group<L extends List, N extends number> =
    __Group<L, N> extends infer X
    ? Cast<X, List>
    : never

/**
 * Split `L` into sub-[[List]]s every `N`
 * @param L to group
 * @param N to split at
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Group<L extends List, N extends number> =
    L extends unknown
    ? N extends unknown
      ? _Group<L, N>
      : never
    : never
