import {Cast} from '../Any/Cast.ts'
import {Pop} from '../List/Pop.ts'

/**
 * @ignore
 */
type __Split<S extends string, D extends string, T extends string[] = []> =
    S extends `${infer BS}${D}${infer AS}`
    ? __Split<AS, D, [...T, BS]>
    : [...T, S]

/**
 * @hidden
 */
type _Split<S extends string, D extends string = ''> =
    D extends '' ? Pop<__Split<S, D>> : __Split<S, D>

/**
 * Split `S` by `D` into a [[List]]
 * @param S to split up
 * @param D to split at
 */
export type Split<S extends string, D extends string = ''> =
    _Split<S, D> extends infer X
    ? Cast<X, string[]>
    : never
