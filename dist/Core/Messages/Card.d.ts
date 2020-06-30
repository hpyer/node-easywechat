import { Message } from './Message';
export declare class Card extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(cardId: string);
}
