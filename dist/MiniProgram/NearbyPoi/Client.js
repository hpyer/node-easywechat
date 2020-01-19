'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    add(params = {}) {
        params = Merge({
            is_comm_nearby: '1',
            poi_id: '',
        }, params);
        return this.httpPostJson('wxa/addnearbypoi', params);
    }
    update(poiId, params = {}) {
        params = Merge({
            is_comm_nearby: '1',
            poi_id: poiId,
        }, params);
        return this.httpPostJson('wxa/addnearbypoi', params);
    }
    delete(poiId = '') {
        return this.httpPostJson('wxa/delnearbypoi', {
            poi_id: poiId,
        });
    }
    list(page, pageRows) {
        return this.httpGet('wxa/getnearbypoilist', {
            page: page,
            page_rows: pageRows,
        });
    }
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
exports.default = Client;
