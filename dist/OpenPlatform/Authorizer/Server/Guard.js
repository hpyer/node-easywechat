'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServerGuard_1 = __importDefault(require("../../../Core/ServerGuard"));
class Guard extends ServerGuard_1.default {
    getToken() {
        return this.app['encryptor'].getToken();
    }
}
exports.default = Guard;
;
