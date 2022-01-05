'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const BaseApplication_1 = __importDefault(require("../BaseApplication"));
const Utils_1 = require("../Utils");
const form_data_1 = __importDefault(require("form-data"));
class HttpMixin {
    doRequest(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let opts = (0, Utils_1.merge)({}, payload || {});
            if (typeof opts.baseURL == 'undefined' && this['baseUrl']) {
                opts.baseURL = this['baseUrl'];
            }
            if (opts.url.substr(0, 7) == 'http://' || opts.url.substr(0, 8) == 'https://') {
                delete opts.baseURL;
            }
            if (typeof opts.method == 'undefined') {
                opts.method = 'post';
            }
            if (!opts.responseType) {
                opts.responseType = 'json';
            }
            if (this['app'] && this['app'] instanceof BaseApplication_1.default) {
                opts = (0, Utils_1.merge)((0, Utils_1.merge)({}, this['app'].config.http || {}), opts);
            }
            if (opts.data && opts.data instanceof form_data_1.default) {
                opts.headers = (0, Utils_1.merge)(opts.headers || {}, opts.data.getHeaders());
                opts.headers['Content-Length'] = yield new Promise((resolve, reject) => {
                    opts.data.getLength((err, length) => {
                        if (err) {
                            resolve('0');
                        }
                        else {
                            resolve(length);
                        }
                    });
                });
            }
            this['app']['log']('debug', 'doRequest', opts);
            return axios_1.default.request(opts);
        });
    }
}
exports.default = HttpMixin;
;
