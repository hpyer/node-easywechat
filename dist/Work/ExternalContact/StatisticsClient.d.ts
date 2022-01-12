import BaseClient from '../../Core/BaseClient';
export default class StatisticsClient extends BaseClient {
    /**
     * 获取「联系客户统计」数据
     * @see https://work.weixin.qq.com/api/doc/90000/90135/92132
     * @param userIds
     * @param from
     * @param to
     * @returns
     */
    userBehavior(userIds: string[], from: string, to: string): Promise<any>;
    /**
     * 获取「群聊数据统计」数据（按群主聚合的方式）
     * @see https://developer.work.weixin.qq.com/document/path/92133#%E6%8C%89%E7%BE%A4%E4%B8%BB%E8%81%9A%E5%90%88%E7%9A%84%E6%96%B9%E5%BC%8F
     * @param params
     * @returns
     */
    groupChatStatistic(params: object): Promise<any>;
    /**
     * 获取「群聊数据统计」数据（按自然日聚合的方式）
     * @see https://developer.work.weixin.qq.com/document/path/92133#%E6%8C%89%E8%87%AA%E7%84%B6%E6%97%A5%E8%81%9A%E5%90%88%E7%9A%84%E6%96%B9%E5%BC%8F
     * @param dayBeginTime
     * @param dayEndTime
     * @param userIds
     * @returns
     */
    groupChatStatisticGroupByDay(dayBeginTime: number, dayEndTime: number, userIds: string[]): Promise<any>;
}
