import BaseClient from '../../Core/BaseClient';
/**
 * @see http://iot.weixin.qq.com/wiki/new/index.html
 */
export default class DeviceClient extends BaseClient {
    message(deviceId: string, openid: string, content: string): Promise<any>;
    qrCode(deviceIds: Array<string>): Promise<any>;
    authorize(devices: Array<string>, productId: string, opType?: number): Promise<any>;
    createId(productId: string): Promise<any>;
    bind(openid: string, deviceId: string, ticket: string): Promise<any>;
    unbind(openid: string, deviceId: string, ticket: string): Promise<any>;
    forceBind(openid: string, deviceId: string): Promise<any>;
    forceUnbind(openid: string, deviceId: string): Promise<any>;
    status(deviceId: string): Promise<any>;
}
