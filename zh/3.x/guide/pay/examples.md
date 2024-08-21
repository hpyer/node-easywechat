# 示例代码

示例代码以 koa 框架为例，其他框架请自行转换。

## 文件上传

由于微信 v3 对文件类上传使用特殊的签名机制，参见：[微信支付 - 图片上传API](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter2_1_1.shtml)。

因此，我们提供了一个媒体上传方法，方便开发者使用。

```js
const client = app.getClient();

const path = '/path/to/your/files/demo.jpg';

const response = await client.uploadMedia('/v3/marketing/favor/media/image-upload', path);
```

部分接口使用的签名 meta 不一致，所以可以自行传入：

```js
const client = app.getClient();

const path = '/path/to/your/files/demo.jpg';
const meta = {
  bank_type: 'CFT',
  filename: 'demo.jpg',
  sha256: 'xxx',
};

const response = await client.uploadMedia('/v3/marketing/favor/media/image-upload', path, meta);
```

## JSAPI下单

> 微信文档
> https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_1.shtml

```js
const client = app.getClient();

const response = await client.postJson('/v3/pay/transactions/jsapi', {
	mchid: '1900006XXX',
	out_trade_no: '1217752501201407033233368318',
	appid: 'wxdace645e0bc2cXXX',
	description: 'Image形象店-深圳腾大-QQ公仔',
	notify_url: 'https://www.weixin.qq.com/wxpay/pay.php',
	amount: {
		total: 1,
		currency: 'CNY',
	},
	payer: {
		openid: 'o4GgauInH_RCEdvrrNGrntXDuXXX',
	},
});

const { prepay_id } = response.getBody();
```

## 查询订单（商户订单号）

> 微信文档
> https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/query-by-out-trade-no.html

```js
const client = app.getClient();
const merchant = app.getMerchant();

const out_trade_no = '';

const response = await client.get(`/v3/pay/transactions/out-trade-no/${out_trade_no}`, {
	params: {
    mchid: merchant.getMerchantId(),
  }
});

const { prepay_id } = response.getBody();
```

## 统一下单（V2）

> 微信文档
> https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/query-by-out-trade-no.html

```js
const client = app.getClient();
const merchant = app.getMerchant();

const response = await client.post('/pay/unifiedorder', {
  xml: {
    appid: 'xxx',
    body: 'JSAPI支付测试',
    mchid: merchant.getMerchantId(),
    out_trade_no: '1234567890',
    spbill_create_ip: '123.123.123.123',
    total_fee: 1,
    trade_type: 'JSAPI',
    openid: 'xxx',
    // SDK会自动计算签名，并追加到请求参数中，无需开发者填写
  },
  // 证书相关配置
  httpsAgent: new https.Agent({
    // 注意 Node.js 只需要 apiclient_cert.p12 的证书
    pfx: fs.readFileSync(app.getConfig().get('cert_path')),
    passphrase: merchant.getMerchantId(),
  }),
});

const { prepay_id } = response.getBody();
```
