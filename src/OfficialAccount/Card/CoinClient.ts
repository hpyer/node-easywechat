'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CoinClient extends BaseClient
{

  activate(): Promise<any>
  {
    return this.httpGet('card/pay/activate');
  }

  summary(): Promise<any>
  {
    return this.httpGet('card/pay/getcoinsinfo');
  }

  getPrice(cardId: string = '', quantity: number): Promise<any>
  {
    return this.httpPostJson('card/pay/getpayprice', {
      card_id: cardId,
      quantity,
    });
  }

  recharge(count: number): Promise<any>
  {
    return this.httpPostJson('card/pay/recharge', {
      coin_count: count,
    });
  }

  order(orderId: string): Promise<any>
  {
    return this.httpPostJson('card/pay/getorder', {
      order_id: orderId,
    });
  }

  orders(filters: object): Promise<any>
  {
    return this.httpPostJson('card/pay/getorderlist', filters);
  }

  confirm(cardId: string = '', orderId: string, quantity: number): Promise<any>
  {
    return this.httpPostJson('card/pay/confirm', {
      card_id: cardId,
      order_id: orderId,
      quantity,
    });
  }

}
