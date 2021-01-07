'use strict';

import Crypto from 'crypto';
import BaseEncryptor from '../Core/Encryptor';

export default class Encryptor extends BaseEncryptor
{

  decryptData(sessionKey: string, iv: string, encryptData: string): object
  {
    let decoded = null;
    try {
      // 解密
      let decipher = Crypto.createDecipheriv('aes-128-cbc', Buffer.from(sessionKey, 'base64'), Buffer.from(iv, 'base64'));
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);

      decoded = decipher.update(Buffer.from(encryptData, 'base64'), 'binary', 'utf8');
      decoded += decipher.final('utf8');

      decoded = JSON.parse(decoded);
    }
    catch (e) {
      throw new Error('Fail to decrypt data.');
    }

    return decoded;
  }

};
