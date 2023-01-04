import {Class} from './Class.ts'

/**
 * Get the parameters of a class constructor
 * @param C **typeof** class
 * @returns [[List]]
 * @example
 * ```ts
 * import {C} from 'ts-toolbelt.ts'
 *
 * type User = C.Class<[string, string], {firstname: string, lastname: string}>
 *
 * type test0 = C.Parameters<User> // [string, string]
 * ```
 */
export type Parameters<C extends Class> =
    C extends Class<infer P, any>
    ? P
    : never
