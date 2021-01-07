'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
/**
 * @see http://iot.weixin.qq.com/wiki/new/index.html
 */
class DeviceClient extends BaseClient_1.default {
    message(deviceId, openid, content) {
        return this.httpPostJson('device/transmsg', {
            device_type: this.app.config.device_type,
            device_id: deviceId,
            open_id: openid,
            content: Buffer.from(content).toString('base64'),
        });
    }
    qrCode(deviceIds) {
        return this.httpPostJson('device/create_qrcode', {
            device_num: deviceIds.length,
            device_id_list: deviceIds,
        });
    }
    authorize(devices, productId, opType = 0) {
        return this.httpPostJson('device/authorize_device', {
            device_num: devices.length,
            device_list: devices,
            op_type: opType,
            product_id: productId,
        });
    }
    createId(productId) {
        return this.httpGet('device/getqrcode', {
            product_id: productId,
        });
    }
    bind(openid, deviceId, ticket) {
        return this.httpPostJson('device/bind', {
            ticket: ticket,
            device_id: deviceId,
            openid: openid,
        });
    }
    unbind(openid, deviceId, ticket) {
        return this.httpPostJson('device/unbind', {
            ticket: ticket,
            device_id: deviceId,
            openid: openid,
        });
    }
    forceBind(openid, deviceId) {
        return this.httpPostJson('device/compel_bind', {
            device_id: deviceId,
            openid: openid,
        });
    }
    forceUnbind(openid, deviceId) {
        return this.httpPostJson('device/compel_unbind', {
            device_id: deviceId,
            openid: openid,
        });
    }
    status(deviceId) {
        return this.httpGet('device/get_stat', {
            device_id: deviceId,
        });
    }
}
exports.default = DeviceClient;
