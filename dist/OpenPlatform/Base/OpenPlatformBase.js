'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class OpenPlatformBase extends BaseClient_1.default {
    /**
     * 使用授权码换取接口调用凭据和授权信息
     * @param authCode 授权码, 会在授权成功的回调返回给第三方平台
     */
    handleAuthorize(authCode = null) {
        return this.httpPostJson('cgi-bin/component/api_query_auth', {
            component_appid: this.app.config.app_id,
            authorization_code: authCode || this.app['request'].get('auth_code'),
        });
    }
    /**
     * 获取授权方的帐号基本信息
     * @param appId 授权方app_id
     */
    getAuthorizer(appId) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_info', {
            component_appid: this.app.config.app_id,
            authorizer_appid: appId,
        });
    }
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     */
    getAuthorizerOption(appId, name) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_option', {
            component_appid: this.app.config.app_id,
            authorizer_appid: appId,
            option_name: name,
        });
    }
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     * @param value 选项值
     */
    setAuthorizerOption(appId, name, value) {
        return this.httpPostJson('cgi-bin/component/api_set_authorizer_option', {
            component_appid: this.app.config.app_id,
            authorizer_appid: appId,
            option_name: name,
            option_value: value,
        });
    }
    /**
     * 获取已授权的授权方列表
     * @param offset 起始位置，从0开始
     * @param count 获取记录数，最大500
     */
    getAuthorizers(offset = 0, count = 500) {
        return this.httpPostJson('cgi-bin/component/api_get_authorizer_list', {
            component_appid: this.app.config.app_id,
            offset,
            count,
        });
    }
    /**
     * 获取预授权码
     */
    createPreAuthorizationCode() {
        return this.httpPostJson('cgi-bin/component/api_create_preauthcode', {
            component_appid: this.app.config.app_id,
        });
    }
    /**
     * 清零调用次数
     */
    clearQuota() {
        return this.httpPostJson('cgi-bin/component/clear_quota', {
            component_appid: this.app.config.app_id,
        });
    }
}
exports.default = OpenPlatformBase;
