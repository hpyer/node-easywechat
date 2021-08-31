[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/SubscribeMessage/SubscribeMessageClient](../modules/MiniProgram_SubscribeMessage_SubscribeMessageClient.md) / default

# Class: default

[MiniProgram/SubscribeMessage/SubscribeMessageClient](../modules/MiniProgram_SubscribeMessage_SubscribeMessageClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#accesstoken)
- [app](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#app)
- [message](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#message)
- [required](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#required)

### Methods

- [addTemplate](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#addtemplate)
- [deleteTemplate](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#deletetemplate)
- [doRequest](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#dorequest)
- [formatData](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#formatdata)
- [formatMessage](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#formatmessage)
- [getAccessToken](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#getaccesstoken)
- [getCategory](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#getcategory)
- [getTemplateKeywords](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#gettemplatekeywords)
- [getTemplateTitles](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#gettemplatetitles)
- [getTemplates](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#gettemplates)
- [httpGet](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#httpget)
- [httpPost](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#httppost)
- [httpPostJson](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#httppostjson)
- [httpUpload](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#httpupload)
- [request](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#request)
- [requestRaw](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#requestraw)
- [send](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#send)
- [setAccessToken](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md#setaccesstoken)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L15)

___

### message

• `Protected` **message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `miniprogram_state` | `string` |
| `page` | `string` |
| `template_id` | `string` |
| `touser` | `string` |

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L9)

___

### required

• `Protected` **required**: `string`[]

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L17)

## Methods

### addTemplate

▸ **addTemplate**(`tid`, `kidList`, `sceneDesc?`): `Promise`<`any`\>

添加订阅消息到个人模板库

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tid` | `string` | `undefined` | 模板id |
| `kidList` | `Number`[] | `undefined` | 开发者自行组合好的模板关键词列表 |
| `sceneDesc` | `string` | `null` | 服务场景描述 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:78](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L78)

___

### deleteTemplate

▸ **deleteTemplate**(`id`): `Promise`<`any`\>

删除个人模板库中的模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 模板id |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:92](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L92)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L114)

___

### formatData

▸ `Protected` **formatData**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:45](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L45)

___

### formatMessage

▸ `Protected` **formatMessage**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L30)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L30)

___

### getCategory

▸ **getCategory**(): `Promise`<`any`\>

获取小程序账号的类目

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:140](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L140)

___

### getTemplateKeywords

▸ **getTemplateKeywords**(`tid`): `Promise`<`any`\>

获取模板标题的关键词列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tid` | `string` | 模板id |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:103](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L103)

___

### getTemplateTitles

▸ **getTemplateTitles**(`ids`, `start?`, `limit?`): `Promise`<`any`\>

获取帐号所属类目下的公共模板标题

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ids` | `string`[] | `undefined` | 类目 id |
| `start` | `Number` | `0` | 开始下标，从0开始 |
| `limit` | `Number` | `30` | 分页记录数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:116](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L116)

___

### getTemplates

▸ **getTemplates**(): `Promise`<`any`\>

获取当前帐号下的个人模板列表

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:132](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L132)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L104)

___

### send

▸ **send**(`data`): `Promise`<`any`\>

发送订阅消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 消息内容 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/SubscribeMessage/SubscribeMessageClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/SubscribeMessage/SubscribeMessageClient.ts#L23)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)
