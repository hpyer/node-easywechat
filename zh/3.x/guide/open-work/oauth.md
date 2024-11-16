# 网页授权

> 此文档为企业微信内部应用开发的网页授权，非第三方应用网页授权。

示例代码以 koa 框架为例，其他框架请自行转换。

## 第三方应用oauth2

> 🚨 请先认真阅读：[构造网页授权链接 - 构造第三方应用oauth2链接](https://developer.work.weixin.qq.com/document/path/91120#%E6%9E%84%E9%80%A0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8oauth2%E9%93%BE%E6%8E%A5)

### 发起授权

```js
// 页面 /oauth/login

const { OpenWork } = require('node-easywechat');

const app = new OpenWork({
  // ...
});

// 第三方应用id（即ww或wx开头的suite_id）
const suiteId = 'xxx';

// 获取 oauth 对象
const oauth = await app.getOAuth(suiteId);

// 授权完成后的回调地址
const callbackUrl = 'http://www.abc.com/oauth/callback';

// 授权地址
const authUrl = oauth.redirect(callbackUrl);

// 302重定向到 authUrl，以 koa2 为例
ctx.redirect(authUrl);
```

### 处理授权回调

参考文档：[获取访问用户身份](https://developer.work.weixin.qq.com/document/path/91121)

```js
// 页面 /oauth/callback
// 微信会自动在该页面的URL后面加上 code 参数

const { OpenWork } = require('node-easywechat');

const app = new OpenWork({
  // ...
});

// 第三方应用id（即ww或wx开头的suite_id）
const suiteId = 'xxx';

// 获取 oauth 对象
const oauth = await app.getOAuth(suiteId);

// 获取 code 参数，以 koa2 为例
const code = ctx.query.code;

// 获取用户信息
const user = await oauth.detailed().userFromCode(code);
```

`user` 对象包含以下属性：

* `user.id`： 对应企业微信英文名（userid）
* `user.raw`： 获取企业微信接口返回的原始信息

## 企业oauth2

> 🚨 请先认真阅读：[构造网页授权链接 - 构造企业oauth2链接](https://developer.work.weixin.qq.com/document/path/91120#%E6%9E%84%E9%80%A0%E4%BC%81%E4%B8%9Aoauth2%E9%93%BE%E6%8E%A5)

示例代码与上方的 `第三方应用oauth2链接` 基本一致，唯一的区别是获取`oauth`对象时，使用的是 `getCorpOAuth` 方法，需要传入企业的 CorpID。

## 参考阅读

本模块基于 [node-socialite](https://github.com/hpyer/node-socialite) 实现，更多的使用说明请阅读该依赖包的文档。
