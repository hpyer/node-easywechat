'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  listProviders(): Promise<any>
  {
    return this.httpGet('cgi-bin/express/business/delivery/getall');
  }

  createWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/add', params);
  }

  deleteWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/cancel', params);
  }

  getWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/get', params);
  }

  getWaybillTrack(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/path/get', params);
  }

  getBalance(deliveryId: string = '', bizId: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/quota/get', {
      delivery_id: deliveryId,
      biz_id: bizId,
    });
  }

  bindPrinter(openid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/printer/update', {
      update_type: 'bind',
      openid: openid,
    });
  }

  unbindPrinter(openid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/printer/update', {
      update_type: 'unbind',
      openid: openid,
    });
  }

}
