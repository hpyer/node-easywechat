# API调用

SDK包不再封装API方法，只提供RESTful风格的API调用方法。


```js
// 获取 api 调用客户端
const client = app.getClient();

// 请求 api
const response = await client.post('/cgi-bin/user/info/updateremark', {
  data: {
    openid: 'xxxx',
    remark: 'xxxx',
  }
});

// 或者
const response = await client.postJson('/cgi-bin/user/info/updateremark', {
  openid: 'xxxx',
  remark: 'xxxx',
});
```

## 请求方法

Restful 风格的请求方法：

```ts
get(url: string, options: AxiosRequestConfig): Promise<HttpClientResponse>;
post(url: string, options: AxiosRequestConfig): Promise<HttpClientResponse>;
put(url: string, options: AxiosRequestConfig): Promise<HttpClientResponse>;
patch(url: string, options: AxiosRequestConfig): Promise<HttpClientResponse>;
delete(url: string, options: AxiosRequestConfig): Promise<HttpClientResponse>;
```

同时还内置了一些便捷方法：

```ts
postJson(url: string data: object, options: AxiosRequestConfig): Promise<HttpClientResponse>;
patchJson(url: string data: object, options: AxiosRequestConfig): Promise<HttpClientResponse>;
postXml(url: string data: object, options: AxiosRequestConfig): Promise<HttpClientResponse>;
```

`options` 参数的详细配置请参考 [axios](https://github.com/axios/axios#request-config)


### 文件上传

```js
// 引入 FormData
const { FormData } = require('node-easywechat');

let file = path.join(__dirname, '/test.jpg');
let form = new FormData;
form.append('media', fs.createReadStream(file));

const response = await client.post('/cgi-bin/media/upload', {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  data: form,
  params: {
    type: 'image',
  }
});
```

或者简化写法：
```js
let file = path.join(__dirname, '/test.jpg');

const response = await client.withFile(file, 'media').post('/cgi-bin/media/upload');
```

### 请求证书

以微信支付 V2 为例：

```js
const https = require('https');
const fs = require('fs');

const response = await client.post('/secapi/pay/refund', {
  xml: {
    appid: app.getConfig().get('app_id'),
    mch_id: app.getConfig().get('mch_id'),
    // 接口所需参数
  },
  // 证书相关配置
  httpsAgent: new https.Agent({
    // 注意 Node.js 只需要 apiclient_cert.p12 的证书
    pfx: fs.readFileSync(app.getConfig().get('cert_path')),
    passphrase: app.getConfig().get('mch_id'),
  }),
});
```

## 响应处理

每个API请求返回的都是一个SDK封装的 `HttpClientResponse` 对象。

### 获取响应内容

```ts
// 获取原始响应内容
response.getContent();

// 响应内容转换为普通对象
response.toObject();

// 响应内容转换 JSON 字符串
response.toJson();

// 响应内容转换字符串
response.toString();

// 响应内容保存为文件，path 为要保存的文件路径
response.saveAs(path: string);

// 响应内容转换为 Data URLs
response.saveAs(path: string);
```

### 保存到文件

将响应内容保存为文件，`path` 为要保存的文件路径。

```ts
response.saveAs(path: string);
```

### 转换为 Data URLs

将响应内容转换为 [Data URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)。

```ts
response.toDataUrl();
```

### 获取请求上下文信息

如请求的参数、响应的headers等信息。

```ts
response.getInfo();
```

### 请求重试

默认SDK包未开启请求重试功能，如果需要开启，请在配置项中添加 `retry` 配置，详见 [axios-retry](https://github.com/softonic/axios-retry#options)。

> 注意：请勿在微信支付模块中开启请求重试功能，否则可能造成无法挽回的损失。

```ts
{
  app_id: '',
  secret: '',
  token: '',
  aes_key: '',

  // 请求重试配置
  retry: {
    retries: 3,
  }
}
```


