# 工具

提供小程序相关的工具方法。

## code2session

```js
// 获取工具模块
const utils = app.getUtils();

const code = 'xxx'; // 小程序端传递的 code

const result = await utils.codeToSession(code);
```

## 数据解密

```js
// 获取工具模块
const utils = app.getUtils();

const sessionKey = 'xxx'; // 小程序端传递的 sessionKey
const iv = 'xxx'; // 小程序端传递的 iv
const encryptedData = 'xxx'; // 小程序端传递的 encryptedData

const result = utils.decryptSession(sessionKey, iv, encryptedData);
```
