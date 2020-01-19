'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    getUsers(page = 1, size = 10) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_apply_list',
            page: page,
            num: size,
        });
    }
    agree(appId) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_agree',
            appid: appId,
        });
    }
    refuse(reason) {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_refuse',
            reason: reason,
        });
    }
    delete() {
        return this.httpPostJson('wxa/devplugin', {
            action: 'dev_delete',
        });
    }
}
exports.default = Client;
