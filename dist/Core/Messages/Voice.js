'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voice = void 0;
const Media_1 = require("./Media");
class Voice extends Media_1.Media {
    constructor() {
        super(...arguments);
        this.type = 'voice';
        this.properties = [
            'media_id',
            'recognition',
        ];
    }
}
exports.Voice = Voice;
;
