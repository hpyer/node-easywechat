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
        return this.safeRequest('mmpaymkttransfers/gethbinfo', params);
    }
    sendNormal(params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = Merge({}, params, {
                wxappid: this.app['config'].app_id,
                total_num: 1,
                client_ip: params['client_ip'] || (yield this.getServerIp()),
            });
            return yield this.safeRequest('mmpaymkttransfers/sendredpack', params);
        });
    }
    sendGroup(params) {
        params = Merge({}, params, {
            wxappid: this.app['config'].app_id,
            amt_type: 'ALL_RAND',
        });
        return this.safeRequest('mmpaymkttransfers/sendgroupredpack', params);
    }
}
exports.default = Client;
