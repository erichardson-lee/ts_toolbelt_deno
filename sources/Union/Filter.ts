import {Match} from '../Any/_Internal.ts'
import {Is} from '../Any/Is.ts'

/**
 * Remove `M` out of `U`
 * @param U to remove from
 * @param M to remove out
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Filter<U extends any, M extends any, match extends Match = 'default'> =
    U extends unknown
    ? {1: never, 0: U & M}[Is<U, M, match>]
    : never
