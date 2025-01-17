import {Keys} from './Keys.ts'

/**
 * Get the known keys of an [[Object]]
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type KnownKeys<O extends object> = {
    [K in keyof O]:
    string extends K ? never :
    number extends K ? never :
    K
} extends {
    [K in keyof O]: infer U
} ? U & Keys<O> : never;
