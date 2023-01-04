import {List} from '../List/List.ts'

/**
 * Get the keys of `A`
 * @param A
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type Keys<A extends any> =
    A extends List
    ? Exclude<keyof A, keyof any[]> | number
    : keyof A
