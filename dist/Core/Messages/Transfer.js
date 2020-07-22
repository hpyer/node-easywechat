'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const Message_1 = require("./Message");
class Transfer extends Message_1.Message {
    constructor(account) {
        super({ account });
        this.type = 'transfer_customer_service';
        this.properties = [
            'account',
        ];
    }
    toXmlArray() {
        return this.get('account') ? {
            TransInfo: {
                KfAccount: this.get('account')
            }
        } : {};
    }
}
exports.Transfer = Transfer;
;
