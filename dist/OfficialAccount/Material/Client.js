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
const Messages_1 = require("../../Core/Messages");
const StreamResponse_1 = require("../../Core/Http/StreamResponse");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = ['image', 'voice', 'video', 'thumb', 'news_image'];
    }
    uploadImage(file) {
        return this.upload('image', file);
    }
    uploadVideo(file, title, description) {
        let params = {
            description: JSON.stringify({
                title: title,
                introduction: description,
            }),
        };
        return this.upload('video', file, params);
    }
    uploadVoice(file) {
        return this.upload('voice', file);
    }
    uploadThumb(file) {
        return this.upload('thumb', file);
    }
    uploadArticleImage(file) {
        return this.upload('news_image', file);
    }
    upload(type, file, formData = {}) {
        if (!file) {
            throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
        }
        if (Utils_1.isString(file)) {
            file = Fs.createReadStream(file);
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
    uploadArticle(articles) {
        if (articles instanceof Messages_1.Article || articles['title']) {
            articles = [articles];
        }
        let data = {
            articles: [],
        };
        articles.forEach(article => {
            if (article instanceof Messages_1.Article) {
                data.articles.push(article.transformForJsonRequestWithoutType());
            }
            else {
                data.articles.push(article);
            }
        });
        return this.httpPostJson('cgi-bin/material/add_news', data);
    }
    updateArticle(media_id, article, index = 0) {
        if (article instanceof Messages_1.Article) {
            article = article.transformForJsonRequestWithoutType();
        }
        return this.httpPostJson('cgi-bin/material/update_news', {
            media_id,
            index,
            articles: article['title'] ? article : (article[index] || {}),
        });
    }
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
            if (res.getHeader['content-disposition'].indexOf('attachment') > -1) {
                return StreamResponse_1.default.buildFromIncomingMessage(res);
            }
            let content = res.getContent().toString();
            try {
                content = JSON.parse(content);
            }
            catch (e) { }
            return content;
        });
    }
    delete(media_id) {
        return this.httpPostJson('cgi-bin/material/del_material', {
            media_id,
        });
    }
    list(type, offset = 0, count = 20) {
        return this.httpPostJson('cgi-bin/material/batchget_material', {
            type,
            offset,
            count,
        });
    }
    stats() {
        return this.httpGet('cgi-bin/material/get_materialcount');
    }
}
exports.default = Client;
