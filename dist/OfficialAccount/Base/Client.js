'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    clearQuota() {
        return this.httpPostJson('cgi-bin/clear_quota', {
            appid: this.app['config']['app_id'],
        });
    }
    getValidIps() {
        return this.httpGet('cgi-bin/getcallbackip');
    }
    checkCallbackUrl(action = 'all', operator = 'DEFAULT') {
        if (!Utils_1.inArray(action, ['dns', 'ping', 'all'], true)) {
            throw new Error('The action must be dns, ping, all.');
        }
        operator = operator.toUpperCase();
        if (!Utils_1.inArray(operator, ['CHINANET', 'UNICOM', 'CAP', 'DEFAULT'], true)) {
            throw new Error('The operator must be CHINANET, UNICOM, CAP, DEFAULT.');
        }
        return this.httpPostJson('cgi-bin/callback/check', {
            action,
            check_operator: operator,
        });
    }
}
exports.default = Client;
