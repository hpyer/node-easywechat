'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Utils_1 = require("../../Core/Utils");
const OAuthClient_1 = __importStar(require("../../OfficialAccount/OAuth/OAuthClient"));
class User extends OAuthClient_1.User {
    constructor() {
        super(...arguments);
        this.userId = '';
        this.deviceId = '';
    }
    /**
     * 获取 userId
     * @return {string}
     */
    getUserId() {
        return this.userId;
    }
    /**
     * 获取 deviceId
     * @return {string}
     */
    getDeviceId() {
        return this.deviceId;
    }
}
exports.User = User;
;
class OAuthClient extends OAuthClient_1.default {
    constructor() {
        super(...arguments);
        this._agentId = '';
        this._detailed = false;
    }
    /**
     * 设置agentId参数
     * @param code
     */
    agent(agentId) {
        this._agentId = agentId || '';
        return this;
    }
    /**
     * 设置agentId参数
     * @param code
     */
    setAgentId(agentId) {
        this._agentId = agentId || '';
        return this;
    }
    /**
     * 设置返回用户详情
     */
    detailed() {
        this._detailed = true;
        return this;
    }
    /**
     * 获取配置中的corp_id
     */
    getAppId() {
        return this.app.config.corp_id;
    }
    getAuthUrl(state) {
        if (this._scope) {
            return this.getOAuthUrl(state);
        }
        return this.getQrConnectUrl(state);
    }
    getOAuthUrl(state) {
        let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
        let callback = this._callback || this.app.config.oauth.callback || '';
        if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
            throw new Error('Please set callback url start with "http://" or "https://"');
        }
        let params = {
            appid: this.getAppId(),
            redirect_uri: callback,
            response_type: 'code',
            scope: this.formatScope(scope, this._scopeSeparator),
            agentid: this._agentId,
            state: state || '',
        };
        return `https://open.weixin.qq.com/connect/oauth2/authorize?${Utils_1.buildQueryString(params)}#wechat_redirect`;
    }
    getQrConnectUrl(state) {
        let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
        let callback = this._callback || this.app.config.oauth.callback || '';
        if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
            throw new Error('Please set callback url start with "http://" or "https://"');
        }
        let params = {
            appid: this.getAppId(),
            agentid: this._agentId,
            redirect_uri: callback,
            state: state || '',
        };
        return `https://open.work.weixin.qq.com/wwopen/sso/qrConnect?${Utils_1.buildQueryString(params)}`;
    }
    getTokenUrl() {
        return null;
    }
    getUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInfo = yield this.getUserInfo(token);
            if (this._detailed && userInfo['user_ticket']) {
                return this.getUserDetail(token, userInfo['user_ticket']);
            }
            this._detailed = false;
            return userInfo;
        });
    }
    getUserInfo(token) {
        return this.httpGet('https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo', {
            access_token: token.access_token,
            code: this._code,
        });
    }
    getUserDetail(token, ticket) {
        return this.httpPostJson('https://qyapi.weixin.qq.com/cgi-bin/user/getuserdetail', {
            user_ticket: ticket,
        }, {
            access_token: token.access_token,
        });
    }
    mapUserToObject(userData) {
        let user = new User;
        if (this._detailed) {
            user.id = this.arrayItem(userData, 'userid');
            user.name = this.arrayItem(userData, 'name');
            user.avatar = this.arrayItem(userData, 'avatar');
            user.email = this.arrayItem(userData, 'email');
        }
        else {
            user.id = this.arrayItem(userData, 'UserId') || this.arrayItem(userData, 'OpenId');
            user.userId = this.arrayItem(userData, 'UserId');
            user.openid = this.arrayItem(userData, 'OpenId');
            user.deviceId = this.arrayItem(userData, 'DeviceId');
        }
        return user;
    }
}
exports.default = OAuthClient;
