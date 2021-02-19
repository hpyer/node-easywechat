'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const _1 = require(".");
class Markdown extends _1.Message {
    constructor(content) {
        super({
            content,
        });
        this.type = 'markdown';
        this.properties = ['content'];
    }
}
exports.Markdown = Markdown;
