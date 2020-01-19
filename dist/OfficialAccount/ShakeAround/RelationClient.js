'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class RelationClient extends Client_1.default {
    bindPages(deviceIdentifier, pageIds) {
        return this.httpPostJson('shakearound/device/bindpage', {
            device_identifier: deviceIdentifier,
            page_ids: pageIds,
        });
    }
    listByDeviceId(deviceIdentifier) {
        return this.httpPostJson('shakearound/relation/search', {
            type: 1,
            device_identifier: deviceIdentifier,
        });
    }
    listByPageId(pageId, begin, count) {
        return this.httpPostJson('shakearound/relation/search', {
            type: 2,
            page_id: pageId,
            begin,
            count,
        });
    }
}
exports.default = RelationClient;
