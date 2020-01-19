'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  userSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getusersummary', from, to);
  }

  userCumulate(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getusercumulate', from, to);
  }

  articleSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getarticlesummary', from, to);
  }

  articleTotal(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getarticletotal', from, to);
  }

  userReadSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getuserread', from, to);
  }

  userReadHourly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getuserreadhour', from, to);
  }

  userShareSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getusershare', from, to);
  }

  userShareHourly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getusersharehour', from, to);
  }

  upstreamMessageSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsg', from, to);
  }

  upstreamMessageHourly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsghour', from, to);
  }

  upstreamMessageWeekly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsgweek', from, to);
  }

  upstreamMessageMonthly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsgmonth', from, to);
  }

  upstreamMessageDistSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsgdist', from, to);
  }

  upstreamMessageDistWeekly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsgdistweek', from, to);
  }

  upstreamMessageDistMonthly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getupstreammsgdistmonth', from, to);
  }

  interfaceSummary(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getinterfacesummary', from, to);
  }

  interfaceSummaryHourly(from: string, to: string): Promise<any>
  {
    return this.query('datacube/getinterfacesummaryhour', from, to);
  }

  cardSummary(from: string, to: string, condSource: number = 0): Promise<any>
  {
    let ext = {
      cond_source: condSource,
    }
    return this.query('datacube/getcardbizuininfo', from, to, ext);
  }

  freeCardSummary(from: string, to: string, condSource: number = 0, cardId: string = ''): Promise<any>
  {
    let ext = {
      cond_source: condSource,
      card_id: cardId,
    }
    return this.query('datacube/getcardcardinfo', from, to, ext);
  }

  memberCardSummary(from: string, to: string, condSource: number = 0): Promise<any>
  {
    let ext = {
      cond_source: condSource,
    }
    return this.query('datacube/getcardmembercardinfo', from, to, ext);
  }

  memberCardSummaryById(from: string, to: string, cardId: string): Promise<any>
  {
    let ext = {
      card_id: cardId,
    }
    return this.query('datacube/getcardmembercarddetail', from, to, ext);
  }

  protected query(api: string, from: string, to: string, ext: object = {}): Promise<any>
  {
    let params = Merge({
      begin_date: from,
      end_date: to,
    }, ext);

    return this.httpPostJson(api, params);
  }

}
