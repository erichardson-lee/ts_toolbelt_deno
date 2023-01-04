import {Key} from './_Internal.ts'
import {List} from './List.ts'
import {Update} from '../Object/Update.ts'
import {x} from '../Any/x.ts'
import {Cast} from '../Any/Cast.ts'

/**
 * Make some entries of `L` nullable (deeply or not)
 * @param L to make nullable
 * @param K (?=`Key`) to choose fields
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Nullable<L extends List, K extends Key = Key> =
    Cast<Update<L, `${K & number}` | K, x | null | undefined>, List>
