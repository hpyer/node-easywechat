'use strict';

import { PrivateKey } from "../../Core/Support/PrivateKey";
import { PublicKey } from "../../Core/Support/PublicKey";

abstract class MerchantInterface
{
  /**
   * 获取merchant_id
   * @returns
   */
  getMerchantId(): string { return null; }

  /**
   * 获取证书私钥
   */
  getPrivateKey(): PrivateKey { return null; }

  /**
   * 获取secret_key
   * @returns
   */
  getSecretKey(): string { return null; }

  /**
   * 获取secret_key（V2版本）
   * @returns
   */
  getV2SecretKey(): string { return null; }

  /**
   * 获取证书
   * @returns
   */
  getCertificate(): PublicKey { return null; }

  /**
   * 获取平台证书缓存名称
   */
  getPlatformCertKey(): string { return null; }

  /**
   * 设置平台证书缓存名称
   * @param key
   */
  setPlatformCertKey(key: string): this { return this; }

  /**
   * 根据证书序列号获取平台证书
   * @param serial
   * @returns
   */
  getPlatformCert(serial: string): Promise<PublicKey> { return null; }

  /**
   * 获取所有平台证书
   * @returns
   */
  getPlatformCerts(): Promise<Record<string, PublicKey>> { return null; }

  /**
   * 从缓存或者接口获取平台证书
   * @param force 是否强制刷新缓存，默认：false
   */
  loadPlatformCerts(force: boolean = false): Promise<void> { return; }

  /**
   * 设置平台证书
   * @param certs 键名：序列号，键值：PublicKey实例或者文件内容字符串
   */
  setPlatformCerts(certs: Record<string, PublicKey | string>): void { }
};

export = MerchantInterface;
