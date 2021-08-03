[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/ExternalContact/ContactWayClient](../modules/Work_ExternalContact_ContactWayClient.md) / default

# Class: default

[Work/ExternalContact/ContactWayClient](../modules/Work_ExternalContact_ContactWayClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_ExternalContact_ContactWayClient.default.md#constructor)

### Properties

- [accessToken](Work_ExternalContact_ContactWayClient.default.md#accesstoken)
- [app](Work_ExternalContact_ContactWayClient.default.md#app)

### Methods

- [create](Work_ExternalContact_ContactWayClient.default.md#create)
- [delete](Work_ExternalContact_ContactWayClient.default.md#delete)
- [doRequest](Work_ExternalContact_ContactWayClient.default.md#dorequest)
- [get](Work_ExternalContact_ContactWayClient.default.md#get)
- [getAccessToken](Work_ExternalContact_ContactWayClient.default.md#getaccesstoken)
- [httpGet](Work_ExternalContact_ContactWayClient.default.md#httpget)
- [httpPost](Work_ExternalContact_ContactWayClient.default.md#httppost)
- [httpPostJson](Work_ExternalContact_ContactWayClient.default.md#httppostjson)
- [httpUpload](Work_ExternalContact_ContactWayClient.default.md#httpupload)
- [request](Work_ExternalContact_ContactWayClient.default.md#request)
- [requestRaw](Work_ExternalContact_ContactWayClient.default.md#requestraw)
- [setAccessToken](Work_ExternalContact_ContactWayClient.default.md#setaccesstoken)
- [update](Work_ExternalContact_ContactWayClient.default.md#update)

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

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

## Methods

### create

▸ **create**(`type`, `scene`, `config`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `scene` | `number` |
| `config` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/ContactWayClient.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/ContactWayClient.ts#L9)

___

### delete

▸ **delete**(`configId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/ContactWayClient.ts:34](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/ContactWayClient.ts#L34)

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

### get

▸ **get**(`configId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/ContactWayClient.ts:18](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/ContactWayClient.ts#L18)

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

▸ **setAccessToken**(`accessToken`): [`default`](Work_ExternalContact_ContactWayClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_ExternalContact_ContactWayClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`configId`, `config`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configId` | `string` |
| `config` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/ContactWayClient.ts:25](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/ContactWayClient.ts#L25)