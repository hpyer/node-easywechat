import BaseClient from '../../../../Core/BaseClient';
export default class Client extends BaseClient {
    protected component: any;
    constructor(app: any, component: any);
    /**
     * 小程序登录，jscode换取session_key
     * @param code wx.login 获取的 code
     */
    session(code: string): Promise<any>;
}
