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
const Utils_1 = require("../../Core/Utils");
class OrderClient extends BaseClient_1.default {
    /**
     * 统一下单
     * @param params 订单信息
     * @param isContract 是否支付中签约，默认 false
     */
    unify(params, isContract = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params['spbill_create_ip']) {
                params['spbill_create_ip'] = 'NATIVE' === params['trade_type'] ? yield this.getServerIp() : this.getClientIp();
            }
            params['appid'] = this.app.config.app_id;
            params['notify_url'] = this.app.config.notify_url;
            if (isContract) {
                params['contract_appid'] = this.app.config.app_id;
                params['contract_mchid'] = this.app.config.mch_id;
                params['request_serial'] = params['request_serial'] || Utils_1.getTimestamp();
                params['contract_notify_url'] = params['contract_notify_url'] || this.app.config.contract_notify_url;
            }
            return this.request(this.wrap('pay/contractorder'), params);
        });
    }
    /**
     * 根据商户订单号查询
     * @param out_trade_no 商户订单号
     */
    queryByOutTradeNumber(out_trade_no) {
        let params = {
            out_trade_no,
        };
        return this.query(params);
    }
    /**
     * 根据交易号查询
     * @param transaction_id 交易号
     */
    queryByTransactionId(transaction_id) {
        let params = {
            transaction_id,
        };
        return this.query(params);
    }
    query(params) {
        params['appid'] = this.app.config.app_id;
        return this.request(this.wrap('pay/orderquery'), params);
    }
    /**
     * 关闭订单
     * @param tradeNo 商户订单号
     */
    close(tradeNo) {
        let params = {
            appid: this.app.config.app_id,
            out_trade_no: tradeNo,
        };
        return this.request(this.wrap('pay/closeorder'), params);
    }
}
exports.default = OrderClient;
