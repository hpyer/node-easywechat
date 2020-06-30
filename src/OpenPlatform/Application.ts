'use strict';

import BaseApplication from '../Core/BaseApplication';
import * as Merge from 'merge';
import { isString, buildQueryString } from '../Core/Utils';
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

export default class OpenPlatform extends BaseApplication
{

  public verify_ticket: VerifyTicket = null;
  public access_token: AccessToken = null;
  public base: OpenPlatformBase = null;
  public encryptor: Encryptor = null;
  public server: OpenPlatformGuard = null;
  public code_template: CodeTemplateClient = null;
  public component: ComponentClient = null;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
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

    return 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?' + buildQueryString(Merge({}, optional, {
      component_appid: this.config['app_id'],
      redirect_uri: callbackUrl,
    }));
  }

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

    return 'https://mp.weixin.qq.com/safe/bindcomponent?' + buildQueryString(Merge({}, optional, {
      component_appid: this.config['app_id'],
      redirect_uri: callbackUrl,
      action: 'bindcomponent',
      no_scan: 1,
    }));
  }

  protected getAuthorizerConfig(appId: string, refreshToken: string = null): object
  {
    return Merge({}, this.config, {
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

  officialAccount(appId: string, refreshToken: string = null, accessToken: AuthorizerAccessToken = null)
  {
    let that = this;
    let services = Merge({}, this.getReplaceServices(accessToken), {
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

  miniProgram(appId: string, refreshToken: string = null, accessToken: AuthorizerAccessToken = null)
  {
    let that = this;
    let services = Merge({}, this.getReplaceServices(accessToken), {
      auth: function (app) {
        return new MPAuthClient(app, that);
      },
    });
    return new MiniProgram(this.getAuthorizerConfig(appId, refreshToken), services);
  }


  // map to `base` module
  handleAuthorize(): Promise<any>
  {
    return this.base.handleAuthorize.apply(this.base, arguments);
  }
  getAuthorizer(): Promise<any>
  {
    return this.base.getAuthorizer.apply(this.base, arguments);
  }
  getAuthorizerOption(): Promise<any>
  {
    return this.base.getAuthorizerOption.apply(this.base, arguments);
  }
  setAuthorizerOption(): Promise<any>
  {
    return this.base.setAuthorizerOption.apply(this.base, arguments);
  }
  getAuthorizers(): Promise<any>
  {
    return this.base.getAuthorizers.apply(this.base, arguments);
  }
  createPreAuthorizationCode(): Promise<any>
  {
    return this.base.createPreAuthorizationCode.apply(this.base, arguments);
  }
  clearQuota(): Promise<any>
  {
    return this.base.clearQuota.apply(this.base, arguments);
  }
};
