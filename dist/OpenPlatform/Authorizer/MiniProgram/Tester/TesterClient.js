'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../../../Core/BaseClient"));
class TesterClient extends BaseClient_1.default {
    /**
     * 绑定微信用户为体验者
     * @param wechatId 体验者微信号（非openid或昵称）
     */
    bind(wechatId) {
        return this.httpPostJson('wxa/bind_tester', {
            wechatid: wechatId
        });
    }
    /**
     * 解除绑定体验者
     * @param wechatId 体验者微信号（非openid或昵称）
     */
    unbind(wechatId) {
        return this.httpPostJson('wxa/unbind_tester', {
            wechatid: wechatId
        });
    }
    /**
     * 获取体验者列表
     */
    list() {
        return this.httpPostJson('wxa/memberauth', {
            action: 'get_experiencer',
        });
    }
}
exports.default = TesterClient;
