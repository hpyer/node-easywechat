[node-easywechat](../README.md) / [Exports](../modules.md) / [MicroMerchant/MerchantConfig/MerchantConfigClient](../modules/MicroMerchant_MerchantConfig_MerchantConfigClient.md) / default

# Class: default

[MicroMerchant/MerchantConfig/MerchantConfigClient](../modules/MicroMerchant_MerchantConfig_MerchantConfigClient.md).default

## Hierarchy

- [`default`](MicroMerchant_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#constructor)

### Properties

- [app](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#app)
- [serverIp](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#serverip)

### Methods

- [addConfig](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#addconfig)
- [addPath](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#addpath)
- [bindAppId](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#bindappid)
- [doRequest](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#dorequest)
- [getClientIp](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#getclientip)
- [getConfig](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#getconfig)
- [getSensitiveFieldsName](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#getsensitivefieldsname)
- [getServerIp](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#getserverip)
- [httpUpload](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#httpupload)
- [prepends](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#prepends)
- [processParams](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#processparams)
- [request](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#request)
- [requestRaw](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#requestraw)
- [safeRequest](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#saferequest)
- [setFollowConfig](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#setfollowconfig)
- [wrap](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md#wrap)

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

[Payment/Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L17)

## Properties

### app

• `Protected` **app**: [`default`](Payment_Application.default.md) = `null`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[app](MicroMerchant_Core_BaseClient.default.md#app)

#### Defined in

[Payment/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L13)

___

### serverIp

• `Protected` **serverIp**: `String` = `''`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[serverIp](MicroMerchant_Core_BaseClient.default.md#serverip)

#### Defined in

[Payment/Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L15)

## Methods

### addConfig

▸ `Private` **addConfig**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/MerchantConfig/MerchantConfigClient.ts:46](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/MerchantConfig/MerchantConfigClient.ts#L46)

___

### addPath

▸ **addPath**(`jsapiPath`, `appId?`, `subMchId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `jsapiPath` | `string` | `undefined` |
| `appId` | `string` | `''` |
| `subMchId` | `string` | `''` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/MerchantConfig/MerchantConfigClient.ts:28](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/MerchantConfig/MerchantConfigClient.ts#L28)

___

### bindAppId

▸ **bindAppId**(`subAppId`, `appId?`, `subMchId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `subAppId` | `string` | `undefined` |
| `appId` | `string` | `''` |
| `subMchId` | `string` | `''` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/MerchantConfig/MerchantConfigClient.ts:37](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/MerchantConfig/MerchantConfigClient.ts#L37)

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

[default](MicroMerchant_Core_BaseClient.default.md).[doRequest](MicroMerchant_Core_BaseClient.default.md#dorequest)

#### Defined in

[Payment/Core/BaseClient.ts:119](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L119)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getClientIp](MicroMerchant_Core_BaseClient.default.md#getclientip)

#### Defined in

[Payment/Core/BaseClient.ts:112](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L112)

___

### getConfig

▸ **getConfig**(`subMchId`, `appId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subMchId` | `string` |
| `appId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/MerchantConfig/MerchantConfigClient.ts:51](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/MerchantConfig/MerchantConfigClient.ts#L51)

___

### getSensitiveFieldsName

▸ `Protected` **getSensitiveFieldsName**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getSensitiveFieldsName](MicroMerchant_Core_BaseClient.default.md#getsensitivefieldsname)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:96](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L96)

___

### getServerIp

▸ **getServerIp**(): `Promise`<`String`\>

#### Returns

`Promise`<`String`\>

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[getServerIp](MicroMerchant_Core_BaseClient.default.md#getserverip)

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

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[httpUpload](MicroMerchant_Core_BaseClient.default.md#httpupload)

#### Defined in

[MicroMerchant/Core/BaseClient.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/Core/BaseClient.ts#L13)

___

### prepends

▸ `Protected` **prepends**(): `Object`

#### Returns

`Object`

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[prepends](MicroMerchant_Core_BaseClient.default.md#prepends)

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

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[processParams](MicroMerchant_Core_BaseClient.default.md#processparams)

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

#### Inherited from

[default](MicroMerchant_Core_BaseClient.default.md).[request](MicroMerchant_Core_BaseClient.default.md#request)

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

[default](MicroMerchant_Core_BaseClient.default.md).[requestRaw](MicroMerchant_Core_BaseClient.default.md#requestraw)

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

[default](MicroMerchant_Core_BaseClient.default.md).[safeRequest](MicroMerchant_Core_BaseClient.default.md#saferequest)

#### Defined in

[Payment/Core/BaseClient.ts:67](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L67)

___

### setFollowConfig

▸ **setFollowConfig**(`subAppId`, `subscribeAppId`, `receiptAppId?`, `subMchId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `subAppId` | `string` | `undefined` |
| `subscribeAppId` | `string` | `undefined` |
| `receiptAppId` | `string` | `''` |
| `subMchId` | `string` | `''` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/MerchantConfig/MerchantConfigClient.ts:9](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MicroMerchant/MerchantConfig/MerchantConfigClient.ts#L9)

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

[Payment/Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Payment/Core/BaseClient.ts#L85)
