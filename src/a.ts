import * as r from "redis"

// import * as bb from "bluebird"

// bb.promisifyAll(r.RedisClient.prototype)
// bb.promisifyAll(r.Multi.prototype)

interface NodeCallback<T> {
    (err: any, result?: T): void;
}
interface NodeCallback2<T> {
    (result: T): void;
}

import * as util from "util"

declare module "util" {
    export function promisify<T>(f: (callback?: NodeCallback<undefined>) => void): () => Promise<T>;
    export function promisify<T, S>(f: (arg1: S, callback: NodeCallback<T>) => void): (arg1: S) => Promise<T>;
    export function promisify<T, S, U>(f: (arg1: S, arg2: U, callback: NodeCallback<T>) => void): (arg1: S, arg2: U) => Promise<T>;
    export function promisify<T, S, U, W>(f: (arg1: S, arg2: U, arg3: W, callback: NodeCallback<T>) => void): (arg1: S, arg2: U, arg3: W) => Promise<T>;
    export function promisify<T>(f: (callback: NodeCallback2<undefined>) => void): () => Promise<T>;
    export function promisify<T, S>(f: (arg1: S, callback: NodeCallback2<T>) => void): (arg1: S) => Promise<T>;
    export function promisify<T, S, U>(f: (arg1: S, arg2: U, callback: NodeCallback2<T>) => void): (arg1: S, arg2: U) => Promise<T>;
    export function promisify<T, S, U, W>(f: (arg1: S, arg2: U, arg3: W, callback: NodeCallback2<T>) => void): (arg1: S, arg2: U, arg3: W) => Promise<T>;
}

async function main() {
    console.log("Hello world.")
    try {
        const c = r.createClient(6379, "127.0.0.1")
        console.log(typeof (util.promisify))
        const a = await util.promisify(c.append)
        await a("123", "456")
        console.log(await util.promisify(c.get)("123"))
    } catch (err) {
        console.error(err)
    }
}

main()
