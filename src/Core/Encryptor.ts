'use strict';

import Crypto from 'crypto';
import { buildXml, createHash, getTimestamp } from './Utils';
import { AES } from './AES';
import { PKCS7 } from './PKCS';

export default class Encryptor
{
  protected appId: string = null;
  protected token: string = null;
  protected aesKey: Buffer = null;
  protected blockSize: number = 32;

  constructor(appId: string, token: string, aesKey: string)
  {
    this.appId = appId;
    this.token = token;
    this.aesKey = Buffer.from(aesKey + '=', 'base64');
  }

  getToken(): string
  {
    return this.token;
  }

  signature(...args): string
  {
    args.sort();
    return createHash(args.join(''), 'sha1');
  }

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
      MsgSignature: this.signature(this.token, timestamp, nonce, encrypted),
      TimeStamp: timestamp,
      Nonce: nonce,
    };

    return buildXml(response);
  }

  decrypt(text: string, msgSignature: string, nonce: string, timestamp: number): string
  {
    let signature = this.signature(this.token, nonce, timestamp, text);
    if (signature !== msgSignature) {
      throw new Error('Invalid Signature.');
    }

    let deciphered = AES.decrypt(Buffer.from(text, 'base64'), this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc');

    deciphered = PKCS7.unpad(deciphered, this.blockSize);
    let content = deciphered.slice(16);
    let length = content.slice(0, 4).readUInt32BE(0);

    if (content.slice(length + 4).toString() !== this.appId) {
      throw new Error('Invalid appId.');
    }

    return content.slice(4, length + 4).toString();
  }

};
