import { AxiosRequestConfig } from 'axios';
import ProviderInterface from 'node-socialite/dist/Core/ProviderInterface';
import OfficialAccountApplicationInterface from '../OfficialAccount/Contracts/ApplicationInterface';
import Message from '../Core/Message';
import HttpClientResponseInterface from '../Core/HttpClient/Contracts/HttpClientResponseInterface';

declare module 'axios' {
  export interface AxiosRequestConfig {
    /**
     * 要发送的xml数据，会自动解析并赋值到data属性，同时设置content-type=text/xml
     */
    xml?: string | Record<string, any>;
    /**
     * 要发送的json数据，会自动解析并赋值到data属性，同时设置content-type=application/json
     */
    json?: string | Record<string, any>;
  }
}

/**
 * 微信接口响应数据格式
 */
export declare interface WeixinResponse extends Record<string, any> {
  /**
   * 错误代码
   */
  errcode?: string,

  /**
   * 错误信息
   */
  errmsg?: string,
}

/**
 * 公众号网页授权相关配置
 */
export declare interface OauthConfig {
  /**
   * 网页授权权限，可选值：snsapi_userinfo、snsapi_base
   */
  scope: string;

  /**
   * 网页授权回调地址，完整URL
   */
  redirect_url: string;
}

/**
 * 文件缓存相关配置
 */
export declare interface CacheFileConfig {
  /**
   * 缓存文件保存路径，默认：./
   */
  path: string,
  /**
   * 缓存文件所在目录权限，默认：0o777
   */
  dirMode: string | number,
  /**
   * 缓存文件的权限，默认：0o666
   */
  fileMode: string | number,
  /**
   * 缓存文件的后缀，“.”号开头，默认：.cache
   */
  ext: string
}

/**
 * 基础配置
 */
export declare interface BaseConfig {
  /**
   * 网络请求相关配置
   */
  http?: AxiosRequestConfig;

  /**
   * 文件缓存相关配置
   */
  file_cache?: CacheFileConfig;
}

/**
 * 公众号配置
 */
export declare interface OfficialAccountConfig extends BaseConfig {
  /**
   * 公众号 app_id
   */
  app_id?: string;

  /**
   * 公众号 secret
   */
  secret?: string;

  /**
   * 服务端接口验证 token
   */
  token?: string;

  /**
   * 服务端消息加解密密钥 aes_key
   */
  aes_key?: string;

  /**
   * 网页授权相关配置
   */
  oauth?: OauthConfig;
}

/**
 * 小程序配置
 */
export declare interface MiniAppConfig extends BaseConfig {
  /**
   * 小程序 app_id
   */
  app_id?: string;

  /**
   * 小程序 secret
   */
  secret?: string;

  /**
   * 服务端接口验证 token
   */
  token?: string;

  /**
   * 服务端消息加解密密钥 aes_key
   */
  aes_key?: string;
}

/**
 * 微信支付配置
 */
export declare interface PayConfig extends BaseConfig {
  /**
   * 商户号
   */
  mch_id?: string;

  /**
   * pfx 证书路径（敏感接口（如退款、发送红包等）需要）
   */
  certificate?: string;

  /**
   * v3 API密钥
   */
  secret_key?: string;

  /**
   * v2 API密钥
   */
  v2_secret_key?: string;
}

/**
 * 开发平台配置
 */
export declare interface OpenPlatformConfig extends BaseConfig {
  /**
   * 开发平台 app_id
   */
  app_id?: string;

  /**
   * 开发平台 secret
   */
  secret?: string;

  /**
   * 开发平台服务端接口验证 token
   */
  token?: string;

  /**
   * 开发平台服务端消息加解密密钥 aes_key
   */
  aes_key?: string;
}

/**
 * 企业微信配置
 */
export declare interface WorkConfig extends BaseConfig {
  /**
   * 企业微信 corp_id
   */
  corp_id?: string;

  /**
   * 企业微信 secret
   */
  secret?: string;

  /**
   * 企业微信服务端接口验证 token
   */
  token?: string;

  /**
   * 企业微信服务端消息加解密密钥 aes_key
   */
  aes_key?: string;
}

/**
 * 企业微信开放平台配置
 */
export declare interface OpenWorkConfig extends BaseConfig {
  /**
   * 企业微信 corp_id
   */
  corp_id?: string;

  /**
   * 企业微信 secret
   */
  secret?: string;

  /**
   * 企业微信服务端接口验证 token
   */
  token?: string;

  /**
   * 企业微信服务端消息加解密密钥 aes_key
   */
  aes_key?: string;
}

/**
 * 公众号OAuth工厂方法
 * @param app 公众号应用实例
 * @returns OAuth服务供应商实例
 */
export declare type OfficialAccountOAuthFactory = (app: OfficialAccountApplicationInterface) => ProviderInterface;

/**
 * 服务端通知处理项
 */
export declare interface ServerHandlerItem {
  hash: string;
  handler: ServerHandlerClosure;
};

/**
 * 服务端普通消息类型
 */
export declare type ServerMessageType = 'text' | 'image' | 'voice' | 'video' | 'shortvideo' | 'location';

/**
 * 服务端事件消息类型
 */
export declare type ServerEventType = 'subscribe' | 'unsubscribe' | 'SCAN' | 'LOCATION' | 'CLICK' | 'VIEW';

/**
 * 服务端消息处理器
 * @param message 微信信息
 * @param next 下一个消息处理器
 */
export declare type ServerHandlerClosure = (message: Message, next?: ServerHandlerClosure) => any;

/**
 * HttpClient错误判定回调
 * @param response 响应对象
 */
export declare type HttpClientFailureJudgeClosure = (response: HttpClientResponseInterface) => boolean;

/**
 * Payment通知错误处理
 * @param error 错误信息
 */
export declare type PaymentFailHandler = (error: string) => void;

/**
 * Payment业务错误处理
 * @param error 错误信息
 */
export declare type PaymentAlertHandler = (error: string) => void;

/**
 * Payment支付结果处理回调函数
 * @param message 微信通知信息
 * @param fail 通知错误处理函数
 */
export declare type PaymentPaidHandler = (message: Message, fail: PaymentFailHandler) => void;

/**
 * Payment退款结果处理回调函数
 * @param message 微信通知信息
 * @param reqInfo 微信通知信息中 req_info 解密后的信息
 * @param fail 通知错误处理函数
 */
export declare type PaymentRefundedHandler = (message: Message, reqInfo: object, fail: PaymentFailHandler) => void;

/**
 * Payment扫码支付结果处理回调函数
 * @param message 微信通知信息
 * @param fail 通知错误处理函数
 * @param alert 业务错误处理函数
 */
export declare type PaymentScannedHandler = (message: Message, fail: PaymentFailHandler, alert: PaymentAlertHandler) => void;
