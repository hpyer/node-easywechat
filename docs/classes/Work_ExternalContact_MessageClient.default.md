[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/ExternalContact/MessageClient](../modules/Work_ExternalContact_MessageClient.md) / default

# Class: default

[Work/ExternalContact/MessageClient](../modules/Work_ExternalContact_MessageClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_ExternalContact_MessageClient.default.md#constructor)

### Properties

- [accessToken](Work_ExternalContact_MessageClient.default.md#accesstoken)
- [app](Work_ExternalContact_MessageClient.default.md#app)
- [imageMessage](Work_ExternalContact_MessageClient.default.md#imagemessage)
- [linkMessage](Work_ExternalContact_MessageClient.default.md#linkmessage)
- [miniprogramMessage](Work_ExternalContact_MessageClient.default.md#miniprogrammessage)
- [required](Work_ExternalContact_MessageClient.default.md#required)
- [textMessage](Work_ExternalContact_MessageClient.default.md#textmessage)

### Methods

- [doRequest](Work_ExternalContact_MessageClient.default.md#dorequest)
- [formatFields](Work_ExternalContact_MessageClient.default.md#formatfields)
- [formatMessage](Work_ExternalContact_MessageClient.default.md#formatmessage)
- [get](Work_ExternalContact_MessageClient.default.md#get)
- [getAccessToken](Work_ExternalContact_MessageClient.default.md#getaccesstoken)
- [httpGet](Work_ExternalContact_MessageClient.default.md#httpget)
- [httpPost](Work_ExternalContact_MessageClient.default.md#httppost)
- [httpPostJson](Work_ExternalContact_MessageClient.default.md#httppostjson)
- [httpUpload](Work_ExternalContact_MessageClient.default.md#httpupload)
- [request](Work_ExternalContact_MessageClient.default.md#request)
- [requestRaw](Work_ExternalContact_MessageClient.default.md#requestraw)
- [sendWelcome](Work_ExternalContact_MessageClient.default.md#sendwelcome)
- [setAccessToken](Work_ExternalContact_MessageClient.default.md#setaccesstoken)
- [submit](Work_ExternalContact_MessageClient.default.md#submit)

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

___

### imageMessage

• `Protected` **imageMessage**: `object` = `{}`

#### Defined in

[Work/ExternalContact/MessageClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L15)

___

### linkMessage

• `Protected` **linkMessage**: `object`

#### Defined in

[Work/ExternalContact/MessageClient.ts:18](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L18)

___

### miniprogramMessage

• `Protected` **miniprogramMessage**: `object`

#### Defined in

[Work/ExternalContact/MessageClient.ts:25](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L25)

___

### required

• `Protected` **required**: `string`[]

#### Defined in

[Work/ExternalContact/MessageClient.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L9)

___

### textMessage

• `Protected` **textMessage**: `object`

#### Defined in

[Work/ExternalContact/MessageClient.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L11)

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

[default](Core_BaseClient.default.md).[doRequest](Core_BaseClient.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### formatFields

▸ `Protected` **formatFields**(`data`, `defaults`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |
| `defaults` | `object` |

#### Returns

`object`

#### Defined in

[Work/ExternalContact/MessageClient.ts:73](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L73)

___

### formatMessage

▸ `Protected` **formatMessage**(`data`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`object`

#### Defined in

[Work/ExternalContact/MessageClient.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L55)

___

### get

▸ **get**(`msgId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/MessageClient.ts:38](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L38)

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

### sendWelcome

▸ **sendWelcome**(`welcomeCode`, `msg`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `welcomeCode` | `string` |
| `msg` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/MessageClient.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L45)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_ExternalContact_MessageClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_ExternalContact_MessageClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### submit

▸ **submit**(`msg`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/MessageClient.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/MessageClient.ts#L32)
