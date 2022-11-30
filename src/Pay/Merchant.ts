'use strict';

import { PrivateKey } from "../Core/Support/PrivateKey";
import { PublicKey } from "../Core/Support/PublicKey";
import MerchantInterface from "./Contracts/MerchantInterface";

class Merchant implements MerchantInterface
{
  protected platformCerts: Record<string, PublicKey> = {};
  protected privateKey: PrivateKey;
  protected certificate: PublicKey;

  constructor(
    protected mchId: string,
    privateKey: string | PrivateKey,
    certificate: string | PublicKey,
    protected secretKey: string,
    protected v2SecretKey: string = null,
    platformCerts: Record<string, string | PublicKey> | string[] | PublicKey[] = [],
  ) {
    if (!(privateKey instanceof PrivateKey)) {
      this.privateKey = new PrivateKey(privateKey);
    }
    else {
      this.privateKey = privateKey;
    }
    if (!(certificate instanceof PublicKey)) {
      this.certificate = new PublicKey(certificate);
    }
    else {
      this.certificate = certificate;
    }
    this.platformCerts = this.normalizePlatformCerts(platformCerts);
  }

  /**
   * 统一规范化平台证书
   * @param platformCerts 平台证书列表
   * @returns
   */
  protected normalizePlatformCerts(platformCerts: Record<string, string | PublicKey> | string[] | PublicKey[])
  {
    let certs: Record<string, PublicKey> = {};
    let isArray = Array.isArray(platformCerts);

    for (let key in platformCerts) {
      let publicKey: string | PublicKey = platformCerts[key];
      if (typeof publicKey === 'string') {
        publicKey = new PublicKey(publicKey);
      }

      if (!(publicKey instanceof PublicKey)) {
        throw new Error('Invalid platform certficate.');
      }

      certs[isArray ? publicKey.getSerialNo() : key] = publicKey;
    }

    return certs;
  }

  getMerchantId(): string {
    return this.mchId;
  }
  getPrivateKey(): PrivateKey {
    return this.privateKey;
  }
  getSecretKey(): string {
    return this.secretKey;
  }
  getV2SecretKey(): string {
    return this.v2SecretKey;
  }
  getCertificate(): PublicKey {
    return this.certificate;
  }
  getPlatformCert(serial: string): PublicKey {
    return this.platformCerts[serial] ?? null;
  }

}

export = Merchant;
