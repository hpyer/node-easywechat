'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const _1 = require(".");
class Text extends _1.Message {
    constructor(content, userIds = [], mobiles = []) {
        super({
            content,
            mentioned_list: userIds,
            mentioned_mobile_list: mobiles,
        });
        this.type = 'text';
        this.properties = ['content', 'mentioned_list', 'mentioned_mobile_list'];
    }
    mention(userIds) {
        this.set('mentioned_list', userIds);
        return this;
    }
    mentionByMobile(mobile) {
        this.set('mentioned_mobile_list', mobile);
        return this;
    }
}
exports.Text = Text;
