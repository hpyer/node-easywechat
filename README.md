
## EasyWechat for Node.js

![Build 2.x](https://github.com/hpyer/node-easywechat/actions/workflows/build-2.yml/badge.svg)
 [![npm](https://img.shields.io/npm/v/node-easywechat.svg)](https://www.npmjs.com/package/node-easywechat) [![License](https://img.shields.io/npm/l/node-easywechat.svg)](LICENSE)

**注：2.x分支针对 EasyWechat 的 5.x版本(由于4.x与5.x的结构基本一致，就不升级大版本了)。**

若您需要 EasyWechat 的 6.x版本，请切换到 [3.x](https://github.com/hpyer/node-easywechat/tree/3.x) 分支。

[EasyWechat](https://github.com/w7corp/easywechat) 是一个由 `安正超` 大神用 PHP 开发的开源的微信非官方 SDK（现由微擎团队团队维护）。其功能强大，使用方便，个人一直很喜欢，所以近日将其在 Node.js 上实现。本人会尽量还原其配置项以及接口的调用方式，但毕竟语言环境不同，具体的实现方式会有些许差别，还请各位开发者见谅。

> 注：虽然也使用了 EasyWechat 这个名称，但是和 `安正超` 大神没有任何关系，请各位开发者不要因使用本包产生的疑惑而去打扰大神，如有疑问请在本项目中提 issue，谢谢~


### 安装

`npm install -S node-easywechat@second`

### 使用说明

绝大部分API都可以根据 [EasyWechat 的文档](https://www.easywechat.com/5.x/) 来使用。小部分（如获取请求相关数据、返回响应数据、支付证书等）的操作，由于语言环境的不同，会有不同处理。具体可以查看 [node-easywechat-demo](https://github.com/hpyer/node-easywechat-demo/) 以及下方的[自定义模块说明](#自定义模块模块替换使用方法) 。如果仍有疑问，请提issue，谢谢～

```js
// 公众号
let officialAccount = new EasyWechat.Factory.OfficialAccount({
  // ...
});

// 小程序
let miniProgram = new EasyWechat.Factory.MiniProgram({
  // ...
});

// 微信支付
let payment = new EasyWechat.Factory.Payment({
  // ...
});

// 开放平台
let openPlatform = new EasyWechat.Factory.OpenPlatform({
  // ...
});

// 企业微信
let openPlatform = new EasyWechat.Factory.Work({
  // ...
});

// 小微商户
let microMerchant = new EasyWechat.Factory.MicroMerchant({
  // ...
});

// 企业微信开放平台
let openWork = new EasyWechat.Factory.OpenWork({
  // ...
});

// 通用方式
let app = EasyWechat.Factory.getInstance('OficialAccount', {
  // ...
});
```

### 发起请求

本工具包封装了大部分常用的微信api，您可以直接使用，而不用考虑具体的接口地址。

以公众号获取用户信息为例：

```js
// 1. 创建公众号应用
let officialAccount = new EasyWechat.Factory.OfficialAccount({
  // ...
});
// 2. 获取用户信息
let user = await officialAccount.user.get('user_openid');
```

但是，微信的api实在太多，有时可能不能及时更新，因此，自`2.13.0`版本开始，本工具提供通用的发送请求的客户端（感谢`ValueLan`的建议），具体使用方法如下：

```js
// 1. 创建公众号应用
let officialAccount = new EasyWechat.Factory.OfficialAccount({
  // ...
});
// 2. 获取客户端实例
let client = officialAccount.getClient();
// 3. 发送请求
// get
let querystring = { foo: 'bar' };
let responseData = client.httpGet('/example-url', querystring);

// post
let data = { foo: 'bar' };
let responseData = client.httpPost('/example-url', data);

// 上传文件
let files = { file1: '/path/to/file1', file2: fs.createReadStream('/path/to/file2') };
let data = { foo: 'bar' };
let querystring = { foo: 'bar' };
let responseData = client.httpUpload('/example-url', files, data, querystring);

// 通用请求
let payload = { url: '/example-url', method: 'post', data: { foo: 'bar' } };
let responseData = client.request(payload); // 参数为 axios 的请求参数

// 通用请求（返回原始数据，可用于下载文件等）
let payload = { url: '/example-url', method: 'post', data: { foo: 'bar' } };
let response = client.requestRaw(payload); // 参数为 axios 的请求参数
```

**注意**：如果是 `Payment`、`MicroMerchant` 应用，则只有 `request`、`requestRaw` 方法，且请求参数也不一样。另外，还提供一个额外的 `safeRequest` 方法，该方法请求时会携带支付证书。

```js
// 1. 创建公众号应用
let payment = new EasyWechat.Factory.Payment({
  // ...
});
// 2. 获取客户端实例
let client = payment.getClient();
// 3. 发送请求 request、safeRequest、requestRaw 三个方法参数一样
let data = { foo: 'bar' };
let payload = {}; // axios 的请求参数
let responseData = client.request('/example-url', data, 'post', payload);
```

### 配置项示例

``` js
// 公众号配置
{
  // 微信公众号的 app key
  app_id: '',
  // 微信公众号的 app secret
  secret: '',
  // 微信公众号的 token
  token: '',
  // EncodingAESKey
  aes_key: '',

  // 缓存以文件(默认设置)存储时，需要的配置项
  file_cache: {
    path: './cache/', // 文件存储目录（请确保该目录有读写权限）
    fileMode: 0o666,  // 文件权限
    ext: '.cache'     // 文件扩展名
  },
  // 自定义缓存驱动
  // 您需要实现一个继承 EasyWechat.CacheInterface 的缓存驱动类
  // 实例化以后利用 “模块替换” 功能赋值给 app.cache

  // 网页授权认证
  oauth: {
    // 网页授权类型
    scope: 'snsapi_userinfo',
    // 网页授权回调地址，完整的URL
    redirect: 'http://node-easywechat.hpyer.cn/wxlogin/callback'
  }
}
```

``` js
// 微信支付配置
{
  // 应用的 app_id
  app_id: 'xxx',
  // 商户号
  mch_id: 'your-mch-id',
  // 签名密钥
  key: 'key-for-signature',
  // 默认回调地址，也可以在下单时单独设置来覆盖它，完整URL，不带参数
  notify_url: 'http://xxx.com/pay/notify',
  // 证书地址，Node.js 只需要 apiclient_cert.p12 证书文件即可
  cert_path: 'path/to/your/apiclient_cert.p12', // XXX: 绝对路径！！！！
}
```

``` js
// 小程序配置
{
  // appId
  app_id: 'your-app-id',
  // appSecret
  secret: 'your-app-secret'
}
```

``` js
// 企业微信配置
{
  // corpId
  corp_id: 'your-corp-id',
  // agentId
  agent_id: 'your-agent-id',
  // appSecret
  secret: 'your-app-secret'
}
```

``` js
// 小微商户配置
{
  // 商户号
  mch_id: 'your-mch-id',
  // 签名密钥
  key: 'key-for-signature',
  // V3版本签名密钥
  apiv3_key: 'apiv3_key-for-signature',
  // 证书地址，Node.js 只需要 apiclient_cert.p12 证书文件即可
  cert_path: 'path/to/your/apiclient_cert.p12', // XXX: 绝对路径！！！！

  // 以下两项配置在获取证书接口时可为空，在调用入驻接口前请先调用获取证书接口获取以下两项配置,如果获取过证书可以直接在这里配置，也可参照本文档获取平台证书章节中示例
  // serial_no: '获取证书接口获取到的平台证书序列号',
  // certificate: '获取证书接口获取到的证书内容'
}
```

``` js
// 开放平台
{
  // 开放平台APPID
  app_id: 'your-app-id',
  // 开放平台Secret
  secret: 'your-secret',
  // 开放平台Token
  token: 'your-token',
  // 开放平台AES KEY
  aes_key: 'your-aes_key',
}
```

``` js
// 企业微信开放平台
{
  // 服务商的corpid
  corp_id: 'your-corp_id',
  // 服务商的secret
  secret: 'your-secret',
  // 应用id
  suite_id: 'your-suite_id',
  // 应用secret
  suite_secret: 'your-suite_secret',
  // 应用Token
  token: 'your-token',
  // 应用AESKey
  aes_key: 'your-aes_key',
  // 注册定制化模板ID
  reg_template_id: 'your-tpl_id',
  // 安装应用的回调url（可选）
  redirect_uri_install: 'your-uri_install',
  // 单点登录回调url（可选）
  redirect_uri_single: 'your-uri_single',
  // 网页授权第三方回调url（可选）
  redirect_uri_oauth: 'your-uri_oauth',
}
```

### 模块支持情况

- [x] 公众号模块
- [x] 微信支付
- [x] 小程序
- [x] 开放平台
- [x] 企业微信
- [x] 企业微信开放平台
- [x] 小微商户
- [x] 自定义

### 自定义模块（模块替换）使用方法

使用自定义模块的主要目的，是为了消除不同框架、不同软件包的使用方法所带来的差异，以提升 node-easywechat 的使用效率。下面就来说说几个主要模块的自定义方法。

##### 日志模块（log）

> 注：自 `2.6.10` 版本起，配置项中新增了 `debug` 字段，默认为 `false`。设置为 `true` 时，程序才会打印相关日志。所以，如果你只是希望关闭日志的话，更新到 `2.6.10` 即可。

```js
// 创建实例
const Easywechat = require('node-easywechat');
let officialAccount = new Easywechat.Factory.OfficialAccount({
  ...
});

// 自定义日志处理方法
const myLogger = (app) => {
  // 注意：这里返回的方法不能使用箭头函数，否则会导致获取到的 arguments 异常
  // 若需要关闭日志，则返回空的函数即可
  return function() {
    // 判断是否开启了 debug
    if (!app['config']['debug']) return true;

    let args = arguments;
    args[0] = 'myLogger: ' + args[0];
    return console.log.apply(null, arguments);
  }
}

// 使用 rebind 方法，将 myLogger 绑定为 log 模块
officialAccount.rebind('log', myLogger);
```

##### 请求模块（request）

```js
// request 模块需实例化 EasyWechat.Http.Request 类
// 实例化时，需要传入 IncomingMessage 实例
let request = new EasyWechat.Http.Request(req);

// 当然，由于 IncomingMessage 的 body 流的特殊性，某些框架（目前已知：fastify）
// 可能会自动读取后挂载到上下文中，从而导致 node-easywechat 去尝试读取时报错。
// 这时可以选择传入第二个参数，即post的内容
// 支持 Buffer、object对象、JSON字符串、XML字符串、QueryString格式的POST内容字符串
let request = new EasyWechat.Http.Request(req, content);

// 若此法方法仍不能满足你的需求，可以选择继承 EasyWechat.Http.Request 类，
// 并重写其中相关的方法
// 参考：https://github.com/hpyer/node-easywechat/issues/5

// 使用 rebind 方法，绑定 request 实例
officialAccount.rebind('request', request);
```

##### 缓存模块（cache）

```js
// cache 模块需要您继承并实例化 EasyWechat.CacheInterface 接口
// 以 redis 为例
const Redis = require('redis');
const BlueBird = require('bluebird');

BlueBird.promisifyAll(Redis.RedisClient.prototype);
BlueBird.promisifyAll(Redis.Multi.prototype);

class RedisCache extends EasyWechat.CacheInterface
{
  constructor (options)
  {
    super();

    this.$client = null;
    try {
      this.$client = Redis.createClient(options);
    }
    catch (e) {
      console.log('无法创建Redis客户端', e);
    }
  }

  async get(id)
  {
    if (!this.$client) return false;
    let content = null;
    try {
      content = JSON.parse(await this.$client.getAsync(id));
    }
    catch (e) {
      console.log('获取Redis缓存失败', id, e);
      return false;
    }
    return content;
  }

  async has(id)
  {
    if (!this.$client) return false;
    try {
      let res = await this.$client.existsAsync(id);
      return res == 1;
    }
    catch (e) {
      return false;
    }
  }

  async set(id, data = null, lifeTime = 0)
  {
    if (!this.$client) return false;
    try {
      if (lifeTime > 0) {
        await this.$client.setAsync(id, JSON.stringify(data), 'EX', lifeTime);
      }
      else {
        await this.$client.setAsync(id, JSON.stringify(data));
      }
    }
    catch (e) {
      console.log('设置Redis缓存失败', id, data, e);
      return false;
    }
    return true;
  }

  async delete(id)
  {
    if (!this.$client) return false;
    try {
      let res = await this.$client.delAsync(id);
      return true;
    }
    catch (e) {
      return false;
    }
  }
}
let redisCache = new RedisCache(req);

// 使用 rebind 方法，绑定 cache 实例
officialAccount.rebind('cache', redisCache);
```
