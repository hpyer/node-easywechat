[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/ShakeAround/PageClient](../modules/OfficialAccount_ShakeAround_PageClient.md) / default

# Class: default

[OfficialAccount/ShakeAround/PageClient](../modules/OfficialAccount_ShakeAround_PageClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_ShakeAround_PageClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_ShakeAround_PageClient.default.md#accesstoken)
- [app](OfficialAccount_ShakeAround_PageClient.default.md#app)

### Methods

- [create](OfficialAccount_ShakeAround_PageClient.default.md#create)
- [delete](OfficialAccount_ShakeAround_PageClient.default.md#delete)
- [doRequest](OfficialAccount_ShakeAround_PageClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_ShakeAround_PageClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_ShakeAround_PageClient.default.md#httpget)
- [httpPost](OfficialAccount_ShakeAround_PageClient.default.md#httppost)
- [httpPostJson](OfficialAccount_ShakeAround_PageClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_ShakeAround_PageClient.default.md#httpupload)
- [list](OfficialAccount_ShakeAround_PageClient.default.md#list)
- [listByIds](OfficialAccount_ShakeAround_PageClient.default.md#listbyids)
- [request](OfficialAccount_ShakeAround_PageClient.default.md#request)
- [requestRaw](OfficialAccount_ShakeAround_PageClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_ShakeAround_PageClient.default.md#setaccesstoken)
- [update](OfficialAccount_ShakeAround_PageClient.default.md#update)

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

### create

▸ **create**(`data`): `Promise`<`any`\>

新增页面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 页面信息。子参数：title，标题；description，副标题；icon_url，图片url；comment：备注 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/PageClient.ts:12](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/PageClient.ts#L12)

___

### delete

▸ **delete**(`pageId`): `Promise`<`any`\>

删除页面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageId` | `number` | 页面id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/PageClient.ts:58](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/PageClient.ts#L58)

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

▸ **list**(`begin`, `count`): `Promise`<`any`\>

分页批量取回页面数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin` | `number` | 页面列表的起始索引值 |
| `count` | `number` | 待查询的页面数量，不能超过50个 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/PageClient.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/PageClient.ts#L45)

___

### listByIds

▸ **listByIds**(`pageIds`): `Promise`<`any`\>

根据页面id批量取回页面数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageIds` | `number`[] | 页面的id列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/PageClient.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/PageClient.ts#L32)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_ShakeAround_PageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_ShakeAround_PageClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`pageId`, `data`): `Promise`<`any`\>

编辑页面信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageId` | `number` | 页面id |
| `data` | `object` | 页面信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/PageClient.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/PageClient.ts#L22)
