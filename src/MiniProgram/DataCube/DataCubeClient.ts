'use strict';

import BaseClient from '../../Core/BaseClient';

export default class DataCubeClient extends BaseClient
{

  /**
   * 概况趋势
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313
   */
  summaryTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailysummarytrend', from, to);
  }

  /**
   * 访问日趋势
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313
   */
  dailyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailyvisittrend', from, to);
  }

  /**
   * 访问周趋势
   * @param from 开始日期，为周一日期，格式：20170313
   * @param to 结束日期，为周日日期，限定查询一周数据，格式：20170313
   */
  weeklyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidweeklyvisittrend', from, to);
  }

  /**
   * 访问月趋势
   * @param from 开始日期，为自然月第一天，格式：20170313
   * @param to 结束日期，为自然月最后一天，限定查询一个月的数据，格式：20170313
   */
  monthlyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidmonthlyvisittrend', from, to);
  }

  /**
   * 访问分布
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313
   */
  visitDistribution(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidvisitdistribution', from, to);
  }

  /**
   * 访问日留存
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313
   */
  dailyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailyretaininfo', from, to);
  }

  /**
   * 访问周留存
   * @param from 开始日期，为周一日期，格式：20170313
   * @param to 结束日期，为周日日期，格式：20170313
   */
  weeklyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidweeklyretaininfo', from, to);
  }

  /**
   * 访问月留存
   * @param from 开始日期，为自然月第一天，格式：20170313
   * @param to 结束日期，为自然月最后一天，限定查询一个月数据，格式：20170313
   */
  monthlyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidmonthlyretaininfo', from, to);
  }

  /**
   * 访问页面
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313
   */
  visitPage(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidvisitpage', from, to);
  }

  /**
   * 用户画像分布数据
   * @param from 开始日期，格式：20170313
   * @param to 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，允许的最大值为昨天，格式：20170313
   */
  userPortrait(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiduserportrait', from, to);
  }

  protected query(api: string, from: string, to: string): Promise<any>
  {
    let params = {
      begin_date: from,
      end_date: to,
    };

    return this.httpPostJson(api, params);
  }

}
