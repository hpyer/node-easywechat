'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class OpenPlatformBase extends BaseClient_1.default {
    handleAuthorize(authCode = null) {
        return this.httpPostJson('cgi-bin/component/api_query_auth', {
            component_appid: this.app['config']['app_id'],
            authorization_code: authCode || this.app['request'].get('auth_code'),
        });
    }
    getAuthorizer(appId) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_info', {
            component_appid: this.app['config']['app_id'],
            authorizer_appid: appId,
        });
    }
    getAuthorizerOption(appId, name) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_option', {
            component_appid: this.app['config']['app_id'],
            authorizer_appid: appId,
            option_name: name,
        });
    }
    setAuthorizerOption(appId, name, value) {
        return this.httpPostJson('cgi-bin/component/api_set_authorizer_option', {
            component_appid: this.app['config']['app_id'],
            authorizer_appid: appId,
            option_name: name,
            option_value: value,
        });
    }
    getAuthorizers(offset = 0, count = 500) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_list', {
            component_appid: this.app['config']['app_id'],
            offset,
            count,
        });
    }
    createPreAuthorizationCode() {
        return this.httpPostJson('cgi-bin/component/api_create_preauthcode', {
            component_appid: this.app['config']['app_id'],
        });
    }
    clearQuota() {
        return this.httpPostJson('cgi-bin/component/clear_quota', {
            component_appid: this.app['config']['app_id'],
        });
    }
}
exports.default = OpenPlatformBase;
