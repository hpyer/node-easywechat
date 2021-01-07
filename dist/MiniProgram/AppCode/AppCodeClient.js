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
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const StreamResponse_1 = __importDefault(require("../../Core/Http/StreamResponse"));
const Utils_1 = require("../../Core/Utils");
class AppCodeClient extends BaseClient_1.default {
    /**
     * 获取小程序码（临时）
     * @param path 页面路径
     * @param optional 参数。width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0}
     */
    get(path, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Utils_1.merge({
                path,
            }, optional);
            return yield this.getStream('wxa/getwxacode', params);
        });
    }
    /**
     * 获取小程序码（永久）
     * @param scene 标识
     * @param optional 参数。path：页面路径，不能带参数；width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0}
     */
    getUnlimit(scene, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Utils_1.merge({
                scene,
            }, optional);
            return yield this.getStream('wxa/getwxacodeunlimit', params);
        });
    }
    /**
     * 获取小程序二维码（永久）
     * @param path 页面路径
     * @param width 二维码的宽度，默认430
     */
    getQrCode(path, width = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getStream('cgi-bin/wxaapp/createwxaqrcode', {
                path,
                width,
            });
        });
    }
    getStream(api, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: api,
                method: 'POST',
                json: true,
                body: params
            });
            if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromResponse(res);
            }
            return res.getContent();
        });
    }
}
exports.default = AppCodeClient;
