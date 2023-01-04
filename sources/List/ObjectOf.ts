import {_Omit} from '../Object/Omit.ts'
import {_Pick} from '../Object/Pick.ts'
import {Length} from './Length.ts'
import {List} from './List.ts'

/**
 * Transform a [[List]] into an [[Object]] equivalent
 * @param L to transform
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<O extends List> =
    O extends unknown
    ? number extends Length<O> // detect arrays
      ? _Pick<O, number>       // preserves arrays
      : _Omit<O, keyof any[]>  // transforms tuples
    : never
