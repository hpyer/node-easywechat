'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString, randomString } from '../../Core/Utils';

export default class DeviceClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 添加设备实例
   * @see https://developer.work.weixin.qq.com/document/path/90626
   * @param modelId 设备的型号id，在服务商管理端添加设备型号之后，可以查看型号id
   * @param deviceSn 硬件序列号，只能包含数字和大小写字母，长度最大为128字节，不可与之前已导入的相同
   * @returns
   */
  async add(modelId: string = '', deviceSn: string): Promise<string>
  {
    return this.httpPostJson('cgi-bin/service/add_device', {
      model_id: modelId,
      device_sn: deviceSn,
    });
  }

  /**
   * 查询设备绑定信息
   * @see https://developer.work.weixin.qq.com/document/path/90753
   * @param deviceSn 硬件序列号
   * @returns
   */
  get(deviceSn: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/get_device_auth_info', {
      device_sn: deviceSn,
    });
  }

  /**
   * 重置设备SecretNo
   * @see https://developer.work.weixin.qq.com/document/path/90631
   * @param deviceSn 硬件序列号
   * @returns
   */
  reset(deviceSn: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/reset_secret_no', {
      device_sn: deviceSn,
    });
  }

  /**
   * 获取设备列表
   * @see https://developer.work.weixin.qq.com/document/path/91346
   * @param offset 分页偏移量
   * @param limit 分页请求的数据条数
   * @returns
   */
  list(offset: number, limit: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/list_device', {
      offset,
      limit,
    });
  }

  /**
   * 上传设备日志
   * @see https://developer.work.weixin.qq.com/document/path/91475
   * @param deviceSn 硬件序列号
   * @param hint 提示参数，企业微信后台会将此参数透传给设备，设备可根据此参数来决定要上传哪部分日志，服务商可根据实际业务需求来使用此参数，最长为128字节
   * @returns
   */
  uploadLog(deviceSn: string, hint: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/fetch_device_log', {
      device_sn: deviceSn,
      hint,
    });
  }

  /**
   * 获取设备自定义参数
   * @see https://developer.work.weixin.qq.com/document/path/92739
   * @param deviceSn 硬件序列号
   * @returns
   */
  getFeature(deviceSn: string): Promise<any>
  {
    return this.httpGet('cgi-bin/hardware/get_device_feature', {
      device_sn: deviceSn,
    });
  }

  /**
   * 删除设备实例
   * @see https://developer.work.weixin.qq.com/document/path/92770
   * @param deviceSn 硬件序列号
   * @returns
   */
  getUserByTicket(deviceSn: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/del_device', {
      device_sn: deviceSn,
    });
  }

  /**
   * 设置打印机支持状态
   * @see https://developer.work.weixin.qq.com/document/path/95327
   * @param deviceSn 硬件序列号
   * @param supported 是否支持打印机，true：不支持，false：支持
   * @returns
   */
  setPrinterSupportState(deviceSn: string, supported: boolean): Promise<any>
  {
    return this.httpPostJson('cgi-bin/service/set_printer_support_state', {
      device_sn: deviceSn,
      not_supported_printer: supported ? 1 : 0,
    });
  }

}
