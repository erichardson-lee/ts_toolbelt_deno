/** @ignore *//** */

import {Function} from '../../Function.ts'
import {Await} from '../../../Any/Await.ts'
import {Curry} from '../../Curry.ts'

/**
 *@hidden
 */
export type ComposeListAsync = {
    <
        R0,
        P extends any[],
    >(fns: [
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R0>>>

    <
        R0,
        R1,
        P extends any[],
    >(fns: [
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R1>>>

    <
        R0,
        R1,
        R2,
        P extends any[],
    >(fns: [
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R2>>>

    <
        R0,
        R1,
        R2,
        R3,
        P extends any[],
    >(fns: [
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R3>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        P extends any[],
    >(fns: [
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R4>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        P extends any[],
    >(fns: [
        Function<[Await<R4>],     R5> | Curry<Function<[Await<R4>], R5>>,
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R5>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        P extends any[],
    >(fns: [
        Function<[Await<R5>],     R6> | Curry<Function<[Await<R5>], R6>>,
        Function<[Await<R4>],     R5> | Curry<Function<[Await<R4>], R5>>,
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R6>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        P extends any[],
    >(fns: [
        Function<[Await<R6>],     R7> | Curry<Function<[Await<R6>], R7>>,
        Function<[Await<R5>],     R6> | Curry<Function<[Await<R5>], R6>>,
        Function<[Await<R4>],     R5> | Curry<Function<[Await<R4>], R5>>,
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R7>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        R8,
        P extends any[],
    >(fns: [
        Function<[Await<R7>],     R8> | Curry<Function<[Await<R7>], R8>>,
        Function<[Await<R6>],     R7> | Curry<Function<[Await<R6>], R7>>,
        Function<[Await<R5>],     R6> | Curry<Function<[Await<R5>], R6>>,
        Function<[Await<R4>],     R5> | Curry<Function<[Await<R4>], R5>>,
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R8>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        R8,
        R9,
        P extends any[],
    >(fns: [
        Function<[Await<R8>],     R9> | Curry<Function<[Await<R8>], R9>>,
        Function<[Await<R7>],     R8> | Curry<Function<[Await<R7>], R8>>,
        Function<[Await<R6>],     R7> | Curry<Function<[Await<R6>], R7>>,
        Function<[Await<R5>],     R6> | Curry<Function<[Await<R5>], R6>>,
        Function<[Await<R4>],     R5> | Curry<Function<[Await<R4>], R5>>,
        Function<[Await<R3>],     R4> | Curry<Function<[Await<R3>], R4>>,
        Function<[Await<R2>],     R3> | Curry<Function<[Await<R2>], R3>>,
        Function<[Await<R1>],     R2> | Curry<Function<[Await<R1>], R2>>,
        Function<[Await<R0>],     R1> | Curry<Function<[Await<R0>], R1>>,
        Function<P,               R0> | Curry<Function<P,           R0>>,
    ]): Function<P, Promise<Await<R9>>>
}
