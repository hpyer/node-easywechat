'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class AutoReplyClient extends BaseClient_1.default {
    /**
     * 获取当前设置的回复规则
     */
    current() {
        return this.httpGet('cgi-bin/get_current_autoreply_info');
    }
}
exports.default = AutoReplyClient;
