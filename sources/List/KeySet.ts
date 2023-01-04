import {Range} from '../Number/Range.ts'
import {UnionOf} from './UnionOf.ts'

/**
 * Create a set of keys
 * @param From to start with
 * @param To to end with
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type KeySet<From extends number, To extends number> =
    UnionOf<Range<From, To, '->'>>
