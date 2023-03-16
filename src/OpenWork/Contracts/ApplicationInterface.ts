'use strict';

import ProviderInterface from "node-socialite/dist/Core/ProviderInterface";
import CacheInterface from "../../Core/Contracts/CacheInterface";
import ConfigInterface from "../../Core/Contracts/ConfigInterface";
import AccessTokenAwareClient from "../../Core/HttpClient/AccessTokenAwareClient";
import HttpClientInterface from "../../Core/HttpClient/Contracts/HttpClientInterface";
import ServerInterface from "../../Core/Contracts/ServerInterface";
import ServerRequestInterface from "../../Core/Http/Contracts/ServerRequestInterface";
import Encryptor from "../../Core/Encryptor";
import SuiteEncryptor from "../SuiteEncryptor";
import AccountInterface from "./AccountInterface";
import AccessTokenInterface from "../../Core/Contracts/AccessTokenInterface";
import SuiteTicketInterface from "./SuiteTicketInterface";
import SuiteAccessToken from "../SuiteAccessToken";
import JsApiTicket from "../JsApiTicket";

abstract class ApplicationInterface
{
  /**
   * 获取当前账户实例
   * @returns
   */
  getAccount(): AccountInterface { return null; }

  /**
   * 获取加密机实例
   * @returns
   */
  getEncryptor(): Encryptor { return null; }

  /**
   * 获取授权应用的加密机实例
   * @returns
   */
  getSuiteEncryptor(): SuiteEncryptor { return null; }

  /**
   * 获取服务端实例
   * @returns
   */
  getServer(): ServerInterface { return null; }

  /**
   * 获取当前请求实例
   * @returns
   */
  getRequest(): ServerRequestInterface { return null; }

  /**
   * 获取客户端实例
   * @returns
   */
  getClient(): AccessTokenAwareClient { return null; }

  /**
   * 创建客户端实例
   * @returns
   */
  createClient(): AccessTokenAwareClient { return null; }

  /**
   * 获取企业的客户端实例
   * @returns
   */
  getAuthorizerClient(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null): Promise<AccessTokenAwareClient> { return null; }

  /**
   * 获取jsapi ticket
   * @returns
   */
  getJsApiTicket(corpId: string, permanentCode: string, suiteAccessToken: SuiteAccessToken = null): Promise<JsApiTicket> { return null; }

  /**
   * 获取网络请求客户端实例
   * @returns
   */
  getHttpClient(): HttpClientInterface { return null; }

  /**
   * 获取配置信息实例
   * @returns
   */
  getConfig(): ConfigInterface { return null; }

  /**
   * 获取开放平台应用的AccessToken实例
   * @returns
   */
  getProviderAccessToken(): AccessTokenInterface { return null; }

  /**
   * 获取授权应用的AccessToken实例
   * @returns
   */
  getSuiteAccessToken(): AccessTokenInterface { return null; }

  /**
   * 获取授权应用的Ticket实例
   * @returns
   */
  getSuiteTicket(): SuiteTicketInterface { return null; }

  /**
   * 获取缓存实例
   * @returns
   */
  getCache(): CacheInterface { return null; }

  /**
   * 获取授权应用的OAuth实例
   * @param suiteId
   * @param suiteAccessToken
   * @https://developer.work.weixin.qq.com/document/path/91120#构造第三方应用oauth2链接
   * @returns
   */
  getOAuth(suiteId: string, suiteAccessToken: SuiteAccessToken = null): Promise<ProviderInterface> { return null; }

  /**
   * 获取企业的OAuth实例
   * @param corpId
   * @param suiteAccessToken
   * @see https://developer.work.weixin.qq.com/document/path/91120#构造企业oauth2链接
   * @returns
   */
  getCorpOAuth(corpId: string, suiteAccessToken: SuiteAccessToken = null): Promise<ProviderInterface> { return null; }

};

export = ApplicationInterface;
