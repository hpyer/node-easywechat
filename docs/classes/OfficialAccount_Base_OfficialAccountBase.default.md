[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Base/OfficialAccountBase](../modules/OfficialAccount_Base_OfficialAccountBase.md) / default

# Class: default

[OfficialAccount/Base/OfficialAccountBase](../modules/OfficialAccount_Base_OfficialAccountBase.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Base_OfficialAccountBase.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Base_OfficialAccountBase.default.md#accesstoken)
- [app](OfficialAccount_Base_OfficialAccountBase.default.md#app)

### Methods

- [checkCallbackUrl](OfficialAccount_Base_OfficialAccountBase.default.md#checkcallbackurl)
- [clearQuota](OfficialAccount_Base_OfficialAccountBase.default.md#clearquota)
- [doRequest](OfficialAccount_Base_OfficialAccountBase.default.md#dorequest)
- [getAccessToken](OfficialAccount_Base_OfficialAccountBase.default.md#getaccesstoken)
- [getValidIps](OfficialAccount_Base_OfficialAccountBase.default.md#getvalidips)
- [httpGet](OfficialAccount_Base_OfficialAccountBase.default.md#httpget)
- [httpPost](OfficialAccount_Base_OfficialAccountBase.default.md#httppost)
- [httpPostJson](OfficialAccount_Base_OfficialAccountBase.default.md#httppostjson)
- [httpUpload](OfficialAccount_Base_OfficialAccountBase.default.md#httpupload)
- [request](OfficialAccount_Base_OfficialAccountBase.default.md#request)
- [requestRaw](OfficialAccount_Base_OfficialAccountBase.default.md#requestraw)
- [setAccessToken](OfficialAccount_Base_OfficialAccountBase.default.md#setaccesstoken)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L15)

## Methods

### checkCallbackUrl

▸ **checkCallbackUrl**(`action?`, `operator?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | `string` | `'all'` |
| `operator` | `string` | `'DEFAULT'` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Base/OfficialAccountBase.ts:28](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/Base/OfficialAccountBase.ts#L28)

___

### clearQuota

▸ **clearQuota**(): `Promise`<`any`\>

清理接口调用次数
此接口官方有每月调用限制，不可随意调用

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Base/OfficialAccountBase.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/Base/OfficialAccountBase.ts#L13)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L30)

___

### getValidIps

▸ **getValidIps**(): `Promise`<`any`\>

获取微信服务器 IP (或IP段)

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Base/OfficialAccountBase.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/Base/OfficialAccountBase.ts#L23)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Base_OfficialAccountBase.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Base_OfficialAccountBase.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)
