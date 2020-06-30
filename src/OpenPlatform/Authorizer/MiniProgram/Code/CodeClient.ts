'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class CodeClient extends BaseClient
{

  commit(templateId: string, extJson: string, version: string, description: string): Promise<any>
  {
    return this.httpPostJson('wxa/commit', {
      template_id: templateId,
      ext_json: extJson,
      user_version: version,
      user_desc: description,
    });
  }

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

  getCategory(): Promise<any>
  {
    return this.httpGet('wxa/get_category');
  }

  getPage(): Promise<any>
  {
    return this.httpGet('wxa/get_page');
  }

  submitAudit(itemList: Array<string>, feedbackInfo: string = null, feedbackStuff: string = null): Promise<any>
  {
    return this.httpPostJson('wxa/submit_audit', {
      item_list: itemList,
      feedback_info: feedbackInfo,
      feedback_stuff: feedbackStuff,
    });
  }

  getAuditStatus(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/get_auditstatus', {
      auditid: auditId,
    });
  }

  getLatestAuditStatus(): Promise<any>
  {
    return this.httpGet('wxa/get_latest_auditstatus');
  }

  release(): Promise<any>
  {
    return this.httpPostJson('wxa/release');
  }

  withdrawAudit(): Promise<any>
  {
    return this.httpGet('wxa/undocodeaudit');
  }

  rollbackRelease(): Promise<any>
  {
    return this.httpGet('wxa/revertcoderelease');
  }

  changeVisitStatus(action: string): Promise<any>
  {
    return this.httpPostJson('wxa/change_visitstatus', {
      action,
    });
  }

  grayRelease(grayPercentage: string): Promise<any>
  {
    return this.httpPostJson('wxa/grayrelease', {
      gray_percentage: grayPercentage,
    });
  }

  revertGrayRelease(): Promise<any>
  {
    return this.httpGet('wxa/revertgrayrelease');
  }

  getGrayRelease(): Promise<any>
  {
    return this.httpGet('wxa/getgrayreleaseplan');
  }

  getSupportVersion(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getweappsupportversion');
  }

  setSupportVersion(version: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/setweappsupportversion', {
      version,
    });
  }

  queryQuota(): Promise<any>
  {
    return this.httpGet('wxa/queryquota');
  }

  speedupAudit(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/speedupaudit', {
      auditid: auditId,
    });
  }

}
