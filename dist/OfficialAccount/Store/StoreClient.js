'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class StoreClient extends BaseClient_1.default {
    /**
     * 获取门店小程序类目
     */
    categories() {
        return this.httpGet('wxa/get_merchant_category');
    }
    /**
     * 从腾讯地图拉取省市区信息
     */
    districts() {
        return this.httpGet('wxa/get_district');
    }
    /**
     * 在腾讯地图中搜索门店
     * @param districtId 省市区信息id
     * @param keyword 搜索的关键词
     */
    searchFromMap(districtId, keyword) {
        return this.httpPostJson('wxa/search_map_poi', {
            districtid: districtId,
            keyword: keyword,
        });
    }
    /**
     * 查询门店小程序审核结果
     */
    getStatus() {
        return this.httpPostJson('wxa/get_merchant_audit_info');
    }
    /**
     * 创建门店小程序
     * @param info 详细信息
     */
    createMerchant(info) {
        return this.httpPostJson('wxa/apply_merchant', info);
    }
    /**
     * 修改门店小程序信息
     * @param info 详细信息
     */
    updateMerchant(info) {
        return this.httpPostJson('wxa/modify_merchant', info);
    }
    /**
     * 在腾讯地图中创建门店
     * @param info 详细信息
     */
    createFromMap(info) {
        return this.httpPostJson('wxa/create_map_poi', info);
    }
    /**
     * 添加门店
     * @param info 详细信息
     */
    create(info) {
        return this.httpPostJson('wxa/add_store', info);
    }
    /**
     * 更改门店
     * @param poiId 门店id
     * @param info 详细信息
     */
    update(poiId, info) {
        info['poi_id'] = poiId;
        return this.httpPostJson('wxa/update_store', info);
    }
    /**
     * 获取单个门店信息
     * @param poiId 门店id
     */
    get(poiId) {
        return this.httpPostJson('wxa/get_store_info', {
            poi_id: poiId,
        });
    }
    /**
     * 获取门店信息列表
     * @param offset 初始偏移位置，从0开始计数
     * @param limit 获取门店个数，默认：10
     */
    list(offset = 0, limit = 10) {
        return this.httpPostJson('wxa/get_store_list', {
            offset,
            limit,
        });
    }
    /**
     * 删除门店
     * @param poiId 门店id
     */
    delete(poiId) {
        return this.httpPostJson('wxa/del_store', {
            poi_id: poiId,
        });
    }
}
exports.default = StoreClient;
