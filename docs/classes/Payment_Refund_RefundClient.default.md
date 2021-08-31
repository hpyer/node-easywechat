[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Refund/RefundClient](../modules/Payment_Refund_RefundClient.md) / default

# Class: default

[Payment/Refund/RefundClient](../modules/Payment_Refund_RefundClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Refund_RefundClient.default.md#constructor)

### Properties

- [app](Payment_Refund_RefundClient.default.md#app)
- [serverIp](Payment_Refund_RefundClient.default.md#serverip)

### Methods

- [byOutTradeNumber](Payment_Refund_RefundClient.default.md#byouttradenumber)
- [byTransactionId](Payment_Refund_RefundClient.default.md#bytransactionid)
- [doRequest](Payment_Refund_RefundClient.default.md#dorequest)
- [getClientIp](Payment_Refund_RefundClient.default.md#getclientip)
- [getServerIp](Payment_Refund_RefundClient.default.md#getserverip)
- [prepends](Payment_Refund_RefundClient.default.md#prepends)
- [query](Payment_Refund_RefundClient.default.md#query)
- [queryByOutRefundNumber](Payment_Refund_RefundClient.default.md#querybyoutrefundnumber)
- [queryByOutTradeNumber](Payment_Refund_RefundClient.default.md#querybyouttradenumber)
- [queryByRefundId](Payment_Refund_RefundClient.default.md#querybyrefundid)
- [queryByTransactionId](Payment_Refund_RefundClient.default.md#querybytransactionid)
- [refund](Payment_Refund_RefundClient.default.md#refund)
- [request](Payment_Refund_RefundClient.default.md#request)
- [requestRaw](Payment_Refund_RefundClient.default.md#requestraw)
- [safeRequest](Payment_Refund_RefundClient.default.md#saferequest)
- [wrap](Payment_Refund_RefundClient.default.md#wrap)

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

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[app](Payment_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[serverIp](Payment_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L15)

## Methods

### byOutTradeNumber

▸ **byOutTradeNumber**(`number`, `refundNumber`, `totalFee`, `refundFee`, `optional?`): `Promise`<`any`\>

根据商户订单号退款

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `string` | 商户订单号 |
| `refundNumber` | `string` | 商户退款订单号 |
| `totalFee` | `number` | 订单金额 |
| `refundFee` | `number` | 退款金额 |
| `optional` | `object` | 其它参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L17)

___

### byTransactionId

▸ **byTransactionId**(`transactionId`, `refundNumber`, `totalFee`, `refundFee`, `optional?`): `Promise`<`any`\>

根据支付交易号退款

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | 支付交易号 |
| `refundNumber` | `string` | 商户退款订单号 |
| `totalFee` | `number` | 订单金额 |
| `refundFee` | `number` | 退款金额 |
| `optional` | `object` | 其它参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L32)

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

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getClientIp](Payment_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L112)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getServerIp](Payment_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:90](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L90)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L22)

___

### query

▸ `Protected` **query**(`number`, `type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `string` |
| `type` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:89](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L89)

___

### queryByOutRefundNumber

▸ **queryByOutRefundNumber**(`outRefundNumber`): `Promise`<`any`\>

根据商户退款订单号查询退款

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outRefundNumber` | `string` | 商户退款订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:75](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L75)

___

### queryByOutTradeNumber

▸ **queryByOutTradeNumber**(`outTradeNumber`): `Promise`<`any`\>

根据商户订单号查询退款

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outTradeNumber` | `string` | 商户订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:66](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L66)

___

### queryByRefundId

▸ **queryByRefundId**(`refundId`): `Promise`<`any`\>

根据退款交易号查询

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `refundId` | `string` | 退款交易号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:84](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L84)

___

### queryByTransactionId

▸ **queryByTransactionId**(`transactionId`): `Promise`<`any`\>

根据支付交易号查询退款

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | 支付交易号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:57](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L57)

___

### refund

▸ `Protected` **refund**(`refundNumber`, `totalFee`, `refundFee`, `optional?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refundNumber` | `string` |
| `totalFee` | `number` |
| `refundFee` | `number` |
| `optional` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Refund/RefundClient.ts:39](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Refund/RefundClient.ts#L39)

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

[Payment/Core/BaseClient.ts:27](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L27)

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

[Payment/Core/BaseClient.ts:78](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L78)

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

[Payment/Core/BaseClient.ts:67](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L67)

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

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L85)
