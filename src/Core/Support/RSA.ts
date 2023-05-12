'use strict';

import crypto, { BinaryToTextEncoding } from 'crypto';

class RSA {

  protected publicKey: crypto.KeyObject = null;

  /**
   * 设置公钥
   * @param key 公钥内容
   */
  public setPublicKey(key: string | crypto.KeyObject | Buffer | crypto.PublicKeyInput) {
    this.publicKey = crypto.createPublicKey(key);
  }

  protected privateKey: crypto.KeyObject = null;

  /**
   * 设置私钥
   * @param key 私钥内容
   */
  public setPrivateKey(key: string | Buffer | crypto.PrivateKeyInput) {
    this.privateKey = crypto.createPrivateKey(key);
  }

  /**
   * 生成密钥对
   * @param options 密钥选项
   * @returns
   */
  static keyPair(options: crypto.RSAKeyPairKeyObjectOptions): crypto.KeyPairKeyObjectResult {
    return crypto.generateKeyPairSync('rsa', options);
  }

  /**
   * 加密
   * @param plaintext 待加密文本
   * @param encoding 编码，默认：'base64'
   * @param hashType 哈希方式，默认：'sha256'
   * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
   * @returns
   */
  encrypt(plaintext: string, encoding: BufferEncoding = 'base64', hashType: string = 'sha256', padding: number = crypto.constants.RSA_PKCS1_OAEP_PADDING): string {
    let encryptedData = crypto.publicEncrypt(
      {
        key: this.publicKey,
        padding,
        oaepHash: hashType,
      },
      Buffer.from(plaintext)
    );

    return encryptedData.toString(encoding);
  }

  /**
   * 解密
   * @param ciphertext 待解密文本
   * @param encoding 编码，默认：'base64'
   * @param hashType 哈希方式，默认：'sha256'
   * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
   * @returns
   */
  decrypt(ciphertext: string, encoding: BufferEncoding = 'base64', hashType: string = 'sha256', padding: number = crypto.constants.RSA_PKCS1_OAEP_PADDING): string {
    let decryptedData = crypto.privateDecrypt(
      {
        key: this.privateKey,
        padding,
        oaepHash: hashType,
      },
      Buffer.from(ciphertext, encoding)
    );

    return decryptedData.toString();
  }

  /**
   * 计算签名
   * @param data 待解密文本
   * @param hashType 哈希方式，默认：'RSA-SHA256'
   * @param encoding 编码，默认：'base64'
   * @returns
   */
  sign(data: string, hashType: string = 'RSA-SHA256', encoding: BinaryToTextEncoding = 'base64'): string {
    return crypto
      .createSign(hashType)
      .update(data)
      .sign(this.privateKey, encoding);
  }

  /**
   * 验证签名
   * @param signature 待验证签名字符串
   * @param data 待解密文本
   * @param hashType 哈希方式，默认：'RSA-SHA256'
   * @param encoding 编码，默认：'base64'
   * @returns
   */
  verify(signature: string, data: string, hashType: string = 'RSA-SHA256', encoding: BinaryToTextEncoding = 'base64'): boolean {
    const verify = crypto.createVerify(hashType);
    verify.update(data);
    return verify.verify(this.publicKey, signature, encoding);
  }

};

export = RSA;
