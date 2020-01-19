'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    current() {
        return this.httpGet('cgi-bin/get_current_autoreply_info');
    }
}
exports.default = Client;
