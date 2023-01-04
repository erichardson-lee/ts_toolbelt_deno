import {Cast} from '../Any/Cast.ts'
import {OptionalPart} from '../Object/Optional.ts'
import {Depth} from '../Object/_Internal.ts'
import {List} from './List.ts'

/**
 * Make `L` optional (deeply or not)
 * @param L to make optional
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Optional<L extends List, depth extends Depth = 'flat'> =
    Cast<OptionalPart<L, depth>, List>
