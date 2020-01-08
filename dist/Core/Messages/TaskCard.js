'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("./Message");
class TaskCard extends Message_1.Message {
    constructor() {
        super(...arguments);
        this.type = 'taskcard';
        this.properties = [
            'title',
            'description',
            'url',
            'task_id',
            'btn',
        ];
    }
}
exports.TaskCard = TaskCard;
;
