# 示例代码

示例代码以 koa 框架为例，其他框架请自行转换。

## 公众号或小程序授权

> 🚨 请先认真阅读：[微信开放平台 - 如何完成商家授权](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/getting_started/how_to_service.html)

发起授权页，如：`http://example.com/thirdparty/auth`

```js
const koa = require('koa');
const { OpenPlatform } = require('node-easywechat');

const koa = new Koa();
const app = new OpenPlatform({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/thirdparty/auth') {
    const callbackUrl = 'http://example.com/thirdparty/callback';
    const options = {
      pre_auth_code: '', // 若不设置，则SDK会自动获取。也可以调用 app.createPreAuthorizationCode() 手动获取。
      auth_type: '',  // 要授权的账号类型。1 表示手机端仅展示公众号；2 表示仅展示小程序，3 表示公众号和小程序都展示；4表示小程序推客账号；5表示视频号账号；6表示全部都展示
      biz_appid: '',  // 指定授权账号的appid。如果同时设置了 auth_type、biz_appid，则会优先选择 biz_appid。
      category_id_list: '', // 指定的权限集id列表。如不指定则默认第三方账号已发布的所有权限。若设置多个，则用英文竖线分隔。
    };
    const url = app.createPreAuthorizationUrl(callbackUrl, options);
    ctx.redirect(url);
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

授权完成后的回调页，微信会在该地址后拼接上 `auth_code` 和 `expires_in` 两个请求参数，如：`http://example.com/thirdparty/callback?auth_code=xxx&expires_in=600`

```js
const koa = require('koa');
const { OpenPlatform } = require('node-easywechat');

const koa = new Koa();
const app = new OpenPlatform({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/thirdparty/callback') {
    const auth_code = ctx.query.auth_code;

    const authorization = await app.getAuthorization(auth_code);
    console.log('authorization:', authorization);

    // 该方法获取 authorization.authorization_info.authorizer_refresh_token 的值
    // 该数据需要保存起来，后续代商家调用接口时需要用到
    const refreshToken = authorization.getRefreshToken();

    ctx.body = '授权成功';
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 代公众号/小程序发起请求

某项业务功能，如：`http://example.com/thirdparty/foo/bar`

```js
const koa = require('koa');
const { OpenPlatform } = require('node-easywechat');

const koa = new Koa();
const app = new OpenPlatform({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/thirdparty/foo/bar') {
    const appid = 'xxx';  // 商家公众号或小程序的 appid
    const refreshToken = 'xxx'; // 商家完成授权时，保存的 refresh_token

    // 小程序则是 app.getMiniAppWithRefreshToken(appid, refreshToken)
    const appProxy = app.getOfficialAccountWithRefreshToken(appid, refreshToken);

    // 然后就可以像普通的公众号/小程序一样发起请求了
    const client = appProxy.getClient();
    const response = await client.post('/cgi-bin/xxx', {});
    console.log(response.getBody());
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 代公众号/小程序处理服务端消息

微信推送消息时，是可以按照你配置的地址，拼接上公众号或小程序对应的 appid 的，如：`http://example.com/thirdparty/server/xxxx`

```js
const koa = require('koa');
const { OpenPlatform } = require('node-easywechat');

const koa = new Koa();
const app = new OpenPlatform({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/thirdparty/server/') {
    const appid = ctx.path.replace('/thirdparty/server/', '');  // 商家公众号或小程序的 appid
    const refreshToken = 'xxx'; // 商家完成授权时，保存的 refresh_token

    // 小程序则是 app.getMiniAppWithRefreshToken(appid, refreshToken)
    const appProxy = app.getOfficialAccountWithRefreshToken(appid, refreshToken);

    // 然后就可以像普通的公众号/小程序一样处理服务端消息了
    const server = appProxy.getServer();
    server.with((message) => {
      // ...
      return true;
    });
    const response = await server.serve();
    console.log(response.getBody());
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```
