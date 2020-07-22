'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const Media_1 = require("./Media");
class Image extends Media_1.Media {
    constructor() {
        super(...arguments);
        this.type = 'image';
    }
}
exports.Image = Image;
;
