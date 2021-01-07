'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const Message_1 = require("./Message");
const Utils_1 = require("../Utils");
class Media extends Message_1.Message {
    constructor(mediaId, type = '', attributes = {}) {
        super(Utils_1.merge({ media_id: mediaId }, attributes));
        this.properties = [
            'media_id',
        ];
        this.required = [
            'media_id',
        ];
        if (type)
            this.setType(type);
    }
    getMediaId() {
        this.checkRequiredAttributes();
        return this.get('media_id');
    }
    toXmlArray() {
        return {
            [Utils_1.strStudly(this.getType())]: {
                MediaId: this.get('media_id'),
            }
        };
    }
}
exports.Media = Media;
;
