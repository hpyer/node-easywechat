'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Merge = require("merge");
const Fs = require("fs");
const NodeRsa = require("node-rsa");
class Client extends BaseClient_1.default {
    queryBalanceOrder(partnerTradeNo) {
        let params = {
            appid: this.app['config'].app_id,
            mch_id: this.app['config'].mch_id,
            partner_trade_no: partnerTradeNo,
        };
        return this.safeRequestApi('mmpaymkttransfers/gettransferinfo', params);
    }
    queryBankCardOrder(partnerTradeNo) {
        let params = {
            mch_id: this.app['config'].mch_id,
            partner_trade_no: partnerTradeNo,
        };
        return this.safeRequestApi('mmpaymkttransfers/query_bank', params);
    }
    toBalance(params) {
        let base = {
            mch_id: null,
            mchid: this.app['config'].mch_id,
            mch_appid: this.app['config'].app_id,
        };
        if (!params['spbill_create_ip']) {
            params['spbill_create_ip'] = this.getServerIp();
        }
        return this.safeRequestApi('mmpaymkttransfers/promotion/transfers', Merge(base, params));
    }
    toBankCard(params) {
        ['bank_code', 'partner_trade_no', 'enc_bank_no', 'enc_true_name', 'amount'].map(key => {
            if (!params[key]) {
                throw new Error(`${key} is required.`);
            }
        });
        let publicKey = Fs.readFileSync(this.app['config'].rsa_public_key_path).toString();
        let rsa = new NodeRsa(publicKey);
        params['enc_bank_no'] = rsa.encrypt(params['enc_bank_no'], 'hex');
        params['enc_true_name'] = rsa.encrypt(params['enc_true_name'], 'hex');
        return this.safeRequestApi('mmpaymkttransfers/pay_bank', params);
    }
}
exports.default = Client;
