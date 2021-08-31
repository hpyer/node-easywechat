[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/MiniProgram/Account/AccountClient](../modules/OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.md) / default

# Class: default

[OpenPlatform/Authorizer/MiniProgram/Account/AccountClient](../modules/OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.md).default

## Hierarchy

- [`default`](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#accesstoken)
- [app](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#app)

### Methods

- [bindTo](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#bindto)
- [create](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#create)
- [doRequest](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#dorequest)
- [getAccessToken](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#getaccesstoken)
- [getBasicInfo](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#getbasicinfo)
- [getBinding](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#getbinding)
- [httpGet](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#httpget)
- [httpPost](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#httppost)
- [httpPostJson](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#httppostjson)
- [httpUpload](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#httpupload)
- [request](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#request)
- [requestRaw](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#requestraw)
- [setAccessToken](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#setaccesstoken)
- [unbindFrom](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#unbindfrom)
- [updateAvatar](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#updateavatar)
- [updateSignature](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md#updatesignature)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[constructor](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[accessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[app](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L15)

## Methods

### bindTo

▸ **bindTo**(`openAppId`): `Promise`<`any`\>

将公众号或小程序绑定到指定开放平台帐号下

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openAppId` | `string` | 开放平台app_id |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[bindTo](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#bindto)

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L22)

___

### create

▸ **create**(): `Promise`<`any`\>

绑定公众号或小程序

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[create](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#create)

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L11)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[doRequest](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[getAccessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L30)

___

### getBasicInfo

▸ **getBasicInfo**(): `Promise`<`any`\>

获取基本信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts#L11)

___

### getBinding

▸ **getBinding**(): `Promise`<`any`\>

获取公众号/小程序所绑定的开放平台帐号

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[getBinding](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#getbinding)

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:45](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L45)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[httpGet](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httpget)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[httpPost](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httppost)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[httpPostJson](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httppostjson)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[httpUpload](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httpupload)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[request](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#request)

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

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[requestRaw](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md)

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[setAccessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)

___

### unbindFrom

▸ **unbindFrom**(`openAppId`): `Promise`<`any`\>

将公众号/小程序从开放平台帐号下解绑

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openAppId` | `string` | 开放平台app_id |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md).[unbindFrom](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#unbindfrom)

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:34](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L34)

___

### updateAvatar

▸ **updateAvatar**(`mediaId`, `left?`, `top?`, `right?`, `bottom?`): `Promise`<`any`\>

修改头像

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` | 头像素材 media_id |
| `left` | `number` | `0` | 裁剪框左上角 x 坐标（取值范围：[0, 1]） |
| `top` | `number` | `0` | 裁剪框左上角 y 坐标（取值范围：[0, 1]） |
| `right` | `number` | `0` | 裁剪框右下角 x 坐标（取值范围：[0, 1]） |
| `bottom` | `number` | `0` | 裁剪框右下角 y 坐标（取值范围：[0, 1]） |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts:24](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts#L24)

___

### updateSignature

▸ **updateSignature**(`signature`): `Promise`<`any`\>

修改功能介绍

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | `string` | 功能介绍（简介） |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts:40](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OpenPlatform/Authorizer/MiniProgram/Account/AccountClient.ts#L40)
