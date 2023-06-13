import { AxiosRequestConfig, AxiosResponse } from 'axios';
import ProviderInterface from 'node-socialite/dist/Core/ProviderInterface';
import OfficialAccountApplicationInterface from '../OfficialAccount/Contracts/ApplicationInterface';
import WorkApplicationInterface from '../Work/Contracts/ApplicationInterface';
import Message from '../Core/Message';
import HttpClientResponseInterface from '../Core/HttpClient/Contracts/HttpClientResponseInterface';
import { PublicKey } from "../Core/Support/PublicKey";

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
    /**
     * 要发送的FormData数据，会自动解析并赋值到data属性，同时设置根据内容提取headers
     */
    formData?: Record<string, any>;
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
 * 网络请求配置
 */
export declare interface HttpConfig extends AxiosRequestConfig {
  /**
   * 是否抛出异常
   */
  throw?: boolean;
  /**
   * 是否抛出异常
   * @see https://github.com/softonic/axios-retry#options
   */
  retry?: IAxiosRetry.IAxiosRetryConfig;
  // retry?: {
  //   /**
  //    * 仅以下状态码重试
  //    */
  //   http_codes: number[];
  //   /**
  //    * 最大重试次数
  //    */
  //   max_retries: number;
  //   /**
  //    * 请求间隔 (毫秒)
  //    */
  //   delay: number;
  // };
}

/**
 * 基础配置
 */
export declare interface BaseConfig {
  /**
   * 网络请求相关配置
   */
  http?: HttpConfig;

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

  /**
   * 是否使用稳定版接口调用凭据，默认：false
   * @see https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/getStableAccessToken.html
   */
  use_stable_access_token?: boolean;
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

  /**
   * 是否使用稳定版接口调用凭据，默认：false
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getStableAccessToken.html
   */
  use_stable_access_token?: boolean;
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
   * 商户证书路径
   */
  certificate?: string;

  /**
   * 商户证书私钥路径
   */
  private_key?: string;

  /**
   * 平台证书（v3接口需要）
   *
   * 支持路径列表或者PublicKey对象列表或者，以serial_no为key，证书内容或PublicKey对象为value的对象
   *
   * 下载工具：https://github.com/wechatpay-apiv3/CertificateDownloader
   */
  platform_certs?: string[] | PublicKey[] | Record<string, string | PublicKey>;

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
  provider_secret?: string;

  /**
   * 第三方应用的 app_id
   */
  suite_id?: string;

  /**
   * 第三方应用的 secret
   */
  suite_secret?: string;

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
 * 企业微信OAuth工厂方法
 * @param app 企业微信应用实例
 * @returns OAuth服务供应商实例
 */
export declare type WorkOAuthFactory = (app: WorkApplicationInterface) => ProviderInterface;

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

/**
 * 日志处理方法
 * @param type before：请求前，after：请求后
 * @param options 请求选项
 * @param usedTime 请求耗时，单位ms，仅在 type 为 after 时返回
 * @param response 响应对象，仅在 type 为 after 时返回
 */
export declare type LogHandler = (type: 'before' | 'after', options: AxiosRequestConfig, usedTime?: number, response?: AxiosResponse) => void | Promise<void>;

/**
 * 支付参数 JsBridge
 */
export declare interface PayBridgeConfig {
  /**
   * 应用id
   */
  appId: string;
  /**
   * 时间戳
   */
  timeStamp: number;
  /**
   * 随机字符串
   */
  nonceStr: string;
  /**
   * 订单详情扩展字符串
   */
  package: string;
  /**
   * 签名方式
   */
  signType: string;
  /**
   * 签名
   */
  paySign: string;
}

/**
 * 支付参数 JsSdk
 */
export declare interface PaySdkConfig {
  /**
   * 应用id
   */
  appId: string;
  /**
   * 时间戳
   */
  timestamp: number;
  /**
   * 随机字符串
   */
  nonceStr: string;
  /**
   * 订单详情扩展字符串
   */
  package: string;
  /**
   * 签名方式
   */
  signType: string;
  /**
   * 签名
   */
  paySign: string;
}

/**
 * 支付参数 App
 */
export declare interface PayAppConfig {
  /**
   * 应用id
   */
  appId: string;
  /**
   * 商户id
   */
  partnerid: string;
  /**
   * 预支付交易会话ID
   */
  prepayid: string;
  /**
   * 订单详情扩展字符串
   */
  package: string;
  /**
   * 随机字符串
   */
  nonceStr: string;
  /**
   * 时间戳
   */
  timestamp: number;
  /**
   * 签名
   */
  sign: string;
}
