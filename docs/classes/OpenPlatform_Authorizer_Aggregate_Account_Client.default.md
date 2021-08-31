[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/Aggregate/Account/Client](../modules/OpenPlatform_Authorizer_Aggregate_Account_Client.md) / default

# Class: default

[OpenPlatform/Authorizer/Aggregate/Account/Client](../modules/OpenPlatform_Authorizer_Aggregate_Account_Client.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

  ↳↳ [`default`](OpenPlatform_Authorizer_MiniProgram_Account_AccountClient.default.md)

  ↳↳ [`default`](OpenPlatform_Authorizer_OfficialAccount_Account_Client.default.md)

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#accesstoken)
- [app](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#app)

### Methods

- [bindTo](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#bindto)
- [create](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#create)
- [doRequest](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#dorequest)
- [getAccessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#getaccesstoken)
- [getBinding](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#getbinding)
- [httpGet](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httpget)
- [httpPost](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httppost)
- [httpPostJson](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httppostjson)
- [httpUpload](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#httpupload)
- [request](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#request)
- [requestRaw](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#requestraw)
- [setAccessToken](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#setaccesstoken)
- [unbindFrom](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md#unbindfrom)

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

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L22)

___

### create

▸ **create**(): `Promise`<`any`\>

绑定公众号或小程序

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L11)

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

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L30)

___

### getBinding

▸ **getBinding**(): `Promise`<`any`\>

获取公众号/小程序所绑定的开放平台帐号

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L45)

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

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Authorizer_Aggregate_Account_Client.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

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

#### Defined in

[OpenPlatform/Authorizer/Aggregate/Account/Client.ts:34](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/Aggregate/Account/Client.ts#L34)
