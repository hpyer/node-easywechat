[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient](../modules/OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.md) / default

# Class: default

[OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient](../modules/OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#accesstoken)
- [app](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#app)

### Methods

- [bind](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#bind)
- [doRequest](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#dorequest)
- [getAccessToken](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#getaccesstoken)
- [httpGet](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#httpget)
- [httpPost](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#httppost)
- [httpPostJson](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#httppostjson)
- [httpUpload](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#httpupload)
- [list](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#list)
- [request](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#request)
- [requestRaw](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#requestraw)
- [setAccessToken](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#setaccesstoken)
- [unbind](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md#unbind)

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

### bind

▸ **bind**(`wechatId`): `Promise`<`any`\>

绑定微信用户为体验者

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wechatId` | `string` | 体验者微信号（非openid或昵称） |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts:12](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts#L12)

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

### list

▸ **list**(): `Promise`<`any`\>

获取体验者列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts:33](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts#L33)

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

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Authorizer_MiniProgram_Tester_TesterClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### unbind

▸ **unbind**(`wechatId`): `Promise`<`any`\>

解除绑定体验者

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wechatId` | `string` | 体验者微信号（非openid或昵称） |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Tester/TesterClient.ts#L23)
