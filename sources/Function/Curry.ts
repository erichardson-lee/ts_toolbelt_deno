import {Pos} from '../Iteration/Pos.ts'
import {Concat} from '../List/Concat.ts'
import {Length} from '../List/Length.ts'
import {Next} from '../Iteration/Next.ts'
import {Cast} from '../Any/Cast.ts'
import {Parameters} from './Parameters.ts'
import {Return} from './Return.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {NonNullableFlat} from '../Object/NonNullable.ts'
import {x} from '../Any/x.ts'
import {List} from '../List/List.ts'
import {Function} from './Function.ts'
import {Extends} from '../Any/Extends.ts'
import {Tail} from '../List/Tail.ts'
import {RequiredKeys} from '../List/RequiredKeys.ts'

/**
 * @hidden
 */
type _SplitParams<P extends List, PSplit extends List[] = [], PRest extends List = Tail<P>> = {
    0: P extends [...infer A, ...PRest]
       ? _SplitParams<Tail<P>, [...PSplit, A], Tail<PRest>>
       : never
    1: PSplit
    2: P[number][][]
}[
    number extends Length<P>
    ? 2
    : P extends []
      ? 1
      : 0
]

/**
 * Splits tuples to preserve their labels
 * @hidden
 */
type SplitParams<P extends List> =
    _SplitParams<P> extends infer X
    ? Cast<X, List[]>
    : never

/**
 * @hidden
 */
type _JoinParams<PSplit extends List[], L extends List = []> = {
    0: _JoinParams<Tail<PSplit>, [...L, ...PSplit[0]]>
    1: L
    2: PSplit[number][]
}[
    number extends Length<PSplit>
    ? 2
    : PSplit extends []
      ? 1
      : 0
]

/**
 * Undoes the job of [[SplitParams]]
 * @hidden
 */
type JoinParams<P extends List[]> =
    _JoinParams<P> extends infer X
    ? Cast<X, List>
    : never

/**
 * @hidden
 */
type GapOf<L1 extends List, L2 extends List[], LN extends List, I extends Iteration> =
    L1[Pos<I>] extends x
    ? Concat<LN, L2[Pos<I>]>
    : LN

/**
 * @hidden
 */
type _GapsOf<L1 extends List, L2 extends List[], LN extends List = [], L2D extends List[] = L2, I extends Iteration = IterationOf<0>> = {
    0: _GapsOf<L1, L2, GapOf<L1, L2, LN, I>, Tail<L2D>, Next<I>>
    1: Concat<LN, JoinParams<L2D>>
}[Extends<Pos<I>, Length<L1>>]

/**
 * @hidden
 */
type GapsOf<L1 extends List, L2 extends List> =
    _GapsOf<L1, SplitParams<L2>> extends infer X
    ? Cast<X, List>
    : never

/**
 * @hidden
 */
type Gaps<L extends List> = Cast<NonNullableFlat<{
    [K in keyof L]?: L[K] | x
}>, List>

/**
 * Curry a [[Function]]
 * @param F to curry
 * @returns [[Function]]
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt.ts'
 *
 * /// If you are looking for creating types for `curry`
 * /// It handles placeholders and variable arguments
 * declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
 * ```
 */
export type Curry<F extends Function> =
    <
        P extends Gaps<Parameters<F>>,
        G extends List = GapsOf<P, Parameters<F>>,
        R extends any = Return<F>
    >(...p: Gaps<Parameters<F>> | P) =>
        // handles optional parameters
        RequiredKeys<G> extends never
        ? R
        : Curry<(...p: G) => R>
