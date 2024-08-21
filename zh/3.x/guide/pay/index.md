# 微信支付入门

🚨 使用本SDK工具包前，请务必熟读 [微信官方文档：微信支付](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pages/index.shtml)。

## 配置项

除了 `基础信息`，其它配置均为可选项，完整的配置项：

```js
{
  // 基础信息
  mch_id: '', // 商户号
  certificate: '/path/to/apiclient_cert.pem', // 商户证书路径
  private_key: '/path/to/apiclient_key.pem',  // 商户证书私钥路径
  secret_key: '', // v3 API密钥
  v2_secret_key: '',  // v2 API密钥

  // 平台证书（v3接口需要）
  // 持路径列表或者PublicKey对象列表或者，以serial_no为key，证书内容或PublicKey对象为value的对象
  // 下载工具：https://github.com/wechatpay-apiv3/CertificateDownloader
  // 从 3.5.15 版本开始，node-easywechat 会自动下载并缓存平台证书，开发者可以不再配置该参数，当然配置也还是可以的。
  platform_certs: [
    '/path/to/platform_cert_1.pem',
    '/path/to/platform_cert_2.pem',
  ],

  // 文件缓存配置
  // SDK包默认使用文件缓存
  file_cache: {
    // 存储路径
    path: './',
    // 目录权限
    dirMode: 0o777,
    // 文件权限
    fileMode: 0o666,
    // 缓存文件后缀
    ext: '.cache'
  },

  // axios 配置
  // 详见：https://github.com/axios/axios?#request-config
  http: {},

  // 请求重试配置
  // 详见：https://github.com/softonic/axios-retry#options
  retry: {},
}
```

有的时候，你可能需要将配置单独写到一个文件中，可以使用 `definePayConfig` 函数，这样也可以获得编辑器的提示功能。

```js
const { definePayConfig } = require('node-easywechat');

const config = definePayConfig({
  // ...
});
```

## 创建应用

```js
const { Pay } = require('node-easywechat');

const app = new Pay({
  // ...
});
```

> 注：后续文档的示例代码如无特殊说明， `app` 指的都是该对象实例。

## 请求客户端

该功能封装了常用的请求方法，可以请求公众号的任意API。通过 `client` 发送请求时，SDK包会自动处理 `access_token`，因此您只需要传递各API所需的业务参数即可。

```js
const client = app.getClient();
const response = await client.get('/cgi-bin/user/info', {
  query: {
    openid: 'xxx',
    lang: 'zh_CN',
  }
});
```

更多说明请参阅：[API调用](../client)

## 商户账号

商户账号模块，提供一系列 API 获取支付的基本信息。如果要获取它的值，可以通过如下方式获取：

```js
const merchant = app.getMerchant();

merchant.getMerchantId();
merchant.getPrivateKey();
merchant.getCertificate();
merchant.getSecretKey();
merchant.getV2SecretKey();
merchant.getPlatformCerts();  // 异步
```

## 服务端

服务端模块主要用于处理微信向应用服务器发送的消息，主要封装了消息格式转换、加解密、签名验证的功能。可以通过如下方式获取服务端对象：

```js
const server = app.getServer();
```

更多说明请参阅：[服务端](server)

## 签名验证

按官方说法，建议在拿到微信接口响应和接收到微信支付的回调通知时，对通知的签名进行验证，以确保通知是微信支付发送的。

你可以通过以下方式获取签名验证器：

```js
app.getValidator();
```

### 推送消息的签名验证

```js
const server = app.getServer();

server.handlePaid(async (message, next) => {
  try{
    app.getValidator().validate(app.getRequest());
    // 验证通过
  }
  catch(e) {
    // 验证失败
  }

  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### API返回值的签名验证

```js
const client = app.getClient();

const response = await client.postJson('v3/pay/transactions/jsapi', {});

try{
  app.getValidator().validate(response.toHttpResponse());
  // 验证通过
}
catch(e) {
  // 验证失败
}
```

## 获取证书序列号

```bash
openssl x509 -in /path/to/merchant/apiclient_cert.pem -noout -serial | awk -F= '{print $2}'
```
