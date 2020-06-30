'use strict';

import Jssdk from '../../BaseService/Jssdk/JssdkClient';
import { getTimestamp, randomString } from '../../Core/Utils';

export default class JssdkClient extends Jssdk
{

  async getTicket(refresh: boolean = false, type: string = 'wx_card'): Promise<any>
  {
    let cacheKey = `easywechat.basic_service.jssdk.ticket.${type}.${this.getAppId()}`;

    let cacher = this.app.getCache();

    if (!refresh && await cacher.has(cacheKey)) {
      return await cacher.get(cacheKey);
    }

    let res = await this.request({
      url: this.ticketEndpoint,
      method: 'get',
      qs: {
        type,
      },
    });
    await cacher.set(cacheKey, res, res['expires_in'] - 500);

    if (!cacher.has(cacheKey)) {
      throw new Error('Failed to cache jssdk ticket.');
    }

    return res;
  }

  async assign(cards: Array<object>): Promise<string>
  {
    let items = [];
    for (let i=0; i<cards.length; i++) {
      items.push(await this.attachExtension(cards[i]['card_id'], cards[i]));
    }
    return JSON.stringify(items);
  }

  async attachExtension(cardId: string, extension: object = {}): Promise<object>
  {
    let timestamp = getTimestamp();
    let nonce_str = randomString(6);
    let ticket = await this.getTicket()['ticket'];
    let ext = {
      timestamp,
      nonce_str,
      code: extension['code'] || '',
      openid: extension['openid'] || '',
      outer_id: extension['outer_id'] || '',
      balance: extension['balance'] || '',
      fixed_begintimestamp: extension['fixed_begintimestamp'] || '',
      outer_str: extension['outer_str'] || '',
    };

    ext['signature'] = this.dictionaryOrderSignature([ticket, timestamp, cardId, ext['code'] || '', ext['openid'] || '', nonce_str]);

    return {
      cardId,
      cardExt: JSON.stringify(ext),
    }
  }

}
