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
- [parseXml](Payment_Order_OrderClient.default.md#parsexml)
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

[Payment/Core/BaseClient.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L18)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[app](Payment_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L14)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[serverIp](Payment_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L16)

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

[Payment/Order/OrderClient.ts:70](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Order/OrderClient.ts#L70)

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

[Payment/Core/BaseClient.ts:136](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L136)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getClientIp](Payment_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:129](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L129)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[getServerIp](Payment_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:107](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L107)

___

### parseXml

▸ **parseXml**(`xml`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[parseXml](Payment_Core_BaseClient.default.md#parsexml)

#### Defined in

[Payment/Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L76)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](Payment_Core_BaseClient.default.md).[prepends](Payment_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L23)

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

[Payment/Order/OrderClient.ts:59](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Order/OrderClient.ts#L59)

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

[Payment/Order/OrderClient.ts:39](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Order/OrderClient.ts#L39)

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

[Payment/Order/OrderClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Order/OrderClient.ts#L51)

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

[Payment/Core/BaseClient.ts:28](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L28)

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

[Payment/Core/BaseClient.ts:95](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L95)

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

[Payment/Core/BaseClient.ts:84](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L84)

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

[Payment/Order/OrderClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Order/OrderClient.ts#L14)

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

[Payment/Core/BaseClient.ts:102](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Core/BaseClient.ts#L102)
