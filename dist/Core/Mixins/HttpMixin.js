'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Merge = require("merge");
const Request = require("request");
const BaseApplication_1 = require("../BaseApplication");
class HttpMixin {
    doRequest(payload, returnResponse = false) {
        payload = payload || {};
        if (typeof payload['baseUrl'] == 'undefined' && this['baseUrl']) {
            payload['baseUrl'] = this['baseUrl'];
        }
        if (typeof payload['method'] == 'undefined') {
            payload['method'] = 'post';
        }
        let method = payload['method'].toLowerCase();
        if (this['app'] && this['app'] instanceof BaseApplication_1.default) {
            payload = Merge({}, this['app']['config']['http'] || {}, payload);
        }
        this['app']['log']('request', payload);
        return new Promise((resolve, reject) => {
            Request[method](payload, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (returnResponse) {
                        resolve(response);
                    }
                    else {
                        try {
                            body = JSON.parse(body);
                        }
                        catch (e) { }
                        resolve(body);
                    }
                }
            });
        });
    }
}
exports.default = HttpMixin;
;
