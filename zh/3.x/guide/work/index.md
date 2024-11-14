# 企业微信入门

🚨 使用本SDK工具包前，请务必熟读 [企业微信 API - 企业内部开发](https://developer.work.weixin.qq.com/document/90000/90135/90664)。

## 配置项

除了 `基础信息`，其它配置均为可选项，完整的配置项：

```js
{
  // 基础信息
  corp_id: '', // corp_id
  secret: '', // secret
  token: '',  // token
  aes_key: '',// aes_key，如果是明文模式，请不要填写

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

有的时候，你可能需要将配置单独写到一个文件中，可以使用 `defineWorkConfig` 函数，这样也可以获得编辑器的提示功能。

```js
const { defineWorkConfig } = require('node-easywechat');

const config = defineWorkConfig({
  // ...
});
```

## 创建应用

```js
const { Work } = require('node-easywechat');

const app = new Work({
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

## AccessToken

`access_token` 是公众号API调用的必备条件，SDK包会自动获取并缓存它以供使用。如果要获取它的值，可以通过如下方式获取：

```js
const accessToken = app.getAccessToken();
// 获取具体的token内容
const token = await accessToken.getToken();
```

还可以通过如下方法获取/设置token的键名：

```js
// 获取token的缓存键名
const key = accessToken.getKey();
// 设置token的缓存键名
accessToken.setKey('your_key');
```

## 服务端

服务端模块主要用于处理微信向应用服务器发送的消息，主要封装了消息格式转换、加解密、签名验证的功能。可以通过如下方式获取服务端对象：

```js
const server = app.getServer();
```

更多说明请参阅：[服务端](server)
