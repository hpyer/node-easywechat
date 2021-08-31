[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/ProfitSharing/ProfitSharingClient](../modules/Payment_ProfitSharing_ProfitSharingClient.md) / default

# Class: default

[Payment/ProfitSharing/ProfitSharingClient](../modules/Payment_ProfitSharing_ProfitSharingClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_ProfitSharing_ProfitSharingClient.default.md#constructor)

### Properties

- [app](Payment_ProfitSharing_ProfitSharingClient.default.md#app)
- [serverIp](Payment_ProfitSharing_ProfitSharingClient.default.md#serverip)

### Methods

- [addReceiver](Payment_ProfitSharing_ProfitSharingClient.default.md#addreceiver)
- [deleteReceiver](Payment_ProfitSharing_ProfitSharingClient.default.md#deletereceiver)
- [doRequest](Payment_ProfitSharing_ProfitSharingClient.default.md#dorequest)
- [getClientIp](Payment_ProfitSharing_ProfitSharingClient.default.md#getclientip)
- [getServerIp](Payment_ProfitSharing_ProfitSharingClient.default.md#getserverip)
- [markOrderAsFinished](Payment_ProfitSharing_ProfitSharingClient.default.md#markorderasfinished)
- [multiShare](Payment_ProfitSharing_ProfitSharingClient.default.md#multishare)
- [prepends](Payment_ProfitSharing_ProfitSharingClient.default.md#prepends)
- [query](Payment_ProfitSharing_ProfitSharingClient.default.md#query)
- [request](Payment_ProfitSharing_ProfitSharingClient.default.md#request)
- [requestRaw](Payment_ProfitSharing_ProfitSharingClient.default.md#requestraw)
- [safeRequest](Payment_ProfitSharing_ProfitSharingClient.default.md#saferequest)
- [share](Payment_ProfitSharing_ProfitSharingClient.default.md#share)
- [wrap](Payment_ProfitSharing_ProfitSharingClient.default.md#wrap)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[constructor](Payment_Core_BaseClient.default.md#constructor)

#### Defined in

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[app](Payment_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[serverIp](Payment_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L15)

## Methods

### addReceiver

▸ **addReceiver**(`receiver`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L15)

___

### deleteReceiver

▸ **deleteReceiver**(`receiver`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:25](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L25)

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

[default](Payment_Core_BaseClient.default.md).[doRequest](Payment_Core_BaseClient.default.md#dorequest)

#### Defined in

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getClientIp](Payment_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L112)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getServerIp](Payment_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:90](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L90)

___

### markOrderAsFinished

▸ **markOrderAsFinished**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:59](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L59)

___

### multiShare

▸ **multiShare**(`transactionId`, `outOrderNo`, `receivers`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |
| `outOrderNo` | `string` |
| `receivers` | `object`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:47](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L47)

___

### prepends

▸ `Protected` **prepends**(): `object`

#### Returns

`object`

#### Overrides

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:8](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L8)

___

### query

▸ **query**(`transactionId`, `outOrderNo`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |
| `outOrderNo` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:67](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L67)

___

### request

▸ `Protected` **request**(`endpoint`, `params?`, `method?`, `options?`, `returnResponse?`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |
| `returnResponse` | `boolean` | `false` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[request](Payment_Core_BaseClient.default.md#request)

#### Defined in

[Payment/Core/BaseClient.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L27)

___

### requestRaw

▸ `Protected` **requestRaw**(`endpoint`, `params?`, `method?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[requestRaw](Payment_Core_BaseClient.default.md#requestraw)

#### Defined in

[Payment/Core/BaseClient.ts:78](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L78)

___

### safeRequest

▸ `Protected` **safeRequest**(`endpoint`, `params?`, `method?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `params` | `object` | `{}` |
| `method` | `string` | `'post'` |
| `options` | `AxiosRequestConfig` | `{}` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[safeRequest](Payment_Core_BaseClient.default.md#saferequest)

#### Defined in

[Payment/Core/BaseClient.ts:67](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L67)

___

### share

▸ **share**(`transactionId`, `outOrderNo`, `receivers`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |
| `outOrderNo` | `string` |
| `receivers` | `object`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/ProfitSharing/ProfitSharingClient.ts:35](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/ProfitSharing/ProfitSharingClient.ts#L35)

___

### wrap

▸ `Protected` **wrap**(`endpoint`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[wrap](Payment_Core_BaseClient.default.md#wrap)

#### Defined in

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L85)
