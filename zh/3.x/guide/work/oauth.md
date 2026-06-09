# 网页授权

> 此文档为企业微信内部应用开发的网页授权，非第三方应用网页授权。

> 🚨 请先认真阅读：[企业内部开发 - 网页授权登录](https://developer.work.weixin.qq.com/document/path/91335)

示例代码以 koa 框架为例，其他框架请自行转换。

### 发起授权

```js
// 页面 /oauth/login

const { Work } = require('node-easywechat');

const app = new Work({
  // ...
});

const oauth = app.getOAuth();

// 授权完成后的回调地址
const callbackUrl = 'http://www.abc.com/oauth/callback';

// 授权地址
const authUrl = oauth.redirect(callbackUrl);

// 302重定向到 authUrl，以 koa2 为例
ctx.redirect(authUrl);
```

### 处理授权回调

```js
// 页面 /oauth/callback
// 微信会自动在该页面的URL后面加上 code 参数

const { Work } = require('node-easywechat');

const app = new Work({
  // ...
});

const oauth = app.getOAuth();

// 获取 code 参数，以 koa2 为例
const code = ctx.query.code;

// 获取用户信息
// 默认只能获取用户id
const user = await oauth.userFromCode(code);
```

### 处理授权回调（获取用户敏感信息）

```js
// 页面 /oauth/callback
// 微信会自动在该页面的URL后面加上 code 参数

const { Work } = require('node-easywechat');

const app = new Work({
  // ...
  // oauth 的 scoep 必须是 snsapi_privateinfo
  oauth: {
    scopes: ['snsapi_privateinfo'],
  },
});

const oauth = app.getOAuth();

// 获取 code 参数，以 koa2 为例
const code = ctx.query.code;

// 获取用户信息
// 需要先调用 oauth.detailed() 方法，开启获取用户敏感信息的开关
const user = await oauth.detailed().userFromCode(code);
```

`user` 对象包含以下属性：

* `user.id`： 对应企业微信英文名（userid，非企业员工则为openid）
* `user.name`： 姓名，snsapi_privateinfo 权限且detailed()时返回
* `user.email`： Email，snsapi_privateinfo 权限且detailed()时返回
* `user.avatar`： 头像，snsapi_privateinfo 权限且detailed()时返回
* `user.raw`： 获取企业微信接口返回的原始信息

## 参考阅读

本模块基于 [node-socialite](https://github.com/hpyer/node-socialite) 实现，更多的使用说明请阅读该依赖包的文档。
