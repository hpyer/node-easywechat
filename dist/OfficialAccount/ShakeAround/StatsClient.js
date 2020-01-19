'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class StatsClient extends Client_1.default {
    deviceSummary(deviceIdentifier, beginTime, endTime) {
        return this.httpPostJson('shakearound/statistics/device', {
            device_identifier: deviceIdentifier,
            begin_date: beginTime,
            end_date: endTime,
        });
    }
    devicesSummary(timestamp, pageIndex) {
        return this.httpPostJson('shakearound/statistics/devicelist', {
            date: timestamp,
            page_index: pageIndex,
        });
    }
    pageSummary(pageId, beginTime, endTime) {
        return this.httpPostJson('shakearound/statistics/page', {
            page_id: pageId,
            begin_date: beginTime,
            end_date: endTime,
        });
    }
    pagesSummary(timestamp, pageIndex) {
        return this.httpPostJson('shakearound/statistics/pagelist', {
            date: timestamp,
            page_index: pageIndex,
        });
    }
}
exports.default = StatsClient;
