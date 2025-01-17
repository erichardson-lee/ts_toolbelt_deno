import {Key} from '../Any/Key.ts'
import {Head} from '../List/Head.ts'
import {List} from '../List/List.ts'
import {Pop} from '../List/Pop.ts'
import {Tail} from '../List/Tail.ts'
import {Path} from '../Object/Path.ts'
import {UnionOf} from '../Object/UnionOf.ts'
import {Select} from '../Union/Select.ts'
import {Join} from '../String/Join.ts'
import {Split} from '../String/Split.ts'

/**
 * @ignore
 */
type Index = number | string;

/**
 * @ignore
 */
type KeyToIndex<K extends Key, SP extends List<Index>> =
  number extends K ? Head<SP> : K & Index;

/**
 * @ignore
 */
type MetaPath<O, D extends string, SP extends List<Index> = [], P extends List<Index> = []> = {
  [K in keyof O]:
    | MetaPath<O[K], D, Tail<SP>, [...P, KeyToIndex<K, SP>]>
    | Join<[...P, KeyToIndex<K, SP>], D>;
};

/**
 * @ignore
 */
type NextPath<OP> =
  // the next paths after property `K` are on sub objects
  // O[K] === K | {x: '${K}.x' | {y: '${K}.x.y' ...}}
  // So we access O[K] then we only keep the next paths
  // To do this, we can just exclude `string` out of it:
  // O[K] === {x: '${K}.x' | {y: '${K}.x.y' ...}}
  // To do this, we create a union of what we just got
  // This will yield a union of paths and meta paths
  // We exclude the next paths (meta) paths by excluding
  // `object`. Then we are left with the direct next path
  Select<UnionOf<Exclude<OP, string> & {}>, string>;

/**
 * @ignore
 */
type ExecPath<A, SP extends List<Index>, Delimiter extends string> =
  // We go in the `MetaPath` of `O` to get the prop at `SP`
  // So we query what is going the `NextPath` at `O[...SP]`
  NextPath<Path<MetaPath<A, Delimiter, SP>, SP>>;

/**
 * @ignore
 */
type HintPath<A, P extends string, SP extends List<Index>, Exec extends string, D extends string> = [Exec] extends [never] // if has not found paths
  ? ExecPath<A, Pop<SP>, D> // display previous paths
  : Exec | P; // display current + next

/**
 * @ignore
 */
type _AutoPath<A, P extends string, D extends string, SP extends List<Index> = Split<P, D>> =
  HintPath<A, P, SP, ExecPath<A, SP, D>, D>;

/**
 * Auto-complete, validate, and query the string path of an object `O`
 * @param O to work on
 * @param P path of `O`
 * @param D (?=`'.'`) delimiter for path
 *
 * ```ts
 * declare function get<O extends object, P extends string>(
 *     object: O, path: AutoPath<O, P>
 * ): Path<O, Split<P, '.'>>
 *
 * declare const user: User
 *
 * type User = {
 *     name: string
 *     friends: User[]
 * }
 *
 * // works
 * const friendName = get(user, 'friends.40.name')
 * const friendFriendName = get(user, 'friends.40.friends.12.name')
 *
 * // errors
 * const friendNames = get(user, 'friends.40.names')
 * const friendFriendNames = get(user, 'friends.40.friends.12.names')
 * ```
 */
export type AutoPath<O extends any, P extends string, D extends string = '.'> =
  _AutoPath<O, P, D>;
