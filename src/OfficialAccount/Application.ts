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
import { applyMixins } from '../Core/Support/Utils';
import { OfficialAccountConfig, OfficialAccountOAuthFactory } from '../Types/global';
import AccessToken from './AccessToken';
import Account from './Account';
import AccountInterface from './Contracts/AccountInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import JsApiTicket from './JsApiTicket';
import Server from './Server';
import Utils from './Utils';
import AccessTokenInterface from '../Core/Contracts/AccessTokenInterface';
import HttpClientResponseInterface from '../Core/HttpClient/Contracts/HttpClientResponseInterface';

/**
 * 公众号应用
 */
class Application implements ApplicationInterface
{
  constructor(config: ConfigInterface | OfficialAccountConfig) {
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
  protected accessToken: AccessTokenInterface = null;
  protected oauthFactory: OfficialAccountOAuthFactory = null;
  protected ticket: JsApiTicket = null;
  protected utils: Utils = null;

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
        this.getRequest(),
        this.getAccount().getAesKey() ? this.getEncryptor() : null
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
  setServer(server: Server): this
  {
    this.server = server;
    return this;
  }

  getAccessToken(): AccessTokenInterface
  {
    if (!this.accessToken) {
      this.accessToken = new AccessToken(
        this.getAccount().getAppId(),
        this.getAccount().getSecret(),
        null,
        this.getCache(),
        this.getHttpClient(),
        this.config.get('use_stable_access_token', false)
      );
    }
    return this.accessToken;
  }

  /**
   * 设置AccessToken实例
   * @param accessToken
   * @returns
   */
  setAccessToken(accessToken: AccessTokenInterface): this
  {
    this.accessToken = accessToken;
    return this;
  }

  setOAuthFactory(oauthFactory: OfficialAccountOAuthFactory): this
  {
    this.oauthFactory = oauthFactory;
    return this;
  }

  getOAuth(): ProviderInterface
  {
    if (!this.oauthFactory) {
      this.oauthFactory = ((app: ApplicationInterface): ProviderInterface => {
        return (new WeChat({
          client_id: app.getAccount().getAppId(),
          client_secret: app.getAccount().getSecret(),
          redirect: app.getConfig().get('oauth.redirect_url'),
        })).scopes(this.getConfig().get('oauth.scopes', 'snsapi_userinfo'));
      });
    }

    let provider = this.oauthFactory.call(null, this);
    if (!(provider instanceof ProviderInterface)) {
      throw new Error(`The factory must return a \`ProviderInterface\` instance.`);
    }

    return provider;
  }

  getTicket(): JsApiTicket
  {
    if (!this.ticket) {
      this.ticket = new JsApiTicket(
        this.getAccount().getAppId(),
        this.getAccount().getSecret(),
        null,
        this.getCache(),
        this.getClient()
      );
    }
    return this.ticket;
  }

  /**
   * 设置JsApiTicket实例
   * @param ticket
   * @returns
   */
  setTicket(ticket: JsApiTicket): this
  {
    this.ticket = ticket;
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
      this.utils = new Utils(this);
    }
    return this.utils;
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
    }, this.getConfig().get('http'));
  }

};

interface Application extends ConfigMixin, CacheMixin, ClientMixin, ServerRequestMixin, HttpClientMixin {};

applyMixins(Application, [ConfigMixin, CacheMixin, ClientMixin, ServerRequestMixin, HttpClientMixin]);

export = Application;
