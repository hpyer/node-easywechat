'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const _1 = require(".");
class Image extends _1.Message {
    constructor(base64, md5) {
        super({
            base64,
            md5,
        });
        this.type = 'image';
        this.properties = ['base64', 'md5'];
    }
}
exports.Image = Image;
