'use strict';

import merge from 'merge';
import ProviderInterface from 'node-socialite/dist/Core/ProviderInterface';
import OpenWeWork from 'node-socialite/dist/Providers/OpenWeWork';
import Config from './Config';
import ConfigInterface from '../Core/Contracts/ConfigInterface';
import Encryptor from './Encryptor';
import AccessTokenAwareClient from '../Core/HttpClient/AccessTokenAwareClient';
import CacheMixin from '../Core/Mixins/CacheMixin';
import ClientMixin from '../Core/Mixins/ClientMixin';
import ConfigMixin from '../Core/Mixins/ConfigMixin';
import HttpClientMixin from '../Core/Mixins/HttpClientMixin';
import ServerRequestMixin from '../Core/Mixins/ServerRequestMixin';
import { applyMixins } from '../Core/Support/Utils';
import { OpenWorkConfig, ServerHandlerClosure } from '../Types/global';
import Account from './Account';
import AccountInterface from './Contracts/AccountInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import Server from './Server';
import SuiteTicketInterface from './Contracts/SuiteTicketInterface';
import SuiteTicket from './SuiteTicket';
import SuiteEncryptor from './SuiteEncryptor';
import SuiteAccessToken from './SuiteAccessToken';
import Authorization from './Authorization';
import AuthorizerAccessToken from './AuthorizerAccessToken';
import HttpClientResponseInterface from '../Core/HttpClient/Contracts/HttpClientResponseInterface';
import ProviderAccessToken from './ProviderAccessToken';
import Message from './Message';
import JsApiTicket from './JsApiTicket';

/**
 * 企业微信开放平台应用
 */
