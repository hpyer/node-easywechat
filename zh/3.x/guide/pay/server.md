# 服务端

微信支付的服务端推送和公众号基本一样，请参考：[公众号-服务端](../official-account/server)

## 内置事件处理器

SDK 内置了两个便捷方法以便于开发者快速处理支付推送事件：

### 支付成功事件

🚨 切记：推送信息不一定靠谱，可能是伪造的，所以拿到推送通知，只取订单号等必要信息，其它信息忽略，拿订单号重新查询微信支付订单的最新状态再做处理。

```js
const server = app.getServer();

server.handlePaid(async (message, next) => {
  // message.out_trade_no 获取商户订单号
  // message.payer.openid 获取支付者 openid

  // 🚨🚨🚨 注意：推送信息不一定靠谱哈，请务必验证
  // 建议是拿订单号调用微信支付查询接口，以查询到的订单状态为准

  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### 退款成功事件

```js
const server = app.getServer();

server.handleRefunded(async (message, next) => {
  // message.out_trade_no 获取商户订单号

  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 其它事件处理

```js
const server = app.getServer();

server.with(async (message, next) => {
  // message.out_trade_no 获取商户订单号
  // message.event_type 事件类型

  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 自助处理推送消息

你可以通过下面的方式获取来自微信服务器的推送消息：

```js
const server = app.getServer();

const message = await server.getRequestMessage();
```

你可以在处理完逻辑后自行创建一个响应，当然，在不同的框架里，响应写法也不一样，请自行实现。
