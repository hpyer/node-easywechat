import BaseClient from '../../Core/BaseClient';
export default class DataCubeClient extends BaseClient {
    /**
     * 获取用户增减数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userSummary(from: string, to: string): Promise<any>;
    /**
     * 获取累计用户数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userCumulate(from: string, to: string): Promise<any>;
    /**
     * 获取图文群发每日数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    articleSummary(from: string, to: string): Promise<any>;
    /**
     * 获取图文群发总数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    articleTotal(from: string, to: string): Promise<any>;
    /**
     * 获取图文统计数据, 最大时间跨度：3
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userReadSummary(from: string, to: string): Promise<any>;
    /**
     * 获取图文统计分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userReadHourly(from: string, to: string): Promise<any>;
    /**
     * 获取图文分享转发数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userShareSummary(from: string, to: string): Promise<any>;
    /**
     * 获取图文分享转发分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userShareHourly(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送概况数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageSummary(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageHourly(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送周数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageWeekly(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送月数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageMonthly(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送分布数据, 最大时间跨度：15
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistSummary(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送分布周数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistWeekly(from: string, to: string): Promise<any>;
    /**
     * 获取消息发送分布月数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistMonthly(from: string, to: string): Promise<any>;
    /**
     * 获取接口分析数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    interfaceSummary(from: string, to: string): Promise<any>;
    /**
     * 获取接口分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    interfaceSummaryHourly(from: string, to: string): Promise<any>;
    /**
     * 获取普通卡券分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     */
    cardSummary(from: string, to: string, condSource?: number): Promise<any>;
    /**
     * 获取免费券分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     * @param cardId 卡券id
     */
    freeCardSummary(from: string, to: string, condSource?: number, cardId?: string): Promise<any>;
    /**
     * 获取会员卡分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     */
    memberCardSummary(from: string, to: string, condSource?: number): Promise<any>;
    /**
     * 获取单张会员卡数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param cardId 卡券id
     */
    memberCardSummaryById(from: string, to: string, cardId: string): Promise<any>;
    protected query(api: string, from: string, to: string, ext?: object): Promise<any>;
}
