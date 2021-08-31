[node-easywechat](../README.md) / [Exports](../modules.md) / [BaseService/ContentSecurity/ContentSecurityClient](../modules/BaseService_ContentSecurity_ContentSecurityClient.md) / default

# Class: default

[BaseService/ContentSecurity/ContentSecurityClient](../modules/BaseService_ContentSecurity_ContentSecurityClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](BaseService_ContentSecurity_ContentSecurityClient.default.md#constructor)

### Properties

- [accessToken](BaseService_ContentSecurity_ContentSecurityClient.default.md#accesstoken)
- [app](BaseService_ContentSecurity_ContentSecurityClient.default.md#app)
- [baseUrl](BaseService_ContentSecurity_ContentSecurityClient.default.md#baseurl)

### Methods

- [checkImage](BaseService_ContentSecurity_ContentSecurityClient.default.md#checkimage)
- [checkText](BaseService_ContentSecurity_ContentSecurityClient.default.md#checktext)
- [doRequest](BaseService_ContentSecurity_ContentSecurityClient.default.md#dorequest)
- [getAccessToken](BaseService_ContentSecurity_ContentSecurityClient.default.md#getaccesstoken)
- [httpGet](BaseService_ContentSecurity_ContentSecurityClient.default.md#httpget)
- [httpPost](BaseService_ContentSecurity_ContentSecurityClient.default.md#httppost)
- [httpPostJson](BaseService_ContentSecurity_ContentSecurityClient.default.md#httppostjson)
- [httpUpload](BaseService_ContentSecurity_ContentSecurityClient.default.md#httpupload)
- [request](BaseService_ContentSecurity_ContentSecurityClient.default.md#request)
- [requestRaw](BaseService_ContentSecurity_ContentSecurityClient.default.md#requestraw)
- [setAccessToken](BaseService_ContentSecurity_ContentSecurityClient.default.md#setaccesstoken)

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

___

### baseUrl

• `Protected` **baseUrl**: `string` = `'https://api.weixin.qq.com/wxa/'`

#### Defined in

[BaseService/ContentSecurity/ContentSecurityClient.ts:8](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/BaseService/ContentSecurity/ContentSecurityClient.ts#L8)

## Methods

### checkImage

▸ **checkImage**(`file`): `Promise`<`any`\>

校验一张图片是否含有敏感信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/ContentSecurity/ContentSecurityClient.ts:25](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/BaseService/ContentSecurity/ContentSecurityClient.ts#L25)

___

### checkText

▸ **checkText**(`text`): `Promise`<`any`\>

校验一段文本是否含有违法内容

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 待校验文本 |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/ContentSecurity/ContentSecurityClient.ts:14](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/BaseService/ContentSecurity/ContentSecurityClient.ts#L14)

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

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](BaseService_ContentSecurity_ContentSecurityClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](BaseService_ContentSecurity_ContentSecurityClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)
