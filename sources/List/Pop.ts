import {_Omit} from './Omit.ts'
import {List} from './List.ts'

/**
 * Remove the last element out of `L`
 * @param L to remove from
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Pop<L extends List> =
    L extends (readonly [...infer LBody, any] | readonly [...infer LBody, any?])
    ? LBody
    : L
