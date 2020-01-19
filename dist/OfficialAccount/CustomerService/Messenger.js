'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = require("../../Core/Messages");
const Utils_1 = require("../../Core/Utils");
class Messenger {
    constructor(client) {
        this._message = null;
        this.client = client;
    }
    message(message) {
        if (Utils_1.isString(message)) {
            message = new Messages_1.Text(message);
        }
        this._message = message;
        return this;
    }
    by(account) {
        this.account = account;
        return this;
    }
    from(account) {
        return this.by(account);
    }
    to(openid) {
        this._to = openid;
        return this;
    }
    send() {
        if (!this._message) {
            throw new Error('No message to send.');
        }
        let message = null;
        if (this._message instanceof Messages_1.Raw) {
            message = JSON.parse(this._message.get('content'));
        }
        else {
            let prepends = {
                touser: this._to,
            };
            if (this.account) {
                prepends['customservice'] = {
                    kf_account: this.account,
                };
            }
            message = this._message.transformForJsonRequest(prepends);
        }
        return this.client['send'](message);
    }
    getAccount() {
        return this.account;
    }
    getTo() {
        return this._to;
    }
    getMessage() {
        return this._message;
    }
    getClient() {
        return this.client;
    }
}
exports.default = Messenger;
