[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Store/StoreClient](../modules/OfficialAccount_Store_StoreClient.md) / default

# Class: default

[OfficialAccount/Store/StoreClient](../modules/OfficialAccount_Store_StoreClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Store_StoreClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Store_StoreClient.default.md#accesstoken)
- [app](OfficialAccount_Store_StoreClient.default.md#app)

### Methods

- [categories](OfficialAccount_Store_StoreClient.default.md#categories)
- [create](OfficialAccount_Store_StoreClient.default.md#create)
- [createFromMap](OfficialAccount_Store_StoreClient.default.md#createfrommap)
- [createMerchant](OfficialAccount_Store_StoreClient.default.md#createmerchant)
- [delete](OfficialAccount_Store_StoreClient.default.md#delete)
- [districts](OfficialAccount_Store_StoreClient.default.md#districts)
- [doRequest](OfficialAccount_Store_StoreClient.default.md#dorequest)
- [get](OfficialAccount_Store_StoreClient.default.md#get)
- [getAccessToken](OfficialAccount_Store_StoreClient.default.md#getaccesstoken)
- [getStatus](OfficialAccount_Store_StoreClient.default.md#getstatus)
- [httpGet](OfficialAccount_Store_StoreClient.default.md#httpget)
- [httpPost](OfficialAccount_Store_StoreClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Store_StoreClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Store_StoreClient.default.md#httpupload)
- [list](OfficialAccount_Store_StoreClient.default.md#list)
- [request](OfficialAccount_Store_StoreClient.default.md#request)
- [requestRaw](OfficialAccount_Store_StoreClient.default.md#requestraw)
- [searchFromMap](OfficialAccount_Store_StoreClient.default.md#searchfrommap)
- [setAccessToken](OfficialAccount_Store_StoreClient.default.md#setaccesstoken)
- [update](OfficialAccount_Store_StoreClient.default.md#update)
- [updateMerchant](OfficialAccount_Store_StoreClient.default.md#updatemerchant)

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

### categories

▸ **categories**(): `Promise`<`any`\>

获取门店小程序类目

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L11)

___

### create

▸ **create**(`info`): `Promise`<`any`\>

添加门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `object` | 详细信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:76](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L76)

___

### createFromMap

▸ **createFromMap**(`info`): `Promise`<`any`\>

在腾讯地图中创建门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `object` | 详细信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:67](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L67)

___

### createMerchant

▸ **createMerchant**(`info`): `Promise`<`any`\>

创建门店小程序

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `object` | 详细信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:49](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L49)

___

### delete

▸ **delete**(`poiId`): `Promise`<`any`\>

删除门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poiId` | `number` | 门店id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:120](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L120)

___

### districts

▸ **districts**(): `Promise`<`any`\>

从腾讯地图拉取省市区信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:19](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L19)

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

### get

▸ **get**(`poiId`): `Promise`<`any`\>

获取单个门店信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poiId` | `number` | 门店id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:96](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L96)

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

### getStatus

▸ **getStatus**(): `Promise`<`any`\>

查询门店小程序审核结果

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:40](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L40)

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

### list

▸ **list**(`offset?`, `limit?`): `Promise`<`any`\>

获取门店信息列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `offset` | `number` | `0` | 初始偏移位置，从0开始计数 |
| `limit` | `number` | `10` | 获取门店个数，默认：10 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:108](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L108)

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

### searchFromMap

▸ **searchFromMap**(`districtId`, `keyword`): `Promise`<`any`\>

在腾讯地图中搜索门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `districtId` | `number` | 省市区信息id |
| `keyword` | `string` | 搜索的关键词 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:29](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L29)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Store_StoreClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Store_StoreClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`poiId`, `info`): `Promise`<`any`\>

更改门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poiId` | `number` | 门店id |
| `info` | `object` | 详细信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:86](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L86)

___

### updateMerchant

▸ **updateMerchant**(`info`): `Promise`<`any`\>

修改门店小程序信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `object` | 详细信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Store/StoreClient.ts:58](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Store/StoreClient.ts#L58)
