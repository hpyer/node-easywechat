'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
class Client extends BaseClient_1.default {
    getPublicKey() {
        let params = {
            sign_type: 'MD5',
            baseUrl: '',
        };
        return this.safeRequestApi('https://fraud.mch.weixin.qq.com/risk/getpublickey', params);
    }
}
exports.default = Client;
