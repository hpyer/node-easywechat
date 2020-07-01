'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class MiniProgramBase extends BaseClient_1.default {
    /**
     * 获取支付用户的unionid
     * @param openid 用户的openid
     * @param optional 参数。transaction_id：支付交易号；mch_id：商户id；out_trade_no：商家订单号
     */
    getPaidUnionid(openid, optional = {}) {
        let params = Merge({
            openid,
        }, optional);
        return this.httpGet('wxa/getpaidunionid', params);
    }
}
exports.default = MiniProgramBase;
