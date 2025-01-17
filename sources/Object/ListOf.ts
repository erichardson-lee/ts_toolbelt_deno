import {Cast} from '../Any/Cast.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {Select} from '../Union/Select.ts'
import {Exclude} from '../Union/Exclude.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Key} from '../Iteration/Key.ts'
import {Append} from '../List/Append.ts'
import {Next} from '../Iteration/Next.ts'

/**
 * @hidden
 */
type AppendExists<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O ? Append<LN, O[Key<I>]> :
    Pos<I> extends keyof O ? Append<LN, O[Pos<I>]> :
    LN

/**
 * @hidden
 */
type ___ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<0>> = {
    0: ___ListOf<O, Exclude<K, Key<I>>, AppendExists<O, LN, I>, Next<I>>
    1: LN
}[Extends<[K], [never]>]

/**
 * @hidden
 */
type __ListOf<O extends object> =
    number extends keyof O ? O[number][] :
    string extends keyof O ? O[string][] :
    symbol extends keyof O ? O[symbol][] :
    ___ListOf<O, Select<keyof O, number | `${number}`>>

/**
 * @hidden
 */
export type _ListOf<O extends object> =
    __ListOf<O> extends infer X
    ? Cast<X, List>
    : never

/**
 * Transform an [[Object]] into a [[List]]
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type ListOf<O extends object> =
    O extends unknown
    ? _ListOf<O>
    : never
