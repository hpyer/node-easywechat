'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../../Aggregate/Account/Client"));
const Utils_1 = require("../../../../Core/Utils");
class Client extends Client_1.default {
    constructor(app, component) {
        super(app);
        this.component = null;
        this.component = component;
    }
    /**
     * 从第三方平台跳转至微信公众平台授权注册页面
     * @param callbackUrl
     * @param copyWxVerify
     */
    getFastRegistrationUrl(callbackUrl, copyWxVerify = true) {
        let query = {
            copy_wx_verify: copyWxVerify,
            component_appid: this.component.config.app_id,
            appid: this.app.config.app_id,
            redirect_uri: callbackUrl,
        };
        return 'https://mp.weixin.qq.com/cgi-bin/fastregisterauth?' + Utils_1.buildQueryString(query);
    }
    /**
     * 第三方平台调用快速注册 API 完成注册
     * @param ticket 公众号扫码授权的凭证(公众平台扫码页面回跳到第三方平台时携带)
     */
    register(ticket) {
        return this.httpPostJson('cgi-bin/account/fastregister', {
            ticket: ticket,
        });
    }
}
exports.default = Client;
