import {Key} from './_Internal.ts'
import {List} from './List.ts'
import {Update as OUpdate} from '../Object/Update.ts'
import {Cast} from '../Any/Cast.ts'

/**
 * Update in `L` the entries of key `K` with `A`.
 * Use the [[x]] placeholder to get the current field type.
 * @param L to update
 * @param K to chose fields
 * @param A to update with
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Update<L extends List, K extends Key, A extends any> =
    Cast<OUpdate<L, `${K & number}` | K, A>, List>
