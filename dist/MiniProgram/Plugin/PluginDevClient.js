'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class PluginDevClient extends BaseClient_1.default {
    /**
     * 获取当前所有插件使用方
     * @param page 页码
     * @param size 每页记录数
     */
    getUsers(page = 1, size = 10) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_apply_list',
            page: page,
            num: size,
        });
    }
    /**
     * 同意申请
     * @param appId 插件appid
     */
    agree(appId) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_agree',
            appid: appId,
        });
    }
    /**
     * 拒绝申请
     * @param reason 插件appid
     */
    refuse(reason) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_refuse',
            reason: reason,
        });
    }
    /**
     * 删除已拒绝的申请者
     */
    delete() {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_delete',
        });
    }
}
exports.default = PluginDevClient;
