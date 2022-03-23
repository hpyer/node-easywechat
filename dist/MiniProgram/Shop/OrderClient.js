'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class OrderClient extends BaseClient_1.default {
    /**
     * 检查场景值是否在支付校验范围内
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/check_scene.html
     * @param scene
     * @returns
     */
    sceneCheck(scene) {
        return this.httpPostJson('shop/scene/check', {
            scene,
        });
    }
    /**
     * 生成订单
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/add_order.html
     * @param order
     * @returns
     */
    add(order) {
        return this.httpPostJson('shop/order/add', order);
    }
    /**
     * 获取订单详情
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/get_order.html
     * @param openid 用户的openid
     * @param orderIds {order_id, out_order_id} 二选一
     * @returns
     */
    get(openid, orderIds) {
        return this.httpPostJson('shop/order/get', (0, Utils_1.merge)((0, Utils_1.merge)({}, orderIds), {
            openid,
        }));
    }
    /**
     * 获取订单列表
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/get_order_list.html
     * @param params 查询参数
     * @returns
     */
    getList(params) {
        return this.httpPostJson('shop/order/get_list', params);
    }
    /**
     * 同步订单支付结果
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/pay_order.html
     * @param object
     * @returns
     */
    pay(params) {
        return this.httpPostJson('shop/order/pay', params);
    }
}
exports.default = OrderClient;
