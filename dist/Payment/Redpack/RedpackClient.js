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
class RedpackClient extends BaseClient_1.default {
    /**
     * 查询红包信息
     * @param mchBillno 商户订单号
     */
    info(mchBillno) {
        let data = Utils_1.isObject(mchBillno) ? mchBillno : {
            mch_billno: mchBillno
        };
        let params = Utils_1.merge(Utils_1.merge({}, data), {
            appid: this.app.config.app_id,
            bill_type: 'MCHT',
        });
        return this.safeRequest('mmpaymkttransfers/gethbinfo', params);
    }
    /**
     * 发送普通红包
     * @param data 红包参数
     */
    sendNormal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Utils_1.merge(Utils_1.merge({}, data), {
                wxappid: this.app.config.app_id,
                total_num: 1,
                client_ip: data['client_ip'] || (yield this.getServerIp()),
            });
            return yield this.safeRequest('mmpaymkttransfers/sendredpack', params);
        });
    }
    /**
     * 发送裂变红包
     * @param params 红包参数
     */
    sendGroup(params) {
        params = Utils_1.merge(params, {
            wxappid: this.app.config.app_id,
            amt_type: 'ALL_RAND',
        });
        return this.safeRequest('mmpaymkttransfers/sendgroupredpack', params);
    }
}
exports.default = RedpackClient;
