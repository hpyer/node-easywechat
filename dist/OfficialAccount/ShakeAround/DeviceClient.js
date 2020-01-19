'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class DeviceClient extends BaseClient_1.default {
    apply(data) {
        return this.httpPostJson('shakearound/device/applyid', data);
    }
    status(applyId) {
        return this.httpPostJson('shakearound/device/applystatus', {
            apply_id: applyId,
        });
    }
    update(deviceIdentifier, comment) {
        return this.httpPostJson('shakearound/device/update', {
            device_identifier: deviceIdentifier,
            comment,
        });
    }
    bindPoi(deviceIdentifier, poiId) {
        return this.httpPostJson('shakearound/device/bindlocation', {
            device_identifier: deviceIdentifier,
            poi_id: poiId,
        });
    }
    bindThirdPoi(deviceIdentifier, poiId, appId) {
        return this.httpPostJson('shakearound/device/bindlocation', {
            device_identifier: deviceIdentifier,
            poi_id: poiId,
            type: 2,
            poi_appid: appId,
        });
    }
    search(params) {
        return this.httpPostJson('shakearound/device/search', params);
    }
    listByIds(deviceIdentifiers) {
        return this.search({
            type: 1,
            device_identifiers: deviceIdentifiers,
        });
    }
    list(lastId, count) {
        return this.search({
            type: 2,
            last_seen: lastId,
            count,
        });
    }
    listByApplyId(applyId, lastId, count) {
        return this.search({
            type: 3,
            apply_id: applyId,
            last_seen: lastId,
            count,
        });
    }
}
exports.default = DeviceClient;
