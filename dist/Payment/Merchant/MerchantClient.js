'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
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
    manage(data, query) {
        let params = Utils_1.merge(Utils_1.merge({}, data), {
            appid: this.app.config.app_id,
            nonce_str: '',
            sub_mech_id: '',
            sub_appid: '',
        });
        return this.safeRequest('secapi/mch/submchmanage', params, 'post', { qs: query });
    }
}
exports.default = MerchantClient;
