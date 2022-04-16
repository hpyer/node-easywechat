'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class ContactWayClient extends BaseClient
{

  /**
   * 配置客户联系「联系我」方式
   * @see https://developer.work.weixin.qq.com/document/path/92572#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E8%81%94%E7%B3%BB%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
   * @param type
   * @param scene
   * @param config
   * @returns
   */
  create(type: number, scene: number, config: object): Promise<any>
  {
    let params = merge({
      type,
      scene,
    }, config);
    return this.httpPostJson('cgi-bin/externalcontact/add_contact_way', params);
  }

  /**
   * 获取企业已配置的「联系我」方式
   * @see https://developer.work.weixin.qq.com/document/path/92572#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
   * @param configId
   * @returns
   */
  get(configId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_contact_way', {
      config_id: configId,
    });
  }

  /**
   * 更新企业已配置的「联系我」方式
   * @see https://developer.work.weixin.qq.com/document/path/92572#%E6%9B%B4%E6%96%B0%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
   * @param configId
   * @param config
   * @returns
   */
  update(configId: string, config: object): Promise<any>
  {
    let params = merge({
      config_id: configId,
    }, config);

    return this.httpPostJson('cgi-bin/externalcontact/update_contact_way', params);
  }

  /**
   * 删除企业已配置的「联系我」方式
   * @see https://developer.work.weixin.qq.com/document/path/92572#%E5%88%A0%E9%99%A4%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E6%96%B9%E5%BC%8F
   * @param configId
   * @returns
   */
  delete(configId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/del_contact_way', {
      config_id: configId,
    });
  }

  /**
   * 获取企业已配置的「联系我」列表
   * @see https://developer.work.weixin.qq.com/document/path/92572#%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E5%B7%B2%E9%85%8D%E7%BD%AE%E7%9A%84%E3%80%8C%E8%81%94%E7%B3%BB%E6%88%91%E3%80%8D%E5%88%97%E8%A1%A8
   * @param cursor
   * @param limit
   * @param startTime
   * @param endTime
   * @returns
   */
  list(cursor: string = '', limit: number = 100, startTime: number = null, endTime: number = null): Promise<any>
  {
    let params = {
      cursor,
      limit,
    };
    if (startTime) {
      params['start_time'] = startTime;
    }
    if (endTime) {
      params['end_time'] = endTime;
    }
    return this.httpPostJson('cgi-bin/externalcontact/list_contact_way', params);
  }

}
