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
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = ['image', 'voice', 'video', 'thumb', 'news_image'];
    }
    uploadImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('image', file);
        });
    }
    uploadVideo(file, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                description: JSON.stringify({
                    title: title,
                    introduction: description,
                }),
            };
            return yield this.upload('video', file, params);
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
    uploadArticleImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.upload('news_image', file);
        });
    }
    upload(type, file, formData = {}) {
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
            if (!formData || !Utils_1.isObject(formData)) {
                formData = {};
            }
            formData['media'] = file;
            formData['type'] = type;
            return yield this.httpPost(this.getApiByType(type), {
                formData
            });
        });
    }
    getApiByType(type) {
        if (type == 'news_image') {
            return 'cgi-bin/media/uploadimg';
        }
        return 'cgi-bin/material/add_material';
    }
    uploadArticle(articles) {
        return __awaiter(this, void 0, void 0, function* () {
            if (articles instanceof Messages_1.Article || articles['title']) {
                articles = [articles];
            }
            let body = {
                articles: [],
            };
            articles.forEach(article => {
                if (article instanceof Messages_1.Article) {
                    body.articles.push(article.transformForJsonRequestWithoutType());
                }
                else {
                    body.articles.push(article);
                }
            });
            return yield this.httpPost('cgi-bin/material/add_news', {
                json: true,
                body,
            });
        });
    }
    updateArticle(media_id, article, index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (article instanceof Messages_1.Article) {
                article = article.transformForJsonRequestWithoutType();
            }
            return yield this.httpPost('cgi-bin/material/update_news', {
                json: true,
                body: {
                    media_id,
                    index,
                    articles: article['title'] ? article : (article[index] || {}),
                },
            });
        });
    }
    get(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request({
                url: 'cgi-bin/material/get_material',
                method: 'POST',
                json: true,
                encoding: 'binary',
                body: {
                    media_id,
                }
            });
        });
    }
    delete(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/material/del_material', {
                json: true,
                body: {
                    media_id,
                }
            });
        });
    }
    list(type, offset = 0, count = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/material/batchget_material', {
                json: true,
                body: {
                    type,
                    offset,
                    count,
                }
            });
        });
    }
    stats() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/material/get_materialcount');
        });
    }
}
exports.default = Client;
