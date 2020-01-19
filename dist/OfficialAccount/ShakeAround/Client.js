'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    status() {
        return this.httpGet('shakearound/account/auditstatus');
    }
    register(data) {
        return this.httpPostJson('shakearound/account/register', data);
    }
    user(ticket = '', needPoi = false) {
        let params = {
            ticket,
        };
        if (needPoi) {
            params['need_poi'] = 1;
        }
        return this.httpPostJson('shakearound/user/getshakeinfo', params);
    }
    userWithPoi(ticket = '') {
        return this.user(ticket, true);
    }
}
exports.default = Client;
