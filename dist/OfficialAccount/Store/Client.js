'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    categories() {
        return this.httpGet('wxa/get_merchant_category');
    }
    districts() {
        return this.httpGet('wxa/get_district');
    }
    searchFromMap(districtId, keyword) {
        return this.httpPostJson('wxa/search_map_poi', {
            districtid: districtId,
            keyword: keyword,
        });
    }
    getStatus() {
        return this.httpPostJson('wxa/get_merchant_audit_info');
    }
    createMerchant(info) {
        return this.httpPostJson('wxa/apply_merchant', info);
    }
    updateMerchant(info) {
        return this.httpPostJson('wxa/modify_merchant', info);
    }
    createFromMap(info) {
        return this.httpPostJson('wxa/create_map_poi', info);
    }
    create(info) {
        return this.httpPostJson('wxa/add_store', info);
    }
    update(poiId, info) {
        info['poi_id'] = poiId;
        return this.httpPostJson('wxa/add_store', info);
    }
    get(poiId) {
        return this.httpPostJson('wxa/get_store_info', {
            poi_id: poiId,
        });
    }
    list(offset = 0, limit = 10) {
        return this.httpPostJson('wxa/get_store_list', {
            offset,
            limit,
        });
    }
    delete(poiId) {
        return this.httpPostJson('wxa/del_store', {
            poi_id: poiId,
        });
    }
}
exports.default = Client;
