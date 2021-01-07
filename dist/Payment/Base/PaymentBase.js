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
class PaymentBase extends BaseClient_1.default {
    /**
     * 刷卡支付
     * @param params 支付订单参数
     */
    pay(params) {
        return __awaiter(this, void 0, void 0, function* () {
            params['appid'] = this.app.config.app_id;
            return yield this.request(this.wrap('pay/micropay'), params);
        });
    }
    /**
     * 付款码查询openid
     * @param auth_code 扫码支付付款码
     */
    authCodeToOpenid(auth_code) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request('tools/authcodetoopenid', {
                appid: this.app.config.app_id,
                auth_code,
            });
        });
    }
}
exports.default = PaymentBase;
