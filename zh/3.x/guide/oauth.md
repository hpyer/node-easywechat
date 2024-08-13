# 网页授权

微信里的 OAuth 两种：[公众平台网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)、[开放平台网页登录]()。它们的区别如下：

`公众平台网页授权`

授权地址: https://open.weixin.qq.com/connect/oauth2/authorize

Scope: `snsapi_base` 与 `snsapi_userinfo`，如果是企业微信，则为：`snsapi_base` 与 `snsapi_privateinfo`

`开放平台网页登录`

授权地址: https://open.weixin.qq.com/connect/qrconnect

Scope: `snsapi_login`


## 使用说明

在开始之前请一定要记住，先登录公众号后台，找到边栏 `设置与开发` 模块下的 `公众号设置`，再切换到 `功能设置` 标签页，参照说明设置 `网页授权域名`。

> 如果您的授权地址为：`http://www.abc.com/xxxxx`，那么请填写 `www.abc.com`。如果填写 `abc.com` 是通过不了的。

### 发起授权

```js
// 页面 /oauth/login

const { OfficialAccount } = require('node-easywechat');

const app = new OfficialAccount({
  // ...
});

const oauth = app.getOAuth();

// 授权完成后的回调地址
const callbackUrl = 'http://www.abc.com/oauth/callback';

// 授权地址
const authUrl = oauth.scopes(['snsapi_userinfo']).redirect(callbackUrl);

// 302重定向到 authUrl，以 koa2 为例
ctx.redirect(authUrl);
```

### 处理授权回调

```js
// 页面 /oauth/callback
// 微信会自动在该页面的URL后面加上 code 参数

const { OfficialAccount } = require('node-easywechat');

const app = new OfficialAccount({
  // ...
});

const oauth = app.getOAuth();

// 获取 code 参数，以 koa2 为例
const code = ctx.query.code;

// 获取用户信息
const user = await oauth.userFromCode(code);
```

`user` 对象包含以下属性：

* `user.id`： 用户的 openid
* `user.nickname`： 用户的昵称
* `user.name`： 用户的昵称
* `user.avatar`： 用户的头像
* `user.raw`： 接口返回的原始用户信息


## 参考阅读

本模块基于 `node-socialite` 包实现，如需更多信息，请参阅 [node-socialite](https://github.com/hpyer/node-socialite#使用说明)。

