'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class PluginClient extends BaseClient_1.default {
    /**
     * 获取已添加的插件列表
     */
    list() {
        return this.httpPostJson('wxa/plugin', {
            action: 'list',
        });
    }
    /**
     * 发起使用插件申请
     * @param appId 插件appid
     */
    apply(appId) {
        return this.httpPostJson('wxa/plugin', {
            action: 'apply',
            plugin_appid: appId,
        });
    }
    /**
     * 删除已添加的插件
     * @param appId 插件appid
     */
    unbind(appId) {
        return this.httpPostJson('wxa/plugin', {
            action: 'unbind',
            plugin_appid: appId,
        });
    }
}
exports.default = PluginClient;
