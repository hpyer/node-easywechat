[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Card/CoinClient](../modules/OfficialAccount_Card_CoinClient.md) / default

# Class: default

[OfficialAccount/Card/CoinClient](../modules/OfficialAccount_Card_CoinClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Card_CoinClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Card_CoinClient.default.md#accesstoken)
- [app](OfficialAccount_Card_CoinClient.default.md#app)

### Methods

- [activate](OfficialAccount_Card_CoinClient.default.md#activate)
- [confirm](OfficialAccount_Card_CoinClient.default.md#confirm)
- [doRequest](OfficialAccount_Card_CoinClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_Card_CoinClient.default.md#getaccesstoken)
- [getPrice](OfficialAccount_Card_CoinClient.default.md#getprice)
- [httpGet](OfficialAccount_Card_CoinClient.default.md#httpget)
- [httpPost](OfficialAccount_Card_CoinClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Card_CoinClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Card_CoinClient.default.md#httpupload)
- [order](OfficialAccount_Card_CoinClient.default.md#order)
- [orders](OfficialAccount_Card_CoinClient.default.md#orders)
- [recharge](OfficialAccount_Card_CoinClient.default.md#recharge)
- [request](OfficialAccount_Card_CoinClient.default.md#request)
- [requestRaw](OfficialAccount_Card_CoinClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Card_CoinClient.default.md#setaccesstoken)
- [summary](OfficialAccount_Card_CoinClient.default.md#summary)

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

### activate

▸ **activate**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L8)

___

### confirm

▸ **confirm**(`cardId?`, `orderId`, `quantity`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cardId` | `string` | `''` |
| `orderId` | `string` | `undefined` |
| `quantity` | `number` | `undefined` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:45](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L45)

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

### getPrice

▸ **getPrice**(`cardId?`, `quantity`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cardId` | `string` | `''` |
| `quantity` | `number` | `undefined` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L18)

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

### order

▸ **order**(`orderId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:33](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L33)

___

### orders

▸ **orders**(`filters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:40](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L40)

___

### recharge

▸ **recharge**(`count`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:26](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L26)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Card_CoinClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Card_CoinClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### summary

▸ **summary**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CoinClient.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Card/CoinClient.ts#L13)
