import {Overwrite as OOverwrite} from '../Object/Overwrite.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'

/**
 * Update the entries of `L` with the ones of `L1`
 * @param L to update
 * @param L1 to update with
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Overwrite<L extends List, L1 extends object> =
    Cast<OOverwrite<L, L1>, List>
