'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raw = void 0;
const Message_1 = require("./Message");
class Raw extends Message_1.Message {
    constructor(content) {
        super({ content });
        this.type = 'raw';
        this.properties = [
            'content',
        ];
    }
    toXmlArray() {
        return {
            Content: this.get('content')
        };
    }
    transformForJsonRequest(appends = {}, withType = true) {
        return JSON.parse(this.get('content')) || '';
    }
    toString() {
        return this.get('content') || '';
    }
}
exports.Raw = Raw;
;
