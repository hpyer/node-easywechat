'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAccessToken_1 = require("../../../Core/BaseAccessToken");
const Utils_1 = require("../../../Core/Utils");
class AccessToken extends BaseAccessToken_1.default {
    constructor(app, component) {
        super(app);
        this.requestMethod = 'POST';
        this.queryName = 'access_token';
        this.tokenKey = 'authorizer_access_token';
        this.component = null;
        this.component = component;
    }
    getCredentials() {
        return {
            component_appid: this.component['config']['app_id'],
            authorizer_appid: this.app['config']['app_id'],
            authorizer_refresh_token: this.app['config']['refresh_token'],
        };
    }
    getEndpoint() {
        return 'cgi-bin/component/api_authorizer_token?' + Utils_1.buildQueryString({
            component_access_token: this.component['access_token'].getToken()['component_access_token'],
        });
    }
}
exports.default = AccessToken;
