'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class MiniProgramBase extends BaseClient_1.default {
    /**
     * 获取支付用户的unionid
     * @param openid 用户的openid
     * @param optional 参数。transaction_id：支付交易号；mch_id：商户id；out_trade_no：商家订单号
     */
    getPaidUnionid(openid, optional = {}) {
        let params = Utils_1.merge({
            openid,
        }, optional);
        return this.httpGet('wxa/getpaidunionid', params);
    }
}
exports.default = MiniProgramBase;
