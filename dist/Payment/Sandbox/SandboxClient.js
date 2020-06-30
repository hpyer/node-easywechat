'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class SandboxClient extends BaseClient_1.default {
    getKey() {
        return __awaiter(this, void 0, void 0, function* () {
            let cacher = this.app.getCache();
            let key = yield cacher.get(this.getCacheKey());
            if (key)
                return key;
            let res = yield this.request('sandboxnew/pay/getsignkey');
            if (res && 'SUCCESS' === res['return_code']) {
                key = res['sandbox_signkey'];
                yield cacher.set(this.getCacheKey(), key, 24 * 3600);
                return key;
            }
            throw new Error(res['retmsg'] || res['return_msg']);
        });
    }
    getCacheKey() {
        return 'easywechat.payment.sandbox.' + Utils_1.createHash(this.app['config']['app_id'], 'md5');
    }
}
exports.default = SandboxClient;
