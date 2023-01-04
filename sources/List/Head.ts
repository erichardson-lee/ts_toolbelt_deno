import {Length} from './Length.ts'
import {List} from './List.ts'

/**
 * Get the first entry of `L`
 * @param L to extract from
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Head<L extends List> =
    Length<L> extends 0
    ? never
    : L[0]
