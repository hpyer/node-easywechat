'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class DeliveryClient extends BaseClient_1.default {
    /**
     * 获取快递公司列表
     * @returns
     */
    getCompanyList() {
        return this.httpPostJson('shop/delivery/get_company_list');
    }
    /**
     * 订单发货
     * @param order
     * @returns
     */
    send(order) {
        return this.httpPostJson('shop/delivery/send', order);
    }
    /**
     * 订单确认收货
     * @param order
     * @returns
     */
    recieve(order) {
        return this.httpPostJson('shop/delivery/recieve', order);
    }
}
exports.default = DeliveryClient;
