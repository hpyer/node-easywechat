'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyInteractiveTaskCard = void 0;
const Message_1 = require("./Message");
/**
 * 专门为回复 InteractiveTaskCard 类型任务卡片消息而创建的类型
 */
class ReplyInteractiveTaskCard extends Message_1.Message {
    constructor(replace_name = '') {
        super({ replace_name });
        this.type = 'update_taskcard';
        this.properties = [
            'replace_name',
        ];
    }
    toXmlArray() {
        return {
            TaskCard: {
                ReplaceName: this.get('replace_name'),
            },
        };
    }
}
exports.ReplyInteractiveTaskCard = ReplyInteractiveTaskCard;
;
