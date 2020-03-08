'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.baseUri = 'https://api.weixin.qq.com/';
    }
    shorten(long_url) {
        let data = {
            action: 'long2short',
            long_url
        };
        return this.httpPostJson('cgi-bin/shorturl', data);
    }
}
exports.default = Client;
