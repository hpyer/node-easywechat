'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = require("../../Core/Messages");
const Utils_1 = require("../../Core/Utils");
class Messenger {
    constructor(client) {
        this.message = null;
        this.client = null;
        this.to = {
            touser: '@all',
        };
        this.agentId = null;
        this.secretive = false;
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
    ofAgent(agentId) {
        this.agentId = agentId;
        return this;
    }
    setSecretive() {
        this.secretive = true;
        return this;
    }
    setRecipients(ids, key) {
        if (Utils_1.isArray(ids)) {
            ids = ids.join('|');
        }
        this.to = {};
        this.to[key] = ids;
        return this;
    }
    toUser(userIds) {
        return this.setRecipients(userIds, 'touser');
    }
    toParty(partyIds) {
        return this.setRecipients(partyIds, 'toparty');
    }
    toTag(tagIds) {
        return this.setRecipients(tagIds, 'totag');
    }
    send(message = null) {
        if (message) {
            this.setMessage(message);
        }
        if (!this.message) {
            throw new Error('No message to send.');
        }
        if (!this.agentId) {
            throw new Error('No agentid specified.');
        }
        let data = this.message.transformForJsonRequest(Utils_1.merge({
            agentid: this.agentId,
            safe: this.secretive ? 1 : 0,
        }, this.to));
        this.secretive = false;
        return this.client.send(data);
    }
}
exports.default = Messenger;
