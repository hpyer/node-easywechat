[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Card/SubMerchantClient](../modules/OfficialAccount_Card_SubMerchantClient.md) / default

# Class: default

[OfficialAccount/Card/SubMerchantClient](../modules/OfficialAccount_Card_SubMerchantClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Card_SubMerchantClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Card_SubMerchantClient.default.md#accesstoken)
- [app](OfficialAccount_Card_SubMerchantClient.default.md#app)

### Methods

- [create](OfficialAccount_Card_SubMerchantClient.default.md#create)
- [doRequest](OfficialAccount_Card_SubMerchantClient.default.md#dorequest)
- [get](OfficialAccount_Card_SubMerchantClient.default.md#get)
- [getAccessToken](OfficialAccount_Card_SubMerchantClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Card_SubMerchantClient.default.md#httpget)
- [httpPost](OfficialAccount_Card_SubMerchantClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Card_SubMerchantClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Card_SubMerchantClient.default.md#httpupload)
- [list](OfficialAccount_Card_SubMerchantClient.default.md#list)
- [request](OfficialAccount_Card_SubMerchantClient.default.md#request)
- [requestRaw](OfficialAccount_Card_SubMerchantClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Card_SubMerchantClient.default.md#setaccesstoken)
- [update](OfficialAccount_Card_SubMerchantClient.default.md#update)

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

### create

▸ **create**(`info`): `Promise`<`any`\>

添加子商户

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `object` | 商户信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/SubMerchantClient.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Card/SubMerchantClient.ts#L12)

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

▸ **get**(`merchantId`): `Promise`<`any`\>

获取子商户信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `merchantId` | `number` | 子商户id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/SubMerchantClient.ts:60](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Card/SubMerchantClient.ts#L60)

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

▸ **list**(`beginId?`, `limit?`, `status?`): `Promise`<`any`\>

获取子商户列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `beginId` | `number` | `0` | 起始的子商户id，一个母商户公众号下唯一，默认：0 |
| `limit` | `number` | `50` | 拉取的子商户的个数，最大值为100，默认：50 |
| `status` | `string` | `'CHECKING'` | 子商户审核状态。默认：CHECKING |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/SubMerchantClient.ts:73](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Card/SubMerchantClient.ts#L73)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Card_SubMerchantClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Card_SubMerchantClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`merchantId`, `info`): `Promise`<`any`\>

更新子商户

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `merchantId` | `number` | 商户id |
| `info` | `object` | 商户信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/SubMerchantClient.ts:36](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Card/SubMerchantClient.ts#L36)
