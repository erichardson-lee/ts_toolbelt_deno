import {Key} from '../Any/Key.ts'
import {Record} from './Record.ts'

/**
 * An [[Object]]
 * @example
 * ```ts
 * type object0 = {a: "hello"}
 * type string1 = {b: "world"}
 * ```
 */
export type Object =
    Record<Key, any>
