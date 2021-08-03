[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/SubscribeMessage/SubscribeMessageClient](../modules/OfficialAccount_SubscribeMessage_SubscribeMessageClient.md) / default

# Class: default

[OfficialAccount/SubscribeMessage/SubscribeMessageClient](../modules/OfficialAccount_SubscribeMessage_SubscribeMessageClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#constructor)

### Properties

- [API\_SEND](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#api_send)
- [accessToken](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#accesstoken)
- [app](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#app)
- [message](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#message)
- [required](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#required)

### Methods

- [addTemplate](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#addtemplate)
- [deleteTemplate](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#deletetemplate)
- [doRequest](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#dorequest)
- [formatData](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#formatdata)
- [formatMessage](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#formatmessage)
- [getAccessToken](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#getaccesstoken)
- [getCategory](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#getcategory)
- [getTemplateKeywords](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#gettemplatekeywords)
- [getTemplateTitles](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#gettemplatetitles)
- [getTemplates](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#gettemplates)
- [httpGet](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#httpget)
- [httpPost](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#httppost)
- [httpPostJson](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#httpupload)
- [request](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#request)
- [requestRaw](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#requestraw)
- [send](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#send)
- [setAccessToken](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md#setaccesstoken)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L17)

## Properties

### API\_SEND

• **API\_SEND**: `string` = `'cgi-bin/message/subscribe/bizsend'`

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L8)

___

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L15)

___

### message

• `Protected` **message**: `object`

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L10)

___

### required

• `Protected` **required**: `string`[]

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L17)

## Methods

### addTemplate

▸ **addTemplate**(`tid`, `kidList`, `sceneDesc?`): `Promise`<`any`\>

添加模板

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tid` | `string` | `undefined` |
| `kidList` | `string`[] | `undefined` |
| `sceneDesc` | `string` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:27](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L27)

___

### deleteTemplate

▸ **deleteTemplate**(`id`): `Promise`<`any`\>

删除模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 模版id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:41](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L41)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L114)

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

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:112](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L112)

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

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:97](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L97)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

___

### getCategory

▸ **getCategory**(): `Promise`<`any`\>

获取公众号类目

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L51)

___

### getTemplateKeywords

▸ **getTemplateKeywords**(`tid`): `Promise`<`any`\>

获取模板中的关键词

#### Parameters

| Name | Type |
| :------ | :------ |
| `tid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:59](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L59)

___

### getTemplateTitles

▸ **getTemplateTitles**(`ids`, `start?`, `limit?`): `Promise`<`any`\>

获取所属类目的公共模板

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | `string`[] | `undefined` |
| `start` | `number` | `0` |
| `limit` | `number` | `30` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:69](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L69)

___

### getTemplates

▸ **getTemplates**(): `Promise`<`any`\>

获取私有模板列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:81](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L81)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L104)

___

### send

▸ **send**(`data`): `Promise`<`any`\>

发送订阅消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 详情 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts:90](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/SubscribeMessage/SubscribeMessageClient.ts#L90)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)
