import {_Omit} from './Omit.ts'
import {_Pick} from './Pick.ts'
import {Key} from '../Any/Key.ts'
import {Strict} from '../Union/Strict.ts'
import {Boolean} from '../Boolean/_Internal.ts'
import {ComputeRaw} from '../Any/Compute.ts'

/**
 * @hidden
 */
type __Either<O extends object, K extends Key> =
    _Omit<O, K> & ({           // Merge all but K
        [P in K]: _Pick<O, P> // With K possibilities
    }[K])

/**
 * @hidden
 */
type EitherStrict<O extends object, K extends Key> =
    Strict<__Either<O, K>>

/**
 * @hidden
 */
type EitherLoose<O extends object, K extends Key> =
    ComputeRaw<__Either<O, K>>

/**
 * @hidden
 */
export type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
}[strict]

/**
 * Split `O` into a [[Union]] with `K` keys in such a way that none of
 * the keys are ever present with one another within the different unions.
 * @param O to split
 * @param K to split with
 * @param strict (?=`1`) to force excess property checks https://github.com/microsoft/TypeScript/issues/20863
 * @returns [[Object]] [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Either<O extends object, K extends Key, strict extends Boolean = 1> =
    O extends unknown
    ? _Either<O, K, strict>
    : never
