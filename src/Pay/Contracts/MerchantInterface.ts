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
   * 获取平台证书
   * @param serial
   * @returns
   */
  getPlatformCert(serial: string): PublicKey { return null; }
};

export = MerchantInterface;
