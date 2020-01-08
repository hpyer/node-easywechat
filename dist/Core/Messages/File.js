'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = require("./Media");
class File extends Media_1.Media {
    constructor() {
        super(...arguments);
        this.type = 'file';
    }
}
exports.File = File;
;
