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
Object.defineProperty(exports, "__esModule", { value: true });
const Fs = require("fs");
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.baseUrl = 'https://api.weixin.qq.com/cgi-bin/';
        this.allowTypes = ['image', 'voice', 'video', 'thumb'];
    }
    uploadImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('image', file);
        });
    }
    uploadVideo(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('video', file);
        });
    }
    uploadVoice(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('voice', file);
        });
    }
    uploadThumb(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('thumb', file);
        });
    }
    upload(type, file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file) {
                throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
            }
            if (Utils_1.isString(file)) {
                file = Fs.createReadStream(file);
            }
            if (!Utils_1.inArray(type, this.allowTypes)) {
                throw new Error(`Unsupported media type: '${type}'`);
            }
            return yield this.httpPost('media/upload', {
                formData: {
                    media: file,
                    type,
                }
            });
        });
    }
    uploadVideoForBroadcasting(file, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.uploadVideo(file);
            if (response['media_id']) {
                return yield this.createVideoForBroadcasting(response['media_id'], title, description);
            }
            return response;
        });
    }
    createVideoForBroadcasting(media_id, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('media/uploadvideo', {
                json: true,
                body: {
                    media_id,
                    title,
                    description,
                }
            });
        });
    }
    get(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.httpGet('media/get', {
                qs: {
                    media_id,
                }
            });
            if (Utils_1.isObject(response)) {
                if (!response['video_url']) {
                    return false;
                }
                return yield this.httpFile(response['video_url']);
            }
            return response;
        });
    }
    getJssdkMedia(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.httpGet('media/get/jssdk', {
                qs: {
                    media_id,
                }
            });
            if (Utils_1.isObject(response)) {
                if (!response['video_url']) {
                    return false;
                }
                return yield this.httpFile(response['video_url']);
            }
            return response;
        });
    }
}
exports.default = Client;
