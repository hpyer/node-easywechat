'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const Media_1 = require("./Media");
class Video extends Media_1.Media {
    constructor(mediaId, attributes = {}) {
        super(mediaId, 'video', attributes);
        this.type = 'video';
        this.properties = [
            'title',
            'description',
            'media_id',
            'thumb_media_id',
        ];
    }
    toXmlArray() {
        let music = {
            Music: {
                Title: this.get('title'),
                Description: this.get('description'),
                MusicUrl: this.get('url'),
                HQMusicUrl: this.get('hq_url'),
            }
        };
        let thumbMediaId = this.get('thumb_media_id');
        if (thumbMediaId) {
            music['Music']['ThumbMediaId'] = thumbMediaId;
        }
        return music;
    }
}
exports.Video = Video;
;
