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
Object.defineProperty(exports, "__esModule", { value: true });
const Qs = require("qs");
const BaseClient_1 = require("../../Core/BaseClient");
class User {
    constructor() {
        this.id = '';
        this.nickname = '';
        this.name = '';
        this.avatar = '';
        this.original = '';
        this.token = {};
    }
}
;
class OAuth extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.scope = 'snsapi_userinfo';
        this.callback = '';
        this.state = '';
    }
    setScope(scope) {
        this.scope = scope || 'snsapi_userinfo';
        return this;
    }
    setCallback(callback) {
        this.callback = callback || '';
        return this;
    }
    setState(state) {
        this.state = state || '';
        return this;
    }
    redirect() {
        if (!this.app['config']['oauth']) {
            throw new Error('未配置网页授权相关参数');
        }
        let scope = this.scope || this.app['config']['oauth']['scope'] || 'snsapi_userinfo';
        let callback = this.callback || this.app['config']['oauth']['callback'] || '';
        if (callback.substr(0, 7) != 'http://' && callback.substr(0, 8) != 'https://') {
            throw new Error('请填写完整的回调地址，以“http://”或“https://”开头');
        }
        let params = {
            appid: this.app['config']['app_id'],
            redirect_uri: callback,
            response_type: 'code',
            scope: scope,
            state: '',
        };
        if (this.state) {
            params.state = this.state;
        }
        return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + Qs.stringify(params) + '#wechat_redirect';
    }
    user(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                appid: this.app['config']['app_id'],
                secret: this.app['config']['secret'],
                code: code,
                grant_type: 'authorization_code'
            };
            let url = 'https://api.weixin.qq.com/sns/oauth2/access_token?' + Qs.stringify(params);
            let res = yield this.httpGet(url);
            if (res.errcode) {
                this.app['log']('获取 AccessToken 失败', res);
                throw new Error('获取 AccessToken 失败');
            }
            let user = new User;
            user.id = res.openid;
            user.token = res;
            if (this.app['config']['scope'] != 'snsapi_base') {
                let params = {
                    access_token: user.token['access_token'],
                    openid: user.id,
                    lang: 'zh_CN'
                };
                let url = 'https://api.weixin.qq.com/sns/userinfo?' + Qs.stringify(params);
                res = yield this.httpGet(url);
                if (res.errcode) {
                    this.app['log']('获取用户信息失败', res);
                    return user;
                }
                user.id = res.openid;
                user.nickname = res.nickname;
                user.name = res.nickname;
                user.avatar = res.headimgurl;
                user.original = res;
            }
            return user;
        });
    }
}
exports.default = OAuth;
