import {_Pick} from './Pick.ts'
import {Depth} from './_Internal.ts'
import {Key} from '../Any/Key.ts'
import {PatchFlat} from './Patch.ts'
import {BuiltIn} from '../Misc/BuiltIn.ts'

/**
 * @hidden
 */
export type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
} & {}

/**
 * @hidden
 */
export type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: O[K] extends BuiltIn
                              ? O[K]
                              : ReadonlyDeep<O[K]>
}

/**
 * @hidden
 */
export type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/**
 * @hidden
 */
export type _Readonly<O extends object, K extends Key, depth extends Depth> =
    PatchFlat<ReadonlyPart<_Pick<O, K>, depth>, O>

/**
 * Make some fields of `O` readonly (deeply or not)
 * @param O to make readonly
 * @param K (?=`Key`) to choose fields
 * @param depth (?=`'default'`) to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, K extends Key = Key, depth extends Depth = 'flat'> =
    O extends unknown
    ? _Readonly<O, K, depth>
    : never
