import {Depth} from '../Object/_Internal.ts'
import {RequiredPart} from '../Object/Required.ts'
import {List} from './List.ts'
import {Cast} from '../Any/Cast.ts'

/**
 * Make `L` required (deeply or not)
 * @param L to make required
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Required<L extends List, depth extends Depth = 'flat'> =
    Cast<RequiredPart<L, depth>, List>
