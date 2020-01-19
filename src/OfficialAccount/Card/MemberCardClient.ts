'use strict';

import Client from './Client';
import * as Merge from 'merge';

export default class MemberCardClient extends Client
{

  activate(info: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/activate', info);
  }

  setActivationForm(cardId: string, settings: object): Promise<any>
  {
    let params = Merge({
      card_id: cardId,
    }, settings);
    return this.httpPostJson('card/membercard/activateuserform/set', params);
  }

  getUser(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/membercard/userinfo/get', {
      card_id: cardId,
      code: codes,
    });
  }

  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/updateuser', params);
  }

  getActivationForm(activateTicket: StringConstructor): Promise<any>
  {
    return this.httpPostJson('card/membercard/activatetempinfo/get', {
      activate_ticket: activateTicket,
    });
  }

  getActivateUrl(params: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/activate/geturl', params);
  }

}
