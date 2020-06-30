'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class MiniProgramClient extends BaseClient_1.default {
    list() {
        return this.httpPostJson('cgi-bin/wxopen/wxamplinkget');
    }
    link(appId, notifyUsers = true, showProfile = false) {
        return this.httpPostJson('cgi-bin/wxopen/wxamplink', {
            appid: appId,
            notify_users: notifyUsers ? 'true' : 'false',
            show_profile: showProfile ? 'true' : 'false',
        });
    }
    uplink(appId) {
        return this.httpPostJson('cgi-bin/wxopen/wxampunlink', {
            appid: appId,
        });
    }
}
exports.default = MiniProgramClient;
