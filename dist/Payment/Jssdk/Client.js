'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../BaseService/Jssdk/Client");
const Utils_1 = require("../../Core/Utils");
const BaseAccessToken_1 = require("../../Core/BaseAccessToken");
class Client extends Client_1.default {
    bridgeConfig(prepayId, json = true) {
        let params = {
            appId: this.app['config'].sub_appid ? this.app['config'].sub_appid : this.app['config'].app_id,
            timeStamp: Utils_1.getTimestamp(),
            nonceStr: Utils_1.randomString(16),
            package: `prepay_id=${prepayId}`,
            signType: 'MD5',
        };
        params['paySign'] = Utils_1.makeSignature(params, this.app['config'].key, 'md5');
        return json ? JSON.stringify(params) : params;
    }
    sdkConfig(prepayId) {
        let config = this.bridgeConfig(prepayId, false);
        config['timestamp'] = config['timeStamp'];
        delete config['timeStamp'];
        return config;
    }
    appConfig(prepayId) {
        let params = {
            appid: this.app['config'].app_id,
            partnerid: this.app['config'].mch_id,
            prepayid: prepayId,
            noncestr: Utils_1.randomString(16),
            timestamp: Utils_1.getTimestamp(),
            package: 'Sign=WXPay',
        };
        params['sign'] = Utils_1.makeSignature(params, this.app['config'].key, 'md5');
        return params;
    }
    shareAddressConfig(accessToken, json = true) {
        if (accessToken instanceof BaseAccessToken_1.default) {
            accessToken = accessToken.getToken();
        }
        let params = {
            appId: this.app['config'].app_id,
            scope: 'jsapi_address',
            timeStamp: Utils_1.getTimestamp(),
            nonceStr: Utils_1.randomString(16),
            signType: 'SHA1',
        };
        let signParams = {
            appId: params['appId'],
            url: this.getUrl(),
            timestamp: params['timeStamp'],
            noncestr: params['nonceStr'],
            accesstoken: '' + accessToken,
        };
        params['addrSign'] = Utils_1.makeSignature(signParams, '', 'sha1');
        return json ? JSON.stringify(params) : params;
    }
}
exports.default = Client;
