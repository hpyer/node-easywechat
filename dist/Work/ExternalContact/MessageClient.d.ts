import BaseClient from '../../Core/BaseClient';
export default class MessageClient extends BaseClient {
    protected required: string[];
    protected textMessage: object;
    protected imageMessage: object;
    protected linkMessage: object;
    protected miniprogramMessage: object;
    /**
     * 添加企业群发消息模板
     * @param msg
     * @returns
     */
    submit(msg: object): Promise<any>;
    /**
     * 获取企业群发消息发送结果
     * @param msgId
     * @returns
     */
    get(msgId: string): Promise<any>;
    /**
     * 获取群发记录列表
     * @param chatType 群发任务的类型，默认为single，表示发送给客户，group表示发送给客户群
     * @param startTime 群发任务记录开始时间
     * @param endTime 群发任务记录结束时间
     * @param creator 群发任务创建人企业账号id
     * @param filterType 创建人类型。0：企业发表 1：个人发表 2：所有，包括个人创建以及企业创建，默认情况下为所有类型
     * @param limit 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgListV2(chatType: string, startTime: number, endTime: number, creator?: string, filterType?: number, limit?: number, cursor?: string): Promise<any>;
    /**
     * 获取群发成员发送任务列表
     * @param msgId 群发消息的id，通过获取群发记录列表接口返回
     * @param limit 返回的最大记录数，整型，最大值1000，默认值500，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgTask(msgId: string, limit?: number, cursor?: string): Promise<any>;
    /**
     * 获取企业群发成员执行结果
     * @param msgId 群发消息的id，通过获取群发记录列表接口返回
     * @param userId 发送成员userid，通过获取群发成员发送任务列表接口返回
     * @param limit 返回的最大记录数，整型，最大值1000，默认值500，超过最大值时取默认值
     * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
     * @returns
     */
    getGroupmsgSendResult(msgId: string, userId: string, limit?: number, cursor?: string): Promise<any>;
    /**
     * 发送新客户欢迎语
     * @param welcomeCode
     * @param msg
     * @returns
     */
    sendWelcome(welcomeCode: string, msg: object): Promise<any>;
    protected formatMessage(data: object): object;
    protected formatFields(data: object, defaults: object): object;
}
