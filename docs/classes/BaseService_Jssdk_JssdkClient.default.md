[node-easywechat](../README.md) / [Exports](../modules.md) / [BaseService/Jssdk/JssdkClient](../modules/BaseService_Jssdk_JssdkClient.md) / default

# Class: default

[BaseService/Jssdk/JssdkClient](../modules/BaseService_Jssdk_JssdkClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

  ↳↳ [`default`](OfficialAccount_Card_JssdkClient.default.md)

  ↳↳ [`default`](Payment_Jssdk_JssdkClient.default.md)

  ↳↳ [`default`](Work_Jssdk_JssdkClient.default.md)

## Table of contents

### Constructors

- [constructor](BaseService_Jssdk_JssdkClient.default.md#constructor)

### Properties

- [accessToken](BaseService_Jssdk_JssdkClient.default.md#accesstoken)
- [app](BaseService_Jssdk_JssdkClient.default.md#app)
- [ticketEndpoint](BaseService_Jssdk_JssdkClient.default.md#ticketendpoint)
- [url](BaseService_Jssdk_JssdkClient.default.md#url)

### Methods

- [buildConfig](BaseService_Jssdk_JssdkClient.default.md#buildconfig)
- [configSignature](BaseService_Jssdk_JssdkClient.default.md#configsignature)
- [dictionaryOrderSignature](BaseService_Jssdk_JssdkClient.default.md#dictionaryordersignature)
- [doRequest](BaseService_Jssdk_JssdkClient.default.md#dorequest)
- [getAccessToken](BaseService_Jssdk_JssdkClient.default.md#getaccesstoken)
- [getAppId](BaseService_Jssdk_JssdkClient.default.md#getappid)
- [getConfigArray](BaseService_Jssdk_JssdkClient.default.md#getconfigarray)
- [getTicket](BaseService_Jssdk_JssdkClient.default.md#getticket)
- [getTicketSignature](BaseService_Jssdk_JssdkClient.default.md#getticketsignature)
- [getUrl](BaseService_Jssdk_JssdkClient.default.md#geturl)
- [httpGet](BaseService_Jssdk_JssdkClient.default.md#httpget)
- [httpPost](BaseService_Jssdk_JssdkClient.default.md#httppost)
- [httpPostJson](BaseService_Jssdk_JssdkClient.default.md#httppostjson)
- [httpUpload](BaseService_Jssdk_JssdkClient.default.md#httpupload)
- [request](BaseService_Jssdk_JssdkClient.default.md#request)
- [requestRaw](BaseService_Jssdk_JssdkClient.default.md#requestraw)
- [setAccessToken](BaseService_Jssdk_JssdkClient.default.md#setaccesstoken)
- [setUrl](BaseService_Jssdk_JssdkClient.default.md#seturl)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](Core_BaseClient.default.md).[constructor](Core_BaseClient.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L15)

___

### ticketEndpoint

• `Protected` **ticketEndpoint**: `string` = `'cgi-bin/ticket/getticket'`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L9)

___

### url

• `Protected` **url**: `string` = `''`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:8](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L8)

## Methods

### buildConfig

▸ **buildConfig**(`jsApiList`, `debug?`, `beta?`, `json?`, `openTagList?`, `url?`): `Promise`<`any`\>

获取JSSDK的配置

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `jsApiList` | `string`[] | `undefined` | API列表 |
| `debug` | `Boolean` | `false` | 是否调试模式，默认：false |
| `beta` | `Boolean` | `false` | 是否测试模式，默认：false |
| `json` | `Boolean` | `true` | true时返回JSON字符串，默认：true |
| `openTagList` | `string`[] | `[]` | 开放标签列表，默认：[] |
| `url` | `string` | `''` | 请求URL，默认：当前URL |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:48](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L48)

___

### configSignature

▸ **configSignature**(`url?`, `nonce?`, `timestamp?`): `Promise`<`object`\>

获取签名配置

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `''` | 完整的URL地址 |
| `nonce` | `string` | `''` | 随机字符串，默认：随机10位 |
| `timestamp` | `string` | `''` | 时间戳，默认：当前时间 |

#### Returns

`Promise`<`object`\>

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:76](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L76)

___

### dictionaryOrderSignature

▸ `Protected` **dictionaryOrderSignature**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |

#### Returns

`string`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:97](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L97)

___

### doRequest

▸ **doRequest**(`payload`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Core_BaseClient.default.md).[doRequest](Core_BaseClient.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L30)

___

### getAppId

▸ **getAppId**(): `string`

获取配置中的app_id

#### Returns

`string`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:130](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L130)

___

### getConfigArray

▸ **getConfigArray**(`jsApiList`, `debug?`, `beta?`, `openTagList?`, `url?`): `Promise`<`any`\>

获取JSSDK的配置对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `jsApiList` | `string`[] | `undefined` | API列表 |
| `debug` | `Boolean` | `false` | 是否调试模式，默认：false |
| `beta` | `Boolean` | `false` | 是否测试模式，默认：false |
| `openTagList` | `string`[] | `[]` | 开放标签列表，默认：[] |
| `url` | `string` | `''` | 请求URL，默认：当前URL |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:65](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L65)

___

### getTicket

▸ **getTicket**(`refresh?`, `type?`): `Promise`<`string`\>

获取签名凭证api_ticket

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `refresh` | `boolean` | `false` | 是否强制刷新 |
| `type` | `string` | `'jsapi'` | 类型，默认：jsapi |

#### Returns

`Promise`<`string`\>

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:16](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L16)

___

### getTicketSignature

▸ `Protected` **getTicketSignature**(`ticket`, `nonce`, `timestamp`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticket` | `string` |
| `nonce` | `string` |
| `timestamp` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:92](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L92)

___

### getUrl

▸ **getUrl**(): `string`

获取当前设置的URL

#### Returns

`string`

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:122](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L122)

___

### httpGet

▸ **httpGet**(`url`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpGet](Core_BaseClient.default.md#httpget)

#### Defined in

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L76)

___

### httpPost

▸ **httpPost**(`url`, `formData?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `formData` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpPost](Core_BaseClient.default.md#httppost)

#### Defined in

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L85)

___

### httpPostJson

▸ **httpPostJson**(`url`, `data?`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `object` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpPostJson](Core_BaseClient.default.md#httppostjson)

#### Defined in

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L94)

___

### httpUpload

▸ **httpUpload**(`url`, `files?`, `form?`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `files` | `object` |
| `form` | `object` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpUpload](Core_BaseClient.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L51)

___

### request

▸ **request**(`payload`, `returnResponse?`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `AxiosRequestConfig` | `undefined` |
| `returnResponse` | `Boolean` | `false` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Core_BaseClient.default.md).[request](Core_BaseClient.default.md#request)

#### Defined in

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L35)

___

### requestRaw

▸ **requestRaw**(`payload`): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Inherited from

[default](Core_BaseClient.default.md).[requestRaw](Core_BaseClient.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](BaseService_Jssdk_JssdkClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](BaseService_Jssdk_JssdkClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### setUrl

▸ **setUrl**(`url`): [`default`](BaseService_Jssdk_JssdkClient.default.md)

设置当前URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 完整的URL地址 |

#### Returns

[`default`](BaseService_Jssdk_JssdkClient.default.md)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:112](https://github.com/hpyer/node-easywechat/blob/b017670/src/BaseService/Jssdk/JssdkClient.ts#L112)
