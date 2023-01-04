import {Length} from './Length.ts'
import {Tail} from './Tail.ts'
import {List} from './List.ts'

/**
 * Get the last index of `L`
 * @param L to get from
 * @returns `number`
 * @example
 * ```ts
 * ```
 */
export type LastKey<L extends List> =
    Length<Tail<L>>
