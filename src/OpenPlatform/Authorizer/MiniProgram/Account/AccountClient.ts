'use strict';

import BaseClient from '../../Aggregate/Account/Client';

export default class AccountClient extends BaseClient
{

  getBasicInfo(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/account/getaccountbasicinfo');
  }

  updateAvatar(mediaId: string, left: number = 0, top: number = 0, right: number = 0, bottom: number = 0): Promise<any>
  {
    let params = {
      head_img_media_id: mediaId,
      x1: left,
      y1: top,
      x2: right,
      y2: bottom,
    };
    return this.httpPostJson('cgi-bin/account/modifyheadimage', params);
  }

  updateSignature(signature: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/account/modifysignature', {
      signature: signature
    });
  }

}
