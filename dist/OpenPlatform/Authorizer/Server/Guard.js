'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const ServerGuard_1 = require("../../../Core/ServerGuard");
class Guard extends ServerGuard_1.default {
    getToken() {
        return this.app['encryptor'].getToken();
    }
}
exports.default = Guard;
;
