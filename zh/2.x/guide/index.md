# node-easywechat 2.x

`2.x` 适配的是 EasyWeChat 的 `5.x` 版本。

## 安装

::: code-group

```sh [npm]
$ npm install -S node-easywechat@second
```

```sh [pnpm]
$ pnpm add node-easywechat@second
```

```sh [yarn]
$ yarn add node-easywechat@second
```

:::

## 使用

以公众号为例：

```js
const EasyWechat = require('node-easywechat');

// 实例化应用
const app = new EasyWechat.Factory.OfficialAccount({
  app_id: '', // 公众号 app_id
  secret: '', // 公众号 secret
  token: '',  // 公众号 token
  aes_key: '',// 公众号 aes_key，如果是明文模式，请勿填写
});

// 请求 api
const buttons = [
  {
    type: 'click',
    name: '今日新闻',
    key: 'TODAY_NEWS'
  },
  {
    name: '新闻网站',
    sub_button: [
      {
        type: 'view',
        name: '新华网',
        url: 'http://www.xinhuanet.com/'
      },
      {
        type: 'view',
        name: '中国新闻网',
        url: 'http://www.chinanews.com/'
      }
    ]
  }
];
const result = await officialAccount.menu.create(buttons);
console.log(result);
```
