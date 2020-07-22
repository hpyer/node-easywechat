'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEvent = void 0;
const Message_1 = require("./Message");
class DeviceEvent extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'device_event';
        this.properties = [
            'device_type',
            'device_id',
            'content',
            'session_id',
            'open_id',
        ];
    }
}
exports.DeviceEvent = DeviceEvent;
;
