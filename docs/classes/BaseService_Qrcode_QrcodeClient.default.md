[node-easywechat](../README.md) / [Exports](../modules.md) / [BaseService/Qrcode/QrcodeClient](../modules/BaseService_Qrcode_QrcodeClient.md) / default

# Class: default

[BaseService/Qrcode/QrcodeClient](../modules/BaseService_Qrcode_QrcodeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](BaseService_Qrcode_QrcodeClient.default.md#constructor)

### Properties

- [DAY](BaseService_Qrcode_QrcodeClient.default.md#day)
- [SCENE\_MAX\_VALUE](BaseService_Qrcode_QrcodeClient.default.md#scene_max_value)
- [SCENE\_QR\_CARD](BaseService_Qrcode_QrcodeClient.default.md#scene_qr_card)
- [SCENE\_QR\_FOREVER](BaseService_Qrcode_QrcodeClient.default.md#scene_qr_forever)
- [SCENE\_QR\_FOREVER\_STR](BaseService_Qrcode_QrcodeClient.default.md#scene_qr_forever_str)
- [SCENE\_QR\_TEMPORARY](BaseService_Qrcode_QrcodeClient.default.md#scene_qr_temporary)
- [SCENE\_QR\_TEMPORARY\_STR](BaseService_Qrcode_QrcodeClient.default.md#scene_qr_temporary_str)
- [accessToken](BaseService_Qrcode_QrcodeClient.default.md#accesstoken)
- [app](BaseService_Qrcode_QrcodeClient.default.md#app)
- [baseUrl](BaseService_Qrcode_QrcodeClient.default.md#baseurl)

### Methods

- [create](BaseService_Qrcode_QrcodeClient.default.md#create)
- [doRequest](BaseService_Qrcode_QrcodeClient.default.md#dorequest)
- [forever](BaseService_Qrcode_QrcodeClient.default.md#forever)
- [getAccessToken](BaseService_Qrcode_QrcodeClient.default.md#getaccesstoken)
- [httpGet](BaseService_Qrcode_QrcodeClient.default.md#httpget)
- [httpPost](BaseService_Qrcode_QrcodeClient.default.md#httppost)
- [httpPostJson](BaseService_Qrcode_QrcodeClient.default.md#httppostjson)
- [httpUpload](BaseService_Qrcode_QrcodeClient.default.md#httpupload)
- [request](BaseService_Qrcode_QrcodeClient.default.md#request)
- [requestRaw](BaseService_Qrcode_QrcodeClient.default.md#requestraw)
- [setAccessToken](BaseService_Qrcode_QrcodeClient.default.md#setaccesstoken)
- [temporary](BaseService_Qrcode_QrcodeClient.default.md#temporary)
- [url](BaseService_Qrcode_QrcodeClient.default.md#url)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L17)

## Properties

### DAY

• **DAY**: `number` = `86400`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L8)

___

### SCENE\_MAX\_VALUE

• **SCENE\_MAX\_VALUE**: `number` = `100000`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L9)

___

### SCENE\_QR\_CARD

• **SCENE\_QR\_CARD**: `string` = `'QR_CARD'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L10)

___

### SCENE\_QR\_FOREVER

• **SCENE\_QR\_FOREVER**: `string` = `'QR_LIMIT_SCENE'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L13)

___

### SCENE\_QR\_FOREVER\_STR

• **SCENE\_QR\_FOREVER\_STR**: `string` = `'QR_LIMIT_STR_SCENE'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L14)

___

### SCENE\_QR\_TEMPORARY

• **SCENE\_QR\_TEMPORARY**: `string` = `'QR_SCENE'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L11)

___

### SCENE\_QR\_TEMPORARY\_STR

• **SCENE\_QR\_TEMPORARY\_STR**: `string` = `'QR_STR_SCENE'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L12)

___

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L15)

___

### baseUrl

• `Protected` **baseUrl**: `string` = `'https://api.weixin.qq.com/cgi-bin/'`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L16)

## Methods

### create

▸ `Protected` **create**(`actionName`, `actionInfo`, `temporary?`, `expireSeconds?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actionName` | `string` | `undefined` |
| `actionInfo` | `any` | `undefined` |
| `temporary` | `Boolean` | `true` |
| `expireSeconds` | `number` | `0` |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:71](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L71)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L114)

___

### forever

▸ **forever**(`sceneValue`): `Promise`<`any`\>

创建永久二维码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneValue` | `any` | 业务标识 |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:44](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L44)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](BaseService_Qrcode_QrcodeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](BaseService_Qrcode_QrcodeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### temporary

▸ **temporary**(`sceneValue`, `expireSeconds?`): `Promise`<`any`\>

创建临时二维码

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sceneValue` | `any` | `undefined` | 业务标识 |
| `expireSeconds` | `number` | `0` | 有效时间，单位：秒 |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L23)

___

### url

▸ **url**(`ticket`): `string`

获取二维码地址

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | `string` | 通过temporary或forever方法获得 |

#### Returns

`string`

#### Defined in

[BaseService/Qrcode/QrcodeClient.ts:66](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Qrcode/QrcodeClient.ts#L66)
