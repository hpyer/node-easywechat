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
const StreamResponse_1 = __importDefault(require("../../Core/Http/StreamResponse"));
const Utils_1 = require("../../Core/Utils");
class BillClient extends BaseClient_1.default {
    /**
     * 下载对账单
     * @param date 对账单的日期，格式：20140603
     * @param type 账单类型，默认：ALL
     * @param options 其它参数
     */
    get(date, type = 'ALL', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            options['encoding'] = 'binary';
            let params = Utils_1.merge({
                appid: this.app.config.app_id,
                bill_date: date,
                bill_type: type,
            }, options);
            let res = yield this.requestRaw(this.wrap('pay/downloadbill'), params);
            let content = res.getContent().toString();
            if (content && content.indexOf('<xml>') === 0) {
                return yield this.parseXml(content);
            }
            return StreamResponse_1.default.buildFromResponse(res);
        });
    }
}
exports.default = BillClient;
