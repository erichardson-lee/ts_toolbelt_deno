import {_Omit as _OOmit} from '../Object/Omit.ts'
import {_ListOf} from '../Object/ListOf.ts'
import {Key} from './_Internal.ts'
import {List} from './List.ts'
import {ObjectOf} from './ObjectOf.ts'

/**
 * @hidden
 */
export type _Omit<L extends List, K extends Key> =
    _ListOf<_OOmit<ObjectOf<L>, `${K & number}` | K>>

/**
 * Remove out of `L` the entries of key `K`
 * @param L to remove from
 * @param K to chose entries
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Omit<L extends List, K extends Key> =
    L extends unknown
    ? _Omit<L, K>
    : never
