import {IntersectOf} from '../Union/IntersectOf.ts'
import {PipeListAsync} from './Pipe/List/Async.ts'
import {PipeListSync} from './Pipe/List/Sync.ts'
import {PipeMultiAsync} from './Pipe/Multi/Async.ts'
import {PipeMultiSync} from './Pipe/Multi/Sync.ts'
import {Input, Mode} from './_Internal.ts'

/**
 * Pipe [[Function]]s together
 * @param mode (?=`'sync'`) sync/async (this depends on your implementation)
 * @param input (?=`'multi'`) whether you want to take a list or multiple parameters
 * @returns [[Function]]
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt.ts'
 *
 * /// If you are looking for creating types for `pipe`:
 * declare const pipe: F.Pipe
 *
 * const a = (a1: number) => `${a1}`
 * const b = (b1: string) => [b1]
 * const c = (c1: string[]) => [c1]
 *
 * pipe(a, b, c)(42)
 *
 * /// And if you are looking for an async `pipe` type:
 * declare const pipe: F.Pipe<'async'>
 *
 * const a = async (a1: number) => `${a1}`
 * const b = async (b1: string) => [b1]
 * const c = async (c1: string[]) => [c1]
 *
 * await pipe(a, b, c)(42)
 * ```
 */
export type Pipe<mode extends Mode = 'sync', input extends Input = 'multi'> = IntersectOf<{
    'sync' : {
        'multi': PipeMultiSync
        'list' : PipeListSync
    }
    'async': {
        'multi': PipeMultiAsync
        'list' : PipeListAsync
    }
}[mode][input]> // `IntersectOf` in case of unions
