
import BaseMessage from '../Core/Message';

class Message extends BaseMessage
{
  getOriginalAttributes(): Record<string, any> {
    let attributes = {};
    try {
      attributes = JSON.parse(this.originContent);
    }
    catch (e) { }
    return attributes;
  }

  getEventType(): string {
    let eventType = this.getOriginalAttributes()['event_type'];
    if (typeof eventType !== 'string') {
      throw new Error('Invalid event type.');
    }
    return eventType;
  }

}

interface Message {
  /**
   * 应用ID
   */
  appid: string;

  /**
   * 商户号
   */
  mchid: string;

  /**
   * 商户订单号
   */
  out_trade_no: string;

  /**
   * 微信支付订单号
   */
  transaction_id: string;

  /**
   * 交易类型
   * - `JSAPI` 公众号支付
   * - `NATIVE` 扫码支付
   * - `APP` APP支付
   * - `MICROPAY` 付款码支付
   * - `MWEB` H5支付
   * - `FACEPAY` 刷脸支付
   */
  trade_type: string;

  /**
   * 交易状态
   * - `SUCCESS` 支付成功
   * - `REFUND` 转入退款
   * - `NOTPAY` 未支付
   * - `CLOSED` 已关闭
   * - `REVOKED` 已撤销（付款码支付）
   * - `USERPAYING` 用户支付中（付款码支付）
   * - `PAYERROR` 支付失败(其他原因，如银行返回失败)
   */
  trade_state: string;

  /**
   * 交易状态描述
   */
  trade_state_desc: string;

  /**
   * 付款银行
   * @see [银行对照表](https://pay.weixin.qq.com/wiki/doc/apiv3/terms_definition/chapter1_1_3.shtml#part-6)
   */
  bank_type: string;

  /**
   * 附加数据
   */
  attach?: string;

  /**
   * 支付完成时间。格式：yyyy-MM-DDTHH:mm:ss+TIMEZONE，如：2015-05-20T13:29:35+08:00
   */
  success_time: string;

  /**
   * 支付者
   */
  payer: {
    /**
     * 用户标识
     */
    openid: string;
  };

  /**
   * 订单金额
   */
  amount: {
    /**
     * 总金额，单位：分
     */
    total: number;
    /**
     * 用户支付金额	，单位：分
     */
    payer_total: number;
    /**
     * 货币类型，如：`CNY` 表示人民币，境内商户号仅支持人民币
     */
    currency: string;
    /**
     * 用户支付币种，如：`CNY` 表示人民币
     */
    payer_currency: string;
  };

  /**
   * 场景信息
   */
  scene_info?: {
    /**
     * 商户端设备号
     */
    device_id?: string;
  };

  /**
   * 优惠信息
   */
  promotion_detail?: {
    /**
     * 券ID
     */
    coupon_id: string;
    /**
     * 优惠名称
     */
    name?: string;
    /**
     * 优惠范围
     * - `GLOBAL` 全场代金券
     * - `SINGLE` 单品优惠
     */
    scope?: string;
    /**
     * 优惠类型
     * - `CASH` 充值型代金券
     * - `NOCASH` 免充值型代金券
     */
    type?: string;
    /**
     * 优惠券面额
     */
    amount: number;
    /**
     * 活动ID
     */
    stock_id?: number;
    /**
     * 微信出资，单位：分
     */
    wechatpay_contribute?: number;
    /**
     * 商户出资，单位：分
     */
    merchant_contribute?: number;
    /**
     * 其他出资，单位：分
     */
    other_contribute?: number;
    /**
     * 优惠币种，如：`CNY` 表示人民币，境内商户号仅支持人民币
     */
    currency?: string;
    /**
     * 单品列表
     */
    goods_detail?: {
      /**
       * 商品编码
       */
      goods_id: string;
      /**
       * 商品数量
       */
      quantity: number;
      /**
       * 商品单价，单位：分
       */
      unit_price: number;
      /**
       * 商品优惠金额
       */
      discount_amount: number;
      /**
       * 商品备注
       */
      goods_remark: string;
    }[];
  };

};

export = Message;
