'use strict';

import BaseApplication from '../Core/BaseApplication';
import { merge, isString, buildQueryString } from '../Core/Utils';
import AuthorizerAccessToken from './Authorizer/Auth/AccessToken';
import AuthorizerGuard from './Authorizer/Server/Guard';
import OfficialAccount from './Authorizer/OfficialAccount/Application';
import OAOauthClient from './Authorizer/OfficialAccount/OAuth/Client';
import OAAccountClient from './Authorizer/OfficialAccount/Account/Client';
import MiniProgram from './Authorizer/MiniProgram/Application';
import MPAuthClient from './Authorizer/MiniProgram/Auth/Client';
import VerifyTicket from './Auth/VerifyTicket';
import AccessToken from './Auth/AccessToken';
import OpenPlatformBase from './Base/OpenPlatformBase';
import Encryptor from '../Core/Encryptor';
import OpenPlatformGuard from './Server/OpenPlatformGuard';
import CodeTemplateClient from './CodeTemplate/CodeTemplateClient';
import ComponentClient from './Component/ComponentClient';
import { EasyWechatConfig } from '../Core/Types';

export default class OpenPlatform extends BaseApplication
{

  public verify_ticket: VerifyTicket = null;
  public access_token: AccessToken = null;
  public base: OpenPlatformBase = null;
  public encryptor: Encryptor = null;
  public server: OpenPlatformGuard = null;
  public code_template: CodeTemplateClient = null;
  public component: ComponentClient = null;

  constructor(config: EasyWechatConfig = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

    this.offsetSet('verify_ticket', function (app) {
      return new VerifyTicket(app);
    });
    this.offsetSet('access_token', function (app) {
      return new AccessToken(app);
    });
    this.offsetSet('base', function (app) {
      return new OpenPlatformBase(app);
    });
    this.offsetSet('encryptor', function (app) {
      return new Encryptor(app.config['app_id'], app.config['token'], app.config['aes_key']);
    });
    this.offsetSet('server', function (app) {
      return new OpenPlatformGuard(app);
    });
    this.offsetSet('code_template', function (app) {
      return new CodeTemplateClient(app);
    });
    this.offsetSet('component', function (app) {
      return new ComponentClient(app);
    });
  }

  /**
   * 获取用户授权页 URL
   * @param callbackUrl 回调地址
   * @param optional 其它参数
   */
  async getPreAuthorizationUrl(callbackUrl: string, optional = {}): Promise<string>
  {
    if (isString(optional)) {
      optional = {
        pre_auth_code: optional,
      };
    }
    else {
      optional['pre_auth_code'] = (await this.createPreAuthorizationCode())['pre_auth_code'];
    }

    return 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?' + buildQueryString(merge(merge({}, optional), {
      component_appid: this.config['app_id'],
      redirect_uri: callbackUrl,
    }));
  }

  /**
   * 获取移动端用户授权页 URL
   * @param callbackUrl 回调地址
   * @param optional 其它参数
   */
  async getMobilePreAuthorizationUrl(callbackUrl: string, optional = {}): Promise<string>
  {
    if (isString(optional)) {
      optional = {
        pre_auth_code: optional,
      };
    }
    else {
      optional['pre_auth_code'] = await this.createPreAuthorizationCode()['pre_auth_code'];
    }

    return 'https://mp.weixin.qq.com/safe/bindcomponent?' + buildQueryString(merge(optional, {
      component_appid: this.config['app_id'],
      redirect_uri: callbackUrl,
      action: 'bindcomponent',
      no_scan: 1,
    }));
  }

  protected getAuthorizerConfig(appId: string, refreshToken: string = null): object
  {
    return merge(merge({}, this.config), {
      component_app_id: this.config['app_id'],
      app_id: appId,
      refresh_token: refreshToken,
    });
  }

  protected getReplaceServices(accessToken = null): object
  {
    let that = this;
    let services = {
      access_token: accessToken || function (app) {
        return new AuthorizerAccessToken(app, that);
      },
      server: function (app) {
        return new AuthorizerGuard(app);
      },
    };

    ['cache', 'log', 'request'].forEach(function (reuse) {
      if (that[reuse]) {
        services[reuse] = that[reuse];
      }
    });

    return services;
  }

  /**
   * 代理公众号实现业务，返回SDK实例
   * @param appId 授权方公众号 APPID，非开放平台第三方平台 APPID
   * @param refreshToken 为授权方的 refresh_token
   * @param accessToken
   */
  officialAccount(appId: string, refreshToken: string = null, accessToken: AuthorizerAccessToken = null)
  {
    let that = this;
    let services = merge(merge({}, this.getReplaceServices(accessToken)), {
      encryptor: this.encryptor,
      account: function (app) {
        return new OAAccountClient(app, that);
      },
      oauth: function (app) {
        return new OAOauthClient(that);
      },
    });
    return new OfficialAccount(this.getAuthorizerConfig(appId, refreshToken), services);
  }

  /**
   * 代理小程序实现业务，返回SDK实例
   * @param appId 授权方小程序 APPID，非开放平台第三方平台 APPID
   * @param refreshToken 为授权方的 refresh_token
   * @param accessToken
   */
  miniProgram(appId: string, refreshToken: string = null, accessToken: AuthorizerAccessToken = null)
  {
    let that = this;
    let services = merge(merge({}, this.getReplaceServices(accessToken)), {
      auth: function (app) {
        return new MPAuthClient(app, that);
      },
    });
    return new MiniProgram(this.getAuthorizerConfig(appId, refreshToken), services);
  }


  // map to `base` module

  /**
   * 使用授权码换取接口调用凭据和授权信息
   * @param authCode 授权码, 会在授权成功的回调返回给第三方平台
   */
  handleAuthorize(): Promise<any>
  {
    return this.base.handleAuthorize.apply(this.base, arguments);
  }
  /**
   * 获取授权方的帐号基本信息
   * @param appId 授权方app_id
   */
  getAuthorizer(): Promise<any>
  {
    return this.base.getAuthorizer.apply(this.base, arguments);
  }
  /**
   * 设置授权方的选项信息
   * @param appId 授权方app_id
   * @param name 选项名称
   */
  getAuthorizerOption(): Promise<any>
  {
    return this.base.getAuthorizerOption.apply(this.base, arguments);
  }
  /**
   * 设置授权方的选项信息
   * @param appId 授权方app_id
   * @param name 选项名称
   * @param value 选项值
   */
  setAuthorizerOption(): Promise<any>
  {
    return this.base.setAuthorizerOption.apply(this.base, arguments);
  }
  /**
   * 获取已授权的授权方列表
   * @param offset 起始位置，从0开始
   * @param count 获取记录数，最大500
   */
  getAuthorizers(): Promise<any>
  {
    return this.base.getAuthorizers.apply(this.base, arguments);
  }
  /**
   * 获取预授权码
   */
  createPreAuthorizationCode(): Promise<any>
  {
    return this.base.createPreAuthorizationCode.apply(this.base, arguments);
  }
  /**
   * 清零调用次数
   */
  clearQuota(): Promise<any>
  {
    return this.base.clearQuota.apply(this.base, arguments);
  }
};
