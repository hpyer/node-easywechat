'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Merge = require("merge");
class MerchantClient extends BaseClient_1.default {
    addSubMerchant(params) {
        return this.manage(params, {
            action: 'add',
        });
    }
    querySubMerchantByMerchantId(id) {
        let params = {
            micro_mch_id: id,
        };
        return this.manage(params, {
            action: 'query',
        });
    }
    querySubMerchantByWeChatId(id) {
        let params = {
            recipient_wechatid: id,
        };
        return this.manage(params, {
            action: 'query',
        });
    }
    manage(params, query) {
        params = Merge({}, params, {
            appid: this.app['config']['app_id'],
            nonce_str: '',
            sub_mech_id: '',
            sub_appid: '',
        });
        return this.safeRequest('secapi/mch/submchmanage', params, 'post', { qs: query });
    }
}
exports.default = MerchantClient;
