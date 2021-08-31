[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Union/UnionClient](../modules/MiniProgram_Union_UnionClient.md) / default

# Class: default

[MiniProgram/Union/UnionClient](../modules/MiniProgram_Union_UnionClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_Union_UnionClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_Union_UnionClient.default.md#accesstoken)
- [app](MiniProgram_Union_UnionClient.default.md#app)

### Methods

- [createPromotion](MiniProgram_Union_UnionClient.default.md#createpromotion)
- [deletePromotion](MiniProgram_Union_UnionClient.default.md#deletepromotion)
- [doRequest](MiniProgram_Union_UnionClient.default.md#dorequest)
- [getAccessToken](MiniProgram_Union_UnionClient.default.md#getaccesstoken)
- [getFeaturedProducts](MiniProgram_Union_UnionClient.default.md#getfeaturedproducts)
- [getOrderInfo](MiniProgram_Union_UnionClient.default.md#getorderinfo)
- [getProductCategory](MiniProgram_Union_UnionClient.default.md#getproductcategory)
- [getProductList](MiniProgram_Union_UnionClient.default.md#getproductlist)
- [getProductMaterial](MiniProgram_Union_UnionClient.default.md#getproductmaterial)
- [getPromotionSourceList](MiniProgram_Union_UnionClient.default.md#getpromotionsourcelist)
- [httpGet](MiniProgram_Union_UnionClient.default.md#httpget)
- [httpPost](MiniProgram_Union_UnionClient.default.md#httppost)
- [httpPostJson](MiniProgram_Union_UnionClient.default.md#httppostjson)
- [httpUpload](MiniProgram_Union_UnionClient.default.md#httpupload)
- [request](MiniProgram_Union_UnionClient.default.md#request)
- [requestRaw](MiniProgram_Union_UnionClient.default.md#requestraw)
- [searchOrder](MiniProgram_Union_UnionClient.default.md#searchorder)
- [setAccessToken](MiniProgram_Union_UnionClient.default.md#setaccesstoken)
- [updatePromotion](MiniProgram_Union_UnionClient.default.md#updatepromotion)

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

### createPromotion

▸ **createPromotion**(`promotionSourceName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promotionSourceName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L7)

___

### deletePromotion

▸ **deletePromotion**(`promotionSourcePid`, `promotionSourceName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promotionSourcePid` | `string` |
| `promotionSourceName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L13)

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

### getFeaturedProducts

▸ **getFeaturedProducts**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L64)

___

### getOrderInfo

▸ **getOrderInfo**(`orderIdList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderIdList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:49](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L49)

___

### getProductCategory

▸ **getProductCategory**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:34](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L34)

___

### getProductList

▸ **getProductList**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:38](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L38)

___

### getProductMaterial

▸ **getProductMaterial**(`pid`, `productList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `string` |
| `productList` | `object`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:42](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L42)

___

### getPromotionSourceList

▸ **getPromotionSourceList**(`start?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `limit` | `number` | `20` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:27](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L27)

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

### searchOrder

▸ **searchOrder**(`page?`, `startTimestamp?`, `endTimestamp?`, `commissionStatus?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `page` | `number` | `1` |
| `startTimestamp` | `string` | `''` |
| `endTimestamp` | `string` | `''` |
| `commissionStatus` | `string` | `''` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:55](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L55)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_Union_UnionClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_Union_UnionClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### updatePromotion

▸ **updatePromotion**(`previousPromotionInfo`, `promotionInfo`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `previousPromotionInfo` | `object` |
| `promotionInfo` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Union/UnionClient.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MiniProgram/Union/UnionClient.ts#L20)
