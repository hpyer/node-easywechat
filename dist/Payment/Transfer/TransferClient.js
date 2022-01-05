'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
const fs_1 = __importDefault(require("fs"));
const RSA_1 = __importDefault(require("../../Core/RSA"));
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
        return __awaiter(this, void 0, void 0, function* () {
            let base = {
                mch_id: null,
                mchid: this.app.config.mch_id,
                mch_appid: this.app.config.app_id,
            };
            if (!params['spbill_create_ip']) {
                params['spbill_create_ip'] = yield this.getServerIp();
            }
            return this.safeRequest('mmpaymkttransfers/promotion/transfers', (0, Utils_1.merge)(base, params));
        });
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
        let publicKey = fs_1.default.readFileSync(this.app.config.rsa_public_key_path);
        let rsa = new RSA_1.default;
        rsa.setPublicKey(publicKey);
        params['enc_bank_no'] = rsa.encrypt(params['enc_bank_no'], 'hex');
        params['enc_true_name'] = rsa.encrypt(params['enc_true_name'], 'hex');
        return this.safeRequest('mmpaymkttransfers/pay_bank', params);
    }
}
exports.default = TransferClient;
