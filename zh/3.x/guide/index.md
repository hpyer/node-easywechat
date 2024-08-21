# node-easywechat

`3.x` 适配的是 EasyWeChat 的 `6.x` 版本。

## 环境

- Node.js 15.6.0 及以上版本

## 安装

::: code-group

```sh [npm]
npm install -S node-easywechat
```

```sh [pnpm]
pnpm add node-easywechat
```

```sh [yarn]
yarn add node-easywechat
```

:::

## 使用

以公众号为例：

```js
const { OfficialAccount } = require('node-easywechat');

// 实例化应用
const app = new OfficialAccount({
  app_id: '', // 公众号 app_id
  secret: '', // 公众号 secret
  token: '',  // 公众号 token
  aes_key: '',// 公众号 aes_key，如果是明文模式，请不要填写
});

// 获取 api 调用客户端
const client = app.getClient();

// 请求 api
// 注意，这里返回的是 HttpClientResponse 对象
const response = await client.post('/cgi-bin/user/info/updateremark', {
  data: {
    openid: 'xxxx',
    remark: 'xxxx',
  }
});

// 获取具体数据
const data = response.toObject();
// 另外还有以下方法：
// toJson() 转json字符串
```
