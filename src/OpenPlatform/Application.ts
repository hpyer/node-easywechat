'use strict';

import merge from 'merge';
import ProviderInterface from 'node-socialite/dist/Core/ProviderInterface';
import WeChat from 'node-socialite/dist/Providers/WeChat';
import Config from './Config';
import ConfigInterface from '../Core/Contracts/ConfigInterface';
import Encryptor from '../Core/Encryptor';
import AccessTokenAwareClient from '../Core/HttpClient/AccessTokenAwareClient';
import CacheMixin from '../Core/Mixins/CacheMixin';
import ClientMixin from '../Core/Mixins/ClientMixin';
import ConfigMixin from '../Core/Mixins/ConfigMixin';
import HttpClientMixin from '../Core/Mixins/HttpClientMixin';
import ServerRequestMixin from '../Core/Mixins/ServerRequestMixin';
import { applyMixins, buildQueryString, createHash } from '../Core/Support/Utils';
import OfficialAccountApplication from '../OfficialAccount/Application';
import MiniAppApplication from './Authorizer/MiniApp/Application';
import { OpenPlatformConfig, OfficialAccountConfig, OfficialAccountOAuthFactory, MiniAppConfig } from '../Types/global';
import Account from './Account';
import AccountInterface from './Contracts/AccountInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import Server from './Server';
import AccessTokenInterface from '../Core/Contracts/AccessTokenInterface';
import VerifyTicketInterface from './Contracts/VerifyTicketInterface';
import VerifyTicket from './VerifyTicket';
import ComponentAccessToken from './ComponentAccessToken';
import Authorization from './Authorization';
import AuthorizerAccessToken from './AuthorizerAccessToken';
import HttpClientResponseInterface from '../Core/HttpClient/Contracts/HttpClientResponseInterface';

/**
 * 开放平台应用
 */
class Application implements ApplicationInterface
{
  constructor(config: ConfigInterface | OpenPlatformConfig) {
    if (config instanceof ConfigInterface) {
      this.setConfig(config);
    }
    else {
      this.setConfig(new Config(config));
    }
  }

  protected account: AccountInterface = null;
  protected encryptor: Encryptor = null;
  protected server: Server = null;
  protected componentAccessToken: AccessTokenInterface = null;
  protected verifyTicket: VerifyTicketInterface = null;

  getAccount(): AccountInterface
  {
    if (!this.account) {
      this.account = new Account(
        this.config.get('app_id'),
        this.config.get('secret'),
        this.config.get('token'),
        this.config.get('aes_key'),
      );
    }
    return this.account;
  }

  /**
   * 设置当前账户实例
   * @param account
   * @returns
   */
  setAccount(account: AccountInterface): this
  {
    this.account = account;
    return this;
  }

  getVerifyTicket(): VerifyTicketInterface {
    if (!this.verifyTicket) {
      this.verifyTicket = new VerifyTicket(
        this.getAccount().getAppId(),
        null,
        this.getCache()
      );
    }

    return this.verifyTicket;
  }

  setVerifyTicket(verifyTicket: VerifyTicketInterface): this {
    this.verifyTicket = verifyTicket;
    return this;
  }

  getEncryptor(): Encryptor
  {
    if (!this.encryptor) {
      let token = this.getAccount().getToken();
      let aesKey = this.getAccount().getAesKey();
      if (!token || !aesKey) {
        throw new Error('token or aes_key cannot be empty.');
      }
      this.encryptor = new Encryptor(
        this.getAccount().getAppId(),
        token,
        aesKey,
        this.getAccount().getAppId(),
      );
    }
    return this.encryptor;
  }

  /**
   * 设置加密机实例
   * @param encryptor
   * @returns
   */
  setEncryptor(encryptor: Encryptor): this
  {
    this.encryptor = encryptor;
    return this;
  }

  getServer(): Server
  {
    if (!this.server) {
      this.server = new Server(
        this.getAccount().getAesKey() ? this.getEncryptor() : null,
        this.getRequest()
      );
    }
    else {
      this.server.setRequest(this.getRequest());
    }
    if (this.server instanceof Server) {
      this.server.withDefaultVerifyTicketHandler((message, next) => {
        const ticket = this.getVerifyTicket();
        if (typeof ticket.setTicket === 'function') {
          ticket.setTicket(message.get('ComponentVerifyTicket'));
        }
        return next(message);
      });
    }
    return this.server;
  }

  /**
   * 设置服务端实例
   * @param server
   * @returns
   */
  setServer(server: Server): this
  {
    this.server = server;
    return this;
  }

  getAccessToken(): AccessTokenInterface
  {
    return this.getComponentAccessToken();
  }

  getComponentAccessToken(): AccessTokenInterface
  {
    if (!this.componentAccessToken) {
      this.componentAccessToken = new ComponentAccessToken(
        this.getAccount().getAppId(),
        this.getAccount().getSecret(),
        this.getVerifyTicket(),
        null,
        this.getCache(),
        this.getHttpClient()
      );
    }
    return this.componentAccessToken;
  }

