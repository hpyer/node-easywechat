import Client from './Client';
export default class GeneralCardClient extends Client {
    /**
     * 激活通用卡券
     * @param info 卡券信息
     */
    activate(info: object): Promise<any>;
    /**
     * 禁用通用卡券
     * @param cardId 卡券id
     * @param code 卡券code
     */
    deactivate(cardId: string, code: string): Promise<any>;
    /**
     * 更新用户信息
     * @param params 信息
     */
    updateUser(params: object): Promise<any>;
}
