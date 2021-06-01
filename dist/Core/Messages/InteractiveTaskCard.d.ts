import { Message } from './Message';
/**
 * 企业微信 interactive_taskcard 任务卡片消息类型
 */
export declare class InteractiveTaskCard extends Message {
    protected type: string;
    protected properties: Array<string>;
}
