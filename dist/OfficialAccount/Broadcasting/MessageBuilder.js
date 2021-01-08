'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
class MessageBuilder {
    constructor() {
        this._to = {};
        this._message = null;
        this._attributes = {};
    }
    message(message) {
        this._message = message;
        return this;
    }
    to(to) {
        this._to = to;
        return this;
    }
    toTag(tagId) {
        this.to({
            filter: {
                is_to_all: false,
                tag_id: tagId,
            }
        });
        return this;
    }
    toUsers(openids) {
        this.to({
            touser: openids
        });
        return this;
    }
    toAll() {
        this.to({
            filter: {
                is_to_all: true,
            }
        });
        return this;
    }
    with(attributes) {
        this._attributes = attributes;
        return this;
    }
    build(prepends = null) {
        if (!this._message) {
            throw new Error('No message content to send.');
        }
        let content = this._message.transformForJsonRequest();
        if (!prepends) {
            prepends = this._to;
        }
        let message = Utils_1.merge(Utils_1.merge(Utils_1.merge({}, prepends), content), this._attributes);
        return message;
    }
    buildForPreview(by, user) {
        let prepends = {};
        prepends[by] = user;
        return this.build(prepends);
    }
}
exports.default = MessageBuilder;
;
