'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class SpuClient extends BaseClient_1.default {
    /**
     * 添加商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/add_spu.html
     * @param product
     * @returns
     */
    add(product) {
        return this.httpPostJson('shop/spu/add', product);
    }
    /**
     * 删除商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/del_spu.html
     * @param params
     * @returns
     */
    del(params) {
        return this.httpPostJson('shop/spu/del', params);
    }
    /**
     * 获取商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/get_spu.html
     * @param params
     * @returns
     */
    get(params) {
        return this.httpPostJson('shop/spu/get', params);
    }
    /**
     * 获取商品列表
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/get_spu_list.html
     * @param product
     * @param page
     * @returns
     */
    getList(product, page) {
        return this.httpPostJson('shop/spu/get_list', (0, Utils_1.merge)((0, Utils_1.merge)({}, product), page));
    }
    /**
     * 撤回商品审核
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/del_spu_audit.html
     * @param params
     * @returns
     */
    delAudit(params) {
        return this.httpPostJson('shop/spu/del_audit', params);
    }
    /**
     * 更新商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/update_spu.html
     * @param params
     * @returns
     */
    update(params) {
        return this.httpPostJson('shop/spu/update', params);
    }
    /**
     * 免审更新商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/update_spu_without_audit.html
     * @param params
     * @returns
     */
    updateWithoutAudit(params) {
        return this.httpPostJson('shop/spu/update_without_audit', params);
    }
    /**
     * 上架商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/listing_spu.html
     * @param params
     * @returns
     */
    listing(params) {
        return this.httpPostJson('shop/spu/listing', params);
    }
    /**
     * 下架商品
     * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/SPU/delisting_spu.html
     * @param params
     * @returns
     */
    delisting(params) {
        return this.httpPostJson('shop/spu/delisting', params);
    }
}
exports.default = SpuClient;
