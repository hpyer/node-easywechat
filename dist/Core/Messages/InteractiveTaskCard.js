'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveTaskCard = void 0;
const Message_1 = require("./Message");
/**
 * 企业微信 interactive_taskcard 任务卡片消息类型
 */
class InteractiveTaskCard extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'interactive_taskcard';
        this.properties = [
            'title',
            'description',
            'url',
            'task_id',
            'btn',
        ];
    }
}
exports.InteractiveTaskCard = InteractiveTaskCard;
;
