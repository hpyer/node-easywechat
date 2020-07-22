'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const Message_1 = require("./Message");
class Text extends Message_1.Message {
    constructor(content) {
        super({ content });
        this.type = 'text';
        this.properties = [
            'content',
        ];
    }
    toXmlArray() {
        return {
            Content: this.get('content')
        };
    }
}
exports.Text = Text;
;
