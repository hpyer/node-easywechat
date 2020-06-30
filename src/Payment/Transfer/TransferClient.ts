'use strict';

import BaseClient from '../Core/BaseClient';
import * as Merge from 'merge';
import * as Fs from 'fs';
import * as NodeRsa from 'node-rsa';

export default class TransferClient extends BaseClient
{

  queryBalanceOrder(partnerTradeNo: string): Promise<any>
  {
    let params = {
      appid: this.app['config']['app_id'],
      mch_id: this.app['config']['mch_id'],
      partner_trade_no: partnerTradeNo,
    };

    return this.safeRequest('mmpaymkttransfers/gettransferinfo', params);
  }

  queryBankCardOrder(partnerTradeNo: string): Promise<any>
  {
    let params = {
      mch_id: this.app['config']['mch_id'],
      partner_trade_no: partnerTradeNo,
    };

    return this.safeRequest('mmpaymkttransfers/query_bank', params);
  }

  toBalance(params: object): Promise<any>
  {
    let base = {
      mch_id: null,
      mchid: this.app['config']['mch_id'],
      mch_appid: this.app['config']['app_id'],
    };

    if (!params['spbill_create_ip']) {
      params['spbill_create_ip'] = this.getServerIp();
    }

    return this.safeRequest('mmpaymkttransfers/promotion/transfers', Merge(base, params));
  }

  toBankCard(params: object): Promise<any>
  {
    ['bank_code', 'partner_trade_no', 'enc_bank_no', 'enc_true_name', 'amount'].map(key => {
      if (!params[key]) {
        throw new Error(`${key} is required.`);
      }
    });

    let publicKey = Fs.readFileSync(this.app['config']['rsa_public_key_path']).toString();
    let rsa = new NodeRsa(publicKey);
    params['enc_bank_no'] = rsa.encrypt(params['enc_bank_no'], 'hex');
    params['enc_true_name'] = rsa.encrypt(params['enc_true_name'], 'hex');

    return this.safeRequest('mmpaymkttransfers/pay_bank', params);
  }

}
