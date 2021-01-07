'use strict';

import { strStudly } from './Core/Utils';
import OfficialAccount from './OfficialAccount/Application';
import BaseService from './BaseService/Application';
import MiniProgram from './MiniProgram/Application';
import OpenPlatform from './OpenPlatform/Application';
import Payment from './Payment/Application';
import CacheInterface from './Core/Contracts/CacheInterface';
import FinallResult from './Core/Decorators/FinallResult';
import TerminateResult from './Core/Decorators/TerminateResult';
import Request from './Core/Http/Request';
import Response from './Core/Http/Response';
import StreamResponse from './Core/Http/StreamResponse';
import * as Messages from './Core/Messages';
import { EasyWechatConfig } from './Core/Types';

/**
 * 通用获取实例方法
 * @param service 服务名称，可选值：'BaseService' | 'OfficialAccount' | 'MiniProgram' | 'OpenPlatform' | 'Payment'
 * @param config 对应的配置参数
 */
function getInstance(service: 'OfficialAccount', config ?: EasyWechatConfig): OfficialAccount;
function getInstance(service: 'BaseService', config ?: EasyWechatConfig): BaseService;
function getInstance(service: 'MiniProgram', config ?: EasyWechatConfig): MiniProgram;
function getInstance(service: 'OpenPlatform', config ?: EasyWechatConfig): OpenPlatform;
function getInstance(service: 'Payment', config?: EasyWechatConfig): Payment;
function getInstance(service: 'OfficialAccount' | 'BaseService' | 'MiniProgram' | 'OpenPlatform' | 'Payment', config ?: EasyWechatConfig) {
  try {
    let s = strStudly(service);
    let applicationClass = this[s];
    return new applicationClass(config);
  }
  catch (e) {
    console.log(e)
  }
};

class EasyWechat {
  /**
   * 实例工厂
   */
  Factory: {
    /**
     * 公众号类
     */
    OfficialAccount: typeof OfficialAccount;
    /**
     * 基础类
     */
    BaseService: typeof BaseService;
    /**
     * 小程序类
     */
    MiniProgram: typeof MiniProgram;
    /**
     * 开放平台类
     */
    OpenPlatform: typeof OpenPlatform;
    /**
     * 支付类
     */
    Payment: typeof Payment;


    /**
     * 通用获取实例方法
     * @param service 服务名称，可选值：'BaseService' | 'OfficialAccount' | 'MiniProgram' | 'OpenPlatform' | 'Payment'
     * @param config 对应的配置参数
     */
    getInstance: typeof getInstance;
  };

  /**
   * 自定义缓存接口
   */
  CacheInterface: typeof CacheInterface;
  /**
   * 修饰对象，用于服务端事件处理
   */
  Decorator: {
    FinallResult: typeof FinallResult,
    TerminateResult: typeof TerminateResult,
  };
  /**
   * 网络相关对象
   */
  Http: {
    /**
     * 请求对象
     */
    Request: typeof Request,
    /**
     * 响应对象
     */
    Response: typeof Response,
    /**
     * 响应对象（Stream）
     */
    StreamResponse: typeof StreamResponse,
  };
  /**
   * @deprecated 即将作废，请使用 Messages 代替
   */
  Message: typeof Messages;
  /**
   * 消息类型
   */
  Messages: typeof Messages;

  constructor() {
    this.Factory = {
      OfficialAccount: OfficialAccount,
      BaseService: BaseService,
      MiniProgram: MiniProgram,
      OpenPlatform: OpenPlatform,
      Payment: Payment,
      getInstance: getInstance,
    };

    this.CacheInterface = CacheInterface;

    this.Decorator = {
      FinallResult: FinallResult,
      TerminateResult: TerminateResult,
    }
    this.Http = {
      Request: Request,
      Response: Response,
      StreamResponse: StreamResponse,
    }

    this.Message = Messages;
    this.Messages = Messages;
  }

};

export = new EasyWechat;
