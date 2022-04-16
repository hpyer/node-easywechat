'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class SettingClient extends BaseClient
{

  /**
   * 获取可以设置的所有类目
   */
  getAllCategories(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getallcategories');
  }

  /**
   * 添加类目
   * @param categories 类目信息列表
   */
  addCategories(categories: Array<object>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/addcategory', {
      categories: categories,
    });
  }

  /**
   * 删除类目
   * @param firstId 一级类目 ID
   * @param secondId 二级类目 ID
   */
  deleteCategories(firstId: number, secondId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/deletecategory', {
      first: firstId,
      second: secondId,
    });
  }

  /**
   * 获取已设置的所有类目
   */
  getCategories(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/getcategory');
  }

  /**
   * 修改类目资质信息
   * @param category 类目信息
   */
  updateCategory(category: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/modifycategory', category);
  }

  /**
   * 设置名称
   * @param nickname 昵称
   * @param idCardMediaId 身份证照片 mediaid
   * @param licenseMediaId 组织机构代码证或营业执照 mediaid
   * @param otherStuffs 其它证明材料 mediaid
   */
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

  /**
   * 查询改名审核状态
   * @param auditId 审核id
   */
  getNicknameAuditStatus(auditId: string): Promise<any>
  {
    return this.httpPostJson('wxa/api_wxa_querynickname', {
      audit_id: auditId,
    });
  }

  /**
   * 微信认证名称检测
   * @param nickname 名称（昵称）
   */
  isAvailableNickname(nickname: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxverify/checkwxverifynickname', {
      nick_name: nickname,
    });
  }

  /**
   * 查询隐私设置
   */
  getSearchStatus(): Promise<any>
  {
    return this.httpGet('wxa/getwxasearchstatus');
  }

  /**
   * 设置为可搜索
   */
  setSearchable(): Promise<any>
  {
    return this.httpPostJson('wxa/changewxasearchstatus', {
      status: '0',
    });
  }

  /**
   * 设置为不可搜索
   */
  setUnsearchable(): Promise<any>
  {
    return this.httpPostJson('wxa/changewxasearchstatus', {
      status: '1',
    });
  }

  /**
   * 获取展示的公众号信息
   */
  getDisplayedOfficialAccount(): Promise<any>
  {
    return this.httpGet('wxa/getshowwxaitem');
  }

  /**
   * 设置展示的公众号信息
   * @param appid 传入新的公众号 appid表示开启，否则关闭
   */
  setDisplayedOfficialAccount(appid: string = null): Promise<any>
  {
    return this.httpPostJson('wxa/updateshowwxaitem', {
      appid: appid || null,
      wxa_subscribe_biz_flag: appid ? 1 : 0,
    });
  }

  /**
   * 获取可以用来设置的公众号列表
   * @param page 页码，从 0 开始
   * @param num 每页记录数，最大为 20
   */
  getDisplayableOfficialAccounts(page: number, num: number): Promise<any>
  {
    return this.httpGet('wxa/getwxamplinkforshow', {
      page,
      num,
    });
  }

}
