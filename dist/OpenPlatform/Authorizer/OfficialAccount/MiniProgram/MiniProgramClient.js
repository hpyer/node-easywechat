'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../../../Core/BaseClient"));
class MiniProgramClient extends BaseClient_1.default {
    /**
     * 获取公众号关联的小程序
     */
    list() {
        return this.httpPostJson('cgi-bin/wxopen/wxamplinkget');
    }
    /**
     * 关联小程序
     * @param appId 小程序 appid
     * @param notifyUsers 是否发送模板消息通知公众号粉丝
     * @param showProfile 是否展示公众号主页中
     */
    link(appId, notifyUsers = true, showProfile = false) {
        return this.httpPostJson('cgi-bin/wxopen/wxamplink', {
            appid: appId,
            notify_users: notifyUsers ? 'true' : 'false',
            show_profile: showProfile ? 'true' : 'false',
        });
    }
    /**
     * 解除已关联的小程序
     * @param appId 小程序 appid
     */
    uplink(appId) {
        return this.httpPostJson('cgi-bin/wxopen/wxampunlink', {
            appid: appId,
        });
    }
}
exports.default = MiniProgramClient;
