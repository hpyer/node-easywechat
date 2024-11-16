# 示例代码

示例代码以 koa 框架为例，其他框架请自行转换。

## 企业授权应用

> 🚨 请先认真阅读：[企业授权应用](https://developer.work.weixin.qq.com/document/path/90597)

### 发起授权页

如：`http://example.com/openwork/auth/$CORPID$`

> 注：此处的 $CORPID$ 在授权或发布时，企业微信会自动将其替换为授权企业的真实corpid。

```js
const koa = require('koa');
const { OpenWork } = require('node-easywechat');

const koa = new Koa();
const app = new OpenWork({
  crop_id: '',
  provider_secret: '',
  suite_id: '',
  suite_secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path.startsWith('/openwork/auth/')) {
    const corpId = ctx.path.replace('/openwork/auth/', '');
    const pre_auth_code = await app.createPreAuthorizationCode();
    const callbackUrl = 'http://example.com/openwork/callback';
    const options = {
      pre_auth_code: '', // 若不设置，则SDK会自动获取。也可以调用 app.createPreAuthorizationCode() 手动获取。
      state: corpId,  // 授权企业的crop_id作为state参数，传递给授权回调页
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

### 授权回调页

微信会在该地址后拼接上 `auth_code` 、 `expires_in` 和 `state` 三个请求参数，如：`http://example.com/openwork/callback?auth_code=xxx&expires_in=600&state=xx`

```js
const koa = require('koa');
const { OpenWork } = require('node-easywechat');

const koa = new Koa();
const app = new OpenWork({
  crop_id: '',
  provider_secret: '',
  suite_id: '',
  suite_secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/openwork/callback/') {
    const corpId = ctx.query.state;
    const auth_code = ctx.query.auth_code;

    const authorization = await app.getPermanentCode(auth_code);
    console.log('authorization:', authorization);

    // 通过 authorization.permanent_code 获取企业永久授权码
    // 该数据需要保存起来，后续获取 企业凭证 时需要用到

    ctx.body = '授权成功';
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 代企业发起请求

某项业务功能，如：`http://example.com/openwork/foo/bar`

```js
const koa = require('koa');
const { OpenWork } = require('node-easywechat');

const koa = new Koa();
const app = new OpenWork({
  crop_id: '',
  provider_secret: '',
  suite_id: '',
  suite_secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/openwork/foo/bar') {
    const cropId = 'xxx';  // 企业的 cropId
    const permanentCode = 'xxx'; // 企业永久授权码

    const cropClient = app.getAuthorizerClient(cropId, permanentCode);

    // 然后就可以像自开发的企业微信一样发起请求了
    const response = await cropClient.post('/cgi-bin/xxx', {});
    console.log(response.getBody());
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```
