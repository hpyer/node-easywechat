'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class CodeClient extends BaseClient
{

  /**
   * 上传小程序代码
   * @param templateId 代码模板 ID
   * @param extJson 第三方自定义的配置
   * @param version 代码版本号
   * @param description 代码描述
   */
  commit(templateId: string, extJson: string, version: string, description: string): Promise<any>
  {
    return this.httpPostJson('wxa/commit', {
      template_id: templateId,
      ext_json: extJson,
      user_version: version,
      user_desc: description,
    });
  }

  /**
   * 获取体验版二维码
   * @param path 扫码后直接进入的页面路径，可同时带上参数
   */
  getQrCode(path: string): Promise<any>
  {
    return this.requestRaw({
      url: 'wxa/get_qrcode',
      method: 'GET',
      qs: {
        path,
      },
    });
  }

  /**
   * 获取审核时可填写的类目信息
   */
  getCategory(): Promise<any>
  {
    return this.httpGet('wxa/get_category');
  }

  /**
   * 获取已上传的代码的页面列表
   */
  getPage(): Promise<any>
  {
    return this.httpGet('wxa/get_page');
  }

  /**
   * 提交审核
   */
  submitAudit(itemList: Array<string>, feedbackInfo: string = null, feedbackStuff: string = null): Promise<any>
  {
    return this.httpPostJson('wxa/submit_audit', {
      item_list: itemList,
      feedback_info: feedbackInfo,
      feedback_stuff: feedbackStuff,
    });
  }

  /**
   * 查询指定发布审核单的审核状态
   * @param auditId 提交审核时获得的审核 id
   */
  getAuditStatus(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/get_auditstatus', {
      auditid: auditId,
    });
  }

  /**
   * 查询最新一次提交的审核状态
   */
  getLatestAuditStatus(): Promise<any>
  {
    return this.httpGet('wxa/get_latest_auditstatus');
  }

  /**
   * 发布已通过审核的小程序
   */
  release(): Promise<any>
  {
    return this.httpPostJson('wxa/release');
  }

  /**
   * 撤回当前审核
   */
  withdrawAudit(): Promise<any>
  {
    return this.httpGet('wxa/undocodeaudit');
  }

  /**
   * 版本回退
   */
  rollbackRelease(): Promise<any>
  {
    return this.httpGet('wxa/revertcoderelease');
  }

  /**
   * 修改小程序线上代码的可见状态
   * @param action 设置可访问状态，发布后默认可访问，close 为不可见，open 为可见
   */
  changeVisitStatus(action: string): Promise<any>
  {
    return this.httpPostJson('wxa/change_visitstatus', {
      action,
    });
  }

  /**
   * 分阶段发布
   * @param grayPercentage 灰度的百分比 1 ~ 100 的整数
   */
  grayRelease(grayPercentage: string): Promise<any>
  {
    return this.httpPostJson('wxa/grayrelease', {
      gray_percentage: grayPercentage,
    });
  }

  /**
   * 取消分阶段发布
   */
  revertGrayRelease(): Promise<any>
  {
    return this.httpGet('wxa/revertgrayrelease');
  }

  /**
   * 查询当前分阶段发布详情
   */
  getGrayRelease(): Promise<any>
  {
    return this.httpGet('wxa/getgrayreleaseplan');
  }

  /**
   * 查询当前设置的最低基础库版本及各版本用户占比
   */
  getSupportVersion(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getweappsupportversion');
  }

  /**
   * 设置最低基础库版本
   * @param version 为已发布的基础库版本号
   */
  setSupportVersion(version: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/setweappsupportversion', {
      version,
    });
  }

  /**
   * 查询服务商的当月提审限额（quota）和加急次数
   */
  queryQuota(): Promise<any>
  {
    return this.httpGet('wxa/queryquota');
  }

  /**
   * 加急审核申请
   * @param auditId 审核ID
   */
  speedupAudit(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/speedupaudit', {
      auditid: auditId,
    });
  }

}
