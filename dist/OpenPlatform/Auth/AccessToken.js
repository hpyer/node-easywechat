'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAccessToken_1 = require("../../Core/BaseAccessToken");
class AccessToken extends BaseAccessToken_1.default {
    constructor() {
        super(...arguments);
        this.requestMethod = 'POST';
        this.tokenKey = 'component_access_token';
        this.endpointToGetToken = 'cgi-bin/component/api_component_token';
    }
    getCredentials() {
        return {
            component_appid: this.app['config']['app_id'],
            component_appsecret: this.app['config']['secret'],
            component_verify_ticket: this.app['verify_ticket'].getTicket(),
        };
    }
}
exports.default = AccessToken;
