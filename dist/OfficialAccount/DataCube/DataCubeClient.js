'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class DataCubeClient extends BaseClient_1.default {
    /**
     * 获取用户增减数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userSummary(from, to) {
        return this.query('datacube/getusersummary', from, to);
    }
    /**
     * 获取累计用户数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userCumulate(from, to) {
        return this.query('datacube/getusercumulate', from, to);
    }
    /**
     * 获取图文群发每日数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    articleSummary(from, to) {
        return this.query('datacube/getarticlesummary', from, to);
    }
    /**
     * 获取图文群发总数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    articleTotal(from, to) {
        return this.query('datacube/getarticletotal', from, to);
    }
    /**
     * 获取图文统计数据, 最大时间跨度：3
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userReadSummary(from, to) {
        return this.query('datacube/getuserread', from, to);
    }
    /**
     * 获取图文统计分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userReadHourly(from, to) {
        return this.query('datacube/getuserreadhour', from, to);
    }
    /**
     * 获取图文分享转发数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userShareSummary(from, to) {
        return this.query('datacube/getusershare', from, to);
    }
    /**
     * 获取图文分享转发分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    userShareHourly(from, to) {
        return this.query('datacube/getusersharehour', from, to);
    }
    /**
     * 获取消息发送概况数据, 最大时间跨度：7
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageSummary(from, to) {
        return this.query('datacube/getupstreammsg', from, to);
    }
    /**
     * 获取消息发送分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageHourly(from, to) {
        return this.query('datacube/getupstreammsghour', from, to);
    }
    /**
     * 获取消息发送周数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageWeekly(from, to) {
        return this.query('datacube/getupstreammsgweek', from, to);
    }
    /**
     * 获取消息发送月数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageMonthly(from, to) {
        return this.query('datacube/getupstreammsgmonth', from, to);
    }
    /**
     * 获取消息发送分布数据, 最大时间跨度：15
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistSummary(from, to) {
        return this.query('datacube/getupstreammsgdist', from, to);
    }
    /**
     * 获取消息发送分布周数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistWeekly(from, to) {
        return this.query('datacube/getupstreammsgdistweek', from, to);
    }
    /**
     * 获取消息发送分布月数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    upstreamMessageDistMonthly(from, to) {
        return this.query('datacube/getupstreammsgdistmonth', from, to);
    }
    /**
     * 获取接口分析数据, 最大时间跨度：30
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    interfaceSummary(from, to) {
        return this.query('datacube/getinterfacesummary', from, to);
    }
    /**
     * 获取接口分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     */
    interfaceSummaryHourly(from, to) {
        return this.query('datacube/getinterfacesummaryhour', from, to);
    }
    /**
     * 获取普通卡券分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     */
    cardSummary(from, to, condSource = 0) {
        let ext = {
            cond_source: condSource,
        };
        return this.query('datacube/getcardbizuininfo', from, to, ext);
    }
    /**
     * 获取免费券分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     * @param cardId 卡券id
     */
    freeCardSummary(from, to, condSource = 0, cardId = '') {
        let ext = {
            cond_source: condSource,
            card_id: cardId,
        };
        return this.query('datacube/getcardcardinfo', from, to, ext);
    }
    /**
     * 获取会员卡分析分时数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param condSource 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据
     */
    memberCardSummary(from, to, condSource = 0) {
        let ext = {
            cond_source: condSource,
        };
        return this.query('datacube/getcardmembercardinfo', from, to, ext);
    }
    /**
     * 获取单张会员卡数据, 最大时间跨度：1
     * @param from 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错
     * @param to 结束日期，示例：2014-12-07。允许设置的最大值为昨日
     * @param cardId 卡券id
     */
    memberCardSummaryById(from, to, cardId) {
        let ext = {
            card_id: cardId,
        };
        return this.query('datacube/getcardmembercarddetail', from, to, ext);
    }
    query(api, from, to, ext = {}) {
        let params = Utils_1.merge({
            begin_date: from,
            end_date: to,
        }, ext);
        return this.httpPostJson(api, params);
    }
}
exports.default = DataCubeClient;
