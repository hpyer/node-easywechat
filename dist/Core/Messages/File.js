'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const Media_1 = require("./Media");
class File extends Media_1.Media {
    constructor() {
        super(...arguments);
        this.type = 'file';
    }
}
exports.File = File;
;
