
## EasyWechat for Node.js

注：1.x分支针对 EasyWechat 的 3.x版本。若您需要 EasyWechat 的 4.x版本，请切换到 2.x 分支。

[EasyWechat](https://github.com/overtrue/wechat) 是一个由 `安正超` 大神用 PHP 开发的开源的微信非官方 SDK。其功能强大，使用方便，个人一直很喜欢，所以近日将其在 Node.js 上实现。本人会尽量还原其配置项以及接口的调用方式，但毕竟语言环境不同，具体的实现方式会有些许差别，还请各位开发者见谅。

> 注：虽然也使用了 EasyWechat 这个名称，但是和 `安小超` 大神没有任何关系，请各位开发者不要因使用本包产生的疑惑而去打扰大神，如有疑问请在本项目中提 issue，谢谢~


### 安装

`npm install -S node-easywechat`

### 使用示例

[node-easywechat-demo](https://github.com/hpyer/node-easywechat-demo)

### 配置项示例

``` js
{
  // 微信公众号的 app key
  appKey: '',
  // 微信公众号的 app secret
  appSecret: '',
  // 微信公众号的 token
  token: '',
  // 微信公众号的 token
  aesKey: '',

  // access_token 的缓存名称
  access_token_cache_key: 'NODE_EASYWECHAT_ACCESS_TOKEN',

  // jssdk 的缓存名称
  jssdk_cache_key: 'NODE_EASYWECHAT_JSSKD_TICKET',

  // 缓存驱动，可选值：memory（内存存储）、file（文件存储），默认：memory
  cache_driver: 'file',
  // 缓存以文件存储时，需要的配置项
  cache_options: {
    path: './cache/', // 文件存储目录（请确保该目录有读写权限）
    fileMode: 0o666,  // 文件权限
    ext: '.cache'     // 文件扩展名
  },
  // // 自定义缓存驱动
  // // 您需要实现一个继承 EasyWechat.Cache.CacheInterface 的缓存驱动类
  // // 实例化以后赋值给 cache 选项即可
  // cache: customCacheDriver

  // 网页授权认证
  oauth: {
    // 网页授权类型
    scope: 'snsapi_userinfo',
    // 网页授权回调地址，完整的URL
    redirect: 'http://node-easywechat.hpyer.cn/wxlogin/callback'
  },

  // 支付
  payment: {
    // 商户号
    merchant_id: 'your-mch-id',
    // 签名密钥
    key: 'key-for-signature',
    // 默认回调地址，也可以在下单时单独设置来覆盖它，完整URL，不带参数
    notify_url: '默认的订单回调地址'
  },

  // 小程序
  mini_program: {
    // appId
    appId: 'your-app-id',
    // appSecret
    appSecret: 'your-app-secret'
  }
}
```

### 功能支持列表

- [x] 网页授权登录
- [x] JSSDK
- [x] 服务端
- [x] 消息
- [ ] 多客服消息转发
- [x] 事件
- [ ] 群发消息
- [x] 模板消息
- [x] 用户
- [x] 用户标签
- [ ] 用户组
- [x] 小程序
- [x] 素材管理
- [x] 菜单
- [x] 支付
- [ ] 企业支付
- [ ] 红包
- [ ] 卡券
- [ ] 小店
- [ ] 门店
- [ ] 客服
- [ ] 数据统计与分析
- [x] 二维码
- [x] 短网址
- [ ] 语义理解
- [ ] 自动回复
- [ ] 开放平台

### 自定义功能

- [x] Access Token
- [x] 缓存
