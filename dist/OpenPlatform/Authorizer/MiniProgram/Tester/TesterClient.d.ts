import BaseClient from '../../../../Core/BaseClient';
export default class TesterClient extends BaseClient {
    /**
     * 绑定微信用户为体验者
     * @param wechatId 体验者微信号（非openid或昵称）
     */
    bind(wechatId: string): Promise<any>;
    /**
     * 解除绑定体验者
     * @param wechatId 体验者微信号（非openid或昵称）
     */
    unbind(wechatId: string): Promise<any>;
    /**
     * 获取体验者列表
     */
    list(): Promise<any>;
}
