# 服务端

企业微信的服务端推送和公众号一样，请参考：[公众号-服务端](../official-account/server)

## 第三方平台推送事件

企业微信数据推送的有以下事件：

* 通讯录变更通知，`Event` 值为 `change_contact`，`ChangeType` 会有如下值：
  * 新增成员 `create_user`
  * 更新成员 `update_user`
  * 删除成员 `delete_user`
  * 新增部门 `create_party`
  * 更新部门 `update_party`
  * 删除部门 `delete_party`
  * 成员标签变更 `update_tag`
* 异步任务完成通知，`Event` 值为 `batch_job_result`

## 内置事件处理器

SDK 内置了几个便捷方法以便于开发者快速推送事件：

### 处理通讯录变更事件

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

### 处理任务执行完成事件

```js
const server = app.getServer();

server.handleBatchJobsFinished(async (message, next) => {
  // ...
  return next(message);
});

const response = await server.serve();
// reseponse.getBody();
```

### 成员变更事件

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

### 部门变更事件

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

### 成员标签变更事件

```js
server.handleUserTagUpdated(async (message, next) => {
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
