import { Message } from '../../Core/Messages';
export default class MessageBuilder {
    protected _to: object;
    protected _message: Message;
    protected _attributes: object;
    message(message: Message): this;
    to(to: object): this;
    toTag(tagId: number): this;
    toUsers(openids: Array<string>): this;
    toAll(): this;
    with(attributes: object): this;
    build(prepends?: object): object;
    buildForPreview(by: string, user: string): object;
}
