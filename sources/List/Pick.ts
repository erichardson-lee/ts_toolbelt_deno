import {_Pick as _OPick} from '../Object/Pick.ts'
import {_ListOf} from '../Object/ListOf.ts'
import {Key} from './_Internal.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
 * @hidden
 */
export type _Pick<L extends List, K extends Key> =
    _ListOf<_OPick<ObjectOf<L>, `${K & number}` | K>>

/**
 * Extract out of `L` the entries of key `K`
 * @param L to extract from
 * @param K to chose entries
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Pick<L extends List, K extends Key> =
    L extends unknown
    ? _Pick<L, K>
    : never
