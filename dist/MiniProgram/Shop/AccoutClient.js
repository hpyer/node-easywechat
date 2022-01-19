'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class AccountClient extends BaseClient_1.default {
    /**
     * 获取商家类目列表
     * @returns
     */
    getCategoryList() {
        return this.httpPostJson('shop/account/get_category_list');
    }
    /**
     * 获取商家品牌列表
     * @returns
     */
    getBrandList() {
        return this.httpPostJson('shop/account/get_brand_list');
    }
    /**
     * 更新商家信息
     * @param path 小程序path
     * @param phone 客服联系方式
     * @returns
     */
    updateInfo(path, phone) {
        return this.httpPostJson('shop/account/update_info', {
            service_agent_path: path,
            service_agent_phone: phone,
        });
    }
    /**
     * 获取商家信息
     * @returns
     */
    getInfo() {
        return this.httpPostJson('shop/account/get_info');
    }
}
exports.default = AccountClient;
