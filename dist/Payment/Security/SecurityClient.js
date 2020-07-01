'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
class SecurityClient extends BaseClient_1.default {
    /**
     * 获取 RSA 公钥
     */
    getPublicKey() {
        let params = {
            sign_type: 'MD5',
            baseUrl: '',
        };
        return this.safeRequest('https://fraud.mch.weixin.qq.com/risk/getpublickey', params);
    }
}
exports.default = SecurityClient;
