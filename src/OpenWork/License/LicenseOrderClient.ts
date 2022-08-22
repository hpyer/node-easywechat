'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class LicenseOrderClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 下单购买帐号
   * @see https://developer.work.weixin.qq.com/document/path/95644
   * @param corpId 企业id，只支持加密的corpid
   * @param data 订单信息
   * @returns
   */
  async create(corpId: string, data: object): Promise<string>
  {
    let params = merge({}, data);
    params['corpid'] = corpId;
    return this.httpPostJson('cgi-bin/license/create_new_order', params);
  }

  /**
   * 下单续期帐号
   * @see https://developer.work.weixin.qq.com/document/path/95646
   * @param corpId 企业id，只支持加密的corpid
   * @param data 订单信息
   * @returns
   */
  renew(corpId: string, data: object): Promise<string>
  {
    let params = merge({}, data);
    params['corpid'] = corpId;
    return this.httpPostJson('cgi-bin/license/create_renew_order_job', params);
  }

  /**
   * 提交续期订单
   * @see https://developer.work.weixin.qq.com/document/path/95646#提交续期订单
   * @param jobId 任务id
   * @param buyerUserId 下单人。服务商企业内成员userid。该userid必须登录过企业微信，并且企业微信已绑定微信
   * @param accountDurationMonths 购买的月数，每个月按照31天计算。最多购买36个月。(若企业为服务商测试企业，每次续期只能续期1个月)
   * @returns
   */
  submitJob(jobId: string, buyerUserId: string, accountDurationMonths: number): Promise<string>
  {
    let params = {
      jobid: jobId,
      buyer_userid: buyerUserId,
      account_duration: {
        months: accountDurationMonths,
      },
    };
    return this.httpPostJson('cgi-bin/license/submit_order_job', params);
  }

  /**
   * 获取订单列表
   * @see https://developer.work.weixin.qq.com/document/path/95647
   * @param corpId 企业id，只支持加密的corpid。若指定corpid且corpid为服务商测试企业，则返回的订单列表为测试订单列表。否则只返回正式订单列表
   * @param endTime 开始时间,下单时间。可不填。但是不能单独指定该字段，startTime跟endTime必须同时指定。
   * @param endTime 结束时间,下单时间。起始时间跟结束时间不能超过31天。可不填。但是不能单独指定该字段，startTime跟endTime必须同时指定。
   * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   * @param limit 返回的最大记录数，整型，最大值1000，默认值500
   * @returns
   */
  list(corpId: string, startTime: number = null, endTime: number = null, cursor: string = null, limit: number = 500): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/list_order', {
      corpid: corpId,
      start_time: startTime,
      end_time: endTime,
      cursor,
      limit,
    });
  }

  /**
   * 获取订单详情
   * @see https://developer.work.weixin.qq.com/document/path/95648
   * @param orderId 订单id
   * @returns
   */
  get(orderId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/get_order', {
      order_id: orderId,
    });
  }

  /**
   * 获取订单中的帐号列表
   * @see https://developer.work.weixin.qq.com/document/path/95649
   * @param orderId 订单号
   * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   * @param limit 返回的最大记录数，整型，最大值1000，默认值500
   * @returns
   */
  getAccountList(orderId: string, cursor: string = null, limit: number = 500): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/list_order_account', {
      order_id: orderId,
      cursor,
      limit,
    });
  }

  /**
   * 取消订单
   * @see https://developer.work.weixin.qq.com/document/path/96106
   * @param corpId 企业id，只支持加密的corpid
   * @param orderId 订单号
   * @returns
   */
  cancel(corpId: string, orderId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/cancel_order', {
      corpid: corpId,
      order_id: orderId,
    });
  }

}
