'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const Message_1 = require("./Message");
class Music extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'music';
        this.properties = [
            'title',
            'description',
            'url',
            'hq_url',
            'thumb_media_id',
            'format',
        ];
        this.jsonAliases = {
            musicurl: 'url',
            hqmusicurl: 'hq_url',
        };
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
exports.Music = Music;
;
