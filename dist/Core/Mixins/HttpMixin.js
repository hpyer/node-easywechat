'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Merge = require("merge");
const Request = require("request");
const BaseApplication_1 = require("../BaseApplication");
class HttpMixin {
    httpGet(url, payload = null) {
        payload = payload || {};
        payload['url'] = url;
        payload['method'] = 'GET';
        return this.request(payload);
    }
    httpPost(url, payload = null) {
        payload = payload || {};
        payload['url'] = url;
        payload['method'] = 'POST';
        return this.request(payload);
    }
    httpFile(url, payload = null) {
        payload = payload || {};
        payload['url'] = url;
        payload['method'] = 'GET';
        payload['encoding'] = 'binary';
        return this.request(payload);
    }
    request(payload) {
        if (this['app'] && this['app'] instanceof BaseApplication_1.default) {
            payload = Merge({}, this['app']['config']['http'] || {}, payload || {});
        }
        if (this['baseUrl']) {
            payload['baseUrl'] = this['baseUrl'];
        }
        this['app']['log']('request', payload);
        return new Promise((resolve, reject) => {
            Request(payload, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    try {
                        if (payload['encoding'] == 'binary') {
                            let buffer = Buffer.from(body, 'binary');
                            body = buffer.toString();
                        }
                        body = JSON.parse(body);
                    }
                    catch (e) { }
                    resolve(body);
                }
            });
        });
    }
}
exports.default = HttpMixin;
;
