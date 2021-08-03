[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Plugin/PluginDevClient](../modules/MiniProgram_Plugin_PluginDevClient.md) / default

# Class: default

[MiniProgram/Plugin/PluginDevClient](../modules/MiniProgram_Plugin_PluginDevClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_Plugin_PluginDevClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_Plugin_PluginDevClient.default.md#accesstoken)
- [app](MiniProgram_Plugin_PluginDevClient.default.md#app)

### Methods

- [agree](MiniProgram_Plugin_PluginDevClient.default.md#agree)
- [delete](MiniProgram_Plugin_PluginDevClient.default.md#delete)
- [doRequest](MiniProgram_Plugin_PluginDevClient.default.md#dorequest)
- [getAccessToken](MiniProgram_Plugin_PluginDevClient.default.md#getaccesstoken)
- [getUsers](MiniProgram_Plugin_PluginDevClient.default.md#getusers)
- [httpGet](MiniProgram_Plugin_PluginDevClient.default.md#httpget)
- [httpPost](MiniProgram_Plugin_PluginDevClient.default.md#httppost)
- [httpPostJson](MiniProgram_Plugin_PluginDevClient.default.md#httppostjson)
- [httpUpload](MiniProgram_Plugin_PluginDevClient.default.md#httpupload)
- [refuse](MiniProgram_Plugin_PluginDevClient.default.md#refuse)
- [request](MiniProgram_Plugin_PluginDevClient.default.md#request)
- [requestRaw](MiniProgram_Plugin_PluginDevClient.default.md#requestraw)
- [setAccessToken](MiniProgram_Plugin_PluginDevClient.default.md#setaccesstoken)

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

### agree

▸ **agree**(`appId`): `Promise`<`any`\>

同意申请

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | 插件appid |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Plugin/PluginDevClient.ts:26](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/Plugin/PluginDevClient.ts#L26)

___

### delete

▸ **delete**(): `Promise`<`any`\>

删除已拒绝的申请者

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Plugin/PluginDevClient.ts:49](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/Plugin/PluginDevClient.ts#L49)

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

### getUsers

▸ **getUsers**(`page?`, `size?`): `Promise`<`any`\>

获取当前所有插件使用方

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `page` | `Number` | `1` | 页码 |
| `size` | `Number` | `10` | 每页记录数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Plugin/PluginDevClient.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/Plugin/PluginDevClient.ts#L13)

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

### refuse

▸ **refuse**(`reason`): `Promise`<`any`\>

拒绝申请

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | `string` | 插件appid |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Plugin/PluginDevClient.ts:38](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/Plugin/PluginDevClient.ts#L38)

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

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_Plugin_PluginDevClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_Plugin_PluginDevClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)
