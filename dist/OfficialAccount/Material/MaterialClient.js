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
const Messages_1 = require("../../Core/Messages");
const StreamResponse_1 = __importDefault(require("../../Core/Http/StreamResponse"));
class MaterialClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = ['image', 'voice', 'video', 'thumb', 'news_image'];
    }
    /**
     * 上传图片
     * @param file 文件路径或可读stream
     */
    uploadImage(file) {
        return this.upload('image', file);
    }
    /**
     * 上传视频
     * @param file 文件路径或可读stream
     * @param title 标题
     * @param description 描述
     */
    uploadVideo(file, title, description) {
        let params = {
            description: JSON.stringify({
                title: title,
                introduction: description,
            }),
        };
        return this.upload('video', file, params);
    }
    /**
     * 上传语音
     * @param file 文件路径或可读stream
     */
    uploadVoice(file) {
        return this.upload('voice', file);
    }
    /**
     * 上传缩略图
     * @param file 文件路径或可读stream
     */
    uploadThumb(file) {
        return this.upload('thumb', file);
    }
    /**
     * 上传图文消息图片
     * @param file 文件路径或可读stream
     */
    uploadArticleImage(file) {
        return this.upload('news_image', file);
    }
    upload(type, file, formData = {}) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        if (Utils_1.isString(file)) {
            file = fs_1.default.createReadStream(file);
        }
        if (!Utils_1.inArray(type, this.allowTypes)) {
            throw new Error(`Unsupported media type: '${type}'`);
        }
        if (!formData || !Utils_1.isObject(formData)) {
            formData = {};
        }
        formData['media'] = file;
        formData['type'] = type;
        return this.httpPost(this.getApiByType(type), formData);
    }
    getApiByType(type) {
        if (type == 'news_image') {
            return 'cgi-bin/media/uploadimg';
        }
        return 'cgi-bin/material/add_material';
    }
    /**
     * 上传图文消息
     * @param articles 图文消息（Article）实例或图文消息（Article）实例列表
     */
    uploadArticle(articles) {
        let list = [];
        if (articles instanceof Messages_1.Article || (typeof articles == 'object' && articles['title'])) {
            list = [articles];
        }
        else {
            list = articles;
        }
        let data = {
            articles: [],
        };
        list.forEach(article => {
            if (article instanceof Messages_1.Article) {
                data.articles.push(article.transformForJsonRequestWithoutType());
            }
            else {
                data.articles.push(article);
            }
        });
        return this.httpPostJson('cgi-bin/material/add_news', data);
    }
    /**
     * 修改图文消息
     * @param media_id 文章的media_id
     * @param article Article 实例
     * @param index 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0
     */
    updateArticle(media_id, article, index = 0) {
        let data = null;
        if (article instanceof Messages_1.Article) {
            data = article.transformForJsonRequestWithoutType();
        }
        else {
            data = article;
        }
        return this.httpPostJson('cgi-bin/material/update_news', {
            media_id,
            index,
            articles: data['title'] ? data : (data[index] || {}),
        });
    }
    /**
     * 获取永久素材
     * @param media_id 素材media_id
     */
    get(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.requestRaw({
                url: 'cgi-bin/material/get_material',
                method: 'POST',
                json: true,
                body: {
                    media_id,
                }
            });
            if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromResponse(res);
            }
            return res.getContent();
        });
    }
    /**
     * 删除永久素材
     * @param media_id 素材media_id
     */
    delete(media_id) {
        return this.httpPostJson('cgi-bin/material/del_material', {
            media_id,
        });
    }
    /**
     * 获取永久素材列表
     * @param type 素材的类型，图片（image）、视频（video）、语音 （voice）、图文（news）
     * @param offset 偏移起始位置，从0开始，默认：0
     * @param count 数量, 可选值：1～20，默认：20
     */
    list(type, offset = 0, count = 20) {
        return this.httpPostJson('cgi-bin/material/batchget_material', {
            type,
            offset,
            count,
        });
    }
    /**
     * 获取素材计数
     */
    stats() {
        return this.httpGet('cgi-bin/material/get_materialcount');
    }
}
exports.default = MaterialClient;
