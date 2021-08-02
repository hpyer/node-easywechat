[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/OCR/OCRClient](../modules/OfficialAccount_OCR_OCRClient.md) / default

# Class: default

[OfficialAccount/OCR/OCRClient](../modules/OfficialAccount_OCR_OCRClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_OCR_OCRClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_OCR_OCRClient.default.md#accesstoken)
- [allowTypes](OfficialAccount_OCR_OCRClient.default.md#allowtypes)
- [app](OfficialAccount_OCR_OCRClient.default.md#app)

### Methods

- [bankCard](OfficialAccount_OCR_OCRClient.default.md#bankcard)
- [bizLicense](OfficialAccount_OCR_OCRClient.default.md#bizlicense)
- [common](OfficialAccount_OCR_OCRClient.default.md#common)
- [doRequest](OfficialAccount_OCR_OCRClient.default.md#dorequest)
- [driving](OfficialAccount_OCR_OCRClient.default.md#driving)
- [getAccessToken](OfficialAccount_OCR_OCRClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_OCR_OCRClient.default.md#httpget)
- [httpPost](OfficialAccount_OCR_OCRClient.default.md#httppost)
- [httpPostJson](OfficialAccount_OCR_OCRClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_OCR_OCRClient.default.md#httpupload)
- [idCard](OfficialAccount_OCR_OCRClient.default.md#idcard)
- [plateNumber](OfficialAccount_OCR_OCRClient.default.md#platenumber)
- [request](OfficialAccount_OCR_OCRClient.default.md#request)
- [requestRaw](OfficialAccount_OCR_OCRClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_OCR_OCRClient.default.md#setaccesstoken)
- [vehicleLicense](OfficialAccount_OCR_OCRClient.default.md#vehiclelicense)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L14)

___

### allowTypes

• `Protected` **allowTypes**: `string`[]

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:8](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L8)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

## Methods

### bankCard

▸ **bankCard**(`img_url`): `Promise`<`any`\>

银行卡识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:34](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L34)

___

### bizLicense

▸ **bizLicense**(`img_url`): `Promise`<`any`\>

营业执照识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:67](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L67)

___

### common

▸ **common**(`img_url`): `Promise`<`any`\>

通用印刷体识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:78](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L78)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### driving

▸ **driving**(`img_url`): `Promise`<`any`\>

驾驶证识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:56](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L56)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L30)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L51)

___

### idCard

▸ **idCard**(`img_url`, `type?`): `Promise`<`any`\>

身份证识别

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `img_url` | `string` | `undefined` | 图片url |
| `type` | `string` | `'photo'` |  |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:18](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L18)

___

### plateNumber

▸ **plateNumber**(`img_url`): `Promise`<`any`\>

车牌识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:89](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L89)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_OCR_OCRClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_OCR_OCRClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### vehicleLicense

▸ **vehicleLicense**(`img_url`): `Promise`<`any`\>

行驶证识别

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `img_url` | `string` | 图片url |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/OCR/OCRClient.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/OCR/OCRClient.ts#L45)
