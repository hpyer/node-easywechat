import Client from './Client';
export default class MemberCardClient extends Client {
    /**
     * 激活会员卡
     * @param params 信息
     */
    activate(info: object): Promise<any>;
    /**
     * 设置开卡字段
     * @param cardId 卡id
     * @param settings 会员卡激活时的选项
     */
    setActivationForm(cardId: string, settings: object): Promise<any>;
    /**
     * 拉取会员信息
     * @param cardId 卡id
     * @param codes 卡code
     */
    getUser(cardId: string, codes: Array<string>): Promise<any>;
    /**
     * 更新会员信息
     * @param params 会员信息
     */
    updateUser(params: object): Promise<any>;
    /**
     * 获取开卡表单
     * @param activateTicket
     */
    getActivationForm(activateTicket: StringConstructor): Promise<any>;
    /**
     * 获取激活链接
     * @param params
     */
    getActivateUrl(params: object): Promise<any>;
}
