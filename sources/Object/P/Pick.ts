import {Key} from '../../Any/Key.ts'
import {_Pick as _OPick} from '../Pick.ts'
import {_Pick as _LPick} from '../../List/Pick.ts'
import {List} from '../../List/List.ts'
import {Tail} from '../../List/Tail.ts'
import {BuiltIn} from '../../Misc/BuiltIn.ts'
import {_ListOf} from '../ListOf.ts'

/**
 * @hidden
 */
type PickAt<O, Path extends List<Key>> =
    [] extends Path ? O :
    O extends BuiltIn ? O :
    O extends List ? _ListOf<{
      [K in keyof _OPick<O, Path[0]>]:
      PickAt<O[K], Tail<Path>>
    }> :
    O extends object ? {
      [K in keyof _OPick<O, Path[0]>]:
      PickAt<O[K], Tail<Path>>
    } : O

/**
 * Extract out of `O` the fields at `Path`
 * @param O to extract from
 * @param Path to be followed
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, Path extends List<Key>> =
  Path extends unknown
  ? PickAt<O, Path>
  : never

