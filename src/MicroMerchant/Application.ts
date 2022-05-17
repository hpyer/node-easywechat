'use strict';

import BaseApplication from '../Core/BaseApplication';
import { EasyWechatConfig } from '../Core/Types';
import { makeSignature } from '../Core/Utils';
import MicroMerchantBase from './Base/MicroMerchantBase';
import CertficatesClient from './Certficates/CertficatesClient';
import MediaClient from './Media/MediaClient';
import MerchantConfigClient from './MerchantConfig/MerchantConfigClient';
import MeterialClient from './Meterial/MeterialClient';
import WithdrawClient from './Withdraw/WithdrawClient';

export default class MicroMerchant extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    // 必要配置
    app_id : '',
    mch_id : '',
    key : '',   // API 密钥
    http: {
      baseURL: 'https://api.mch.weixin.qq.com/',
    },
  };

  public base: MicroMerchantBase;
  public certficates: CertficatesClient;
  public media: MediaClient;
  public merchantConfig: MerchantConfigClient;
  public material: MeterialClient;
  public withdraw: WithdrawClient;

  constructor(config: EasyWechatConfig = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

    this.offsetSet('base', function (app) {
      return new MicroMerchantBase(app);
    });
    this.offsetSet('certficates', function (app) {
      return new CertficatesClient(app);
    });
    this.offsetSet('media', function (app) {
      return new MediaClient(app);
    });
    this.offsetSet('merchantConfig', function (app) {
      return new MerchantConfigClient(app);
    });
    this.offsetSet('material', function (app) {
      return new MeterialClient(app);
    });
    this.offsetSet('withdraw', function (app) {
      return new WithdrawClient(app);
    });

  }

  getKey(): string
  {
    let key = this.config.key;

    if (!key) {
      throw new Error('config key should not empty.');
    }

    if (32 !== key.length) {
      throw new Error(`'${key}' should be 32 chars length.`);
    }

    return key;
  }

  setSubMchId(subMchId: string, appId: string = ''): this
  {
    this.config.sub_mch_id = subMchId;

    if (appId) {
      this.config.appid = appId;
    }

    return this;
  }

  setCertificate(certificate: string, serialNo: string = ''): this
  {
    this.config.certificate = certificate;
    this.config.serial_no = serialNo;

    return this;
  }

  verifySignature(data: object): boolean
  {
    if (typeof data['sign'] == 'undefined' || !data['sign']) {
      return false;
    }
    let sign = data['sign'];
    delete data['sign'];

    let signType = sign.length > 32 ? 'HMAC-SHA256' : 'MD5';
    let secretKey = this.getKey();

    if (makeSignature(data, secretKey, signType) === sign) {
      return true;
    }

    throw new Error('return value signature verification error');
  }


  // map to `base` module
  submitApplication(): Promise<any>
  {
    return this.base.submitApplication.apply(this.base, arguments);
  }
  getStatus(): Promise<any>
  {
    return this.base.getStatus.apply(this.base, arguments);
  }
  upgrade(): Promise<any>
  {
    return this.base.upgrade.apply(this.base, arguments);
  }
  getUpgradeStatus(): Promise<any>
  {
    return this.base.getUpgradeStatus.apply(this.base, arguments);
  }

};
