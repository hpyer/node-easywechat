# 工具

提供小程序相关的工具方法。

## WeixinJSBridge 调起支付

> 微信文档：JSAPI调起支付
> https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_4.shtml

```js
const prepayId = ''; // 预支付id
const appId = ''; // 公众号的appid
const signType = 'RSA'; // 默认RSA，v2要传MD5

const config = utils.buildBridgeConfig(prepayId, appId, signType);
```

## JSSDK 调起支付

> 微信文档：wx.chooseWXPay 调起支付
> https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#58

```js
const prepayId = ''; // 预支付id
const appId = ''; // 公众号的appid
const signType = 'RSA'; // 默认RSA，v2要传MD5

const config = utils.buildSdkConfig(prepayId, appId, signType);
```

## 小程序调起支付

> 微信文档：小程序调起支付
> https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_4.shtml

```js
const prepayId = ''; // 预支付id
const appId = ''; // 公众号的appid
const signType = 'RSA'; // 默认RSA，v2要传MD5

const config = utils.buildMiniAppConfig(prepayId, appId, signType);
```

## APP 调起支付

> 微信文档：APP调起支付
> https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml

```js
const prepayId = ''; // 预支付id
const appId = ''; // 公众号的appid

const config = utils.buildAppConfig(prepayId, appId);
```
