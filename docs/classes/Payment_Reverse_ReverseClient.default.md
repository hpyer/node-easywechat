[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Reverse/ReverseClient](../modules/Payment_Reverse_ReverseClient.md) / default

# Class: default

[Payment/Reverse/ReverseClient](../modules/Payment_Reverse_ReverseClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Reverse_ReverseClient.default.md#constructor)

### Properties

- [app](Payment_Reverse_ReverseClient.default.md#app)
- [serverIp](Payment_Reverse_ReverseClient.default.md#serverip)

### Methods

- [byOutTradeNumber](Payment_Reverse_ReverseClient.default.md#byouttradenumber)
- [byTransactionId](Payment_Reverse_ReverseClient.default.md#bytransactionid)
- [doRequest](Payment_Reverse_ReverseClient.default.md#dorequest)
- [getClientIp](Payment_Reverse_ReverseClient.default.md#getclientip)
- [getServerIp](Payment_Reverse_ReverseClient.default.md#getserverip)
- [prepends](Payment_Reverse_ReverseClient.default.md#prepends)
- [request](Payment_Reverse_ReverseClient.default.md#request)
- [requestRaw](Payment_Reverse_ReverseClient.default.md#requestraw)
- [reverse](Payment_Reverse_ReverseClient.default.md#reverse)
- [safeRequest](Payment_Reverse_ReverseClient.default.md#saferequest)
- [wrap](Payment_Reverse_ReverseClient.default.md#wrap)

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

### byOutTradeNumber

▸ **byOutTradeNumber**(`outTradeNumber`): `Promise`<`any`\>

通过商户订单号撤销订单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outTradeNumber` | `string` | 商户订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Reverse/ReverseClient.ts:12](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Reverse/ReverseClient.ts#L12)

___

### byTransactionId

▸ **byTransactionId**(`transactionId`): `Promise`<`any`\>

通过支付交易号撤销订单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | 支付交易号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Reverse/ReverseClient.ts:21](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Reverse/ReverseClient.ts#L21)

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

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L22)

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

### reverse

▸ `Protected` **reverse**(`number`, `type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` |
| `type` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Reverse/ReverseClient.ts:26](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Reverse/ReverseClient.ts#L26)

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
