import {OptionalPart} from './Optional.ts'
import {Depth} from './_Internal.ts'

/**
 * Make all fields of `O` optional (deeply or not)
 * @param O to make optional
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * import {O} from 'ts-toolbelt.ts'
 *
 * type L = {a: {b: {c: 2}}, b: 1}
 *
 * type test0 = O.Partial<L>
 * type test1 = O.Partial<L, 'deep'>
 * ```
 */
export type Partial<O extends object, depth extends Depth = 'flat'> =
    OptionalPart<O, depth>
