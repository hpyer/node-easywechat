import BaseApplicatioin from "../../Core/BaseApplication";
import Response from "../../Core/Http/Response";
export default class Handler {
    SUCCESS: string;
    FAIL: string;
    protected app: BaseApplicatioin;
    protected message: object;
    protected fail: string;
    protected attributes: object;
    protected check: Boolean;
    protected sign: Boolean;
    constructor(app: BaseApplicatioin);
    handle(closure: Function): Promise<Response>;
    /**
     * 设置处理失败时的错误消息
     * @param message 错误消息
     */
    setFail(message: string): void;
    respondWith(attributes: object, sign?: Boolean): this;
    toResponse(): Response;
    getMessage(): Promise<object>;
    parseXml(xml: string): Promise<any>;
    decryptMessage(key: string): Promise<string>;
    protected validate(message: object): void;
    protected strict(result: any): void;
}
