'use strict';

import merge from 'merge';
import ConfigInterface from '../Core/Contracts/ConfigInterface';
import Encryptor from '../Core/Encryptor';
import CacheMixin from '../Core/Mixins/CacheMixin';
import ConfigMixin from '../Core/Mixins/ConfigMixin';
import HttpClientMixin from '../Core/Mixins/HttpClientMixin';
import ServerRequestMixin from '../Core/Mixins/ServerRequestMixin';
import { applyMixins } from '../Core/Support/Utils';
import { PayConfig } from '../Types/global';
import Merchant from './Merchant';
import MerchantInterface from './Contracts/MerchantInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import Server from './Server';
import Utils from './Utils';
import Config from '../OfficialAccount/Config';
import Client from './Client';
import Validator from './Validator';
import { PublicKey } from '../Core/Support/PublicKey';
import { AES_GCM } from '../Core/Support/AES';

/**
 * 微信支付应用
 */
class Application implements ApplicationInterface {
  constructor(config: ConfigInterface | PayConfig) {
    if (config instanceof ConfigInterface) {
      this.setConfig(config);
    }
    else {
      this.setConfig(new Config(config));
    }
  }

  protected merchant: MerchantInterface = null;
  protected encryptor: Encryptor = null;
  protected server: Server = null;
  protected client: Client = null;
  protected utils: Utils = null;
  protected validator: Validator = null;

  getMerchant(): MerchantInterface {
    if (!this.merchant) {
      this.merchant = new Merchant(
        this.config.get('mch_id'),
        this.config.get('private_key'),
        this.config.get('certificate'),
        this.config.get('secret_key'),
        this.config.get('v2_secret_key'),
        this.config.get('platform_certs') ?? [],
      );
    }
    return this.merchant;
  }

  /**
   * 设置当前账户实例
   * @param merchant
   * @returns
   */
  setMerchant(merchant: MerchantInterface): this {
    this.merchant = merchant;
    return this;
  }

  getServer(): Server {
    if (!this.server) {
      this.server = new Server(
        this.getMerchant(),
        this.getRequest(),
      );
    }
    else {
      this.server.setRequest(this.getRequest());
    }
    return this.server;
  }

  /**
   * 设置服务端实例
   * @param server
   * @returns
   */
  setServer(server: Server): this {
    this.server = server;
    return this;
  }

  /**
   * 设置工具实例
   * @param utils
   */
  setUtils(utils: Utils) {
    this.utils = utils;
  }

  getUtils(): Utils {
    if (!this.utils) {
      this.utils = new Utils(this.getMerchant());
    }
    return this.utils;
  }

  /**
   * 设置验证器实例
   * @param validator
   */
  setValidator(validator: Validator) {
    this.validator = validator;
  }

  getValidator(): Validator {
    if (!this.validator) {
      this.validator = new Validator(this.getMerchant());
    }
    return this.validator;
  }

  getClient() {
    if (!this.client) {
      this.client = (new Client(
        this.getMerchant(),
        this.getHttpClient(),
        this.config.get('http', {}),
      )).setPresets(this.config.all());
    }
    return this.client;
  }

  /**
   * 设置客户端
   * @param client
   * @returns
   */
  setClient(client: Client): this {
    this.client = client.setPresets(this.config.all());
    return this;
  }

  /**
   * 获取请求默认配置
   * @returns
   */
  protected getHttpClientDefaultOptions(): Record<string, any> {
    return merge(true, {
      baseURL: 'https://api.mch.weixin.qq.com',
    }, this.getConfig().get('http'));
  }

  /**
   * 如果未配置平台证书，则尝试从接口读取
   * @param force 是否强制读取，默认：false
   */
  async loadPlatformCerts(force: boolean = false) {
    let exists_certs = this.config.get('platform_certs', []);
    if (force || !exists_certs || exists_certs.length === 0) {
      let response = await this.getClient().get('/v3/certificates');
      let data = response.toObject();
      if (data && data.length > 0) {
        let certs: Record<string, PublicKey> = {};
        let key = this.config.get('secret_key');
        data.forEach((item: any) => {
          let content = AES_GCM.decrypt(
            item.encrypt_certificate.ciphertext,
            key,
            item.encrypt_certificate.nonce,
            item.encrypt_certificate.associated_data,
          ).toString();
          certs[item.serial_no] = PublicKey.createByCertificateContent(content, item.serial_no);
        });
        this.getMerchant().setPlatformCerts(certs);
      }
    }
  }

};

interface Application extends ConfigMixin, CacheMixin, ServerRequestMixin, HttpClientMixin { };

applyMixins(Application, [ConfigMixin, CacheMixin, ServerRequestMixin, HttpClientMixin]);

export = Application;
