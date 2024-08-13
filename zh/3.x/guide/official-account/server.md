# 服务端

服务端主要用于处理微信向应用服务器推送的事件消息（关注、扫码等）、普通消息（文本、图片等）。可以通过 `app.getServer()` 来获取模块。

但是通常大家都会使用后端框架（如：express、koa2、egg.js、nest.js等）进行开发，SDK包无法直接获取到请求数据，因此SDK包封装了一个 `ServerRequest` 类来处理请求数据。

```js
const { OfficialAccount, ServerRequest } = require('node-easywechat');

// 实例化应用
const app = new OfficialAccount({
  // ...
});

// 根据 IncomingMessage 实例（即 Node.js 原始请求对象）创建 ServerRequest 实例
// 通常框架都会提供，如：koa2 的 ctx.req，express 的 req
const request = await ServerRequest.createFromIncomingMessage(req);
// 设置请求实例
app.setRequest(request);

// 获取服务端模块
const server = app.getServer();
```

由于 IncomingMessage 的 body 流的特殊性，某些框架（目前已知：fastify）可能会自动读取后挂载到上下文中，从而导致 node-easywechat 去尝试读取时报错。这时可以选择传入第二个参数，即 body 的内容。


```js
// 从框架获取到post请求的body内容
const body = ctx.request.body;

// 第二个参数支持 Buffer、object对象、JSON字符串、XML字符串、QueryString格式的 body 内容字符串
const request = await ServerRequest.createFromIncomingMessage(req, body);
```

## 服务端接口验证

在开启微信消息推送功能时，微信服务器会向应用服务器发送一个携带 `echostr` 参数的 `GET` 请求。SDK包已经封装了对于该验证请求的处理，因此您直接执行 `server.serve()` 方法并输出结果即可。

```js
// 执行服务端的消息处理
const response = await server.serve();
// 由于后端框架的不同，因此需要您根据各自框架的方法来输出 response.getBody() 的内容
ctx.body = response.getBody();  // koa2
```

## 消息处理

通过注册一个闭包函数，来实现消息的处理。

```js
// 闭包函数接收两个参数
// message 经过格式转换、消息解密后的消息对象
// next 为下一个闭包函数
server.with(async (message, next) => {
  console.log(message);
  return next(message);
});

const response = await server.serve();
```

也可以注册多个闭包函数，SDK将会顺序执行。

```js
server
  .with(async (message, next) => {
    // 自定义逻辑1
    return next(message);
  })
  .with(async (message, next) => {
    // 自定义逻辑2
    return next(message);
  })
  .with(async (message, next) => {
    // 自定义逻辑3
    return next(message);
  });
```

## 回复消息

如果不需要回复消息，那么在闭包中直接返回 `true` 即可。如果回复字符串内容，SDK会自动将其封装为 `Text` 类型的消息。

```js
server.with(async (message, next) => {
  return '感谢您使用node-easywechat';
});
```

如果要回复其它类型的消息，请参照微信文档 [被动回复用户消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html) 中XML接口，以对象形式返回即可。

> 注：回复的对象，可以省略 `ToUserName`、`FromUserName`，SDK会根据请求的消息，互换这两个字段后，写如响应消息对象，此外还会根据当前时间，添加 `CreateTime` 字段。

以回复图片消息为例:

```js
server.with(async (message, next) => {
  return {
    MsgType: 'image',
    Image: {
      MediaId: 'xxxx',
    },
  };
});
```

## 处理指定的消息

为了方便开发者处理消息推送，server 类内置了两个便捷方法：

### 处理普通消息

* 参数1：对应请求消息的 `MsgType` 字段，详见 [普通消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html)
* 参数2：对应的消息处理闭包

```js
// 只处理文本消息
server.addMessageListener('text', (message, next) => {
  // ...
});
```

### 处理事件消息

* 参数1：对应请求消息的 `Event` 字段，详见 [事件消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_event_pushes.html)
* 参数2：对应的消息处理闭包

```js
// 只处理关注事件
server.addEventListener('subscribe', (message, next) => {
  // ...
});
```
