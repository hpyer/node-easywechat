'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniProgramPage = void 0;
const Message_1 = require("./Message");
class MiniProgramPage extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'miniprogrampage';
        this.properties = [
            'title',
            'appid',
            'pagepath',
            'thumb_media_id',
        ];
        this.required = [
            'thumb_media_id',
            'appid',
            'pagepath',
        ];
    }
}
exports.MiniProgramPage = MiniProgramPage;
;
