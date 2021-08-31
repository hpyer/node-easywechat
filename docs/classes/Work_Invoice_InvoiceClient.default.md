[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Invoice/InvoiceClient](../modules/Work_Invoice_InvoiceClient.md) / default

# Class: default

[Work/Invoice/InvoiceClient](../modules/Work_Invoice_InvoiceClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_Invoice_InvoiceClient.default.md#constructor)

### Properties

- [accessToken](Work_Invoice_InvoiceClient.default.md#accesstoken)
- [app](Work_Invoice_InvoiceClient.default.md#app)

### Methods

- [batchUpdate](Work_Invoice_InvoiceClient.default.md#batchupdate)
- [doRequest](Work_Invoice_InvoiceClient.default.md#dorequest)
- [get](Work_Invoice_InvoiceClient.default.md#get)
- [getAccessToken](Work_Invoice_InvoiceClient.default.md#getaccesstoken)
- [httpGet](Work_Invoice_InvoiceClient.default.md#httpget)
- [httpPost](Work_Invoice_InvoiceClient.default.md#httppost)
- [httpPostJson](Work_Invoice_InvoiceClient.default.md#httppostjson)
- [httpUpload](Work_Invoice_InvoiceClient.default.md#httpupload)
- [request](Work_Invoice_InvoiceClient.default.md#request)
- [requestRaw](Work_Invoice_InvoiceClient.default.md#requestraw)
- [select](Work_Invoice_InvoiceClient.default.md#select)
- [setAccessToken](Work_Invoice_InvoiceClient.default.md#setaccesstoken)
- [update](Work_Invoice_InvoiceClient.default.md#update)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](Core_BaseClient.default.md).[constructor](Core_BaseClient.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L15)

## Methods

### batchUpdate

▸ **batchUpdate**(`invoices`, `openid`, `status`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoices` | `string`[] |
| `openid` | `string` |
| `status` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Invoice/InvoiceClient.ts:38](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/Invoice/InvoiceClient.ts#L38)

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

[default](Core_BaseClient.default.md).[doRequest](Core_BaseClient.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L114)

___

### get

▸ **get**(`cardId`, `encryptCode`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `string` |
| `encryptCode` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Invoice/InvoiceClient.ts:8](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/Invoice/InvoiceClient.ts#L8)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L30)

___

### httpGet

▸ **httpGet**(`url`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpGet](Core_BaseClient.default.md#httpget)

#### Defined in

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L76)

___

### httpPost

▸ **httpPost**(`url`, `formData?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `formData` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpPost](Core_BaseClient.default.md#httppost)

#### Defined in

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L85)

___

### httpPostJson

▸ **httpPostJson**(`url`, `data?`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `object` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpPostJson](Core_BaseClient.default.md#httppostjson)

#### Defined in

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L94)

___

### httpUpload

▸ **httpUpload**(`url`, `files?`, `form?`, `query?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `files` | `object` |
| `form` | `object` |
| `query` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](Core_BaseClient.default.md).[httpUpload](Core_BaseClient.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L51)

___

### request

▸ **request**(`payload`, `returnResponse?`): `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `AxiosRequestConfig` | `undefined` |
| `returnResponse` | `Boolean` | `false` |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Inherited from

[default](Core_BaseClient.default.md).[request](Core_BaseClient.default.md#request)

#### Defined in

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L35)

___

### requestRaw

▸ **requestRaw**(`payload`): `Promise`<[`default`](Core_Http_Response.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AxiosRequestConfig` |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Inherited from

[default](Core_BaseClient.default.md).[requestRaw](Core_BaseClient.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L104)

___

### select

▸ **select**(`invoices`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoices` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Invoice/InvoiceClient.ts:18](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/Invoice/InvoiceClient.ts#L18)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_Invoice_InvoiceClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_Invoice_InvoiceClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`cardId`, `encryptCode`, `status`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `string` |
| `encryptCode` | `string` |
| `status` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Invoice/InvoiceClient.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/Invoice/InvoiceClient.ts#L27)
