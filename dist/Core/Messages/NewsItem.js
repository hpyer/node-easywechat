'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsItem = void 0;
const Message_1 = require("./Message");
class NewsItem extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'news';
        this.properties = [
            'title',
            'description',
            'url',
            'image',
        ];
    }
    toJsonArray() {
        return {
            title: this.get('title'),
            description: this.get('description'),
            url: this.get('url'),
            picurl: this.get('image'),
        };
    }
    toXmlArray() {
        return {
            Title: this.get('title'),
            Description: this.get('description'),
            Url: this.get('url'),
            PicUrl: this.get('image'),
        };
    }
}
exports.NewsItem = NewsItem;
;
