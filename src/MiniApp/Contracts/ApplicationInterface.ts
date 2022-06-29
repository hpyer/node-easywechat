'use strict';

import CacheInterface from "../../Core/Contracts/CacheInterface";
import ConfigInterface from "../../Core/Contracts/ConfigInterface";
import AccessTokenAwareClient from "../../Core/HttpClient/AccessTokenAwareClient";
import HttpClientInterface from "../../Core/HttpClient/Contracts/HttpClientInterface";
import ServerInterface from "../../Core/Contracts/ServerInterface";
import ServerRequestInterface from "../../Core/Http/Contracts/ServerRequestInterface";
import Encryptor from "../../Core/Encryptor";
import AccountInterface from "./AccountInterface";
import Utils from "../Utils";
import RefreshableAccessTokenInterface from "../../Core/Contracts/RefreshableAccessTokenInterface";

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
   * 获取AccessToken实例
   * @returns
   */
  getAccessToken(): RefreshableAccessTokenInterface { return null; }

  /**
   * 获取缓存实例
   * @returns
   */
  getCache(): CacheInterface { return null; }

  /**
   * 获取工具实例
   * @returns
   */
  getUtils(): Utils { return null; }

};

export = ApplicationInterface;
