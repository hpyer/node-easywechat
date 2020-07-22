'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const Message_1 = require("./Message");
class Article extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'mpnews';
        this.properties = [
            'thumb_media_id',
            'author',
            'title',
            'content',
            'digest',
            'source_url',
            'show_cover',
        ];
        this.required = [
            'thumb_media_id',
            'title',
            'content',
            'show_cover',
        ];
        this.jsonAliases = {
            content_source_url: 'source_url',
            show_cover_pic: 'show_cover',
        };
    }
}
exports.Article = Article;
;
