'use strict';

import BaseClient from '../Core/BaseClient';
import Fs from 'fs';
import NodeRsa from 'node-rsa';
import { merge } from '../../Core/Utils';

export default class TransferClient extends BaseClient
{

  /**
   * 查询付款到零钱的订单
   * @param partnerTradeNo 商户订单号
   */
  queryBalanceOrder(partnerTradeNo: string): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      mch_id: this.app.config.mch_id,
      partner_trade_no: partnerTradeNo,
    };

    return this.safeRequest('mmpaymkttransfers/gettransferinfo', params);
  }

  /**
   * 查询付款到银行卡的订单
   * @param partnerTradeNo 商户订单号
   */
  queryBankCardOrder(partnerTradeNo: string): Promise<any>
  {
    let params = {
      mch_id: this.app.config.mch_id,
      partner_trade_no: partnerTradeNo,
    };

    return this.safeRequest('mmpaymkttransfers/query_bank', params);
  }

  /**
   * 企业付款到用户零钱
   * @param params 付款信息
   */
  toBalance(params: object): Promise<any>
  {
    let base = {
      mch_id: null,
      mchid: this.app.config.mch_id,
      mch_appid: this.app.config.app_id,
    };

    if (!params['spbill_create_ip']) {
      params['spbill_create_ip'] = this.getServerIp();
    }

    return this.safeRequest('mmpaymkttransfers/promotion/transfers', merge(base, params));
  }

  /**
   * 企业付款到银行卡
   * @param params 付款信息
   */
  toBankCard(params: object): Promise<any>
  {
    ['bank_code', 'partner_trade_no', 'enc_bank_no', 'enc_true_name', 'amount'].map(key => {
      if (!params[key]) {
        throw new Error(`${key} is required.`);
      }
    });

    let publicKey = Fs.readFileSync(this.app.config.rsa_public_key_path).toString();
    let rsa = new NodeRsa(publicKey);
    params['enc_bank_no'] = rsa.encrypt(params['enc_bank_no'], 'hex');
    params['enc_true_name'] = rsa.encrypt(params['enc_true_name'], 'hex');

    return this.safeRequest('mmpaymkttransfers/pay_bank', params);
  }

}
