[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Base/OpenPlatformBase](../modules/OpenPlatform_Base_OpenPlatformBase.md) / default

# Class: default

[OpenPlatform/Base/OpenPlatformBase](../modules/OpenPlatform_Base_OpenPlatformBase.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Base_OpenPlatformBase.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Base_OpenPlatformBase.default.md#accesstoken)
- [app](OpenPlatform_Base_OpenPlatformBase.default.md#app)

### Methods

- [clearQuota](OpenPlatform_Base_OpenPlatformBase.default.md#clearquota)
- [createPreAuthorizationCode](OpenPlatform_Base_OpenPlatformBase.default.md#createpreauthorizationcode)
- [doRequest](OpenPlatform_Base_OpenPlatformBase.default.md#dorequest)
- [getAccessToken](OpenPlatform_Base_OpenPlatformBase.default.md#getaccesstoken)
- [getAuthorizer](OpenPlatform_Base_OpenPlatformBase.default.md#getauthorizer)
- [getAuthorizerOption](OpenPlatform_Base_OpenPlatformBase.default.md#getauthorizeroption)
- [getAuthorizers](OpenPlatform_Base_OpenPlatformBase.default.md#getauthorizers)
- [handleAuthorize](OpenPlatform_Base_OpenPlatformBase.default.md#handleauthorize)
- [httpGet](OpenPlatform_Base_OpenPlatformBase.default.md#httpget)
- [httpPost](OpenPlatform_Base_OpenPlatformBase.default.md#httppost)
- [httpPostJson](OpenPlatform_Base_OpenPlatformBase.default.md#httppostjson)
- [httpUpload](OpenPlatform_Base_OpenPlatformBase.default.md#httpupload)
- [request](OpenPlatform_Base_OpenPlatformBase.default.md#request)
- [requestRaw](OpenPlatform_Base_OpenPlatformBase.default.md#requestraw)
- [setAccessToken](OpenPlatform_Base_OpenPlatformBase.default.md#setaccesstoken)
- [setAuthorizerOption](OpenPlatform_Base_OpenPlatformBase.default.md#setauthorizeroption)

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

## Methods

### clearQuota

▸ **clearQuota**(): `Promise`<`any`\>

清零调用次数

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:89](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L89)

___

### createPreAuthorizationCode

▸ **createPreAuthorizationCode**(): `Promise`<`any`\>

获取预授权码

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:79](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L79)

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

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L30)

___

### getAuthorizer

▸ **getAuthorizer**(`appId`): `Promise`<`any`\>

获取授权方的帐号基本信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | 授权方app_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:24](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L24)

___

### getAuthorizerOption

▸ **getAuthorizerOption**(`appId`, `name`): `Promise`<`any`\>

设置授权方的选项信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | 授权方app_id |
| `name` | `string` | 选项名称 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:37](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L37)

___

### getAuthorizers

▸ **getAuthorizers**(`offset?`, `count?`): `Promise`<`any`\>

获取已授权的授权方列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `offset` | `number` | `0` | 起始位置，从0开始 |
| `count` | `number` | `500` | 获取记录数，最大500 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:67](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L67)

___

### handleAuthorize

▸ **handleAuthorize**(`authCode?`): `Promise`<`any`\>

使用授权码换取接口调用凭据和授权信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `authCode` | `string` | `null` | 授权码, 会在授权成功的回调返回给第三方平台 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L12)

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

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Base_OpenPlatformBase.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Base_OpenPlatformBase.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### setAuthorizerOption

▸ **setAuthorizerOption**(`appId`, `name`, `value`): `Promise`<`any`\>

设置授权方的选项信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | 授权方app_id |
| `name` | `string` | 选项名称 |
| `value` | `string` | 选项值 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Base/OpenPlatformBase.ts:52](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OpenPlatform/Base/OpenPlatformBase.ts#L52)
