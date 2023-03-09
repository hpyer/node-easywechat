'use strict';

import merge from 'merge';
import Application from './Application';

class Utils
{
  constructor(protected app: Application) {}

  /**
   * 构建jssdk配置
   * @param url 完整URL地址
   * @param jsApiList api列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63
   * @param openTagList 开放标签列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#附录-所有开放标签列表
   * @param debug 是否开启调试模式，默认：false
   * @returns
   */
  async buildJsSdkConfig(url: string, jsApiList: string[] = [], openTagList: string[] = [], debug: boolean = false): Promise<Record<string, any>>
  {
    return merge({
      jsApiList,
      openTagList,
      debug,
    }, await this.app.getTicket().createConfigSignature(url));
  }

  /**
   * 构建代理应用的jssdk配置
   * @param agentId 代理应用id
   * @param url 完整URL地址
   * @param jsApiList api列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63
   * @param openTagList 开放标签列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#附录-所有开放标签列表
   * @param debug 是否开启调试模式，默认：false
   * @returns
   */
  async buildJsSdkAgentConfig(agentId: number, url: string, jsApiList: string[] = [], openTagList: string[] = [], debug: boolean = false): Promise<Record<string, any>>
  {
    return merge({
      jsApiList,
      openTagList,
      debug,
    }, await this.app.getTicket().createAgentConfigSignature(agentId, url));
  }

};

export = Utils;
