import { Message } from './Message';
/**
 * 专门为回复 InteractiveTaskCard 类型任务卡片消息而创建的类型
 */
export declare class ReplyInteractiveTaskCard extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(replace_name?: string);
    toXmlArray(): object;
}
