'use strict';

import BaseEncryptor from '../Core/Encryptor';
import { AES } from '../Core/AES';

export default class Encryptor extends BaseEncryptor
{

  decryptData(sessionKey: string, iv: string, encryptData: string): object
  {
    let decoded = null;
    try {
      // 解密
      decoded = AES.decrypt(Buffer.from(encryptData, 'base64'), Buffer.from(sessionKey, 'base64'), Buffer.from(iv, 'base64'), true, 'aes-128-cbc').toString('utf8');
      decoded = JSON.parse(decoded);
    }
    catch (e) {
      throw new Error('Fail to decrypt data.');
    }

    return decoded;
  }

};
