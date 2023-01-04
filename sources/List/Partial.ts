import {Partial as OPartial} from '../Object/Partial.ts'
import {Depth} from '../Object/_Internal.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'

/**
 * Make all fields of `O` optional (deeply or not)
 * @param L to make optional
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[List]]
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt.ts'
 *
 * type L = [1, 2, 3, [4, [5]]]
 *
 * type test0 = O.Partial<L>
 * type test1 = O.Partial<L, 'deep'>
 * ```
 */
export type Partial<L extends List, depth extends Depth = 'flat'> =
    Cast<OPartial<L, depth>, List>
