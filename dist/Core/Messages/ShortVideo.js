'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Video_1 = require("./Video");
class ShortVideo extends Video_1.Video {
    constructor() {
        super(...arguments);
        this.type = 'shortvideo';
    }
}
exports.ShortVideo = ShortVideo;
;
