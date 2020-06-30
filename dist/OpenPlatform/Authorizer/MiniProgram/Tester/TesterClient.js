'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class TesterClient extends BaseClient_1.default {
    bind(wechatId) {
        return this.httpPostJson('wxa/bind_tester', {
            wechatid: wechatId
        });
    }
    unbind(wechatId) {
        return this.httpPostJson('wxa/unbind_tester', {
            wechatid: wechatId
        });
    }
    list() {
        return this.httpPostJson('wxa/memberauth', {
            action: 'get_experiencer',
        });
    }
}
exports.default = TesterClient;
