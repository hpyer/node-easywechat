'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = require("./Messages");
class Messenger {
    constructor(client) {
        this.message = null;
        this.client = null;
        this.groupKey = null;
        this.client = client;
    }
    setMessage(message) {
        if (typeof message == 'string' || typeof message == 'number') {
            message = new Messages_1.Text(message);
        }
        if (!(message instanceof Messages_1.Message)) {
            throw new Error('Invalid message.');
        }
        this.message = message;
        return this;
    }
    toGroup(groupKey) {
        this.groupKey = groupKey;
        return this;
    }
    send(message = null) {
        if (message) {
            this.setMessage(message);
        }
        if (!this.message) {
            throw new Error('No message to send.');
        }
        if (!this.groupKey) {
            throw new Error('No group key specified.');
        }
        let data = this.message.transformForJsonRequest();
        return this.client.send(this.groupKey, data);
    }
}
exports.default = Messenger;
