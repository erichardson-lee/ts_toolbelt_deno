import {CompulsoryKeys as OCompulsoryKeys} from '../Object/CompulsoryKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
 * Get the keys of `L` that are [[Compulsory]]
 *
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param L
 * @returns [[Key]]
 * @example
 * ```ts
 * import {L} from 'ts-toolbelt.ts'
 *
 * type test0 = L.CompulsoryKeys<[1, 2, 3]> // {0: 1, 1: 2, 2: 3}
 * ```
 */
export type CompulsoryKeys<L extends List> =
    OCompulsoryKeys<ObjectOf<L>>
