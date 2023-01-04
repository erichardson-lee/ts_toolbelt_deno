import {Split} from './Split.ts'

import {At as AAt} from '../Any/At.ts'

/**
 * Get the character at position `K`
 * @param S
 * @param K
 */
export type At<S extends string, K extends number> =
    AAt<Split<S, ''>, K>
