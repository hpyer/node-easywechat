'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class CorpClient extends BaseClient_1.default {
    constructor(app) {
        super(app, app['suite_access_token']);
    }
    /**
     * 企业授权应用
     * @see https://developer.work.weixin.qq.com/document/path/90597
     * @param preAuthCode
     * @param redirectUri
     * @param state
     * @returns
     */
    getPreAuthorizationUrl(preAuthCode = '', redirectUri = '', state = '') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!redirectUri)
                redirectUri = this.app.config.redirect_uri_install;
            if (!preAuthCode) {
                let res = yield this.getPreAuthCode();
                preAuthCode = res['pre_auth_code'];
            }
            if (!state)
                state = (0, Utils_1.randomString)(32);
            let params = {
                suite_id: this.app.config.suite_id,
                redirect_uri: redirectUri,
                pre_auth_code: preAuthCode,
                state,
            };
            return 'https://open.work.weixin.qq.com/3rdapp/install?' + (0, Utils_1.buildQueryString)(params);
        });
    }
    /**
     * 获取预授权码
     * @returns
     */
    getPreAuthCode() {
        return this.httpGet('cgi-bin/service/get_pre_auth_code');
    }
    /**
     * 设置授权配置
     * @see https://developer.work.weixin.qq.com/document/path/90602
     * @param preAuthCode
     * @param sessionInfo
     * @returns
     */
    setSession(preAuthCode, sessionInfo) {
        return this.httpPostJson('cgi-bin/service/set_session_info', {
            pre_auth_code: preAuthCode,
            session_info: sessionInfo,
        });
    }
    /**
     * 获取企业永久授权码
     * @see https://developer.work.weixin.qq.com/document/path/90603
     * @param authCode
     * @returns
     */
    getPermanentByCode(authCode) {
        return this.httpPostJson('cgi-bin/service/get_permanent_code', {
            auth_code: authCode,
        });
    }
    /**
     * 获取企业授权信息
     * @see https://developer.work.weixin.qq.com/document/path/90604
     * @param authCorpId
     * @param permanentCode
     * @returns
     */
    getAuthorization(authCorpId, permanentCode) {
        return this.httpPostJson('cgi-bin/service/get_auth_info', {
            auth_corpid: authCorpId,
            permanent_code: permanentCode,
        });
    }
    /**
     * 获取应用的管理员列表
     * @see https://developer.work.weixin.qq.com/document/path/90606
     * @param authCorpId
     * @param agentId
     * @returns
     */
    getManagers(authCorpId, agentId) {
        return this.httpPostJson('cgi-bin/service/get_admin_list', {
            auth_corpid: authCorpId,
            agentid: agentId,
        });
    }
    /**
     * 构造第三方应用oauth2链接
     * @see https://developer.work.weixin.qq.com/document/path/91120
     * @param redirectUri
     * @param scope
     * @param state
     * @returns
     */
    getOAuthRedirectUrl(redirectUri = '', scope = 'snsapi_userinfo', state = '') {
        if (!redirectUri)
            redirectUri = this.app.config.redirect_uri_oauth;
        if (!state)
            state = (0, Utils_1.randomString)(32);
        let params = {
            appid: this.app.config.suite_id,
            redirect_uri: redirectUri,
            response_type: 'code',
            scope,
            state,
        };
        return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + (0, Utils_1.buildQueryString)(params);
    }
    /**
     * 获取访问用户身份
     * @see https://developer.work.weixin.qq.com/document/path/91121
     * @param code
     * @returns
     */
    getUserByCode(code) {
        return this.httpGet('cgi-bin/service/getuserinfo3rd', {
            code,
        });
    }
    /**
     * 获取访问用户敏感信息
     * @see https://developer.work.weixin.qq.com/document/path/91122
     * @param userTicket
     * @returns
     */
    getUserByTicket(userTicket) {
        return this.httpPostJson('cgi-bin/service/getuserdetail3rd', {
            user_ticket: userTicket,
        });
    }
}
exports.default = CorpClient;
