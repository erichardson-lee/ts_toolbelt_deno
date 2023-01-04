import {Replace} from '../Union/Replace.ts'
import {x} from '../Any/x.ts'
import {List} from './List.ts'
import {Cast} from '../Any/Cast.ts'
import {At} from '../Any/At.ts'

/**
 * Modify `L` with `LMod` & the [[x]] placeholder
 * @param L to copy from
 * @param LMod to copy to
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Modify<L extends List, LMod extends List> = Cast<{
    [K in keyof LMod]: Replace<LMod[K], x, Exclude<At<L, K>, undefined>>
}, List>
