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
        this.baseUrl = 'https://api.weixin.qq.com/cgi-bin/';
        this.allowTypes = ['image', 'voice', 'video', 'thumb'];
    }
    /**
     * 上传图片到临时素材
     * @param file 文件路径或可读stream
     */
    uploadImage(file) {
        return this.upload('image', file);
    }
    /**
     * 上传视频到临时素材
     * @param file 文件路径或可读stream
     */
    uploadVideo(file) {
        return this.upload('video', file);
    }
    /**
     * 上传语音到临时素材
     * @param file 文件路径或可读stream
     */
    uploadVoice(file) {
        return this.upload('voice', file);
    }
    /**
     * 上传缩略图到临时素材
     * @param file 文件路径或可读stream
     */
    uploadThumb(file) {
        return this.upload('thumb', file);
    }
    /**
     * 上传到临时素材
     * @param type 类型，可选值：image,video,voice,thumb
     * @param file 文件路径或可读stream
     */
    upload(type, file) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        if (!Utils_1.inArray(type, this.allowTypes)) {
            throw new Error(`Unsupported media type: '${type}'`);
        }
        return this.httpUpload('media/upload', {
            media: file
        }, {}, {
            type
        });
    }
    /**
     * 上传群发视频
     * @param file 文件路径或可读stream
     * @param title 标题
     * @param description 描述
     */
    uploadVideoForBroadcasting(file, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.uploadVideo(file);
            if (response['media_id']) {
                return yield this.createVideoForBroadcasting(response['media_id'], title, description);
            }
            return response;
        });
    }
    /**
     * 创建群发消息
     * @param media_id 上传视频得到 media_id
     * @param title 标题
     * @param description 描述
     */
    createVideoForBroadcasting(media_id, title, description) {
        return this.httpPostJson('media/uploadvideo', {
            media_id,
            title,
            description,
        });
    }
    /**
     * 获取临时素材内容
     * @param media_id 上传视频得到 media_id
     */
    get(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: 'media/get',
                method: 'GET',
                params: {
                    media_id,
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
    /**
     * 获取 JSSDK 上传的高清语音
     * @param media_id 上传视频得到 media_id
     */
    getJssdkMedia(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: 'media/get/jssdk',
                method: 'GET',
                params: {
                    media_id,
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
