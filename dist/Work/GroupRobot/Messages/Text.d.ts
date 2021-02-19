import { Message } from './Message';
export declare class Text extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(content: string, userIds?: Array<string>, mobiles?: Array<string>);
    mention(userIds: Array<string>): this;
    mentionByMobile(mobile: Array<string>): this;
}
