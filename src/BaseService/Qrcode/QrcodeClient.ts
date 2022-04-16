'use strict';

import BaseClient from '../../Core/BaseClient';

export default class QrcodeClient extends BaseClient
{

  DAY: number = 86400;
  SCENE_MAX_VALUE: number = 100000;
  SCENE_QR_CARD: string = 'QR_CARD';
  SCENE_QR_TEMPORARY: string = 'QR_SCENE';
  SCENE_QR_TEMPORARY_STR: string = 'QR_STR_SCENE';
  SCENE_QR_FOREVER: string = 'QR_LIMIT_SCENE';
  SCENE_QR_FOREVER_STR: string = 'QR_LIMIT_STR_SCENE';

  protected baseUrl: string = 'https://api.weixin.qq.com/cgi-bin/';

  /**
   * 创建临时二维码
   * @param sceneValue 业务标识
   * @param expireSeconds 有效时间，单位：秒
   */
  temporary(sceneValue: any, expireSeconds: number = 0): Promise<any>
  {
    let type: string = '', sceneKey: string = '';
    if (typeof sceneValue == 'number' && sceneValue > 0) {
      type = this.SCENE_QR_TEMPORARY;
      sceneKey = 'scene_id';
    }
    else {
      type = this.SCENE_QR_TEMPORARY_STR;
      sceneKey = 'scene_str';
    }
    let scene: object = {};
    scene[sceneKey] = sceneValue;

    return this.create(type, scene, true, expireSeconds);
  }

  /**
   * 创建永久二维码
   * @param sceneValue 业务标识
   */
  forever(sceneValue: any): Promise<any>
  {
    let type: string = '', sceneKey: string = '';
    if (typeof sceneValue == 'number' && sceneValue > 0) {
      type = this.SCENE_QR_FOREVER;
      sceneKey = 'scene_id';
    }
    else {
      type = this.SCENE_QR_FOREVER_STR;
      sceneKey = 'scene_str';
    }

    let scene: object = {};
    scene[sceneKey] = sceneValue;

    return this.create(type, scene, false);
  }

  /**
   * 获取二维码地址
   * @param ticket 通过temporary或forever方法获得
   */
  url(ticket: string): string
  {
    return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`;
  }

  protected create(actionName: string, actionInfo, temporary: Boolean = true, expireSeconds: number = 0): Promise<any>
  {
    if (!expireSeconds || expireSeconds <= 0) {
      expireSeconds = 7 * this.DAY;
    }
    let params = {
      action_name: actionName,
      action_info: {
        scene: actionInfo,
      },
    };
    if (temporary) {
      params['expire_seconds'] = Math.min(expireSeconds, 30 * this.DAY);
    }
    return this.httpPostJson('qrcode/create', params);
  }

}
