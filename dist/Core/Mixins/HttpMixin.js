'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const BaseApplication_1 = __importDefault(require("../BaseApplication"));
const Utils_1 = require("../Utils");
class HttpMixin {
    doRequest(payload, returnResponse = false) {
        payload = payload || {};
        if (typeof payload['baseUrl'] == 'undefined' && this['baseUrl']) {
            payload['baseUrl'] = this['baseUrl'];
        }
        if (payload['url'].substr(0, 7) == 'http://' || payload['url'].substr(0, 8) == 'https://') {
            delete payload['baseUrl'];
        }
        if (typeof payload['method'] == 'undefined') {
            payload['method'] = 'post';
        }
        let method = payload['method'].toLowerCase();
        if (this['app'] && this['app'] instanceof BaseApplication_1.default) {
            payload = Utils_1.merge(Utils_1.merge({}, this['app'].config.http || {}), payload);
        }
        this['app']['log']('debug', 'doRequest', payload);
        return new Promise((resolve, reject) => {
            request_1.default[method](payload, function (error, response, body) {
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
