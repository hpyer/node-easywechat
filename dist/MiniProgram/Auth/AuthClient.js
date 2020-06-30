'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class AuthClient extends BaseClient_1.default {
    session(code) {
        let params = {
            appid: this.app['config']['app_id'],
            secret: this.app['config']['secret'],
            js_code: code,
            grant_type: 'authorization_code',
        };
        return this.httpGet('sns/jscode2session', params);
    }
}
exports.default = AuthClient;
