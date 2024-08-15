# 工具

提供公众号相关的工具方法。

## 生成 JS-SDK 签名

```js
// 获取工具模块
const utils = app.getUtils();

const url = 'http://www.example.com/test.html?foo=bar'; // 前端需要使用 JSSDK 的完整的 URL 地址
const jsApiList = []; // 要使用的接口列表
const openTagList = []; // 要使用的开放标签列表
const debug = false;  // 是否开启调试模式

// JSSDK 所需的配置
const jssdkConfig = utils.buildJsSdkConfig(url, jsApiList, openTagList, debug);
```
