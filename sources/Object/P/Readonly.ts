import {Key} from '../../Any/Key.ts'
import {Readonly as OReadonly} from '../Readonly.ts'
import {List} from '../../List/List.ts'
import {BuiltIn} from '../../Misc/BuiltIn.ts'
import {_ListOf} from '../ListOf.ts'
import {Tail} from '../../List/Tail.ts'
import {Depth} from '../_Internal.ts'

/**
 * @hidden
 */
type ReadonlyAt<O, Path extends List<Key>, depth extends Depth> =
  O extends BuiltIn ? O :
  Path extends [Key]
  ? O extends List   ? OReadonly<O, Path[0], depth> :
    O extends object ? OReadonly<O, Path[0], depth> :
    O
  : {
      [K in keyof O]: K extends Path[0]
      ? ReadonlyAt<O[K], Tail<Path>, depth>
      : O[K]
    }

/**
 * Make some fields of `O` readonly at `Path` (deeply or not)
 * @param O to make readonly
 * @param Path to be followed
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Readonly<O extends object, Path extends List<Key>, depth extends Depth = 'flat'> =
    Path extends unknown
    ? ReadonlyAt<O, Path, depth>
    : never