  /**
   * 设置AccessToken实例
   * @param accessToken
   * @returns
   */
  setComponentAccessToken(componentAccessToken: AccessTokenInterface): this
  {
    this.componentAccessToken = componentAccessToken;
    return this;
  }

  /**
   * 使用授权码获取授权信息
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/authorization_info.html
   * @param authorizationCode
   * @returns
   */
  async getAuthorization(authorizationCode: string) {
    let response = (await this.getClient().request(
      'post',
      'cgi-bin/component/api_query_auth',
      {
        json: {
          component_appid: this.getAccount().getAppId(),
          authorization_code: authorizationCode,
        }
      }
    )).toObject();

    if (!response['authorization_info']) {
      throw new Error('Failed to get authorization_info: ' + JSON.stringify(response));
    }

    return new Authorization(response);
  }

  /**
   * 获取/刷新接口调用令牌
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/api_authorizer_token.html
   * @param authorizerAppId
   * @param authorizerRefreshToken
   * @returns
   */
  async refreshAuthorizerToken(authorizerAppId: string, authorizerRefreshToken: string) {
    let response = (await this.getClient().request(
      'post',
      'cgi-bin/component/api_authorizer_token',
      {
        json: {
          component_appid: this.getAccount().getAppId(),
          authorizer_appid: authorizerAppId,
          authorizer_refresh_token: authorizerRefreshToken,
        }
      }
    )).toObject();

    if (!response['authorizer_access_token']) {
      throw new Error('Failed to get authorizer_access_token: ' + JSON.stringify(response));
    }

    return response;
  }

  /**
   * 获取预授权码
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/pre_auth_code.html
   * @returns
   */
  async createPreAuthorizationCode(): Promise<{
    /**
     * 错误代码
     */
    errcode?: string,
    /**
     * 错误信息
     */
    errmsg?: string,
    /**
     * 预授权码
     */
    pre_auth_code?: string,
    /**
     * 有效期，单位：秒
     */
    expires_in?: number
  }> {
    let response = (await this.getClient().request(
      'post',
      'cgi-bin/component/api_create_preauthcode',
      {
        json: {
          component_appid: this.getAccount().getAppId(),
        }
      }
    )).toObject();

    if (!response['pre_auth_code']) {
      throw new Error('Failed to get pre_auth_code: ' + JSON.stringify(response));
    }

    return response;
  }

  /**
   * 生成授权页地址
   * @param callbackUrl 授权后的回调地址
   * @param optional 预授权码，不传
   * @returns
   */
  async createPreAuthorizationUrl(callbackUrl: string, optional?: string | { pre_auth_code: string }) {
    if (typeof optional === 'string') {
      optional = {
        pre_auth_code: optional,
      };
    }
    else if (!optional || !optional['pre_auth_code']) {
      optional = {
        pre_auth_code: (await this.createPreAuthorizationCode()).pre_auth_code,
      };
    }

    let queries = merge({
      component_appid: this.getAccount().getAppId(),
      redirect_uri: callbackUrl,
    }, optional);

    return `https://mp.weixin.qq.com/cgi-bin/componentloginpage?${buildQueryString(queries)}`;
  }

  getOAuth(): ProviderInterface
  {
    let oauthFactory = ((app: ApplicationInterface): ProviderInterface => {
      return (new WeChat({
        client_id: app.getAccount().getAppId(),
        client_secret: app.getAccount().getSecret(),
        redirect: app.getConfig().get('oauth.redirect_url'),
      })).scopes(this.getConfig().get('oauth.scopes', 'snsapi_userinfo'));
    });

    let provider = oauthFactory.call(null, this);
    if (!(provider instanceof ProviderInterface)) {
      throw new Error(`The factory must return a \`ProviderInterface\` instance.`);
    }

    return provider;
  }

  /**
   * 根据刷新令牌获取公众号实例
   * @param appId
   * @param refreshToken
   * @param config
   * @returns
   */
  async getOfficialAccountWithRefreshToken(appId: string, refreshToken: string, config: ConfigInterface | OfficialAccountConfig = {}) {
    return this.getOfficialAccountWithAccessToken(
      appId,
      await this.getAuthorizerAccessToken(appId, refreshToken),
      config,
    );
  }

  /**
   * 根据访问令牌获取公众号实例
   * @param appId
   * @param accessToken
   * @param config
   * @returns
   */
  getOfficialAccountWithAccessToken(appId: string, accessToken: string, config: ConfigInterface | OfficialAccountConfig = {}) {
    return this.getOfficialAccount(
      new AuthorizerAccessToken(appId, accessToken),
      config,
    );
  }

