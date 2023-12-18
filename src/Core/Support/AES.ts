'use strict';

import { createCipheriv, createDecipheriv, CipherGCMTypes, BinaryLike, CipherKey } from 'crypto';

export class AES {
  /**
   * 加密
   * @static
   * @param plaintext 待加密文本
   * @param key 密钥
   * @param iv 向量
   * @param autoPadding 自动补位，默认：null，表示不设置
   * @param method 加密方式，默认：'aes-256-cbc'
   */
  static encrypt(plaintext: BinaryLike, key: CipherKey, iv: BinaryLike = '', autoPadding: boolean = null, method: string = 'aes-256-cbc'): Buffer {
    let cipher = createCipheriv(method, key, iv);
    if (typeof autoPadding === 'boolean') {
      cipher.setAutoPadding(autoPadding);
    }

    return Buffer.concat([
      cipher.update(plaintext),
      cipher.final(),
    ]);
  }

  /**
   * 解密
   * @static
   * @param ciphertext 待解密文本，Base64 编码字符串
   * @param key 密钥
   * @param iv 向量
   * @param autoPadding 自动补位，默认：null，表示不设置
   * @param method 加密方式，默认：aes-256-cbc
   */
  static decrypt(ciphertext: NodeJS.ArrayBufferView, key: BinaryLike, iv: BinaryLike = '', autoPadding: boolean = null, method: string = 'aes-256-cbc'): Buffer {
    let decipher = createDecipheriv(method, key, iv);
    if (typeof autoPadding === 'boolean') {
      decipher.setAutoPadding(autoPadding);
    }

    if (typeof ciphertext === 'string') {
      ciphertext = Buffer.from(ciphertext, 'base64');
    }

    let deciphered = Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]);

    return deciphered;
  }
}

export class AES_GCM {
  /**
   * GCM模式加密
   * @static
   * @param plaintext 待加密文本
   * @param key 密钥
   * @param iv 向量
   * @param aad aad
   * @param method 加密方式，默认：aes-256-gcm
   */
  static encrypt(plaintext: BinaryLike, key: CipherKey, iv: BinaryLike = '', aad: string = '', method: CipherGCMTypes = 'aes-256-gcm'): Buffer {
    let cipher = createCipheriv(method, key, iv).setAAD(Buffer.from(aad));

    return Buffer.concat([
      cipher.update(plaintext),
      cipher.final(),
      cipher.getAuthTag(),
    ]);
  }

  /**
   * GCM模式解密
   * @static
   * @param ciphertext 待解密文本，Base64 编码字符串
   * @param key 密钥
   * @param iv 向量
   * @param aad aad
   * @param method 加密方式，默认：aes-256-gcm
   */
  static decrypt(ciphertext: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>, key: BinaryLike, iv: BinaryLike = '', aad: string = '', method: CipherGCMTypes = 'aes-256-gcm'): Buffer {
    let buf: Buffer = null;

    if (typeof ciphertext === 'string') {
      buf = Buffer.from(ciphertext, 'base64');
    }
    else {
      buf = Buffer.from(ciphertext);
    }

    let tag = buf.subarray(-16);
    let payload = buf.subarray(0, -16);

    let decipher = createDecipheriv(method, key, iv).setAuthTag(tag).setAAD(Buffer.from(aad));

    return Buffer.concat([
      decipher.update(payload),
      decipher.final(),
    ]);
  }
};
