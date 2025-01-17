import {Key} from '../../Any/Key.ts'
import {Update as OUpdate} from '../Update.ts'
import {Update as LUpdate} from '../../List/Update.ts'
import {List} from '../../List/List.ts'
import {BuiltIn} from '../../Misc/BuiltIn.ts'
import {_ListOf} from '../ListOf.ts'
import {Tail} from '../../List/Tail.ts'
import {Record} from '../Record.ts'

/**
 * @hidden
 */
type UpdateAt<O, Path extends List<Key>, A> =
  O extends BuiltIn ? O :
  Path extends [Key]
  ? O extends List   ? LUpdate<O, Path[0], A> :
    O extends object ? OUpdate<O, Path[0], A> :
    O
  : {
      [K in keyof O]: K extends Path[0]
      ? UpdateAt<O[K], Tail<Path>, A>
      : O[K]
    }

/**
 * Update in `O` the fields at `Path` with `A`
 * @param O to update
 * @param Path to be followed
 * @param A to update with
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Update<O extends object, Path extends List<Key>, A extends any> =
    Path extends unknown
    ? UpdateAt<O, Path, A>
    : never
