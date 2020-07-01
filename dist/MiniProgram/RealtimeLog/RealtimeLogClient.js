'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class RealtimeLogClient extends BaseClient_1.default {
    /**
     * 实时日志查询
     * @param date 日期，仅支持最近7天
     * @param beginTime 开始时间，必须是date指定日期的时间
     * @param endTime 结束时间，必须是date指定日期的时间
     * @param options 其它参数
     */
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
