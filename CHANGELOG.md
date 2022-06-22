# CHANGELOG


## v3.0.0-beta.3 (2022-06-22)

- Fix: 修复获取js ticket时无法自动获取access_token的问题
- Fix: 修复日志处理回调函数的参数提示异常的问题

## v3.0.0-beta.2 (2022-06-21)

- Feat: 统一调用入口增加一些常用的类

- Fix: 修复获取的服务端实例没有代码提示的问题

## v3.0.0-beta.1 (2022-06-21)

- Feat: 新增设置预置参数相关方法
- Feat: 增加设置日志处理器的方法
- Feat: 增加统一的对象调用入口

- Fix: 调整获取响应内容时的返回类型
- Fix: 修复微信小程序access_token键名前缀与公众号相同的问题
- Fix: 优化并导出配置项声明
- Fix: 修复请求响应结果非字符串类型时转化数据格式报错的问题
- Fix: 未设置ServerRequest实例就调用getRequest时提示异常
- Fix: 修复未自动创建客户端实例的问题

- Perf: 调整接口请求返回的HttpResponse对象toObject时的数据类型

## v3.0.0-alpha.2 (2022-06-08)

- Feat: 新增小程序相关接口

- Fix: 修复content-type非json时，错误判断不正确问题

- Perf: 优化消息对象的提示信息

- Refactor: 简化构造函数的写法

## v3.0.0-alpha.1 (2022-04-16)

- Feat: 新增框架架构和公众号模块

- Docs: 更新3.x说明文档
