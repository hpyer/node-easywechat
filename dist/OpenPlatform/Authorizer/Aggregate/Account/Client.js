'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../../../Core/BaseClient"));
class Client extends BaseClient_1.default {
    /**
     * 绑定公众号或小程序
     */
    create() {
        return this.httpPostJson('cgi-bin/open/create', {
            appid: this.app.config.app_id,
        });
    }
    /**
     * 将公众号或小程序绑定到指定开放平台帐号下
     * @param openAppId 开放平台app_id
     */
    bindTo(openAppId) {
        return this.httpPostJson('cgi-bin/open/bind', {
            appid: this.app.config.app_id,
            open_appid: openAppId,
        });
    }
    /**
     * 将公众号/小程序从开放平台帐号下解绑
     * @param openAppId 开放平台app_id
     */
    unbindFrom(openAppId) {
        return this.httpPostJson('cgi-bin/open/unbind', {
            appid: this.app.config.app_id,
            open_appid: openAppId,
        });
    }
    /**
     * 获取公众号/小程序所绑定的开放平台帐号
     */
    getBinding() {
        return this.httpPostJson('cgi-bin/open/get', {
            appid: this.app.config.app_id,
        });
    }
}
exports.default = Client;
