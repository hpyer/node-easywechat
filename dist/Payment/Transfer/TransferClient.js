'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
const fs_1 = __importDefault(require("fs"));
const node_rsa_1 = __importDefault(require("node-rsa"));
const Utils_1 = require("../../Core/Utils");
class TransferClient extends BaseClient_1.default {
    /**
     * 查询付款到零钱的订单
     * @param partnerTradeNo 商户订单号
     */
    queryBalanceOrder(partnerTradeNo) {
        let params = {
            appid: this.app.config.app_id,
            mch_id: this.app.config.mch_id,
            partner_trade_no: partnerTradeNo,
        };
        return this.safeRequest('mmpaymkttransfers/gettransferinfo', params);
    }
    /**
     * 查询付款到银行卡的订单
     * @param partnerTradeNo 商户订单号
     */
    queryBankCardOrder(partnerTradeNo) {
        let params = {
            mch_id: this.app.config.mch_id,
            partner_trade_no: partnerTradeNo,
        };
        return this.safeRequest('mmpaymkttransfers/query_bank', params);
    }
    /**
     * 企业付款到用户零钱
     * @param params 付款信息
     */
    toBalance(params) {
        let base = {
            mch_id: null,
            mchid: this.app.config.mch_id,
            mch_appid: this.app.config.app_id,
        };
        if (!params['spbill_create_ip']) {
            params['spbill_create_ip'] = this.getServerIp();
        }
        return this.safeRequest('mmpaymkttransfers/promotion/transfers', Utils_1.merge(base, params));
    }
    /**
     * 企业付款到银行卡
     * @param params 付款信息
     */
    toBankCard(params) {
        ['bank_code', 'partner_trade_no', 'enc_bank_no', 'enc_true_name', 'amount'].map(key => {
            if (!params[key]) {
                throw new Error(`${key} is required.`);
            }
        });
        let publicKey = fs_1.default.readFileSync(this.app.config.rsa_public_key_path).toString();
        let rsa = new node_rsa_1.default(publicKey);
        params['enc_bank_no'] = rsa.encrypt(params['enc_bank_no'], 'hex');
        params['enc_true_name'] = rsa.encrypt(params['enc_true_name'], 'hex');
        return this.safeRequest('mmpaymkttransfers/pay_bank', params);
    }
}
exports.default = TransferClient;
