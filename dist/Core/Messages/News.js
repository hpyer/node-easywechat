'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const Message_1 = require("./Message");
const NewsItem_1 = require("./NewsItem");
class News extends Message_1.Message {
    constructor(items = []) {
        super({ items });
        this.type = 'news';
        this.properties = [
            'items',
        ];
    }
    propertiesToArray(data, aliases = []) {
        let newItems = [];
        try {
            this.get('items').forEach(item => {
                if (item instanceof NewsItem_1.NewsItem) {
                    newItems.push(item.toXmlArray());
                }
            });
        }
        catch (e) { }
        return {
            articles: newItems
        };
    }
    toXmlArray() {
        let newItems = [];
        try {
            this.get('items').forEach(item => {
                if (item instanceof NewsItem_1.NewsItem) {
                    newItems.push(item.toXmlArray());
                }
            });
        }
        catch (e) { }
        return {
            ArticleCount: newItems.length,
            Articles: {
                item: newItems
            },
        };
    }
}
exports.News = News;
;
