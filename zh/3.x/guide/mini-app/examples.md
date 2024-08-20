# 示例代码

示例代码以 koa 框架为例，其他框架请自行转换。

## 生成小程序码

```js
const koa = require('koa');
const { MiniApp } = require('node-easywechat');

const koa = new Koa();
const app = new MiniApp({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/getWxacode') {

    const response = await client.postJson('/wxa/getwxacodeunlimit', {
      scene: '123',
      page: 'pages/index/index',
      width: 430,
      check_path: false,
    }, {
      responseType: 'arraybuffer',  // 返回数据类型必须改为 arraybuffer
    });
    if (!response.is('image')) {
      ctx.body = '无法获取小程序码';
      return;
    }

    // 保持图片到文件
    response.saveAs('/path/to/savedImage.jpg');

    ctx.body = '小程序码保存成功';
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```

## 获取用户手机号

```js
const koa = require('koa');
const { MiniApp } = require('node-easywechat');

const koa = new Koa();
const app = new MiniApp({
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',
});

koa.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  if (ctx.path === '/getMobile') {
    const code = ctx.query.code;

    const response = await client.postJson('/wxa/business/getuserphonenumber', {
      code,
    });

    ctx.body = response.getBody();
    return;
  }

  return next();
});

const ServerPort = 3000;
koa.listen(ServerPort);

console.log(`Server running at http://127.0.0.1:${ServerPort}/`);
```
