'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    unify(params, isContract = false) {
        if (!params['spbill_create_ip']) {
            params['spbill_create_ip'] = 'NATIVE' === params['trade_type'] ? this.getServerIp() : this.getClientIp();
        }
        params['appid'] = this.app['config'].app_id;
        params['notify_url'] = this.app['config'].app_id;
        if (isContract) {
            params['contract_appid'] = this.app['config'].app_id;
            params['contract_mchid'] = this.app['config'].mch_id;
            params['request_serial'] = params['request_serial'] || Utils_1.getTimestamp();
            params['contract_notify_url'] = params['contract_notify_url'] || this.app['config'].contract_notify_url;
        }
        return this.request(this.wrap('pay/contractorder'), params);
    }
    queryByOutTradeNumber(out_trade_no) {
        let params = {
            out_trade_no,
        };
        return this.query(params);
    }
    queryByTransactionId(transaction_id) {
        let params = {
            transaction_id,
        };
        return this.query(params);
    }
    query(params) {
        params['appid'] = this.app['config'].app_id;
        return this.request(this.wrap('pay/orderquery'), params);
    }
    close(tradeNo) {
        let params = {
            appid: this.app['config'].app_id,
            out_trade_no: tradeNo,
        };
        return this.request(this.wrap('pay/closeorder'), params);
    }
}
exports.default = Client;
