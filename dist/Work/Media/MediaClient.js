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
const Utils_1 = require("../../Core/Utils");
const StreamResponse_1 = __importDefault(require("../../Core/Http/StreamResponse"));
class MediaClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = ['image', 'voice', 'video', 'file'];
    }
    /**
     * 获取临时素材
     * @param mediaId
     */
    get(mediaId) {
        return this.getResources(mediaId, 'cgi-bin/media/get');
    }
    /**
     * 上传临时图片
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadImage(file, form = null) {
        return this.upload('image', file, form);
    }
    /**
     * 上传临时视频
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadVideo(file, form = null) {
        return this.upload('video', file, form);
    }
    /**
     * 上传临时语音
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadVoice(file, form = null) {
        return this.upload('voice', file, form);
    }
    /**
     * 上传临时文件
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadFile(file, form = null) {
        return this.upload('file', file, form);
    }
    /**
     * 上传到临时素材
     * @param {string} type 类型，可选值：image,video,voice,thumb
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    upload(type, file, form = null) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        if (!Utils_1.inArray(type, this.allowTypes)) {
            throw new Error(`Unsupported media type: '${type}'`);
        }
        let files = {
            media: file,
        };
        return this.httpUpload('cgi-bin/media/upload', files, form, { type });
    }
    /**
     * 上传永久图片
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadImg(file, form = null) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        let files = {
            media: file,
        };
        return this.httpUpload('cgi-bin/media/uploadimg', files, form);
    }
    /**
     * 获取高清语音素材
     * @param mediaId
     */
    getHdVoice(mediaId) {
        return this.getResources(mediaId, 'cgi-bin/media/get/jssdk');
    }
    getResources(mediaId, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url,
                method: 'GET',
                params: {
                    media_id: mediaId,
                }
            });
            if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromResponse(res);
            }
            let content = res.getContent();
            if (typeof content === 'string') {
                try {
                    content = JSON.parse(content);
                }
                catch (e) { }
            }
            return content;
        });
    }
}
exports.default = MediaClient;
