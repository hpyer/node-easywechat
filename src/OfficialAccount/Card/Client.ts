'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString } from '../../Core/Utils';

export default class Client extends BaseClient
{

  protected url: string;

  protected ticketCacheKey: string;

  protected ticketCachePrefix: string = 'easywechat.official_account.card.api_ticket.';

  colors(): Promise<any>
  {
    return this.httpGet('card/getcolors');
  }

  categories(): Promise<any>
  {
    return this.httpGet('card/getapplyprotocol');
  }

  create(cardType: string = '', attributes: object): Promise<any>
  {
    return this.httpPostJson('card/create', {
      card: {
        card_type: cardType.toUpperCase(),
        [cardType.toLowerCase()]: attributes,
      }
    });
  }

  get(cardId: string = ''): Promise<any>
  {
    return this.httpPostJson('card/get', {
      card_id: cardId
    });
  }

  list(offset: number = 0, count: number = 10, statusList: string = 'CARD_STATUS_VERIFY_OK'): Promise<any>
  {
    return this.httpPostJson('card/batchget', {
      offset,
      count,
      status_list: statusList,
    });
  }

  update(cardId: string, type: string, attributes: object = {}): Promise<any>
  {
    return this.httpPostJson('card/update', {
      card_id: cardId,
      [type.toLowerCase()]: attributes,
    });
  }

  delete(cardId: string): Promise<any>
  {
    return this.httpPostJson('card/delete', {
      card_id: cardId,
    });
  }

  createQrCode(info: object): Promise<any>
  {
    return this.httpPostJson('card/qrcode/create', info);
  }

  async getQrCode(ticket: string): Promise<object>
  {
    let baseUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode';
    let params = {
      ticket,
    }
    let res = await this.requestRaw({
      baseUrl: '',
      url: baseUrl,
      method: 'GET',
      qs: params,
    });
    return {
      status: res.getStatusCode(),
      headers: res.getHeaders(),
      body: res.getContent(),
      url: baseUrl + '?' + buildQueryString(params),
    };
  }

  getQrCodeUrl(ticket: string): string
  {
    return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`;
  }

  createLandingPage(banner: string, pageTitle: string, canShare: Boolean, scene: string, cardList: Array<object>): Promise<any>
  {
    return this.httpPostJson('card/landingpage/create', {
      banner,
      page_title: pageTitle,
      can_share: canShare,
      scene,
      card_list: cardList,
    });
  }

  getHtml(cardId: string): Promise<any>
  {
    return this.httpPostJson('card/mpnews/gethtml', {
      card_id: cardId,
    });
  }

  setTestWhitelist(openids: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/testwhitelist/set', {
      openid: openids,
    });
  }

  setTestWhitelistByName(usernames: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/testwhitelist/set', {
      username: usernames,
    });
  }

  getUserCards(openid: string, cardId: string = ''): Promise<any>
  {
    return this.httpPostJson('card/user/getcardlist', {
      openid,
      card_id: cardId,
    });
  }

  setPayCell(cardId: string, isOpen: Boolean = true): Promise<any>
  {
    return this.httpPostJson('card/paycell/set', {
      card_id: cardId,
      is_open: isOpen,
    });
  }

  increaseStock(cardId: string, amount: number): Promise<any>
  {
    return this.updateStock(cardId, amount, 'increase');
  }

  reduceStock(cardId: string, amount: number): Promise<any>
  {
    return this.updateStock(cardId, amount, 'reduce');
  }

  protected updateStock(cardId: string, amount: number, action: string = 'increase'): Promise<any>
  {
    let key = 'increase' === action ? 'increase_stock_value' : 'reduce_stock_value';

    return this.httpPostJson('card/modifystock', {
      card_id: cardId,
      [key]: Math.abs(amount),
    });
  }

}
