[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/OpenData/OpenDataClient](../modules/MiniProgram_OpenData_OpenDataClient.md) / default

# Class: default

[MiniProgram/OpenData/OpenDataClient](../modules/MiniProgram_OpenData_OpenDataClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_OpenData_OpenDataClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_OpenData_OpenDataClient.default.md#accesstoken)
- [app](MiniProgram_OpenData_OpenDataClient.default.md#app)
- [baseUrl](MiniProgram_OpenData_OpenDataClient.default.md#baseurl)

### Methods

- [doRequest](MiniProgram_OpenData_OpenDataClient.default.md#dorequest)
- [formatKVLists](MiniProgram_OpenData_OpenDataClient.default.md#formatkvlists)
- [getAccessToken](MiniProgram_OpenData_OpenDataClient.default.md#getaccesstoken)
- [httpGet](MiniProgram_OpenData_OpenDataClient.default.md#httpget)
- [httpPost](MiniProgram_OpenData_OpenDataClient.default.md#httppost)
- [httpPostJson](MiniProgram_OpenData_OpenDataClient.default.md#httppostjson)
- [httpUpload](MiniProgram_OpenData_OpenDataClient.default.md#httpupload)
- [removeUserStorage](MiniProgram_OpenData_OpenDataClient.default.md#removeuserstorage)
- [request](MiniProgram_OpenData_OpenDataClient.default.md#request)
- [requestRaw](MiniProgram_OpenData_OpenDataClient.default.md#requestraw)
- [setAccessToken](MiniProgram_OpenData_OpenDataClient.default.md#setaccesstoken)
- [setUserStorage](MiniProgram_OpenData_OpenDataClient.default.md#setuserstorage)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

___

### baseUrl

• `Protected` **baseUrl**: `string` = `'https://api.weixin.qq.com/wxa/'`

#### Defined in

[MiniProgram/OpenData/OpenDataClient.ts:8](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/OpenData/OpenDataClient.ts#L8)

## Methods

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### formatKVLists

▸ `Protected` **formatKVLists**(`params`): `object`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`object`[]

#### Defined in

[MiniProgram/OpenData/OpenDataClient.ts:36](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/OpenData/OpenDataClient.ts#L36)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L30)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L51)

___

### removeUserStorage

▸ **removeUserStorage**(`openid`, `sessionKey`, `key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `sessionKey` | `string` |
| `key` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/OpenData/OpenDataClient.ts:10](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/OpenData/OpenDataClient.ts#L10)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_OpenData_OpenDataClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_OpenData_OpenDataClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### setUserStorage

▸ **setUserStorage**(`openid`, `sessionKey`, `kvList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `sessionKey` | `string` |
| `kvList` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/OpenData/OpenDataClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/OpenData/OpenDataClient.ts#L23)
