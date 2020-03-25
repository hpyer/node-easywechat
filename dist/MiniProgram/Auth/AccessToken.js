'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAccessToken_1 = require("../../Core/BaseAccessToken");
class AccessToken extends BaseAccessToken_1.default {
    constructor() {
        super(...arguments);
        this.endpointToGetToken = 'cgi-bin/token';
    }
    getCredentials() {
        return {
            appid: this.app['config']['app_id'],
            secret: this.app['config']['secret'],
            grant_type: 'client_credential'
        };
    }
}
exports.default = AccessToken;
