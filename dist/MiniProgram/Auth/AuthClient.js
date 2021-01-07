'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class AuthClient extends BaseClient_1.default {
    /**
     * 根据 jsCode 获取用户 session 信息
     * @param code 小程序端通过 wx.login 获取
     */
    session(code) {
        let params = {
            appid: this.app.config.app_id,
            secret: this.app.config.secret,
            js_code: code,
            grant_type: 'authorization_code',
        };
        return this.httpGet('sns/jscode2session', params);
    }
}
exports.default = AuthClient;
