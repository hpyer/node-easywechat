'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class RealtimeLogClient extends BaseClient_1.default {
    /**
     * 实时日志查询
     * @param date 日期，仅支持最近7天
     * @param beginTime 开始时间，必须是date指定日期的时间
     * @param endTime 结束时间，必须是date指定日期的时间
     * @param options 其它参数
     */
    search(date, beginTime, endTime, options = {}) {
        let params = Utils_1.merge({
            date: date,
            begintime: beginTime,
            endtime: endTime,
        }, options);
        return this.httpGet('wxaapi/userlog/userlog_search', params);
    }
}
exports.default = RealtimeLogClient;
