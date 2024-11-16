# 服务端

企业微信的第三方服务端推送和公众号一样，请参考：[公众号-服务端](../official-account/server)

## 第三方平台推送事件

相关文档请参考：[回调通知](https://developer.work.weixin.qq.com/document/path/90613)

企业微信数据推送的有以下事件：

* suite_ticket 推送，`InfoType` 值为 `suite_ticket`
* 授权成功，`InfoType` 值为 `create_auth`
* 授权变更，`InfoType` 值为 `change_auth`
* 授权取消，`InfoType` 值为 `cancel_auth`
* 通讯录变更通知，`InfoType` 值为 `change_contact`，`ChangeType` 会有如下值：
  * 新增成员 `create_user`
  * 更新成员 `update_user`
  * 删除成员 `delete_user`
  * 新增部门 `create_party`
  * 更新部门 `update_party`
  * 删除部门 `delete_party`
  * 成员标签变更 `update_tag`
* 共享应用事件回调，`InfoType` 值为 `share_agent_change`
* 重置永久授权码通知，`InfoType` 值为 `reset_permanent_code`
* 应用管理员变更通知，`InfoType` 值为 `change_app_admin`
* 授权组织架构权限通知，`InfoType` 值为 `corp_arch_auth`
* 获客助手权限变更通知，`InfoType` 值为 `approve_special_auth`

## 内置事件处理器

SDK 内置了几个便捷方法以便于开发者快速推送事件：

## 授权成功事件

```js
const server = app.getServer();

server.handleAuthCreated(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 授权变更事件

```js
const server = app.getServer();

server.handleAuthChanged(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 授权取消事件

```js
const server = app.getServer();

server.handleAuthCancelled(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 处理通讯录变更事件

包括成员变更、部门变更、成员标签变更

```js
const server = app.getServer();

server.handleContactChanged(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

## 成员变更事件

```js
// 新增成员
server.handleUserCreated(async (message, next) => {
  // ...
  return next(message);
});

// 更新成员
server.handleUserUpdated(async (message, next) => {
  // ...
  return next(message);
});

// 删除成员
server.handleUserDeleted(async (message, next) => {
  // ...
  return next(message);
});
```

## 部门变更事件

```js
// 新增部门
server.handlePartyCreated(async (message, next) => {
  // ...
  return next(message);
});

// 更新部门
server.handlePartyUpdated(async (message, next) => {
  // ...
  return next(message);
});

// 删除部门
server.handlePartyDeleted(async (message, next) => {
  // ...
  return next(message);
});
```

## 成员标签变更事件

```js
server.handleUserTagUpdated(async (message, next) => {
  // ...
  return next(message);
});
```

## 共享应用事件

```js
server.handleShareAgentChanged(async (message, next) => {
  // ...
  return next(message);
});
```

## 重置永久授权码通知

```js
server.handleResetPermanentCode(async (message, next) => {
  // ...
  return next(message);
});
```

## 应用管理员变更通知

```js
server.handleChangeAppAdmin(async (message, next) => {
  // ...
  return next(message);
});
```

## suite_ticket 推送事件

SDK包已内置了 `suite_ticket` 的处理（使用缓存存储和刷新），开发者无需关心。

> 注意：如果你自行处理了 SuiteTicket 推送，你必须同时设置 ProviderAccessToken 类，因为 ProviderAccessToken 依赖它。

```js
server.handleSuiteTicketRefreshed(async (message, next) => {
  // ...
  return next(message);
});
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
