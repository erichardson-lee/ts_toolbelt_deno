import {At} from '../Any/At.ts'
import {Overwrite} from '../Object/Overwrite.ts'
import {ComputeRaw} from '../Any/Compute.ts'
import {IntersectOf} from './IntersectOf.ts'
import {Strict} from './Strict.ts'

/**
 * @hidden
 */
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>
}>>

/**
 * Merge a [[Union]] of [[Object]]s into a single one
 * @param U to merge
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Merge<U extends object> =
    ComputeRaw<_Merge<Strict<U>>>
