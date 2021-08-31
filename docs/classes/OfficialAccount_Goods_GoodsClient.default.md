[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Goods/GoodsClient](../modules/OfficialAccount_Goods_GoodsClient.md) / default

# Class: default

[OfficialAccount/Goods/GoodsClient](../modules/OfficialAccount_Goods_GoodsClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Goods_GoodsClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Goods_GoodsClient.default.md#accesstoken)
- [app](OfficialAccount_Goods_GoodsClient.default.md#app)

### Methods

- [add](OfficialAccount_Goods_GoodsClient.default.md#add)
- [doRequest](OfficialAccount_Goods_GoodsClient.default.md#dorequest)
- [get](OfficialAccount_Goods_GoodsClient.default.md#get)
- [getAccessToken](OfficialAccount_Goods_GoodsClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Goods_GoodsClient.default.md#httpget)
- [httpPost](OfficialAccount_Goods_GoodsClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Goods_GoodsClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Goods_GoodsClient.default.md#httpupload)
- [list](OfficialAccount_Goods_GoodsClient.default.md#list)
- [request](OfficialAccount_Goods_GoodsClient.default.md#request)
- [requestRaw](OfficialAccount_Goods_GoodsClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Goods_GoodsClient.default.md#setaccesstoken)
- [status](OfficialAccount_Goods_GoodsClient.default.md#status)
- [update](OfficialAccount_Goods_GoodsClient.default.md#update)

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

### add

▸ **add**(`product`): `Promise`<`any`\>

批量导入商品

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `product` | `object`[] | 商品信息列表，每次最多1000条 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Goods/GoodsClient.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Goods/GoodsClient.ts#L11)

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

▸ **get**(`pid`): `Promise`<`any`\>

获取单个商品信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid` | `string` | 商品id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Goods/GoodsClient.ts:44](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Goods/GoodsClient.ts#L44)

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

▸ **list**(`context?`, `page?`, `size?`): `Promise`<`any`\>

分页获取商品信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `context` | `string` | `''` | page 为 1 时传空即可。当 page 大于 1 时必填，填入上一次访问本接口返回的 page_context |
| `page` | `number` | `1` | 页码 |
| `size` | `number` | `10` | 每页数据大小，目前限制为100以内，默认：10 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Goods/GoodsClient.ts:59](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Goods/GoodsClient.ts#L59)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Goods_GoodsClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Goods_GoodsClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(`status_ticket`): `Promise`<`any`\>

查询导入/更新商品状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status_ticket` | `string` | 从add或update方法返回 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Goods/GoodsClient.ts:33](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Goods/GoodsClient.ts#L33)

___

### update

▸ **update**(`product`): `Promise`<`any`\>

批量更新商品

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `product` | `object`[] | 商品信息列表，每次最多1000条 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Goods/GoodsClient.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Goods/GoodsClient.ts#L22)
