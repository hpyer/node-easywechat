'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class ExpressClient extends BaseClient_1.default {
    /**
     * 获取支持的快递公司列表
     */
    listProviders() {
        return this.httpGet('cgi-bin/express/business/delivery/getall');
    }
    /**
     * 生成运单
     * @param params 订单信息
     */
    createWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/add', params);
    }
    /**
     * 取消运单
     * @param params 订单信息
     */
    deleteWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/cancel', params);
    }
    /**
     * 获取运单数据
     * @param params 订单信息
     */
    getWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/get', params);
    }
    /**
     * 查询运单轨迹
     * @param params 订单信息
     */
    getWaybillTrack(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/path/get', params);
    }
    /**
     * 获取电子面单余额
     * @param deliveryId 快递公司ID
     * @param bizId 快递公司客户编码
     */
    getBalance(deliveryId = '', bizId = '') {
        return this.httpPostJson('cgi-bin/express/business/quota/get', {
            delivery_id: deliveryId,
            biz_id: bizId,
        });
    }
    /**
     * 绑定打印员
     * @param openid 用户openid
     */
    bindPrinter(openid = '') {
        return this.httpPostJson('cgi-bin/express/business/printer/update', {
            update_type: 'bind',
            openid: openid,
        });
    }
    /**
     * 解绑打印员
     * @param openid 用户openid
     */
    unbindPrinter(openid = '') {
        return this.httpPostJson('cgi-bin/express/business/printer/update', {
            update_type: 'unbind',
            openid: openid,
        });
    }
}
exports.default = ExpressClient;
