'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CodeTemplateClient extends BaseClient
{

  /**
   * 获取代码草稿列表
   */
  getDrafts(): Promise<any>
  {
    return this.httpGet('wxa/gettemplatedraftlist');
  }

  /**
   * 将草稿添加到代码模板库
   * @param draftId 草稿 ID
   */
  createFromDraft(draftId: number): Promise<any>
  {
    return this.httpPostJson('wxa/addtotemplate', {
      draft_id: draftId,
    });
  }

  /**
   * 获取代码模板列表
   */
  list(): Promise<any>
  {
    return this.httpGet('wxa/gettemplatelist');
  }

  /**
   * 删除指定代码模板
   * @param templateId 模板 ID
   */
  delete(templateId: string): Promise<any>
  {
    return this.httpPostJson('wxa/deletetemplate', {
      template_id: templateId,
    });
  }

}
