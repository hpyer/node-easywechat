[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Order/OrderClient](../modules/Payment_Order_OrderClient.md) / default

# Class: default

[Payment/Order/OrderClient](../modules/Payment_Order_OrderClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Order_OrderClient.default.md#constructor)

### Properties

- [app](Payment_Order_OrderClient.default.md#app)
- [serverIp](Payment_Order_OrderClient.default.md#serverip)

### Methods

- [close](Payment_Order_OrderClient.default.md#close)
- [doRequest](Payment_Order_OrderClient.default.md#dorequest)
- [getClientIp](Payment_Order_OrderClient.default.md#getclientip)
- [getServerIp](Payment_Order_OrderClient.default.md#getserverip)
- [prepends](Payment_Order_OrderClient.default.md#prepends)
- [query](Payment_Order_OrderClient.default.md#query)
- [queryByOutTradeNumber](Payment_Order_OrderClient.default.md#querybyouttradenumber)
- [queryByTransactionId](Payment_Order_OrderClient.default.md#querybytransactionid)
- [request](Payment_Order_OrderClient.default.md#request)
- [requestRaw](Payment_Order_OrderClient.default.md#requestraw)
- [safeRequest](Payment_Order_OrderClient.default.md#saferequest)
- [unify](Payment_Order_OrderClient.default.md#unify)
- [wrap](Payment_Order_OrderClient.default.md#wrap)

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

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[app](Payment_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[serverIp](Payment_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L15)

## Methods

### close

▸ **close**(`tradeNo`): `Promise`<`any`\>

关闭订单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradeNo` | `string` | 商户订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Order/OrderClient.ts:70](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Order/OrderClient.ts#L70)

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

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getClientIp](Payment_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L112)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getServerIp](Payment_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:90](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L90)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L22)

___

### query

▸ `Protected` **query**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Order/OrderClient.ts:59](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Order/OrderClient.ts#L59)

___

### queryByOutTradeNumber

▸ **queryByOutTradeNumber**(`out_trade_no`): `Promise`<`any`\>

根据商户订单号查询

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out_trade_no` | `string` | 商户订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Order/OrderClient.ts:39](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Order/OrderClient.ts#L39)

___

### queryByTransactionId

▸ **queryByTransactionId**(`transaction_id`): `Promise`<`any`\>

根据交易号查询

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction_id` | `string` | 交易号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Order/OrderClient.ts:51](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Order/OrderClient.ts#L51)

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

[Payment/Core/BaseClient.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L27)

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

[Payment/Core/BaseClient.ts:78](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L78)

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

[Payment/Core/BaseClient.ts:67](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L67)

___

### unify

▸ **unify**(`params`, `isContract?`): `Promise`<`any`\>

统一下单

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `object` | `undefined` | 订单信息 |
| `isContract` | `Boolean` | `false` | 是否支付中签约，默认 false |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Order/OrderClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Order/OrderClient.ts#L14)

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

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/b017670/src/Payment/Core/BaseClient.ts#L85)
