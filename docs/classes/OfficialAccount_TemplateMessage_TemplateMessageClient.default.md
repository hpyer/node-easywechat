[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/TemplateMessage/TemplateMessageClient](../modules/OfficialAccount_TemplateMessage_TemplateMessageClient.md) / default

# Class: default

[OfficialAccount/TemplateMessage/TemplateMessageClient](../modules/OfficialAccount_TemplateMessage_TemplateMessageClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

  ↳↳ [`default`](MiniProgram_TemplateMessage_TemplateMessageClient.default.md)

  ↳↳ [`default`](MiniProgram_UniformMessage_UniformMessageClient.default.md)

## Table of contents

### Constructors

- [constructor](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#constructor)

### Properties

- [API\_SEND](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#api_send)
- [accessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#accesstoken)
- [app](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#app)
- [message](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#message)
- [required](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#required)

### Methods

- [addTemplate](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#addtemplate)
- [deletePrivateTemplate](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#deleteprivatetemplate)
- [doRequest](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#dorequest)
- [formatData](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatdata)
- [formatMessage](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatmessage)
- [getAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getaccesstoken)
- [getIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getindustry)
- [getPrivateTemplates](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getprivatetemplates)
- [httpGet](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpget)
- [httpPost](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppost)
- [httpPostJson](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpupload)
- [request](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#request)
- [requestRaw](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#requestraw)
- [send](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#send)
- [sendSubscription](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#sendsubscription)
- [setAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setaccesstoken)
- [setIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setindustry)

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

### API\_SEND

• **API\_SEND**: `string` = `'cgi-bin/message/template/send'`

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:8](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L8)

___

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

### message

• `Protected` **message**: `object`

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:10](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L10)

___

### required

• `Protected` **required**: `string`[]

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L17)

## Methods

### addTemplate

▸ **addTemplate**(`template_id_short`): `Promise`<`any`\>

添加模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template_id_short` | `string` | 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:47](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L47)

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

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:66](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L66)

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

### formatData

▸ `Protected` **formatData**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:110](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L110)

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

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:95](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L95)

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

### getIndustry

▸ **getIndustry**(): `Promise`<`any`\>

获取支持的行业列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:38](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L38)

___

### getPrivateTemplates

▸ **getPrivateTemplates**(): `Promise`<`any`\>

获取所有模板列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:57](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L57)

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

### send

▸ **send**(`data`): `Promise`<`any`\>

发送模板消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 模版详情 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:77](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L77)

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

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:88](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L88)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

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

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L27)
