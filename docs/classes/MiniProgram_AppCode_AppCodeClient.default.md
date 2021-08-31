[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/AppCode/AppCodeClient](../modules/MiniProgram_AppCode_AppCodeClient.md) / default

# Class: default

[MiniProgram/AppCode/AppCodeClient](../modules/MiniProgram_AppCode_AppCodeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_AppCode_AppCodeClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_AppCode_AppCodeClient.default.md#accesstoken)
- [app](MiniProgram_AppCode_AppCodeClient.default.md#app)

### Methods

- [doRequest](MiniProgram_AppCode_AppCodeClient.default.md#dorequest)
- [get](MiniProgram_AppCode_AppCodeClient.default.md#get)
- [getAccessToken](MiniProgram_AppCode_AppCodeClient.default.md#getaccesstoken)
- [getQrCode](MiniProgram_AppCode_AppCodeClient.default.md#getqrcode)
- [getStream](MiniProgram_AppCode_AppCodeClient.default.md#getstream)
- [getUnlimit](MiniProgram_AppCode_AppCodeClient.default.md#getunlimit)
- [httpGet](MiniProgram_AppCode_AppCodeClient.default.md#httpget)
- [httpPost](MiniProgram_AppCode_AppCodeClient.default.md#httppost)
- [httpPostJson](MiniProgram_AppCode_AppCodeClient.default.md#httppostjson)
- [httpUpload](MiniProgram_AppCode_AppCodeClient.default.md#httpupload)
- [request](MiniProgram_AppCode_AppCodeClient.default.md#request)
- [requestRaw](MiniProgram_AppCode_AppCodeClient.default.md#requestraw)
- [setAccessToken](MiniProgram_AppCode_AppCodeClient.default.md#setaccesstoken)

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

### get

▸ **get**(`path`, `optional?`): `Promise`<`any`\>

获取小程序码（临时）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 页面路径 |
| `optional` | `object` | 参数。width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0} |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/AppCode/AppCodeClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/AppCode/AppCodeClient.ts#L15)

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

### getQrCode

▸ **getQrCode**(`path`, `width?`): `Promise`<`any`\>

获取小程序二维码（永久）

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `undefined` | 页面路径 |
| `width` | `Number` | `null` | 二维码的宽度，默认430 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/AppCode/AppCodeClient.ts:41](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/AppCode/AppCodeClient.ts#L41)

___

### getStream

▸ `Protected` **getStream**(`api`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/AppCode/AppCodeClient.ts:49](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/AppCode/AppCodeClient.ts#L49)

___

### getUnlimit

▸ **getUnlimit**(`scene`, `optional?`): `Promise`<`any`\>

获取小程序码（永久）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | `string` | 标识 |
| `optional` | `object` | 参数。path：页面路径，不能带参数；width：小程序码的宽度，默认430；auto_color：自动配置线条颜色，默认false；line_color：rgb颜色值，auto_color为false有效，示例{r:0,g:0,b:0} |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/AppCode/AppCodeClient.ts:28](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/AppCode/AppCodeClient.ts#L28)

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

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_AppCode_AppCodeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_AppCode_AppCodeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)
