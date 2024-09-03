# 服务端

第三方平台的服务端推送和公众号基本一样，请参考：[公众号-服务端](../official-account/server)

## 第三方平台推送事件处理

公众号第三方平台推送的有四个事件：

* 授权成功 `authorized`
* 授权更新 `updateauthorized`
* 授权取消 `unauthorized`
* VerifyTicket `component_verify_ticket`

SDK 默认会处理事件 `component_verify_ticket` ，并会缓存 `verify_ticket` 所以如果你暂时不需要处理其他事件，直接这样使用即可：

```js
const server = app.getServer();

const response = await server.serve();
// reseponse.getBody();
```

> 如已经授权的公众号、小程序再次进行授权，而未修改已授权的权限的话，是没有相关事件推送的。

## 内置事件处理器

SDK 内置了四个便捷方法以便于开发者快速处理相关的推送事件：

### 处理授权成功事件

```js
const server = app.getServer();

server.handleAuthorized(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### 处理授权更新事件

```js
const server = app.getServer();

server.handleAuthorizeUpdated(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### 处理授权取消事件

```js
const server = app.getServer();

server.handleUnauthorized(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### 处理快速注册企业小程序审核通知事件

```js
const server = app.getServer();

server.handleThirdFastRegister(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 其它事件处理

```js
const server = app.getServer();

server.with(async (message, next) => {
  // ...
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
