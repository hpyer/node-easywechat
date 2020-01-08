'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = require("./Media");
class Image extends Media_1.Media {
    constructor() {
        super(...arguments);
        this.type = 'image';
    }
}
exports.Image = Image;
;
