[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/CustomerService/CustomerServiceClient](../modules/OfficialAccount_CustomerService_CustomerServiceClient.md) / default

# Class: default

[OfficialAccount/CustomerService/CustomerServiceClient](../modules/OfficialAccount_CustomerService_CustomerServiceClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_CustomerService_CustomerServiceClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_CustomerService_CustomerServiceClient.default.md#accesstoken)
- [app](OfficialAccount_CustomerService_CustomerServiceClient.default.md#app)

### Methods

- [create](OfficialAccount_CustomerService_CustomerServiceClient.default.md#create)
- [delete](OfficialAccount_CustomerService_CustomerServiceClient.default.md#delete)
- [doRequest](OfficialAccount_CustomerService_CustomerServiceClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_CustomerService_CustomerServiceClient.default.md#getaccesstoken)
- [hideTypingStatusToUser](OfficialAccount_CustomerService_CustomerServiceClient.default.md#hidetypingstatustouser)
- [httpGet](OfficialAccount_CustomerService_CustomerServiceClient.default.md#httpget)
- [httpPost](OfficialAccount_CustomerService_CustomerServiceClient.default.md#httppost)
- [httpPostJson](OfficialAccount_CustomerService_CustomerServiceClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_CustomerService_CustomerServiceClient.default.md#httpupload)
- [invite](OfficialAccount_CustomerService_CustomerServiceClient.default.md#invite)
- [list](OfficialAccount_CustomerService_CustomerServiceClient.default.md#list)
- [message](OfficialAccount_CustomerService_CustomerServiceClient.default.md#message)
- [messages](OfficialAccount_CustomerService_CustomerServiceClient.default.md#messages)
- [online](OfficialAccount_CustomerService_CustomerServiceClient.default.md#online)
- [request](OfficialAccount_CustomerService_CustomerServiceClient.default.md#request)
- [requestRaw](OfficialAccount_CustomerService_CustomerServiceClient.default.md#requestraw)
- [send](OfficialAccount_CustomerService_CustomerServiceClient.default.md#send)
- [setAccessToken](OfficialAccount_CustomerService_CustomerServiceClient.default.md#setaccesstoken)
- [setAvatar](OfficialAccount_CustomerService_CustomerServiceClient.default.md#setavatar)
- [showTypingStatusToUser](OfficialAccount_CustomerService_CustomerServiceClient.default.md#showtypingstatustouser)
- [update](OfficialAccount_CustomerService_CustomerServiceClient.default.md#update)

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

### create

▸ **create**(`account`, `nickname`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `nickname` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:20](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L20)

___

### delete

▸ **delete**(`account`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:38](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L38)

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

### hideTypingStatusToUser

▸ **hideTypingStatusToUser**(`openid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:83](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L83)

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

### invite

▸ **invite**(`account`, `wechatId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `wechatId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:46](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L46)

___

### list

▸ **list**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:10](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L10)

___

### message

▸ **message**(`message`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`object`

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:64](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L64)

___

### messages

▸ **messages**(`startTime`, `endTime`, `msgId?`, `number?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `string` | `undefined` |
| `endTime` | `string` | `undefined` |
| `msgId` | `Number` | `1` |
| `number` | `Number` | `10000` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:91](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L91)

___

### online

▸ **online**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L15)

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

### send

▸ **send**(`message`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:70](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L70)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)

___

### setAvatar

▸ **setAvatar**(`account`, `path`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `path` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:55](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L55)

___

### showTypingStatusToUser

▸ **showTypingStatusToUser**(`openid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:75](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L75)

___

### update

▸ **update**(`account`, `nickname`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `nickname` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/CustomerService/CustomerServiceClient.ts:29](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/CustomerService/CustomerServiceClient.ts#L29)
