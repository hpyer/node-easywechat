[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/TemplateMessage/TemplateMessageClient](../modules/MiniProgram_TemplateMessage_TemplateMessageClient.md) / default

# Class: default

[MiniProgram/TemplateMessage/TemplateMessageClient](../modules/MiniProgram_TemplateMessage_TemplateMessageClient.md).default

## Hierarchy

- [`default`](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#constructor)

### Properties

- [API\_SEND](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#api_send)
- [accessToken](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#accesstoken)
- [app](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#app)
- [message](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#message)
- [required](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#required)

### Methods

- [add](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#add)
- [addTemplate](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#addtemplate)
- [delete](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#delete)
- [deletePrivateTemplate](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#deleteprivatetemplate)
- [doRequest](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#dorequest)
- [formatData](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#formatdata)
- [formatMessage](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#formatmessage)
- [get](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#get)
- [getAccessToken](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#getaccesstoken)
- [getIndustry](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#getindustry)
- [getPrivateTemplates](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#getprivatetemplates)
- [getTemplates](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#gettemplates)
- [httpGet](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#httpget)
- [httpPost](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#httppost)
- [httpPostJson](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#httppostjson)
- [httpUpload](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#httpupload)
- [list](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#list)
- [request](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#request)
- [requestRaw](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#requestraw)
- [send](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#send)
- [sendSubscription](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#sendsubscription)
- [setAccessToken](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#setaccesstoken)
- [setIndustry](MiniProgram_TemplateMessage_TemplateMessageClient.default.md#setindustry)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[constructor](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L17)

## Properties

### API\_SEND

• **API\_SEND**: `string` = `'cgi-bin/message/wxopen/template/send'`

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[API_SEND](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#api_send)

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L8)

___

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[accessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[app](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L15)

___

### message

• `Protected` **message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `emphasis_keyword` | `string` |
| `form_id` | `string` |
| `page` | `string` |
| `template_id` | `string` |
| `touser` | `string` |

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[message](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#message)

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L10)

___

### required

• `Protected` **required**: `string`[]

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[required](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#required)

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L19)

## Methods

### add

▸ **add**(`id`, `keyword`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `keyword` | `Number`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:36](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L36)

___

### addTemplate

▸ **addTemplate**(`template_id_short`): `Promise`<`any`\>

添加模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template_id_short` | `string` | 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式 |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[addTemplate](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#addtemplate)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:47](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L47)

___

### delete

▸ **delete**(`template_id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template_id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:44](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L44)

___

### deletePrivateTemplate

▸ **deletePrivateTemplate**(`template_id`): `Promise`<`any`\>

删除模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template_id` | `string` | 模版id |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[deletePrivateTemplate](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#deleteprivatetemplate)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:66](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L66)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[doRequest](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#dorequest)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[formatData](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatdata)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:110](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L110)

___

### formatMessage

▸ `Protected` **formatMessage**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`any`

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[formatMessage](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatmessage)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:95](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L95)

___

### get

▸ **get**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:29](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L29)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

___

### getIndustry

▸ **getIndustry**(): `Promise`<`any`\>

获取支持的行业列表

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getindustry)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:38](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L38)

___

### getPrivateTemplates

▸ **getPrivateTemplates**(): `Promise`<`any`\>

获取所有模板列表

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getPrivateTemplates](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getprivatetemplates)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:57](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L57)

___

### getTemplates

▸ **getTemplates**(`offset`, `count`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `Number` |
| `count` | `Number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L51)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpGet](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpget)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpPost](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppost)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpPostJson](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppostjson)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpUpload](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L51)

___

### list

▸ **list**(`offset`, `count`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `Number` |
| `count` | `Number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/TemplateMessage/TemplateMessageClient.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/TemplateMessage/TemplateMessageClient.ts#L21)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[request](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#request)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[requestRaw](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L104)

___

### send

▸ **send**(`data`): `Promise`<`any`\>

发送模板消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 模版详情 |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[send](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#send)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:77](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L77)

___

### sendSubscription

▸ **sendSubscription**(`data`): `Promise`<`any`\>

发送一次性订阅消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 消息详情 |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[sendSubscription](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#sendsubscription)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:88](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L88)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_TemplateMessage_TemplateMessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_TemplateMessage_TemplateMessageClient.default.md)

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[setAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### setIndustry

▸ **setIndustry**(`industry_id1`, `industry_id2`): `Promise`<`any`\>

修改账号所属行业

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `industry_id1` | `string` | 主行业id |
| `industry_id2` | `string` | 副行业id |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[setIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setindustry)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:27](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L27)
