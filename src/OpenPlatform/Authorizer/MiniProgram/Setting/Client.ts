'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{

  getAllCategories(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getallcategories');
  }

  addCategories(categories: Array<object>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/addcategory', {
      categories: categories,
    });
  }

  deleteCategories(firstId: number, secondId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/deletecategory', {
      first: firstId,
      second: secondId,
    });
  }

  getCategories(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getcategory');
  }

  updateCategory(category: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/modifycategory', category);
  }

  setNickname(nickname: string, idCardMediaId: string = '', licenseMediaId: string = '', otherStuffs: Array<string> = []): Promise<any>
  {
    let params = {
      nick_name: nickname,
      id_card: idCardMediaId,
      license: licenseMediaId,
    };
    for (let i=0; i < otherStuffs.length; i++) {
      params['naming_other_stuff_' + (i + 1)] = otherStuffs[i];
    }
    return this.httpPostJson('wxa/setnickname', params);
  }

  getNicknameAuditStatus(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/api_wxa_querynickname', {
      audit_id: auditId,
    });
  }

  isAvailableNickname(nickname: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxverify/checkwxverifynickname', {
      nick_name: nickname,
    });
  }

  getSearchStatus(): Promise<any>
  {
    return this.httpGet('wxa/getwxasearchstatus');
  }

  setSearchable(): Promise<any>
  {
    return this.httpPostJson('wxa/changewxasearchstatus', {
      status: '0',
    });
  }

  setUnsearchable(): Promise<any>
  {
    return this.httpPostJson('wxa/changewxasearchstatus', {
      status: '1',
    });
  }

  getDisplayedOfficialAccount(): Promise<any>
  {
    return this.httpGet('wxa/getshowwxaitem');
  }

  setDisplayedOfficialAccount(appid: string = null): Promise<any>
  {
    return this.httpPostJson('wxa/updateshowwxaitem', {
      appid: appid || null,
      wxa_subscribe_biz_flag: appid ? 1 : 0,
    });
  }

  getDisplayableOfficialAccounts(page: number, num: number): Promise<any>
  {
    return this.httpGet('wxa/getwxamplinkforshow', {
      page,
      num,
    });
  }

}
