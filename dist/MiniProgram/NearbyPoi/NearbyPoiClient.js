'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class NearbyPoiClient extends BaseClient_1.default {
    /**
     * 添加地点
     * @param params 地点信息
     */
    add(params = {}) {
        params = Utils_1.merge({
            is_comm_nearby: '1',
            poi_id: '',
        }, params);
        return this.httpPostJson('wxa/addnearbypoi', params);
    }
    /**
     * 更新地点
     * @param poiId 地点id
     * @param params 地点信息
     */
    update(poiId, params = {}) {
        params = Utils_1.merge({
            is_comm_nearby: '1',
            poi_id: poiId,
        }, params);
        return this.httpPostJson('wxa/addnearbypoi', params);
    }
    /**
     * 删除地点
     * @param poiId 地点id
     */
    delete(poiId = '') {
        return this.httpPostJson('wxa/delnearbypoi', {
            poi_id: poiId,
        });
    }
    /**
     * 地点列表
     * @param page 页码
     * @param pageRows 每页记录数
     */
    list(page, pageRows) {
        return this.httpGet('wxa/getnearbypoilist', {
            page: page,
            page_rows: pageRows,
        });
    }
    /**
     * 设置地点展示状态
     * @param poiId 地点id
     * @param status 0:不展示；1:展示
     */
    setVisibility(poiId = '', status) {
        if (!Utils_1.inArray(status, [0, 1, '0', '1'])) {
            throw new Error('status should be 0 or 1.');
        }
        return this.httpPostJson('wxa/setnearbypoishowstatus', {
            poi_id: poiId,
            status,
        });
    }
}
exports.default = NearbyPoiClient;
