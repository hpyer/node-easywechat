'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const Message_1 = require("./Message");
class Markdown extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'markdown';
        this.properties = [
            'content',
        ];
    }
}
exports.Markdown = Markdown;
;
