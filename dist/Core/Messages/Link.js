'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const Message_1 = require("./Message");
class Link extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'link';
        this.properties = [
            'title',
            'description',
            'url',
        ];
    }
}
exports.Link = Link;
;
