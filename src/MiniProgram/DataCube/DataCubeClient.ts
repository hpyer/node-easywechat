'use strict';

import BaseClient from '../../Core/BaseClient';

export default class DataCubeClient extends BaseClient
{

  summaryTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailysummarytrend', from, to);
  }

  dailyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailyvisittrend', from, to);
  }

  weeklyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidweeklyvisittrend', from, to);
  }

  monthlyVisitTrend(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidmonthlyvisittrend', from, to);
  }

  visitDistribution(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidvisitdistribution', from, to);
  }

  dailyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappiddailyretaininfo', from, to);
  }

  weeklyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidweeklyretaininfo', from, to);
  }

  monthlyRetainInfo(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidmonthlyretaininfo', from, to);
  }

  visitPage(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getweanalysisappidvisitpage', from, to);
  }

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
