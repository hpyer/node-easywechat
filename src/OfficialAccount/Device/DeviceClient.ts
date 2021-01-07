'use strict';

import BaseClient from '../../Core/BaseClient';

/**
 * @see http://iot.weixin.qq.com/wiki/new/index.html
 */
export default class DeviceClient extends BaseClient
{

  message(deviceId: string, openid: string, content: string): Promise<any>
  {
    return this.httpPostJson('device/transmsg', {
      device_type: this.app.config.device_type,
      device_id: deviceId,
      open_id: openid,
      content: Buffer.from(content).toString('base64'),
    });
  }

  qrCode(deviceIds: Array<string>): Promise<any>
  {
    return this.httpPostJson('device/create_qrcode', {
      device_num: deviceIds.length,
      device_id_list: deviceIds,
    });
  }

  authorize(devices: Array<string>, productId: string, opType: number = 0): Promise<any>
  {
    return this.httpPostJson('device/authorize_device', {
      device_num: devices.length,
      device_list: devices,
      op_type: opType,
      product_id: productId,
    });
  }

  createId(productId: string): Promise<any>
  {
    return this.httpGet('device/getqrcode', {
      product_id: productId,
    });
  }

  bind(openid: string, deviceId: string, ticket: string): Promise<any>
  {
    return this.httpPostJson('device/bind', {
      ticket: ticket,
      device_id: deviceId,
      openid: openid,
    });
  }

  unbind(openid: string, deviceId: string, ticket: string): Promise<any>
  {
    return this.httpPostJson('device/unbind', {
      ticket: ticket,
      device_id: deviceId,
      openid: openid,
    });
  }

  forceBind(openid: string, deviceId: string): Promise<any>
  {
    return this.httpPostJson('device/compel_bind', {
      device_id: deviceId,
      openid: openid,
    });
  }

  forceUnbind(openid: string, deviceId: string): Promise<any>
  {
    return this.httpPostJson('device/compel_unbind', {
      device_id: deviceId,
      openid: openid,
    });
  }

  status(deviceId: string): Promise<any>
  {
    return this.httpGet('device/get_stat', {
      device_id: deviceId,
    });
  }

}
