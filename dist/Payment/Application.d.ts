import BaseApplication from '../Core/BaseApplication';
import Response from '../Core/Http/Response';
import AccessToken from '../OfficialAccount/Auth/AccessToken';
import UrlClient from '../BaseService/Url/UrlClient';
import PaymentBase from './Base/PaymentBase';
import BillClient from './Bill/BillClient';
import CouponClient from './Coupon/CouponClient';
import JssdkClient from './Jssdk/JssdkClient';
import MerchantClient from './Merchant/MerchantClient';
import OrderClient from './Order/OrderClient';
import RedpackClient from './Redpack/RedpackClient';
import RefundClient from './Refund/RefundClient';
import ReverseClient from './Reverse/ReverseClient';
import SandboxClient from './Sandbox/SandboxClient';
import TransferClient from './Transfer/TransferClient';
import SecurityClient from './Security/SecurityClient';
import ProfitSharingClient from './ProfitSharing/ProfitSharingClient';
import { EasyWechatConfig } from '../Core/Types';
export default class Payment extends BaseApplication {
    protected defaultConfig: EasyWechatConfig;
    base: PaymentBase;
    bill: BillClient;
    coupon: CouponClient;
    jssdk: JssdkClient;
    merchant: MerchantClient;
    order: OrderClient;
    redpack: RedpackClient;
    refund: RefundClient;
    reverse: ReverseClient;
    sandbox: SandboxClient;
    transfer: TransferClient;
    security: SecurityClient;
    profit_sharing: ProfitSharingClient;
    access_token: AccessToken;
    url: UrlClient;
    constructor(config?: EasyWechatConfig, prepends?: Object, id?: String);
    registerProviders(): void;
    scheme(product_id: string): string;
    codeUrlScheme(codeUrl: string): string;
    setSubMerchant(mchId: string, appId?: string): this;
    inSandbox(): boolean;
    getKey(endpoint?: string): Promise<string>;
    /**
     * 处理付款结果通知
     * @param closure 处理函数。需接收2个参数，第1个参数通知消息message，第2个参数为设置错误消息的方法。处理函数需要return true;表示处理成功
     */
    handlePaidNotify(closure: Function): Promise<Response>;
    /**
     * 处理退款结果通知
     * @param closure 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数为message['req_info']解密后的信息，第3个参数为设置错误消息的方法。处理函数需要return true;表示处理成功
     */
    handleRefundedNotify(closure: Function): Promise<Response>;
    /**
     * 扫码支付通知
     * @param closure 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数返回“通信错误”给微信，第3个参数返回“业务错误”给微信。处理函数需要return prepay_id
     */
    handleScannedNotify(closure: Function): Promise<Response>;
    /**
     * 刷卡支付
     * @param params 支付订单参数
     */
    pay(): Promise<any>;
    /**
     * 付款码查询openid
     * @param auth_code 扫码支付付款码
     */
    authCodeToOpenid(): Promise<any>;
}
