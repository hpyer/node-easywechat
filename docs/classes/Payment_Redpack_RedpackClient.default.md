[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Redpack/RedpackClient](../modules/Payment_Redpack_RedpackClient.md) / default

# Class: default

[Payment/Redpack/RedpackClient](../modules/Payment_Redpack_RedpackClient.md).default

## Hierarchy

- [`default`](Payment_Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Redpack_RedpackClient.default.md#constructor)

### Properties

- [app](Payment_Redpack_RedpackClient.default.md#app)
- [serverIp](Payment_Redpack_RedpackClient.default.md#serverip)

### Methods

- [doRequest](Payment_Redpack_RedpackClient.default.md#dorequest)
- [getClientIp](Payment_Redpack_RedpackClient.default.md#getclientip)
- [getServerIp](Payment_Redpack_RedpackClient.default.md#getserverip)
- [info](Payment_Redpack_RedpackClient.default.md#info)
- [parseXml](Payment_Redpack_RedpackClient.default.md#parsexml)
- [prepends](Payment_Redpack_RedpackClient.default.md#prepends)
- [request](Payment_Redpack_RedpackClient.default.md#request)
- [requestRaw](Payment_Redpack_RedpackClient.default.md#requestraw)
- [safeRequest](Payment_Redpack_RedpackClient.default.md#saferequest)
- [sendGroup](Payment_Redpack_RedpackClient.default.md#sendgroup)
- [sendMiniprogramNormal](Payment_Redpack_RedpackClient.default.md#sendminiprogramnormal)
- [sendNormal](Payment_Redpack_RedpackClient.default.md#sendnormal)
- [wrap](Payment_Redpack_RedpackClient.default.md#wrap)

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

### info

▸ **info**(`mchBillno`): `Promise`<`any`\>

查询红包信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mchBillno` | `any` | 商户订单号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Redpack/RedpackClient.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Redpack/RedpackClient.ts#L13)

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

### sendGroup

▸ **sendGroup**(`params`): `Promise`<`any`\>

发送裂变红包

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `object` | 红包参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Redpack/RedpackClient.ts:62](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Redpack/RedpackClient.ts#L62)

___

### sendMiniprogramNormal

▸ **sendMiniprogramNormal**(`data`): `Promise`<`any`\>

发送小程序红包

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 红包参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Redpack/RedpackClient.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Redpack/RedpackClient.ts#L31)

___

### sendNormal

▸ **sendNormal**(`data`): `Promise`<`any`\>

发送普通红包

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 红包参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Redpack/RedpackClient.ts:47](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Payment/Redpack/RedpackClient.ts#L47)

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
