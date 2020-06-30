'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class RealtimeLogClient extends BaseClient_1.default {
    search(date, beginTime, endTime, options = {}) {
        let params = Merge({
            date: date,
            begintime: beginTime,
            endtime: endTime,
        }, options);
        return this.httpGet('wxaapi/userlog/userlog_search', params);
    }
}
exports.default = RealtimeLogClient;
