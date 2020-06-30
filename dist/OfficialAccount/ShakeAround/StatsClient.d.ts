import Client from './Client';
export default class StatsClient extends Client {
    /**
     * 以设备为维度的数据统计
     * @param deviceIdentifier 设备标识
     * @param beginTime 起始日期时间戳，单位：秒
     * @param endTime 结束日期时间戳，最长时间跨度为30天，单位：秒
     */
    deviceSummary(deviceIdentifier: object, beginTime: number, endTime: number): Promise<any>;
    /**
     * 批量查询设备统计数据
     * @param timestamp 查询日期时间戳，单位；秒。只能查询最近90天内的数据，且一次只能查询一天
     * @param pageIndex 查询的结果页序号
     */
    devicesSummary(timestamp: number, pageIndex: number): Promise<any>;
    /**
     * 以页面为维度的数据统计
     * @param pageId 页面id
     * @param beginTime 起始日期时间戳，单位：秒
     * @param endTime 结束日期时间戳，最长时间跨度为30天，只能查询最近90天的数据，单位：秒
     */
    pageSummary(pageId: number, beginTime: number, endTime: number): Promise<any>;
    /**
     * 批量查询页面统计数据
     * @param timestamp 查询日期时间戳，单位；秒。只能查询最近90天内的数据，且一次只能查询一天
     * @param pageIndex 查询的结果页序号
     */
    pagesSummary(timestamp: number, pageIndex: number): Promise<any>;
}
