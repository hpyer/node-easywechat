import { Message } from '../../Core/Messages';
export default class MessageBuilder {
    protected _to: object;
    protected _message: Message;
    protected _attributes: object;
    message(message: Message): MessageBuilder;
    to(to: object): MessageBuilder;
    toTag(tagId: number): MessageBuilder;
    toUsers(openids: Array<string>): MessageBuilder;
    toAll(): MessageBuilder;
    with(attributes: object): MessageBuilder;
    build(prepends?: object): object;
    buildForPreview(by: string, user: string): object;
}
