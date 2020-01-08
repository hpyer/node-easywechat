'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
const Request = require("request");
class HttpServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['http_client'] = function (payload) {
            return new Promise((resolve, reject) => {
                Request(payload, function (error, response, body) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        try {
                            body = JSON.parse(body);
                        }
                        catch (e) { }
                        resolve(body);
                    }
                });
            });
        };
    }
}
exports.default = HttpServiceProvider;
;
