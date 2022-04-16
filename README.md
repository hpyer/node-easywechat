
## EasyWechat for Node.js

[![Build Status](https://app.travis-ci.com/hpyer/node-easywechat.svg?branch=3.x)](https://app.travis-ci.com/hpyer/node-easywechat) [![npm](https://img.shields.io/npm/v/node-easywechat.svg)](https://www.npmjs.com/package/node-easywechat) [![License](https://img.shields.io/npm/l/node-easywechat.svg)](LICENSE)

**注：3.x分支针对 EasyWechat 的 6.x版本。**

~~若您需要 EasyWechat 的 5.x版本，请切换到 [2.x](https://github.com/hpyer/node-easywechat/tree/2.x) 分支。~~

[EasyWechat](https://github.com/w7corp/easywechat) 是一个由 `安正超` 大神用 PHP 开发的开源的微信非官方 SDK（现由微擎团队团队维护）。其功能强大，使用方便，个人一直很喜欢，所以近日将其在 Node.js 上实现。本人会尽量还原其配置项以及接口的调用方式，但毕竟语言环境不同，具体的实现方式会有些许差别，还请各位开发者见谅。

> 注：虽然也使用了 EasyWechat 这个名称，但是和 `安正超` 大神没有任何关系，请各位开发者不要因使用本包产生的疑惑而去打扰大神，如有疑问请在本项目中提 issue，谢谢~


### 安装

`npm install -S node-easywechat@next`

### 使用说明

绝大部分API都可以根据 [EasyWechat 的文档](https://www.easywechat.com/5.x/) 来使用。小部分（如获取请求相关数据、返回响应数据、支付证书等）的操作，由于语言环境的不同，会有不同处理。具体可以查看 [node-easywechat-demo](https://github.com/hpyer/node-easywechat-demo/) 以及下方的[自定义模块说明](#自定义模块模块替换使用方法) 。如果仍有疑问，请提issue，谢谢～

```js
// 按需引入所需要的模块
// 公众号
const Application = require('node-easywechat/OfficialAccount/Application');

// 实例化应用
let app = new Application({
  // ...
});

// 获取 api 调用客户端
let client = app.getClient();

// 请求 api
let response = await client.post('/cgi-bin/user/info/updateremark', {
  openid: 'xxxx',
  remark: 'xxxx',
});
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

### 模块支持情况

- [x] 公众号模块
- [ ] 微信支付
- [ ] 小程序
- [ ] 开放平台
- [ ] 企业微信
- [ ] 企业微信开放平台
- [ ] 自定义
