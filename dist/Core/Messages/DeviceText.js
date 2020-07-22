'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceText = void 0;
const Message_1 = require("./Message");
class DeviceText extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'device_text';
        this.properties = [
            'device_type',
            'device_id',
            'content',
            'session_id',
            'open_id',
        ];
    }
    toXmlArray() {
        return {
            DeviceType: this.get('device_type'),
            DeviceID: this.get('device_id'),
            SessionID: this.get('session_id'),
            Content: Buffer.from(this.get('content')).toString('base64'),
        };
    }
}
exports.DeviceText = DeviceText;
;
