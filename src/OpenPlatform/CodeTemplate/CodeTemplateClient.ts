'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CodeTemplateClient extends BaseClient
{

  getDrafts(): Promise<any>
  {
    return this.httpGet('wxa/gettemplatedraftlist');
  }

  createFromDraft(draftId: number): Promise<any>
  {
    return this.httpPostJson('wxa/addtotemplate', {
      draft_id: draftId,
    });
  }

  list(): Promise<any>
  {
    return this.httpGet('wxa/gettemplatelist');
  }

  delete(templateId: string): Promise<any>
  {
    return this.httpPostJson('wxa/deletetemplate', {
      template_id: templateId,
    });
  }

}
