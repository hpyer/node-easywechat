import BaseClient from '../../Core/BaseClient';
export default class SubscribeMessageClient extends BaseClient {
    protected message: {
        touser: string;
        template_id: string;
        page: string;
        data: string;
    };
    protected required: string[];
    /**
     * 发送订阅消息
     * @param data 消息内容
     */
    send(data: object): Promise<any>;
    protected formatMessage(data: object): any;
    protected formatData(data: object): object;
    /**
     * 添加订阅消息到个人模板库
     * @param tid 模板id
     * @param kidList 开发者自行组合好的模板关键词列表
     * @param sceneDesc 服务场景描述
     */
    addTemplate(tid: string, kidList: Array<Number>, sceneDesc?: string): Promise<any>;
    /**
     * 删除个人模板库中的模板
     * @param id 模板id
     */
    deleteTemplate(id: string): Promise<any>;
    /**
     * 获取模板标题的关键词列表
     * @param tid 模板id
     */
    getTemplateKeywords(tid: string): Promise<any>;
    /**
     * 获取帐号所属类目下的公共模板标题
     * @param ids 类目 id
     * @param start 开始下标，从0开始
     * @param limit 分页记录数
     */
    getTemplateTitles(ids: Array<string>, start?: Number, limit?: Number): Promise<any>;
    /**
     * 获取当前帐号下的个人模板列表
     */
    getTemplates(): Promise<any>;
    /**
     * 获取小程序账号的类目
     */
    getCategory(): Promise<any>;
}
