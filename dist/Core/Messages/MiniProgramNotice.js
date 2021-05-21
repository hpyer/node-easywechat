'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniProgramNotice = void 0;
const Message_1 = require("./Message");
class MiniProgramNotice extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'miniprogram_notice';
        this.properties = [
            'appid',
            'title',
        ];
    }
}
exports.MiniProgramNotice = MiniProgramNotice;
;
