[node-easywechat](../README.md) / [Exports](../modules.md) / [MicroMerchant/Withdraw/WithdrawClient](../modules/MicroMerchant_Withdraw_WithdrawClient.md) / default

# Class: default

[MicroMerchant/Withdraw/WithdrawClient](../modules/MicroMerchant_Withdraw_WithdrawClient.md).default

## Hierarchy

- [`default`](MicroMerchant_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MicroMerchant_Withdraw_WithdrawClient.default.md#constructor)

### Properties

- [app](MicroMerchant_Withdraw_WithdrawClient.default.md#app)
- [serverIp](MicroMerchant_Withdraw_WithdrawClient.default.md#serverip)

### Methods

- [doRequest](MicroMerchant_Withdraw_WithdrawClient.default.md#dorequest)
- [getClientIp](MicroMerchant_Withdraw_WithdrawClient.default.md#getclientip)
- [getSensitiveFieldsName](MicroMerchant_Withdraw_WithdrawClient.default.md#getsensitivefieldsname)
- [getServerIp](MicroMerchant_Withdraw_WithdrawClient.default.md#getserverip)
- [httpUpload](MicroMerchant_Withdraw_WithdrawClient.default.md#httpupload)
- [prepends](MicroMerchant_Withdraw_WithdrawClient.default.md#prepends)
- [processParams](MicroMerchant_Withdraw_WithdrawClient.default.md#processparams)
- [queryWithdrawalStatus](MicroMerchant_Withdraw_WithdrawClient.default.md#querywithdrawalstatus)
- [request](MicroMerchant_Withdraw_WithdrawClient.default.md#request)
- [requestRaw](MicroMerchant_Withdraw_WithdrawClient.default.md#requestraw)
- [requestWithdraw](MicroMerchant_Withdraw_WithdrawClient.default.md#requestwithdraw)
- [safeRequest](MicroMerchant_Withdraw_WithdrawClient.default.md#saferequest)
- [wrap](MicroMerchant_Withdraw_WithdrawClient.default.md#wrap)

## Constructors

### constructor

• **new default**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`default`](Payment_Application.default.md) |

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[constructor](MicroMerchant_Core_BaseClient.default.md#constructor)

#### Defined in

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[app](MicroMerchant_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[serverIp](MicroMerchant_Core_BaseClient.default.md#serverip)

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

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[doRequest](MicroMerchant_Core_BaseClient.default.md#dorequest)

#### Defined in

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getClientIp](MicroMerchant_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L112)

___

### getSensitiveFieldsName

▸ `Protected` **getSensitiveFieldsName**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getSensitiveFieldsName](MicroMerchant_Core_BaseClient.default.md#getsensitivefieldsname)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:96](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Core/BaseClient.ts#L96)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getServerIp](MicroMerchant_Core_BaseClient.default.md#getserverip)

#### Defined in

[Payment/Core/BaseClient.ts:90](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L90)

___

### httpUpload

▸ **httpUpload**(`url`, `files?`, `form?`, `query?`, `returnResponse?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `files` | `object` | `{}` |
| `form` | `object` | `{}` |
| `query` | `object` | `{}` |
| `returnResponse` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[httpUpload](MicroMerchant_Core_BaseClient.default.md#httpupload)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Core/BaseClient.ts#L13)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[prepends](MicroMerchant_Core_BaseClient.default.md#prepends)

#### Defined in

[Payment/Core/BaseClient.ts:22](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L22)

___

### processParams

▸ `Protected` **processParams**(`params`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`object`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[processParams](MicroMerchant_Core_BaseClient.default.md#processparams)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:70](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Core/BaseClient.ts#L70)

___

### queryWithdrawalStatus

▸ **queryWithdrawalStatus**(`date`, `subMchId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `subMchId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Withdraw/WithdrawClient.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Withdraw/WithdrawClient.ts#L9)

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

[default](MicroMerchant_Core_BaseClient.default.md).[request](MicroMerchant_Core_BaseClient.default.md#request)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:38](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Core/BaseClient.ts#L38)

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

[default](MicroMerchant_Core_BaseClient.default.md).[requestRaw](MicroMerchant_Core_BaseClient.default.md#requestraw)

#### Defined in

[Payment/Core/BaseClient.ts:78](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L78)

___

### requestWithdraw

▸ **requestWithdraw**(`date`, `subMchId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `subMchId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Withdraw/WithdrawClient.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/MicroMerchant/Withdraw/WithdrawClient.ts#L20)

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

[default](MicroMerchant_Core_BaseClient.default.md).[safeRequest](MicroMerchant_Core_BaseClient.default.md#saferequest)

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

[default](MicroMerchant_Core_BaseClient.default.md).[wrap](MicroMerchant_Core_BaseClient.default.md#wrap)

#### Defined in

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Core/BaseClient.ts#L85)
