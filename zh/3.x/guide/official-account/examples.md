# 示例代码

示例代码以 koa 框架为例，其他框架请自行转换。

## 网页授权登录

发起授权登录页，如：`http://example.com/oauth/login`

```js
const koa = require('koa');
const { OfficialAccount } = require('node-easywechat');

const koa = new Koa();
const app = new OfficialAccount({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/oauth/login') {
    const url = app.getOAuth().redirect('http://example.com/oauth/callback');
    ctx.redirect(url);
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

授权登录回调页，如：`http://example.com/oauth/callback`

```js
const koa = require('koa');
const { OfficialAccount } = require('node-easywechat');

const koa = new Koa();
const app = new OfficialAccount({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/oauth/callback') {
    const code = ctx.query.code;
    const user = await app.getOAuth().userFromCode(code);
    console.log(user);

    ctx.body = '登录成功';
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 服务端消息

如：`http://example.com/server`

```js
const koa = require('koa');
const { OfficialAccount } = require('node-easywechat');

const koa = new Koa();
const app = new OfficialAccount({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/server') {
    const request = await ServerRequest.createFromIncomingMessage(ctx.req);
    app.setRequest(request);

    const server = app.getServer();

    server.with(async function (message) {
      // 消息处理
      console.log(message);

      return true;
    });

    const response = await server.serve();

    ctx.body = response.getBody();
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 获取微信图片，并保存到文件

如：`http://example.com/server`

```js
const koa = require('koa');
const { OfficialAccount } = require('node-easywechat');

const koa = new Koa();
const app = new OfficialAccount({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/getImage') {
    const media_id = ctx.query.media_id;

    const response = await client.get('cgi-bin/media/get', {
      responseType: 'arraybuffer',  // 返回数据类型必须改为 arraybuffer

      params: {
        media_id,
      },
    });
    if (!response.is('image')) {
      ctx.body = '无效media_id';
      return;
    }

    // 保持图片到文件
    response.saveAs('/path/to/savedImage.jpg');

    ctx.body = '图片获取成功';
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```
