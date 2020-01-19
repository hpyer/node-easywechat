'use strict';

import BaseClient from '../../Core/BaseClient';

export default class SubMerchantClient extends BaseClient
{

  create(info: object): Promise<any>
  {
    let params = {
      info: {
        brand_name: info['brand_name'] || '',
        logo_url: info['logo_url'] || '',
        protocol: info['protocol'] || '',
        end_time: info['end_time'] || '',
        primary_category_id: info['primary_category_id'] || '',
        secondary_category_id: info['secondary_category_id'] || '',
        agreement_media_id: info['agreement_media_id'] || '',
        operator_media_id: info['operator_media_id'] || '',
        app_id: info['app_id'] || '',
      },
    }

    return this.httpPostJson('card/submerchant/submit', params);
  }

  update(merchantId: number, info: object): Promise<any>
  {
    let params = {
      info: {
        merchant_id: merchantId,
        brand_name: info['brand_name'] || '',
        logo_url: info['logo_url'] || '',
        protocol: info['protocol'] || '',
        end_time: info['end_time'] || '',
        primary_category_id: info['primary_category_id'] || '',
        secondary_category_id: info['secondary_category_id'] || '',
        agreement_media_id: info['agreement_media_id'] || '',
        operator_media_id: info['operator_media_id'] || '',
        app_id: info['app_id'] || '',
      },
    }

    return this.httpPostJson('card/submerchant/update', params);
  }

  get(merchantId: number): Promise<any>
  {
    return this.httpPostJson('card/submerchant/get', {
      merchant_id: merchantId,
    });
  }

  list(beginId: number = 0, limit: number = 50, status: string = 'CHECKING'): Promise<any>
  {
    return this.httpPostJson('card/submerchant/get', {
      begin_id: beginId,
      limit,
      status,
    });
  }

}
