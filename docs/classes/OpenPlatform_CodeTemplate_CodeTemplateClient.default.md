[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/CodeTemplate/CodeTemplateClient](../modules/OpenPlatform_CodeTemplate_CodeTemplateClient.md) / default

# Class: default

[OpenPlatform/CodeTemplate/CodeTemplateClient](../modules/OpenPlatform_CodeTemplate_CodeTemplateClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#accesstoken)
- [app](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#app)

### Methods

- [createFromDraft](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#createfromdraft)
- [delete](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#delete)
- [doRequest](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#dorequest)
- [getAccessToken](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#getaccesstoken)
- [getDrafts](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#getdrafts)
- [httpGet](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#httpget)
- [httpPost](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#httppost)
- [httpPostJson](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#httppostjson)
- [httpUpload](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#httpupload)
- [list](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#list)
- [request](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#request)
- [requestRaw](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#requestraw)
- [setAccessToken](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md#setaccesstoken)

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

## Methods

### createFromDraft

▸ **createFromDraft**(`draftId`, `templateType?`): `Promise`<`any`\>

将草稿添加到代码模板库

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `draftId` | `number` | `undefined` | 草稿 ID |
| `templateType` | `number` | `0` | 默认值是0，对应普通模板；可选1，对应标准模板库 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/CodeTemplate/CodeTemplateClient.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/CodeTemplate/CodeTemplateClient.ts#L21)

___

### delete

▸ **delete**(`templateId`): `Promise`<`any`\>

删除指定代码模板

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | 模板 ID |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/CodeTemplate/CodeTemplateClient.ts:48](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/CodeTemplate/CodeTemplateClient.ts#L48)

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

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

___

### getDrafts

▸ **getDrafts**(): `Promise`<`any`\>

获取代码草稿列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/CodeTemplate/CodeTemplateClient.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/CodeTemplate/CodeTemplateClient.ts#L11)

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

### list

▸ **list**(`templateType?`): `Promise`<`any`\>

获取代码模板列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `templateType` | `number` | `null` | 默认值是0，对应普通模板；可选1，对应标准模板库 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/CodeTemplate/CodeTemplateClient.ts:33](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OpenPlatform/CodeTemplate/CodeTemplateClient.ts#L33)

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

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_CodeTemplate_CodeTemplateClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)
