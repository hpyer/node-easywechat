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
const fs_1 = __importDefault(require("fs"));
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
const StreamResponse_1 = __importDefault(require("../../Core/Http/StreamResponse"));
class MediaClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = ['image', 'voice', 'video', 'file'];
    }
    get(mediaId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: 'cgi-bin/media/get',
                method: 'GET',
                qs: {
                    media_id: mediaId,
                }
            });
            if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromResponse(res);
            }
            return res.getContent().toString();
        });
    }
    /**
     * 上传图片
     */
    uploadImage(file) {
        return this.upload('image', file);
    }
    /**
     * 上传视频
     */
    uploadVideo(file) {
        return this.upload('video', file);
    }
    /**
     * 上传语音
     */
    uploadVoice(file) {
        return this.upload('voice', file);
    }
    /**
     * 上传文件
     */
    uploadFile(file) {
        return this.upload('file', file);
    }
    /**
     * 上传到临时素材
     * @param {string} type 类型，可选值：image,video,voice,thumb
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    upload(type, file) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        let media = null;
        if (typeof file == 'string') {
            media = fs_1.default.createReadStream(file);
        }
        if (!Utils_1.inArray(type, this.allowTypes)) {
            throw new Error(`Unsupported media type: '${type}'`);
        }
        return this.httpPost('cgi-bin/media/upload', {
            media,
            type,
        });
    }
}
exports.default = MediaClient;
