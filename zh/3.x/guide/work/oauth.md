# 网页授权

> 此文档为企业微信内部应用开发的网页授权，非第三方应用网页授权。

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
const user = await oauth.userFromCode(code);
```

`user` 对象包含以下属性：

* `user.id`： 对应企业微信英文名（userid）
* `user.raw`： 获取企业微信接口返回的原始信息
