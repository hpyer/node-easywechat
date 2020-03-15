'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class Client extends BaseClient_1.default {
    modify(params) {
        return this.httpPostJson('wxa/modify_domain', params);
    }
    setWebviewDomain(domains, action = 'add') {
        return this.httpPostJson('wxa/setwebviewdomain', {
            action: action,
            webviewdomain: domains,
        });
    }
}
exports.default = Client;
