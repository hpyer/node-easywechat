'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const _1 = require(".");
class News extends _1.Message {
    constructor(items) {
        super({
            items,
        });
        this.type = 'news';
        this.properties = ['items'];
    }
    propertiesToArray(data, aliases = []) {
        let newItems = [];
        try {
            this.get('items').forEach(item => {
                if (item instanceof _1.NewsItem) {
                    newItems.push(item.toJsonArray());
                }
            });
        }
        catch (e) { }
        return {
            articles: newItems
        };
    }
}
exports.News = News;
