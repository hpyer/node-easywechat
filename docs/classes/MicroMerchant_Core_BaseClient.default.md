[node-easywechat](../README.md) / [Exports](../modules.md) / [MicroMerchant/Core/BaseClient](../modules/MicroMerchant_Core_BaseClient.md) / default

# Class: default

[MicroMerchant/Core/BaseClient](../modules/MicroMerchant_Core_BaseClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

  ↳↳ [`default`](MicroMerchant_Base_MicroMerchantBase.default.md)

  ↳↳ [`default`](MicroMerchant_Certficates_CertficatesClient.default.md)

  ↳↳ [`default`](MicroMerchant_Media_MediaClient.default.md)

  ↳↳ [`default`](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md)

  ↳↳ [`default`](MicroMerchant_Meterial_MeterialClient.default.md)

  ↳↳ [`default`](MicroMerchant_Withdraw_WithdrawClient.default.md)

## Table of contents

### Constructors

- [constructor](MicroMerchant_Core_BaseClient.default.md#constructor)

### Properties

- [app](MicroMerchant_Core_BaseClient.default.md#app)
- [serverIp](MicroMerchant_Core_BaseClient.default.md#serverip)

### Methods

- [doRequest](MicroMerchant_Core_BaseClient.default.md#dorequest)
- [getClientIp](MicroMerchant_Core_BaseClient.default.md#getclientip)
- [getSensitiveFieldsName](MicroMerchant_Core_BaseClient.default.md#getsensitivefieldsname)
- [getServerIp](MicroMerchant_Core_BaseClient.default.md#getserverip)
- [httpUpload](MicroMerchant_Core_BaseClient.default.md#httpupload)
- [prepends](MicroMerchant_Core_BaseClient.default.md#prepends)
- [processParams](MicroMerchant_Core_BaseClient.default.md#processparams)
- [request](MicroMerchant_Core_BaseClient.default.md#request)
- [requestRaw](MicroMerchant_Core_BaseClient.default.md#requestraw)
- [safeRequest](MicroMerchant_Core_BaseClient.default.md#saferequest)
- [wrap](MicroMerchant_Core_BaseClient.default.md#wrap)

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

### getSensitiveFieldsName

▸ `Protected` **getSensitiveFieldsName**(): `string`[]

#### Returns

`string`[]

#### Defined in

[MicroMerchant/Core/BaseClient.ts:96](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L96)

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

#### Defined in

[MicroMerchant/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L13)

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

### processParams

▸ `Protected` **processParams**(`params`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`object`

#### Defined in

[MicroMerchant/Core/BaseClient.ts:70](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L70)

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

#### Overrides

[default](Payment_Core_BaseClient.default.md).[request](Payment_Core_BaseClient.default.md#request)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:38](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L38)

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
