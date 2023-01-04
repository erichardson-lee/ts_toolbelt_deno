import {Depth} from '../Object/_Internal.ts'
import {WritablePart} from '../Object/Writable.ts'
import {List} from './List.ts'
import {Cast} from '../Any/Cast.ts'

/**
 * Make `L` writable (deeply or not)
 * @param L to make writable
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Writable<L extends List, depth extends Depth = 'flat'> =
    Cast<WritablePart<L, depth>, List>
