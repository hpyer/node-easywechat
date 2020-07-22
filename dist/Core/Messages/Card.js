'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const Message_1 = require("./Message");
class Card extends Message_1.Message {
    constructor(cardId) {
        super({ card_id: cardId });
        this.type = 'wxcard';
        this.properties = [
            'card_id',
        ];
    }
}
exports.Card = Card;
;
