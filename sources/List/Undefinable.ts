import {Key} from './_Internal.ts'
import {List} from './List.ts'
import {Update} from '../Object/Update.ts'
import {x} from '../Any/x.ts'
import {Cast} from '../Any/Cast.ts'

/**
 * Make some entries of `L` not `undefined` (deeply or not)
 * @param L to make non nullable
 * @param K (?=`Key`) to choose fields
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Undefinable<L extends List, K extends Key = Key> =
    Cast<Update<L, `${K & number}` | K, x | undefined>, List>
