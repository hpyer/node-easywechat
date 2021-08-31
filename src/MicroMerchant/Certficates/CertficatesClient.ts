'use strict';

import { AES_GCM } from '../../Core/AES';
import { randomString } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class CertficatesClient extends BaseClient
{

  async get(returnRaw: boolean = false): Promise<any>
  {
    let params = {
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };
    if (returnRaw) {
      return await this.requestRaw('risk/getcertficates', params);
    }
    let response = await this.request('risk/getcertficates', params);
    if ('SUCCESS' !== response['return_code']) {
      throw new Error(`Failed to get certificate. return_code_msg: "${response['return_code']}(${response['return_msg']})".`);
    }
    if ('SUCCESS' !== response['result_code']) {
      throw new Error(`Failed to get certificate. result_err_code_desc: "${response['return_code']}(${response['err_code']}[${response['err_code_desc']}])".`);
    }
    let certificates = {};
    try {
      certificates = JSON.parse(response['certificates'])['data'][0];
    }
    catch(e) {}
    let ciphertext = this.decrypt(certificates['encrypt_certificate']);
    delete certificates['encrypt_certificate'];
    certificates['certificates'] = ciphertext;
    return certificates;
  }

  decrypt(encryptCertificate: object): string
  {
    if (!encryptCertificate) return null;
    return AES_GCM.decrypt(
      Buffer.from(encryptCertificate['ciphertext'], 'base64'),
      this.app.config.apiv3_key,
      encryptCertificate['nonce'],
      encryptCertificate['associated_data'],
      'aes-256-gcm'
    ).toString();
  }

}
