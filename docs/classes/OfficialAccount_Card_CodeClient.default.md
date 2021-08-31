[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Card/CodeClient](../modules/OfficialAccount_Card_CodeClient.md) / default

# Class: default

[OfficialAccount/Card/CodeClient](../modules/OfficialAccount_Card_CodeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Card_CodeClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Card_CodeClient.default.md#accesstoken)
- [app](OfficialAccount_Card_CodeClient.default.md#app)

### Methods

- [check](OfficialAccount_Card_CodeClient.default.md#check)
- [consume](OfficialAccount_Card_CodeClient.default.md#consume)
- [decrypt](OfficialAccount_Card_CodeClient.default.md#decrypt)
- [deposit](OfficialAccount_Card_CodeClient.default.md#deposit)
- [disable](OfficialAccount_Card_CodeClient.default.md#disable)
- [doRequest](OfficialAccount_Card_CodeClient.default.md#dorequest)
- [get](OfficialAccount_Card_CodeClient.default.md#get)
- [getAccessToken](OfficialAccount_Card_CodeClient.default.md#getaccesstoken)
- [getDepositedCount](OfficialAccount_Card_CodeClient.default.md#getdepositedcount)
- [httpGet](OfficialAccount_Card_CodeClient.default.md#httpget)
- [httpPost](OfficialAccount_Card_CodeClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Card_CodeClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Card_CodeClient.default.md#httpupload)
- [request](OfficialAccount_Card_CodeClient.default.md#request)
- [requestRaw](OfficialAccount_Card_CodeClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Card_CodeClient.default.md#setaccesstoken)
- [update](OfficialAccount_Card_CodeClient.default.md#update)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L15)

## Methods

### check

▸ **check**(`cardId`, `codes`): `Promise`<`any`\>

核查卡券code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardId` | `string` | 卡券id |
| `codes` | `string`[] | 卡券code列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:37](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L37)

___

### consume

▸ **consume**(`code`, `cardId?`): `Promise`<`any`\>

核销卡券Code

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `code` | `string` | `undefined` | 卡券code |
| `cardId` | `string` | `null` | 卡券id，默认：null |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:93](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L93)

___

### decrypt

▸ **decrypt**(`encryptedCode`): `Promise`<`any`\>

解码卡券code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encryptedCode` | `string` | 密文 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:108](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L108)

___

### deposit

▸ **deposit**(`cardId`, `codes`): `Promise`<`any`\>

导入卡券code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardId` | `string` | 卡券id |
| `codes` | `string`[] | 卡券code列表，最多100个 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L13)

___

### disable

▸ **disable**(`code`, `cardId`): `Promise`<`any`\>

设置卡券失效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | 卡券code |
| `cardId` | `string` | 卡券id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:80](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L80)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L114)

___

### get

▸ **get**(`code`, `cardId`, `checkConsume?`): `Promise`<`any`\>

查询卡券Code

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `code` | `string` | `undefined` | 卡券code |
| `cardId` | `string` | `undefined` | 卡券id |
| `checkConsume` | `Boolean` | `true` | 是否校验code核销状态，true和false |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:51](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L51)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L30)

___

### getDepositedCount

▸ **getDepositedCount**(`cardId`): `Promise`<`any`\>

查询导入的卡券code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardId` | `string` | 卡券id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:25](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L25)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Card_CodeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Card_CodeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`code`, `newCode`, `cardId`): `Promise`<`any`\>

更改卡券Code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | 旧code |
| `newCode` | `string` | 新code |
| `cardId` | `string` | 卡券id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Card/CodeClient.ts:66](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Card/CodeClient.ts#L66)
