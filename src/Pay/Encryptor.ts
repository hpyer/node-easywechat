'use strict';
import { PrivateKey } from "../Core/Support/PrivateKey";
import { PublicKey } from "../Core/Support/PublicKey";
import RSA from "../Core/Support/RSA";

class Encryptor extends RSA {
  protected publicCert: PublicKey;
  protected privateCert: PrivateKey;

  /**
   * 设置加密机所需的公私密钥
   * @param publicCert PublicKey封装的公钥
   * @param privateCert PrivateKey封装的私钥
   */
  setCerts(publicCert: PublicKey, privateCert: PrivateKey) {
    this.publicCert = publicCert;
    this.privateCert = privateCert;
    this.setPublicKey(publicCert.toString());
    this.setPrivateKey(privateCert.toString());
  }

  /**
   * 获取公钥的序列号
   */
  getSerialNo(): string {
    return this.publicCert.getSerialNo();
  }

}

export = Encryptor;
