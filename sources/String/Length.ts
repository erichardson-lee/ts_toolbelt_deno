import {Split} from './Split.ts'
import {Length as LLength} from '../List/Length.ts'

/**
 * Get the length of a `string`
 * @param S
 */
export type Length<S extends string> =
    LLength<Split<S, ''>>