  /**
   * 获取公众号实例
   * @param authorizerAccessToken
   * @param config
   * @returns
   */
  getOfficialAccount(authorizerAccessToken: AuthorizerAccessToken, config: ConfigInterface | OfficialAccountConfig = {}) {
    if (!(config instanceof ConfigInterface)) {
      if (typeof config !== 'object' || config === null) config = {};
      config.app_id = authorizerAccessToken.getAppId();
      config.token = this.config.get('token');
      config.aes_key = this.config.get('aes_key');
      config.http = this.config.get('http', {});
      config = new Config(config);
    }
    else {
      config.set('app_id', authorizerAccessToken.getAppId());
      config.set('token', this.config.get('token'));
      config.set('aes_key', this.config.get('aes_key'));
      config.set('http', this.config.get('http', {}));
    }

    let app = new OfficialAccountApplication(config);

    app.setAccessToken(authorizerAccessToken);
    app.setEncryptor(this.getEncryptor());
    app.setOAuthFactory(this.createAuthorizerOAuthFactory(authorizerAccessToken.getAppId(), config));

    return app;
  }

  /**
   * 创建第三方oauth工厂
   * @param authorizerAppId
   * @param config
   * @returns
   */
  protected createAuthorizerOAuthFactory(authorizerAppId: string, config: ConfigInterface): OfficialAccountOAuthFactory {
    return ((app: ApplicationInterface): ProviderInterface => {
      return (new WeChat({
        client_id: authorizerAppId,
        component: {
          component_app_id: this.getAccount().getSecret(),
          component_access_token: this.getComponentAccessToken().getToken(),
        },
        redirect: this.config.get('oauth.redirect_url'),
      })).scopes(config.get('oauth.scopes', 'snsapi_userinfo'));
    });
  }

  /**
   * 根据刷新令牌获取小程序实例
   * @param appId
   * @param refreshToken
   * @param config
   * @returns
   */
  async getMiniAppWithRefreshToken(appId: string, refreshToken: string, config: ConfigInterface | MiniAppConfig = {}) {
    return this.getMiniAppWithAccessToken(
      appId,
      await this.getAuthorizerAccessToken(appId, refreshToken),
      config,
    );
  }

  /**
   * 根据访问令牌获取小程序实例
   * @param appId
   * @param accessToken
   * @param config
   * @returns
   */
  getMiniAppWithAccessToken(appId: string, accessToken: string, config: ConfigInterface | MiniAppConfig = {}) {
    return this.getMiniApp(
      new AuthorizerAccessToken(appId, accessToken),
      config,
    );
  }

  /**
   * 获取小程序实例
   * @param authorizerAccessToken
   * @param config
   * @returns
   */
  getMiniApp(authorizerAccessToken: AuthorizerAccessToken, config: ConfigInterface | MiniAppConfig = {}) {
    if (!(config instanceof ConfigInterface)) {
      if (typeof config !== 'object' || config === null) config = {};
      config.app_id = authorizerAccessToken.getAppId();
      config.token = this.config.get('token');
      config.aes_key = this.config.get('aes_key');
      config.http = this.config.get('http');
      config = new Config(config);
    }
    else {
      config.set('app_id', authorizerAccessToken.getAppId());
      config.set('token', this.config.get('token'));
      config.set('aes_key', this.config.get('aes_key'));
      config.set('http', this.config.get('http'));
    }

    const app = new MiniAppApplication(config, this);

    app.setAccessToken(authorizerAccessToken);
    app.setEncryptor(this.getEncryptor());

    return app;
  }

  /**
   * 获取第三方授权令牌
   * @param appId
   * @param refreshToken
   * @returns
   */
  async getAuthorizerAccessToken(appId: string, refreshToken: string) {
    let md5RefreshToken = createHash(refreshToken, 'md5');
    let cacheKey = `open-platform.authorizer_access_token.${appId}.${md5RefreshToken}`;

    let cache = this.getCache();
    let authorizerAccessToken: string = await cache.get(cacheKey);

    if (!authorizerAccessToken) {
      let response = await this.refreshAuthorizerToken(appId, refreshToken);
      authorizerAccessToken = response['authorizer_access_token'];
      await cache.set(cacheKey, authorizerAccessToken, (parseInt(response['expires_in']) ?? 7200) - 500);
    }

    return authorizerAccessToken;
  }

  createClient(): AccessTokenAwareClient {
    return (new AccessTokenAwareClient(
      this.getHttpClient(),
      this.getAccessToken(),
      (response: HttpClientResponseInterface) => response.toObject()['errcode'] ?? 0,
      this.getConfig().get('http.throw', true),
    ))
    .setPresets(this.getConfig().all());
  }

  /**
   * 获取请求默认配置
   * @returns
   */
  protected getHttpClientDefaultOptions(): Record<string, any>
  {
    return merge(true, {
      baseURL: 'https://api.weixin.qq.com/',
    }, this.getConfig().get('http', {}));
  }

};

interface Application extends ConfigMixin, CacheMixin, ClientMixin, ServerRequestMixin, HttpClientMixin {};

applyMixins(Application, [ConfigMixin, CacheMixin, ClientMixin, ServerRequestMixin, HttpClientMixin]);

export = Application;
