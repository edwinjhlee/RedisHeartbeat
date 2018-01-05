"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const r = require("redis");
const util = require("util");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Hello world.");
        try {
            const c = r.createClient(6379, "127.0.0.1");
            console.log(typeof (util.promisify));
            const a = yield util.promisify(c.append);
            yield a("123", "456");
            console.log(yield util.promisify(c.get)("123"));
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
