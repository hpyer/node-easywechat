'use strict';

import BaseClient from '../../Core/BaseClient';

export default class LicenseAccountClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 激活帐号
   * @see https://developer.work.weixin.qq.com/document/path/95553
   * @param activeCode 帐号激活码
   * @param corpId 激活码所属企业corpid
   * @param userId 待绑定激活的企业成员userid 。只支持加密的userid
   * @returns
   */
  async active(activeCode: string, corpId: string, userId: string): Promise<string>
  {
    let params = {
      active_code: activeCode,
      corpid: corpId,
      userid: userId,
    };
    return this.httpPostJson('cgi-bin/license/active_account', params);
  }

  /**
   * 批量激活帐号
   * @see https://developer.work.weixin.qq.com/document/path/95553#批量激活帐号
   * @param corpId 激活码所属企业corpid
   * @param activeList 待绑定激活的企业成员userid 。只支持加密的userid
   * @returns
   */
  async batchActive(corpId: string, activeList: any[]): Promise<string>
  {
    let params = {
      corpid: corpId,
      active_list: activeList,
    };
    return this.httpPostJson('cgi-bin/license/batch_active_account', params);
  }

  /**
   * 获取激活码详情
   * @see https://developer.work.weixin.qq.com/document/path/95552
   * @param corpId 企业id，只支持加密的corpid
   * @param activeCode 激活码
   * @returns
   */
  getActiveCodeInfo(corpId: string, activeCode: string): Promise<string>
  {
    let params = {
      corpid: corpId,
      active_code: activeCode,
    };
    return this.httpPostJson('cgi-bin/license/get_active_info_by_code', params);
  }

  /**
   * 批量获取激活码详情
   * @see https://developer.work.weixin.qq.com/document/path/95552#批量获取激活码详情
   * @param corpId 要查询的企业的corpid，只支持加密的corpid
   * @param activeCodeList 激活码列表，最多不超过1000个
   * @returns
   */
  batchGetActiveCodeInfo(corpId: string, activeCodeList: string[]): Promise<string>
  {
    let params = {
      corpid: corpId,
      active_code_list: activeCodeList,
    };
    return this.httpPostJson('cgi-bin/license/batch_get_active_info_by_code', params);
  }

  /**
   * 获取企业的帐号列表
   * @see https://developer.work.weixin.qq.com/document/path/95544
   * @param corpId 企业corpid ，只支持加密的corpid
   * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   * @param limit 返回的最大记录数，整型，最大值1000，默认值500
   * @returns
   */
  list(corpId: string, cursor: string = null, limit: number = 500): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/list_actived_account', {
      corpid: corpId,
      cursor,
      limit,
    });
  }

  /**
   * 获取成员的激活详情
   * @see https://developer.work.weixin.qq.com/document/path/95555
   * @param corpId 企业corpid ，只支持加密的corpid
   * @param userid 订单id
   * @returns
   */
  getActiveAccountInfo(corpId: string, userid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/get_active_info_by_user', {
      cropid: corpId,
      order_id: userid,
    });
  }

  /**
   * 帐号继承
   * @see https://developer.work.weixin.qq.com/document/path/95673
   * @param corpId 企业id，只支持加密的corpid
   * @param transferList 转移成员列表
   * @returns
   */
  batchTransfer(corpId: string, transferList: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/batch_transfer_license', {
      corpid: corpId,
      transfer_list: transferList,
    });
  }

  /**
   * 分配激活码给下游企业
   * @see https://developer.work.weixin.qq.com/document/path/96059
   * @param from 上游企业corpid。支持明文或者密文的corpid
   * @param to 下游企业corpid。支持明文或者密文的corpid
   * @param shareList 分享的接口许可列表。单次分享激活码不可超过1000个，累计分享给同一下游企业的激活码总数不可超过上下游通讯录中该下游企业人数的2倍
   * @returns
   */
  batchShareActiveCode(from: string, to: string, shareList: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/batch_share_active_code', {
      from_corpid: from,
      to_corpid: to,
      share_list: shareList,
    });
  }

}
