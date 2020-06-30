'use strict';

import BaseClient from '../../Core/BaseClient';

export default class SubMerchantClient extends BaseClient
{

  /**
   * 添加子商户
   * @param info 商户信息
   */
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

  /**
   * 更新子商户
   * @param merchantId 商户id
   * @param info 商户信息
   */
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

  /**
   * 获取子商户信息
   * @param merchantId 子商户id
   */
  get(merchantId: number): Promise<any>
  {
    return this.httpPostJson('card/submerchant/get', {
      merchant_id: merchantId,
    });
  }

  /**
   * 获取子商户列表
   * @param beginId 起始的子商户id，一个母商户公众号下唯一，默认：0
   * @param limit 拉取的子商户的个数，最大值为100，默认：50
   * @param status 子商户审核状态。默认：CHECKING
   */
  list(beginId: number = 0, limit: number = 50, status: string = 'CHECKING'): Promise<any>
  {
    return this.httpPostJson('card/submerchant/get', {
      begin_id: beginId,
      limit,
      status,
    });
  }

}
