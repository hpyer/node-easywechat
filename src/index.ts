
import { OfficialAccountConfig, MiniAppConfig, LogHandler, ServerEventType, ServerHandlerClosure, PayConfig, OpenPlatformConfig, WorkConfig, OpenWorkConfig, HttpClientFailureJudgeClosure, PaymentFailHandler, PaymentAlertHandler, PaymentPaidHandler, PaymentRefundedHandler, PaymentScannedHandler } from './Types/global';
import OfficialAccount from './OfficialAccount/Application';
import MiniApp from './MiniApp/Application';
import Pay from './Pay/Application';
import OpenPlatform from './OpenPlatform/Application';
import Work from './Work/Application';
import OpenWork from './OpenWork/Application';
import CacheInterface from './Core/Contracts/CacheInterface';
import ServerRequest from './Core/Http/ServerRequest';
import FormData from 'form-data';
import OfficialAccountMessage from './OfficialAccount/Message';
import WorkMessage from './Work/Message';
import OpenPlatformMessage from './OpenPlatform/Message';
import OpenWorkMessage from './OpenWork/Message';

export {
  OfficialAccount,
  OfficialAccountConfig,

  MiniApp,
  MiniAppConfig,

  Pay,
  PayConfig,

  OpenPlatform,
  OpenPlatformConfig,

  Work,
  WorkConfig,

  OpenWork,
  OpenWorkConfig,

  CacheInterface,
  ServerRequest,
  LogHandler,
  ServerEventType,
  ServerHandlerClosure,

  /**
   * 表单对象
   * @see https://github.com/axios/axios#formdata
   * @see https://github.com/form-data/form-data#readme
   */
  FormData,
}

/**
 * 定义公众号配置
 * @param config
 */
export function defineOfficialAccountConfig(config: OfficialAccountConfig): OfficialAccountConfig {
  return config;
}
/**
 * 定义小程序配置
 * @param config
 */
export function defineMiniAppConfig(config: MiniAppConfig): MiniAppConfig {
  return config;
}
/**
 * 定义支付配置
 * @param config
 */
export function definePayConfig(config: PayConfig): PayConfig {
  return config;
}
/**
 * 定义开放平台配置
 * @param config
 */
export function defineOpenPlatformConfig(config: OpenPlatformConfig): OpenPlatformConfig {
  return config;
}
/**
 * 定义企业微信配置
 * @param config
 */
export function defineWorkConfig(config: WorkConfig): WorkConfig {
  return config;
}
/**
 * 定义企业微信开放平台配置
 * @param config
 */
export function defineOpenWorkConfig(config: OpenWorkConfig): OpenWorkConfig {
  return config;
}


/**
 * 定义日志处理函数
 * @param func
 */
export function defineLogHandler(func: LogHandler): LogHandler {
  return func;
}

/**
 * 定义公众号服务端消息处理函数
 * @param func
 */
export function defineOfficeAccountServerHandler(func: ServerHandlerClosure<OfficialAccountMessage>): ServerHandlerClosure<OfficialAccountMessage> {
  return func;
}
/**
 * 定义小程序服务端消息处理函数
 * @param func
 */
export function defineMiniAppServerHandler(func: ServerHandlerClosure<OfficialAccountMessage>): ServerHandlerClosure<OfficialAccountMessage> {
  return func;
}
/**
 * 定义企业微信服务端消息处理函数
 * @param func
 */
export function defineWorkServerHandler(func: ServerHandlerClosure<WorkMessage>): ServerHandlerClosure<WorkMessage> {
  return func;
}
/**
 * 定义开放平台服务端消息处理函数
 * @param func
 */
export function defineOpenPlatformServerHandler(func: ServerHandlerClosure<OpenPlatformMessage>): ServerHandlerClosure<OpenPlatformMessage> {
  return func;
}
/**
 * 定义企业微信开放平台服务端消息处理函数
 * @param func
 */
export function defineOpenWorkServerHandler(func: ServerHandlerClosure<OpenWorkMessage>): ServerHandlerClosure<OpenWorkMessage> {
  return func;
}

/**
 * 定义HttpClient错误判定回调
 * @param func
 */
export function defineHttpClientFailureJudgeClosure(func: HttpClientFailureJudgeClosure): HttpClientFailureJudgeClosure {
  return func;
}

/**
 * 定义支付通知错误处理函数
 * @param func
 */
export function definePaymentFailHandler(func: PaymentFailHandler): PaymentFailHandler {
  return func;
}
/**
 * 定义支付业务错误处理函数
 * @param func
 */
export function definePaymentAlertHandler(func: PaymentAlertHandler): PaymentAlertHandler {
  return func;
}
/**
 * 定义支付结果处理回调函数
 * @param func
 */
export function definePaymentPaidHandler(func: PaymentPaidHandler): PaymentPaidHandler {
  return func;
}
/**
 * 定义退款结果处理回调函数
 * @param func
 */
export function definePaymentRefundedHandler(func: PaymentRefundedHandler): PaymentRefundedHandler {
  return func;
}
/**
 * 定义扫码支付结果处理回调函数
 * @param func
 */
export function definePaymentScannedHandler(func: PaymentScannedHandler): PaymentScannedHandler {
  return func;
}
