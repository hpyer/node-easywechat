'use strict';

import { AES_GCM } from "../Core/Support/AES";
import { PrivateKey } from "../Core/Support/PrivateKey";
import { PublicKey } from "../Core/Support/PublicKey";
import Application from "./Application";
import MerchantInterface from "./Contracts/MerchantInterface";

class Merchant implements MerchantInterface
{
  protected platformCerts: Record<string, PublicKey> = {};
  protected privateKey: PrivateKey;
  protected certificate: PublicKey;
  protected cacheKeyPlatformCert: string;

  constructor(
    protected mchId: string,
    privateKey: string | PrivateKey,
    certificate: string | PublicKey,
    protected secretKey: string,
    protected v2SecretKey: string,
    platformCerts: Record<string, string | PublicKey> | string[] | PublicKey[] = [],
    protected app: Application = null,
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
  async getPlatformCert(serial: string): Promise<PublicKey> {
    if (!this.platformCerts || Object.keys(this.platformCerts).length === 0) {
      await this.loadPlatformCerts();
    }
    return this.platformCerts[serial] ?? null;
  }
  async getPlatformCerts(): Promise<Record<string, PublicKey>> {
    if (!this.platformCerts || Object.keys(this.platformCerts).length === 0) {
      await this.loadPlatformCerts();
    }
    return this.platformCerts;
  }
  setPlatformCerts(certs: Record<string, PublicKey | string>): void {
    let newCerts: Record<string, PublicKey> = {};
    for (let key of Object.keys(certs)) {
      let cert = certs[key];
      if (typeof cert === 'string') {
        newCerts[key] = PublicKey.createByCertificateContent(cert, key);
      }
      else {
        newCerts[key] = cert;
      }
    }
    this.platformCerts = newCerts;
  }

  getPlatformCertKey(): string {
    if (!this.cacheKeyPlatformCert) {
      this.cacheKeyPlatformCert = `pay.platform_certs.${this.mchId}`;
    }
    return this.cacheKeyPlatformCert;
  }
  setPlatformCertKey(key: string): this {
    this.cacheKeyPlatformCert = key;
    return this;
  }
  async loadPlatformCerts(force = false) {
    let cacheKey = this.getPlatformCertKey();
    let cache = this.app.getCache();
    let certs: Record<string, string> = await cache.get(cacheKey);
    if (force || !certs || Object.keys(certs).length === 0) {
      certs = {};
      let response = await this.app.getClient().get('/v3/certificates');
      let data = response.toObject();
      if (data && data.data && data.data.length > 0) {
        let nowTime = Math.round((new Date()).getTime() / 1000);
        data.data.forEach((item: any) => {
          // 跳过有效期少于1天的证书
          let expireTime = Math.round((new Date(item.expire_time)).getTime() / 1000) - 86400;
          if (expireTime < nowTime) return;

          let content = AES_GCM.decrypt(
            item.encrypt_certificate.ciphertext,
            this.app.getConfig().get('secret_key'),
            item.encrypt_certificate.nonce,
            item.encrypt_certificate.associated_data,
          ).toString();
          certs[item.serial_no] = content;
        });
        if (Object.keys(certs).length > 0) {
          await cache.set(cacheKey, certs, 36000); // 缓存10小时
        }
      }
    }
    this.setPlatformCerts(certs);
  }

}

export = Merchant;
