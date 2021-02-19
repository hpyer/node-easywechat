'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsItem = void 0;
const _1 = require(".");
class NewsItem extends _1.Message {
    constructor() {
        super(...arguments);
        this.type = 'news';
        this.properties = ['title', 'description', 'url', 'image',];
    }
    toJsonArray() {
        return {
            title: this.get('title'),
            description: this.get('description'),
            url: this.get('url'),
            picurl: this.get('image'),
        };
    }
}
exports.NewsItem = NewsItem;
