import BaseApplicatioin from '../../../../Core/BaseApplication';
import BaseClient from '../../../../Core/BaseClient';
export default class Client extends BaseClient {
    protected component: BaseApplicatioin;
    constructor(app: BaseApplicatioin, component: BaseApplicatioin);
    /**
     * 小程序登录，jscode换取session_key
     * @param code wx.login 获取的 code
     */
    session(code: string): Promise<any>;
}
