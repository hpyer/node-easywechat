'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Merge = require("merge");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    info(mchBillno) {
        let params = Utils_1.isObject(mchBillno) ? mchBillno : {
            mch_billno: mchBillno
        };
        params = Merge({}, params, {
            appid: this.app['config'].app_id,
            bill_type: 'MCHT',
        });
        return this.safeRequestApi('mmpaymkttransfers/gethbinfo', params);
    }
    sendNormal(params) {
        params = Merge({}, params, {
            wxappid: this.app['config'].app_id,
            total_num: 1,
            client_ip: params['client_ip'] || this.getServerIp(),
        });
        return this.safeRequestApi('mmpaymkttransfers/sendredpack', params);
    }
    sendGroup(params) {
        params = Merge({}, params, {
            wxappid: this.app['config'].app_id,
            amt_type: 'ALL_RAND',
        });
        return this.safeRequestApi('mmpaymkttransfers/sendgroupredpack', params);
    }
}
exports.default = Client;
