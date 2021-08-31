[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/UniformMessage/UniformMessageClient](../modules/MiniProgram_UniformMessage_UniformMessageClient.md) / default

# Class: default

[MiniProgram/UniformMessage/UniformMessageClient](../modules/MiniProgram_UniformMessage_UniformMessageClient.md).default

## Hierarchy

- [`default`](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_UniformMessage_UniformMessageClient.default.md#constructor)

### Properties

- [API\_SEND](MiniProgram_UniformMessage_UniformMessageClient.default.md#api_send)
- [accessToken](MiniProgram_UniformMessage_UniformMessageClient.default.md#accesstoken)
- [app](MiniProgram_UniformMessage_UniformMessageClient.default.md#app)
- [message](MiniProgram_UniformMessage_UniformMessageClient.default.md#message)
- [mpMessage](MiniProgram_UniformMessage_UniformMessageClient.default.md#mpmessage)
- [required](MiniProgram_UniformMessage_UniformMessageClient.default.md#required)
- [weappMessage](MiniProgram_UniformMessage_UniformMessageClient.default.md#weappmessage)

### Methods

- [addTemplate](MiniProgram_UniformMessage_UniformMessageClient.default.md#addtemplate)
- [baseFormat](MiniProgram_UniformMessage_UniformMessageClient.default.md#baseformat)
- [deletePrivateTemplate](MiniProgram_UniformMessage_UniformMessageClient.default.md#deleteprivatetemplate)
- [doRequest](MiniProgram_UniformMessage_UniformMessageClient.default.md#dorequest)
- [formatData](MiniProgram_UniformMessage_UniformMessageClient.default.md#formatdata)
- [formatMessage](MiniProgram_UniformMessage_UniformMessageClient.default.md#formatmessage)
- [formatMpMessage](MiniProgram_UniformMessage_UniformMessageClient.default.md#formatmpmessage)
- [formatWeappMessage](MiniProgram_UniformMessage_UniformMessageClient.default.md#formatweappmessage)
- [getAccessToken](MiniProgram_UniformMessage_UniformMessageClient.default.md#getaccesstoken)
- [getIndustry](MiniProgram_UniformMessage_UniformMessageClient.default.md#getindustry)
- [getPrivateTemplates](MiniProgram_UniformMessage_UniformMessageClient.default.md#getprivatetemplates)
- [httpGet](MiniProgram_UniformMessage_UniformMessageClient.default.md#httpget)
- [httpPost](MiniProgram_UniformMessage_UniformMessageClient.default.md#httppost)
- [httpPostJson](MiniProgram_UniformMessage_UniformMessageClient.default.md#httppostjson)
- [httpUpload](MiniProgram_UniformMessage_UniformMessageClient.default.md#httpupload)
- [request](MiniProgram_UniformMessage_UniformMessageClient.default.md#request)
- [requestRaw](MiniProgram_UniformMessage_UniformMessageClient.default.md#requestraw)
- [send](MiniProgram_UniformMessage_UniformMessageClient.default.md#send)
- [sendSubscription](MiniProgram_UniformMessage_UniformMessageClient.default.md#sendsubscription)
- [setAccessToken](MiniProgram_UniformMessage_UniformMessageClient.default.md#setaccesstoken)
- [setIndustry](MiniProgram_UniformMessage_UniformMessageClient.default.md#setindustry)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L17)

## Properties

### API\_SEND

• **API\_SEND**: `string` = `'cgi-bin/message/wxopen/template/uniform_send'`

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[API_SEND](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#api_send)

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L9)

___

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[accessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[app](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L15)

___

### message

• `Protected` **message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `touser` | `string` |

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[message](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#message)

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L11)

___

### mpMessage

• `Protected` **mpMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appid` | `string` |
| `data` | `string` |
| `miniprogram` | `string` |
| `template_id` | `string` |
| `url` | `string` |

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L23)

___

### required

• `Protected` **required**: `string`[]

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[required](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#required)

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:31](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L31)

___

### weappMessage

• `Protected` **weappMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `emphasis_keyword` | `string` |
| `form_id` | `string` |
| `page` | `string` |
| `template_id` | `string` |

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L15)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[addTemplate](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#addtemplate)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:47](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L47)

___

### baseFormat

▸ `Protected` **baseFormat**(`data?`, `defaultData?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |
| `defaultData` | `object` |

#### Returns

`object`

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:74](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L74)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[doRequest](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#dorequest)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[formatData](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatdata)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:110](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L110)

___

### formatMessage

▸ `Protected` **formatMessage**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Overrides

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[formatMessage](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#formatmessage)

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:33](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L33)

___

### formatMpMessage

▸ `Protected` **formatMpMessage**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:61](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L61)

___

### formatWeappMessage

▸ `Protected` **formatWeappMessage**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

[MiniProgram/UniformMessage/UniformMessageClient.ts:52](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/UniformMessage/UniformMessageClient.ts#L52)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L30)

___

### getIndustry

▸ **getIndustry**(): `Promise`<`any`\>

获取支持的行业列表

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getindustry)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:38](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L38)

___

### getPrivateTemplates

▸ **getPrivateTemplates**(): `Promise`<`any`\>

获取所有模板列表

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[getPrivateTemplates](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#getprivatetemplates)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpGet](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpget)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpPost](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppost)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpPostJson](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httppostjson)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[httpUpload](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#httpupload)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[request](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#request)

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

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[requestRaw](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#requestraw)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[send](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#send)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[sendSubscription](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#sendsubscription)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:88](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L88)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_UniformMessage_UniformMessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_UniformMessage_UniformMessageClient.default.md)

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[setAccessToken](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setaccesstoken)

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

#### Inherited from

[default](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md).[setIndustry](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md#setindustry)

#### Defined in

[OfficialAccount/TemplateMessage/TemplateMessageClient.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/TemplateMessage/TemplateMessageClient.ts#L27)
