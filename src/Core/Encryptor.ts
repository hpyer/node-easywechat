'use strict';

import Crypto from 'crypto';
import { buildXml, createHash, getTimestamp } from './Support/Utils';
import { AES } from './Support/AES';
import PKCS7 from './Support/PKCS';

class Encryptor
{
  protected blockSize: number = 32;

  constructor(
    protected appId: string = null,
    protected token: string = null,
    protected aesKey: string | Buffer = null,
    protected receiveId: string = null
  ) {
    if (typeof this.aesKey === 'string') {
      this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
    }
  }

  /**
   * 获取配置的token
   * @returns
   */
  getToken(): string
  {
    return this.token;
  }

  /**
   * 计算消息签名
   * @param args
   * @returns
   */
  createSignature(...args): string
  {
    args.sort();
    return createHash(args.join(''), 'sha1');
  }

  /**
   * 加密
   * @param text
   * @param nonce
   * @param timestamp
   * @returns
   */
  encrypt(text: string, nonce: string = null, timestamp: number = null): string
  {
    let encrypted = '';
    try {
      // 算法：AES_Encrypt(随机16B + msg_len(4) + msg + appID)
      let randomString = Crypto.pseudoRandomBytes(16);

      let msg = Buffer.from(text);
      let msgLength = Buffer.alloc(4);
      msgLength.writeUInt32BE(msg.length, 0);

      let encoded = PKCS7.pad(Buffer.concat([randomString, msgLength, msg, Buffer.from(this.appId)]), this.blockSize);

      encrypted = AES.encrypt(encoded, this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc').toString('base64');
    }
    catch (e) {
      throw new Error('Fail to encrypt data');
    }

    if (!nonce) nonce = this.appId.slice(0, 10);
    if (!timestamp) timestamp = getTimestamp();

    let response = {
      Encrypt: encrypted,
      MsgSignature: this.createSignature(this.token, timestamp, nonce, encrypted),
      TimeStamp: timestamp,
      Nonce: nonce,
    };

    return buildXml(response);
  }

  /**
   * 解密
   * @param text
   * @param msgSignature
   * @param nonce
   * @param timestamp
   * @returns
   */
  decrypt(text: string, msgSignature: string, nonce: string, timestamp: number): string
  {
    let signature = this.createSignature(this.token, nonce, timestamp, text);
    if (signature !== msgSignature) {
      throw new Error('Invalid Signature.');
    }

    let deciphered = AES.decrypt(Buffer.from(text, 'base64'), this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc');

    deciphered = PKCS7.unpad(deciphered, this.blockSize);
    let content = deciphered.slice(16);
    let length = content.slice(0, 4).readUInt32BE(0);

    if (this.receiveId && content.slice(length + 4).toString() !== this.receiveId) {
      throw new Error('Invalid appId.');
    }

    return content.slice(4, length + 4).toString();
  }

};

export = Encryptor;
