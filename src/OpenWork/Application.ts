'use strict';

import BaseApplication from '../Core/BaseApplication';
import MiniProgram from '../Work/MiniProgram/Application';
import Work from './Work/Application';
import ProviderAccessToken from './Auth/ProviderAccessToken';
import SuiteAccessToken from './Auth/SuiteAccessToken';
import SuiteTicket from './Auth/SuiteTicket';
import CorpClient from './Corp/CorpClient';
import MiniProgramClient from './MiniProgram/MiniProgramClient';
import ProviderClient from './Provider/ProviderClient';
import Encryptor from '../Core/Encryptor';
import OpenWorkGuard from './Server/OpenWorkGuard';
import { EasyWechatConfig } from '../Core/Types';
import FinallResult from '../Core/Decorators/FinallResult';

export default class OpenWork extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    // 必要配置
    app_id: '',
    key: '',   // API 密钥
    http: {
      baseURL: 'https://qyapi.weixin.qq.com/',
    },
  };

  public provider_access_token: ProviderAccessToken;
  public suite_access_token: SuiteAccessToken;
  public suite_ticket: SuiteTicket;
  public corp: CorpClient;
  public mini_program: MiniProgramClient;
  public provider: ProviderClient;
  public encryptor_corp: Encryptor;
  public encryptor: Encryptor;
  public server: OpenWorkGuard;

  constructor(config: EasyWechatConfig = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

    if (!this.provider_access_token) {
      this.offsetSet('provider_access_token', function (app) {
        return new ProviderAccessToken(app);
      });
    }
    this.offsetSet('suite_ticket', function (app) {
      return new SuiteTicket(app);
    });
    if (!this.suite_access_token) {
      this.offsetSet('suite_access_token', function (app) {
        return new SuiteAccessToken(app);
      });
    }
    if (!this.corp) {
      this.offsetSet('corp', function (app) {
        return new CorpClient(app);
      });
    }
    if (!this.mini_program) {
      this.offsetSet('mini_program', function (app) {
        return new MiniProgramClient(app);
      });
    }
    if (!this.provider) {
      this.offsetSet('provider', function (app) {
        return new ProviderClient(app);
      });
    }
    if (!this.encryptor_corp) {
      this.offsetSet('encryptor_corp', function (app) {
        return new Encryptor(app.config['corp_id'], app.config['token'], app.config['aes_key']);
      });
    }
    if (!this.encryptor) {
      this.offsetSet('encryptor', function (app) {
        return new Encryptor(app.config['suite_id'], app.config['token'], app.config['aes_key']);
      });
    }
    if (!this.server) {
      this.offsetSet('server', function (app) {
        let guard = new OpenWorkGuard(app);
        guard.push(async function (payload) {
          let decrypted = await this.app.request.get('echostr');
          if (decrypted) {
            let str = this.app.encryptor_corp.decrypt(
              decrypted,
              this.app.request.get('msg_signature'),
              this.app.request.get('nonce'),
              this.app.request.get('timestamp'),
            );
            return new FinallResult(str);
          }
          // 缓存SuiteTicket
          if (typeof payload['SuiteTicket'] != 'undefined') {
            await this.app.suite_ticket.setTicket(payload['SuiteTicket']);
            return new FinallResult('success');
          }
          return null;
        });
        return guard;
      });
    }
  }

  /**
   * 代理小程序实现业务，返回SDK实例
   */
  miniProgram()
  {
    return new MiniProgram(this.getConfig());
  }

  /**
   * 代理企业微信实现业务，返回SDK实例
   * @param authCorpId 企业 corp_id
   * @param permanentCode 企业永久授权码
   * @returns
   */
  work(authCorpId: string, permanentCode: string)
  {
    return new Work(authCorpId, permanentCode, this);
  }

};
