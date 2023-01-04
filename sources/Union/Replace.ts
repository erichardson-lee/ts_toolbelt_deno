import {Is} from '../Any/Is.ts'
import {Match} from '../Any/_Internal.ts'

/**
 * Replace `M` with `A` in `U`
 * @param U to update
 * @param M to select
 * @param A to update with
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Replace<U extends any, M extends any, A extends any, match extends Match = 'default'> =
    U extends unknown
    ? {1: A, 0: U}[Is<U, M, match>]
    : never
