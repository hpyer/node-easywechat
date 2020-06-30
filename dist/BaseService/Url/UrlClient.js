'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class UrlClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.baseUri = 'https://api.weixin.qq.com/';
    }
    /**
     * 获取短网址
     * @param long_url 原始URL地址
     */
    shorten(long_url) {
        let data = {
            action: 'long2short',
            long_url
        };
        return this.httpPostJson('cgi-bin/shorturl', data);
    }
}
exports.default = UrlClient;
