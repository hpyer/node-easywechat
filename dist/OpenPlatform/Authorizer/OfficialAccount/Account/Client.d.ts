import BaseClient from '../../Aggregate/Account/Client';
import BaseApplicatioin from '../../../../Core/BaseApplication';
import OpenPlatformApplication from '../../../Application';
export default class Client extends BaseClient {
    protected component: OpenPlatformApplication;
    constructor(app: BaseApplicatioin, component: OpenPlatformApplication);
    /**
     * 从第三方平台跳转至微信公众平台授权注册页面
     * @param callbackUrl
     * @param copyWxVerify
     */
    getFastRegistrationUrl(callbackUrl: string, copyWxVerify?: Boolean): string;
    /**
     * 第三方平台调用快速注册 API 完成注册
     * @param ticket 公众号扫码授权的凭证(公众平台扫码页面回跳到第三方平台时携带)
     */
    register(ticket: string): Promise<any>;
}
