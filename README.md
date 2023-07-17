
## EasyWeChat for Node.js

![Build 3.x](https://github.com/hpyer/node-easywechat/actions/workflows/build-3.yml/badge.svg) [![npm](https://img.shields.io/npm/v/node-easywechat.svg)](https://www.npmjs.com/package/node-easywechat) [![License](https://img.shields.io/npm/l/node-easywechat.svg)](LICENSE)

**注：3.x分支针对 EasyWeChat 的 6.x版本。**

若您需要 EasyWeChat 的 5.x版本，请切换到 [2.x](https://github.com/hpyer/node-easywechat/tree/2.x) 分支。

[EasyWeChat](https://github.com/w7corp/easywechat) 是一个由 `安正超` 大神用 PHP 开发的开源的微信非官方 SDK。其功能强大，使用方便，个人一直很喜欢，所以将其在 Node.js 上实现。本项目基本还原其配置项以及接口的调用方式，但毕竟语言环境不同，会有些许差别，还请各位开发者理解。

> 注：虽然也使用了 EasyWeChat 这个名称，但是 `安正超` 大神并未参与本项目的开发，请各位开发者不要因使用本包产生的疑惑而去打扰大神，如有疑问请在本项目中提 issue，谢谢~


### 安装

`npm install -S node-easywechat`

**注：3.x 版本需要 Node.js 15.6.0 及以上版本**

### 使用说明

绝大部分API都可以根据 [EasyWeChat 的文档](https://www.easywechat.com/5.x/) 来使用。小部分（如获取请求相关数据、返回响应数据、支付证书等）的操作，由于语言环境的不同，会有不同处理。具体可以查看 [node-easywechat-demo](https://github.com/hpyer/node-easywechat-demo/) 以及下方的[自定义模块说明](#自定义模块模块替换使用方法) 。如果仍有疑问，请提issue，谢谢～

从 `3.x` 起 SDK 中不再内置具体业务的接口，仅封装底层基础部分，如认证、授权和 API 客户端。至于为什么不再封装业务接口，可以查看 [EasyWeChat 给出说明](https://easywechat.com/6.x/introduction.html#不再封装业务接口)。

```js
// 公众号
const { OfficialAccount } = require('node-easywechat');
// 实例化应用
let app = new OfficialAccount({
  // 配置项
});

// 小程序
const { MiniApp } = require('node-easywechat');
// 实例化应用
let app = new MiniApp({
  // 配置项
});

// 微信支付
const { Pay } = require('node-easywechat');
// 实例化应用
let app = new Pay({
  // 配置项
});

// 开放平台
const { OpenPlatform } = require('node-easywechat');
// 实例化应用
let app = new OpenPlatform({
  // 配置项
});

// 企业微信
const { Work } = require('node-easywechat');
// 实例化应用
let app = new Work({
  // 配置项
});

// 企业微信开放平台
const { OpenWork } = require('node-easywechat');
// 实例化应用
let app = new OpenWork({
  // 配置项
});

// ----- 定义配置项（v3.5.0+） -----

// 这种方式可以让你在需要单独设置配置项时，也能获得编辑器的代码提示

// 公众号配置
const config = defineOfficialAccountConfig({
  // 配置项
});
// 小程序: defineMiniAppConfig()
// 支付: definePayConfig()
// 开放平台: defineOpenPlatformConfig()
// 企业微信: defineWorkConfig()
// 企业微信开放平台: defineOpenWorkConfig()

// ----- 以下为通用的 api 调用方法 -----

// 获取 api 调用客户端
let client = app.getClient();

// 请求 api
// 注意，这里返回的是 HttpClientResponse 对象
let response = await client.post('/cgi-bin/user/info/updateremark', {
  openid: 'xxxx',
  remark: 'xxxx',
});
// 获取具体数据
let data = response.toObject();
// 另外还有以下方法：
// toJson() 转json字符串
// toString() 转字符串
// saveAs(filename) 保存为文件
// toDataUrl() 转base64字符串
```

### 配置项示例

``` js
// 通用配置，即所有模块都可以设置
{
  // axios 请求参数
  // 详见：https://github.com/axios/axios#request-config
  http: {
    // 请求失败时，自动重试。默认不重试
    // 详见：https://github.com/softonic/axios-retry#options
    retry: {}
  },

  // 缓存以文件(默认设置)存储时，需要的配置项
  file_cache: {
    path: './cache/', // 文件存储目录（请确保该目录有读写权限）
    fileMode: 0o666,  // 文件权限
    ext: '.cache'     // 文件扩展名
  }
}
```

``` js
// 公众号配置
{
  // 公众号的 app key
  app_id: '',
  // 公众号的 app secret
  secret: '',
  // 公众号的 token
  token: '',
  // EncodingAESKey
  aes_key: '',

  // 网页授权认证
  oauth: {
    // 网页授权类型
    scope: 'snsapi_userinfo',
    // 网页授权回调地址，完整的URL
    redirect: 'http://node-easywechat.hpyer.cn/wxlogin/callback'
  },
  // 是否使用稳定版接口调用凭据，默认：false
  use_stable_access_token: false
}
```

``` js
// 小程序配置
{
  // 小程序的 app key
  app_id: '',
  // 小程序的 app secret
  secret: '',
  // 小程序的 token
  token: '',
  // EncodingAESKey
  aes_key: '',
  // 是否使用稳定版接口调用凭据，默认：false
  use_stable_access_token: false
}
```

``` js
// 微信支付配置
{
  // 商户号
  mch_id: '',
  // 商户证书路径
  certificate: '',
  // 商户证书私钥路径
  private_key: '',
  // 平台证书（v3接口需要）
  // 持路径列表或者PublicKey对象列表或者，以serial_no为key，证书内容或PublicKey对象为value的对象
  // 下载工具：https://github.com/wechatpay-apiv3/CertificateDownloader
  platform_certs: '',
  // v3 API密钥
  secret_key: '',
  // v2 API密钥
  v2_secret_key: '',
}
```

``` js
// 开放平台配置
{
  // 开放平台的 app key
  app_id: '',
  // 开放平台的 app secret
  secret: '',
  // 开放平台的 token
  token: '',
  // EncodingAESKey
  aes_key: '',
}
```

``` js
// 企业微信配置
{
  // 企业微信的 corp id
  corp_id: '',
  // 企业微信的 secret
  secret: '',
  // 企业微信的 token
  token: '',
  // EncodingAESKey
  aes_key: '',
}
```

``` js
// 企业微信开放平台配置
{
  // 企业微信的 corp id
  corp_id: '',
  // 企业微信的 secret
  provider_secret: '',
  // 第三方应用的 corp id
  suite_id: '',
  // 第三方应用的 secret
  suite_secret: '',
  // 企业微信服务端接口验证 token
  token: '',
  // 企业微信服务端消息加解密密钥
  aes_key: '',
}
```

### 自定义模块（模块替换）使用方法

#### 日志模块

框架默认不记录任何日志。如果需要，可以通过 `client` 实例的 `setLogger` 方法设置日志处理回调方法。

```js
// 以公众号为例
const { OfficialAccount } = require('node-easywechat');
// 实例化应用
let app = new OfficialAccount({
  // ...
});

// 获取 api 调用客户端
let client = app.getClient();

/**
 * 该回调方法会接收两种日志信息
 * 1、接口请求调用前的参数：
 *  string  固定值，'before'
 *  object  请求参数
 * 2、接口请求调用后的参数：
 *  string  固定值，'after'
 *  object  请求参数
 *  number  请求耗时（ms）
 *  Response  请求响应对象
 */
client.setLogger((...args) => {
  console.log(args)
});
```

#### 缓存模块

框架默认使用文件缓存读取到的 `access_token` 等值，如需要改用其他缓存方式（如：redis），请实现接口 `CacheInterface` 并通过 `app.setCacher` 方法进行模块替换。

```js
const { OfficialAccount, CacheInterface } = require('node-easywechat');
const Redis = require("ioredis");

class RedisCacher extends CacheInterface {
  constructor(redis) {
    this.redis = redis;
  }

  get(id)
  {
    return this.redis.get(id);
  }

  async has(id)
  {
    return (await this.redis.exists(id)) > 0;
  }

  async set(id, data = null, lifeTime = 0)
  {
    if (lifeTime > 0) {
      await this.redis.set(id, data, 'EX', lifeTime);
    }
    else {
      await this.redis.set(id, data);
    }
    return true;
  }

  async delete(id)
  {
    await this.redis.del(id);
    return true;
  }
}

// 实例化应用
let app = new OfficialAccount({
  // ...
});

// 替换缓存实例
app.setCacher(new RedisCacher(new Redis));
```

#### 请求模块

通常，如果你的应用不需要处理服务端回调、支付回调等逻辑的话，是不需要传递请求对象的。

```js
const { OfficialAccount, ServerRequest } = require('node-easywechat');

// 实例化应用
let app = new OfficialAccount({
  // ...
});

// 根据 IncomingMessage 实例（即 Node.js 原始请求对象）创建 ServerRequest 实例
//
// 由于 IncomingMessage 的 body 流的特殊性，某些框架（目前已知：fastify）
// 可能会自动读取后挂载到上下文中，从而导致 node-easywechat 去尝试读取时报错。
// 这时可以选择传入第二个参数，即 body 的内容
//
// 如果此方法 不能解决你的问题，可以选择继承 ServerRequest，重写相关方法
let request = ServerRequest.createFromIncomingMessage(req);

// 设置请求实例
app.setRequest(request);
```

### 模块支持情况

- [x] 公众号模块
- [x] 微信支付
- [x] 小程序
- [x] 开放平台
- [x] 企业微信
- [x] 企业微信开放平台
- [x] 自定义
