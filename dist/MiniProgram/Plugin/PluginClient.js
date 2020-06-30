'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class PluginClient extends BaseClient_1.default {
    list() {
        return this.httpPostJson('wxa/plugin', {
            action: 'list',
        });
    }
    apply(appId) {
        return this.httpPostJson('wxa/plugin', {
            action: 'apply',
            plugin_appid: appId,
        });
    }
    unbind(appId) {
        return this.httpPostJson('wxa/plugin', {
            action: 'unbind',
            plugin_appid: appId,
        });
    }
}
exports.default = PluginClient;
