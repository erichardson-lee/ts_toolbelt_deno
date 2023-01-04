/** @ignore *//** */

import {Overwrite} from '../Object/Overwrite.ts'
import {List} from './List.ts'

/**
 * Remove `?` & `readonly` from a [[List]]
 */
export type Naked<L extends List> =
    Overwrite<Required<L>, L>

export type Key = string | number | symbol
