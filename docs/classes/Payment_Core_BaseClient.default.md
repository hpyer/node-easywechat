[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Core/BaseClient](../modules/Payment_Core_BaseClient.md) / default

# Class: default

[Payment/Core/BaseClient](../modules/Payment_Core_BaseClient.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](MicroMerchant_Core_BaseClient.default.md)

  ↳ [`default`](Payment_Base_PaymentBase.default.md)

  ↳ [`default`](Payment_Bill_BillClient.default.md)

  ↳ [`default`](Payment_Coupon_CouponClient.default.md)

  ↳ [`default`](Payment_Merchant_MerchantClient.default.md)

  ↳ [`default`](Payment_Order_OrderClient.default.md)

  ↳ [`default`](Payment_ProfitSharing_ProfitSharingClient.default.md)

  ↳ [`default`](Payment_Redpack_RedpackClient.default.md)

  ↳ [`default`](Payment_Refund_RefundClient.default.md)

  ↳ [`default`](Payment_Reverse_ReverseClient.default.md)

  ↳ [`default`](Payment_Sandbox_SandboxClient.default.md)

  ↳ [`default`](Payment_Security_SecurityClient.default.md)

  ↳ [`default`](Payment_Transfer_TransferClient.default.md)

## Implements

- [`default`](Core_Mixins_HttpMixin.default.md)

## Table of contents

### Constructors

- [constructor](Payment_Core_BaseClient.default.md#constructor)

### Properties

- [app](Payment_Core_BaseClient.default.md#app)
- [serverIp](Payment_Core_BaseClient.default.md#serverip)

### Methods

- [doRequest](Payment_Core_BaseClient.default.md#dorequest)
- [getClientIp](Payment_Core_BaseClient.default.md#getclientip)
- [getServerIp](Payment_Core_BaseClient.default.md#getserverip)
- [prepends](Payment_Core_BaseClient.default.md#prepends)
- [request](Payment_Core_BaseClient.default.md#request)
- [requestRaw](Payment_Core_BaseClient.default.md#requestraw)
- [safeRequest](Payment_Core_BaseClient.default.md#saferequest)
- [wrap](Payment_Core_BaseClient.default.md#wrap)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Defined in

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Defined in

[Payment/Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L15)

## Methods

### doRequest

▸ **doRequest**(`payload`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Implementation of

HttpMixin.doRequest

#### Defined in

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L112)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Defined in

[Payment/Core/BaseClient.ts:90](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L90)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Defined in

[Payment/Core/BaseClient.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L22)

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

#### Defined in

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L85)
