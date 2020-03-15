'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class Client extends BaseClient_1.default {
    create() {
        return this.httpPostJson('cgi-bin/open/create', {
            appid: this.app['config']['app_id'],
        });
    }
    bindTo(openAppId) {
        return this.httpPostJson('cgi-bin/open/bind', {
            appid: this.app['config']['app_id'],
            open_appid: openAppId,
        });
    }
    unbindFrom(openAppId) {
        return this.httpPostJson('cgi-bin/open/unbind', {
            appid: this.app['config']['app_id'],
            open_appid: openAppId,
        });
    }
    getBinding() {
        return this.httpPostJson('cgi-bin/open/get', {
            appid: this.app['config']['app_id'],
        });
    }
}
exports.default = Client;
