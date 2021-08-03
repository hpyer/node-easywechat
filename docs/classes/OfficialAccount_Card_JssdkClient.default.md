[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Card/JssdkClient](../modules/OfficialAccount_Card_JssdkClient.md) / default

# Class: default

[OfficialAccount/Card/JssdkClient](../modules/OfficialAccount_Card_JssdkClient.md).default

## Hierarchy

- [`default`](BaseService_Jssdk_JssdkClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Card_JssdkClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Card_JssdkClient.default.md#accesstoken)
- [app](OfficialAccount_Card_JssdkClient.default.md#app)
- [ticketEndpoint](OfficialAccount_Card_JssdkClient.default.md#ticketendpoint)
- [url](OfficialAccount_Card_JssdkClient.default.md#url)

### Methods

- [assign](OfficialAccount_Card_JssdkClient.default.md#assign)
- [attachExtension](OfficialAccount_Card_JssdkClient.default.md#attachextension)
- [buildConfig](OfficialAccount_Card_JssdkClient.default.md#buildconfig)
- [configSignature](OfficialAccount_Card_JssdkClient.default.md#configsignature)
- [dictionaryOrderSignature](OfficialAccount_Card_JssdkClient.default.md#dictionaryordersignature)
- [doRequest](OfficialAccount_Card_JssdkClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_Card_JssdkClient.default.md#getaccesstoken)
- [getAppId](OfficialAccount_Card_JssdkClient.default.md#getappid)
- [getConfigArray](OfficialAccount_Card_JssdkClient.default.md#getconfigarray)
- [getTicket](OfficialAccount_Card_JssdkClient.default.md#getticket)
- [getTicketSignature](OfficialAccount_Card_JssdkClient.default.md#getticketsignature)
- [getUrl](OfficialAccount_Card_JssdkClient.default.md#geturl)
- [httpGet](OfficialAccount_Card_JssdkClient.default.md#httpget)
- [httpPost](OfficialAccount_Card_JssdkClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Card_JssdkClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Card_JssdkClient.default.md#httpupload)
- [request](OfficialAccount_Card_JssdkClient.default.md#request)
- [requestRaw](OfficialAccount_Card_JssdkClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Card_JssdkClient.default.md#setaccesstoken)
- [setUrl](OfficialAccount_Card_JssdkClient.default.md#seturl)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[constructor](BaseService_Jssdk_JssdkClient.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[accessToken](BaseService_Jssdk_JssdkClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[app](BaseService_Jssdk_JssdkClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

___

### ticketEndpoint

• `Protected` **ticketEndpoint**: `string` = `'cgi-bin/ticket/getticket'`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[ticketEndpoint](BaseService_Jssdk_JssdkClient.default.md#ticketendpoint)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L9)

___

### url

• `Protected` **url**: `string` = `''`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[url](BaseService_Jssdk_JssdkClient.default.md#url)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:8](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L8)

## Methods

### assign

▸ **assign**(`cards`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cards` | `object`[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[OfficialAccount/Card/JssdkClient.ts:31](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Card/JssdkClient.ts#L31)

___

### attachExtension

▸ **attachExtension**(`cardId`, `extension?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `string` |
| `extension` | `object` |

#### Returns

`Promise`<`object`\>

#### Defined in

[OfficialAccount/Card/JssdkClient.ts:40](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Card/JssdkClient.ts#L40)

___

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

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[buildConfig](BaseService_Jssdk_JssdkClient.default.md#buildconfig)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:48](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L48)

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

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[configSignature](BaseService_Jssdk_JssdkClient.default.md#configsignature)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L76)

___

### dictionaryOrderSignature

▸ `Protected` **dictionaryOrderSignature**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |

#### Returns

`string`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[dictionaryOrderSignature](BaseService_Jssdk_JssdkClient.default.md#dictionaryordersignature)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:97](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L97)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[doRequest](BaseService_Jssdk_JssdkClient.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[getAccessToken](BaseService_Jssdk_JssdkClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L30)

___

### getAppId

▸ **getAppId**(): `string`

获取配置中的app_id

#### Returns

`string`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[getAppId](BaseService_Jssdk_JssdkClient.default.md#getappid)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:130](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L130)

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

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[getConfigArray](BaseService_Jssdk_JssdkClient.default.md#getconfigarray)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:65](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L65)

___

### getTicket

▸ **getTicket**(`refresh?`, `type?`): `Promise`<`any`\>

获取签名凭证api_ticket

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `refresh` | `boolean` | `false` |
| `type` | `string` | `'wx_card'` |

#### Returns

`Promise`<`any`\>

#### Overrides

[default](BaseService_Jssdk_JssdkClient.default.md).[getTicket](BaseService_Jssdk_JssdkClient.default.md#getticket)

#### Defined in

[OfficialAccount/Card/JssdkClient.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Card/JssdkClient.ts#L9)

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

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[getTicketSignature](BaseService_Jssdk_JssdkClient.default.md#getticketsignature)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:92](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L92)

___

### getUrl

▸ **getUrl**(): `string`

获取当前设置的URL

#### Returns

`string`

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[getUrl](BaseService_Jssdk_JssdkClient.default.md#geturl)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:122](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L122)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[httpGet](BaseService_Jssdk_JssdkClient.default.md#httpget)

#### Defined in

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L76)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[httpPost](BaseService_Jssdk_JssdkClient.default.md#httppost)

#### Defined in

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L85)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[httpPostJson](BaseService_Jssdk_JssdkClient.default.md#httppostjson)

#### Defined in

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L94)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[httpUpload](BaseService_Jssdk_JssdkClient.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L51)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[request](BaseService_Jssdk_JssdkClient.default.md#request)

#### Defined in

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L35)

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

[default](BaseService_Jssdk_JssdkClient.default.md).[requestRaw](BaseService_Jssdk_JssdkClient.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Card_JssdkClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Card_JssdkClient.default.md)

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[setAccessToken](BaseService_Jssdk_JssdkClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### setUrl

▸ **setUrl**(`url`): [`default`](OfficialAccount_Card_JssdkClient.default.md)

设置当前URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 完整的URL地址 |

#### Returns

[`default`](OfficialAccount_Card_JssdkClient.default.md)

#### Inherited from

[default](BaseService_Jssdk_JssdkClient.default.md).[setUrl](BaseService_Jssdk_JssdkClient.default.md#seturl)

#### Defined in

[BaseService/Jssdk/JssdkClient.ts:112](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/BaseService/Jssdk/JssdkClient.ts#L112)