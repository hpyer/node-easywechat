'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class AftersaleClient extends BaseClient_1.default {
    /**
     * 创建售后
     * @param aftersale 售后数据
     * @returns
     */
    add(aftersale) {
        return this.httpPostJson('shop/aftersale/add', aftersale);
    }
    /**
     * 获取订单下售后单
     * @param order 订单数据
     * @returns
     */
    get(order) {
        return this.httpPostJson('shop/aftersale/get', order);
    }
    /**
     * 更新售后
     * @param order 订单数据
     * @param aftersale 售后数据
     * @returns
     */
    update(order, aftersale) {
        return this.httpPostJson('shop/aftersale/update', (0, Utils_1.merge)((0, Utils_1.merge)({}, order), aftersale));
    }
}
exports.default = AftersaleClient;
