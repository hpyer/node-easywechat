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
class ContentSecurityClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.baseUrl = 'https://api.weixin.qq.com/wxa/';
    }
    /**
     * 校验一段文本是否含有违法内容
     * @param {string} text 待校验文本
     */
    checkText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPostJson('msg_sec_check', {
                content: text,
            });
        });
    }
    /**
     * 校验一张图片是否含有敏感信息
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    checkImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file) {
                throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
            }
            return yield this.httpUpload('img_sec_check', {
                media: file,
            });
        });
    }
}
exports.default = ContentSecurityClient;
