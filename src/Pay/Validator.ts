'use strict';

import ValidatorInterface from "./Contracts/ValidatorInterface";
import RequestInterface from "../Core/Http/Contracts/RequestInterface";
import MerchantInterface from "./Contracts/MerchantInterface";
import { getTimestamp } from "../Core/Support/Utils";
import RSA from "../Core/Support/RSA";

class Validator implements ValidatorInterface {

  static MAX_ALLOWED_CLOCK_OFFSET = 300;
  static HEADER_TIMESTAMP = 'Wechatpay-Timestamp';
  static HEADER_NONCE = 'Wechatpay-Nonce';
  static HEADER_SERIAL = 'Wechatpay-Serial';
  static HEADER_SIGNATURE = 'Wechatpay-Signature';

  constructor(
    protected merchant: MerchantInterface,
  ) { }

  validate(request: RequestInterface): boolean {
    [
      Validator.HEADER_TIMESTAMP,
      Validator.HEADER_NONCE,
      Validator.HEADER_SERIAL,
      Validator.HEADER_SIGNATURE,
    ].forEach(key => {
      if (!request.hasHeader(key)) {
        throw new Error(`Missing Header: ${key}`);
      }
    });
    let timestamp = request.getHeader(Validator.HEADER_TIMESTAMP) || '';
    let nonce = request.getHeader(Validator.HEADER_NONCE) || '';
    let serial = request.getHeader(Validator.HEADER_SERIAL) || '';
    let signature = request.getHeader(Validator.HEADER_SIGNATURE) || '';

    let body = request.getBody().toString();

    let message = `${timestamp}\n${nonce}\n${body}\n`;
    if (getTimestamp() - parseInt(timestamp) > Validator.MAX_ALLOWED_CLOCK_OFFSET) {
      throw new Error('Clock Offset Exceeded');
    }

    let publicKey = this.merchant.getPlatformCert(serial);
    if (!publicKey) {
      throw new Error(`No platform certs found for serial: ${serial}, please download from wechat pay and set it in merchant config with key \`platform_certs\`.`);
    }

    let rsa = new RSA;
    rsa.setPublicKey(publicKey.getValue());
    if (false === rsa.verify(signature, message)) {
      throw new Error('Invalid Signature');
    }

    return true;
  }
}

export = Validator;
