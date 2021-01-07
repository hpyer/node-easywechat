'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class StatsClient extends Client_1.default {
    /**
     * 以设备为维度的数据统计
     * @param deviceIdentifier 设备标识
     * @param beginTime 起始日期时间戳，单位：秒
     * @param endTime 结束日期时间戳，最长时间跨度为30天，单位：秒
     */
    deviceSummary(deviceIdentifier, beginTime, endTime) {
        return this.httpPostJson('shakearound/statistics/device', {
            device_identifier: deviceIdentifier,
            begin_date: beginTime,
            end_date: endTime,
        });
    }
    /**
     * 批量查询设备统计数据
     * @param timestamp 查询日期时间戳，单位；秒。只能查询最近90天内的数据，且一次只能查询一天
     * @param pageIndex 查询的结果页序号
     */
    devicesSummary(timestamp, pageIndex) {
        return this.httpPostJson('shakearound/statistics/devicelist', {
            date: timestamp,
            page_index: pageIndex,
        });
    }
    /**
     * 以页面为维度的数据统计
     * @param pageId 页面id
     * @param beginTime 起始日期时间戳，单位：秒
     * @param endTime 结束日期时间戳，最长时间跨度为30天，只能查询最近90天的数据，单位：秒
     */
    pageSummary(pageId, beginTime, endTime) {
        return this.httpPostJson('shakearound/statistics/page', {
            page_id: pageId,
            begin_date: beginTime,
            end_date: endTime,
        });
    }
    /**
     * 批量查询页面统计数据
     * @param timestamp 查询日期时间戳，单位；秒。只能查询最近90天内的数据，且一次只能查询一天
     * @param pageIndex 查询的结果页序号
     */
    pagesSummary(timestamp, pageIndex) {
        return this.httpPostJson('shakearound/statistics/pagelist', {
            date: timestamp,
            page_index: pageIndex,
        });
    }
}
exports.default = StatsClient;