class Application implements ApplicationInterface
{
  constructor(config: ConfigInterface | OpenWorkConfig) {
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
  protected accessToken: ProviderAccessToken = null;
  protected suiteEncryptor: SuiteEncryptor = null;
  protected suiteAccessToken: SuiteAccessToken = null;
  protected suiteTicket: SuiteTicketInterface = null;
  protected authorizerAccessToken: AuthorizerAccessToken = null;

  getAccount(): AccountInterface
  {
    if (!this.account) {
      this.account = new Account(
        this.config.get('corp_id'),
        this.config.get('provider_secret'),
        this.config.get('suite_id'),
        this.config.get('suite_secret'),
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
        this.getAccount().getCorpId(),
        token,
        aesKey,
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

  getSuiteEncryptor(): SuiteEncryptor
  {
    if (!this.suiteEncryptor) {
      let token = this.getAccount().getToken();
      let aesKey = this.getAccount().getAesKey();
      if (!token || !aesKey) {
        throw new Error('token or aes_key cannot be empty.');
      }
      this.suiteEncryptor = new SuiteEncryptor(
        this.getAccount().getSuiteId(),
        token,
        aesKey,
      );
    }
    return this.suiteEncryptor;
  }

  /**
   * 设置授权应用的加密机实例
   * @param suiteEncryptor
   * @returns
   */
  setSuiteEncryptor(suiteEncryptor: SuiteEncryptor): this
  {
    this.suiteEncryptor = suiteEncryptor;
    return this;
  }

  getServer(): Server
  {
    if (!this.server) {
      this.server = new Server(
        this.getSuiteEncryptor(),
        this.getEncryptor(),
        this.getRequest()
      );
      this.server.withDefaultSuiteTicketHandler(async (message: Message, next: ServerHandlerClosure) => {
        if (message.SuiteId === this.getAccount().getSuiteId()) {
          await this.getSuiteTicket().setTicket(message.SuiteTicket);
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

  getProviderAccessToken(): ProviderAccessToken
  {
    if (!this.accessToken) {
      this.accessToken = new ProviderAccessToken(
        this.getAccount().getCorpId(),
        this.getAccount().getProviderSecret(),
        null,
        this.getCache(),
        this.getHttpClient(),
      );
    }
    return this.accessToken;
  }

  /**
   * 设置开放平台应用的AccessToken实例
   * @param accessToken
   * @returns
   */
  setProviderAccessToken(accessToken: ProviderAccessToken): this
  {
    this.accessToken = accessToken;
    return this;
  }

  getSuiteAccessToken(): SuiteAccessToken
  {
    if (!this.suiteAccessToken) {
      this.suiteAccessToken = new SuiteAccessToken(
        this.getAccount().getSuiteId(),
        this.getAccount().getSuiteSecret(),
        this.getSuiteTicket(),
        null,
        this.getCache(),
        this.getHttpClient()
      );
    }
    return this.suiteAccessToken;
  }

  /**
   * 设置授权应用的AccessToken实例
   * @param suiteAccessToken
   * @returns
   */
  setSuiteAccessToken(suiteAccessToken: SuiteAccessToken): this
  {
    this.suiteAccessToken = suiteAccessToken;
    return this;
  }

  getSuiteTicket(): SuiteTicketInterface {
    if (!this.suiteTicket) {
      this.suiteTicket = new SuiteTicket(
        this.getAccount().getSuiteId(),
        this.getCache()
      );
    }

    return this.suiteTicket;
  }

  /**
   * 设置授权应用的Ticket实例
   * @param suiteTicket
   * @returns
   */
  setSuiteTicket(suiteTicket: SuiteTicketInterface): this {
    this.suiteTicket = suiteTicket;
    return this;
  }

  /**
   * 获取企业授权信息
   * @see https://developer.work.weixin.qq.com/document/10975#获取企业授权信息
   * @param corpId 授权方corpid
   * @param permanentCode 永久授权码，通过get_permanent_code获取
   * @param suiteAccessToken
   * @returns
   */
  async getAuthorization(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null) {
    if (!suiteAccessToken) suiteAccessToken = this.getSuiteAccessToken();

    let response = (await this.getClient().request(
      'post',
      'cgi-bin/service/get_auth_info',
      {
        params: {
          suite_access_token: await suiteAccessToken.getToken(),
        },
        json: {
          auth_corpid: corpId,
          permanent_code: permanentCode,
        }
      }
    )).toObject();

    if (!response['auth_corp_info']) {
      throw new Error('Failed to get auth_corp_info: ' + JSON.stringify(response));
    }

    return new Authorization(response);
  }

  /**
   * 获取预授权码
   * @see https://developer.work.weixin.qq.com/document/10975#获取预授权码
   * @param suiteAccessToken
   * @returns
   */
  async createPreAuthorizationCode(suiteAccessToken: SuiteAccessToken = null) {
    if (!suiteAccessToken) suiteAccessToken = this.getSuiteAccessToken();

    let response = (await this.getClient().request(
      'post',
      'cgi-bin/service/get_pre_auth_code',
      {
        params: {
          suite_access_token: await suiteAccessToken.getToken(),
        }
      }
    )).toObject();

    if (!response['pre_auth_code']) {
      throw new Error('Failed to get pre_auth_code: ' + JSON.stringify(response));
    }

    return response;
  }

  /**
   * 获取企业授权令牌
   * @param corpId
   * @param permanentCode
   * @param suiteAccessToken
   * @returns
   */
  async getAuthorizerAccessToken(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null) {
    if (!suiteAccessToken) suiteAccessToken = this.getSuiteAccessToken();

    return new AuthorizerAccessToken(
      corpId,
      permanentCode,
      suiteAccessToken,
      null,
      this.getCache(),
      this.getHttpClient()
    );
  }

  createClient(): AccessTokenAwareClient {
    return (new AccessTokenAwareClient(
      this.getHttpClient(),
      this.getProviderAccessToken(),
      (response: HttpClientResponseInterface) => response.toObject()['errcode'] ?? 0,
      this.getConfig().get('http.throw', true),
    ))
    .setPresets(this.getConfig().all());
  }

  async getAuthorizerClient(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null): Promise<AccessTokenAwareClient> {
    return (new AccessTokenAwareClient(
      this.getHttpClient(),
      await this.getAuthorizerAccessToken(corpId, permanentCode, suiteAccessToken),
      (response: HttpClientResponseInterface) => response.toObject()['errcode'] ?? 0,
      this.getConfig().get('http.throw', true),
    ))
    .setPresets(this.getConfig().all());
  }

  async getJsApiTicket(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null): Promise<JsApiTicket> {
    return new JsApiTicket(
      corpId,
      null,
      this.getCache(),
      await this.getAuthorizerClient(corpId, permanentCode, suiteAccessToken)
    );
  }

  async getOAuth(suiteId: string, suiteAccessToken: SuiteAccessToken = null): Promise<ProviderInterface> {
    if (!suiteAccessToken) suiteAccessToken = this.getSuiteAccessToken();

    return (new OpenWeWork({
      client_id: suiteId,
      client_secret: '',
      redirect: this.getConfig().get('oauth.redirect_url'),
    }))
      .withSuiteTicket(await this.getSuiteTicket().getTicket())
      .withSuiteAccessToken(await suiteAccessToken.getToken())
      .scopes(this.getConfig().get('oauth.scopes', 'snsapi_base'));
  }

  async getCorpOAuth(corpId: string, suiteAccessToken: SuiteAccessToken = null): Promise<ProviderInterface> {
    if (!suiteAccessToken) suiteAccessToken = this.getSuiteAccessToken();

    return (new OpenWeWork({
      client_id: corpId,
      client_secret: '',
      redirect: this.getConfig().get('oauth.redirect_url'),
    }))
      .withSuiteTicket(await this.getSuiteTicket().getTicket())
      .withSuiteAccessToken(await suiteAccessToken.getToken())
      .scopes(this.getConfig().get('oauth.scopes', 'snsapi_base'));
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
