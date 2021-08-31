[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/ShakeAround/ShakeAround](../modules/OfficialAccount_ShakeAround_ShakeAround.md) / default

# Class: default

[OfficialAccount/ShakeAround/ShakeAround](../modules/OfficialAccount_ShakeAround_ShakeAround.md).default

## Hierarchy

- [`default`](OfficialAccount_ShakeAround_Client.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_ShakeAround_ShakeAround.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_ShakeAround_ShakeAround.default.md#accesstoken)
- [app](OfficialAccount_ShakeAround_ShakeAround.default.md#app)
- [client](OfficialAccount_ShakeAround_ShakeAround.default.md#client)
- [device](OfficialAccount_ShakeAround_ShakeAround.default.md#device)
- [group](OfficialAccount_ShakeAround_ShakeAround.default.md#group)
- [material](OfficialAccount_ShakeAround_ShakeAround.default.md#material)
- [page](OfficialAccount_ShakeAround_ShakeAround.default.md#page)
- [relation](OfficialAccount_ShakeAround_ShakeAround.default.md#relation)
- [stats](OfficialAccount_ShakeAround_ShakeAround.default.md#stats)

### Methods

- [doRequest](OfficialAccount_ShakeAround_ShakeAround.default.md#dorequest)
- [getAccessToken](OfficialAccount_ShakeAround_ShakeAround.default.md#getaccesstoken)
- [httpGet](OfficialAccount_ShakeAround_ShakeAround.default.md#httpget)
- [httpPost](OfficialAccount_ShakeAround_ShakeAround.default.md#httppost)
- [httpPostJson](OfficialAccount_ShakeAround_ShakeAround.default.md#httppostjson)
- [httpUpload](OfficialAccount_ShakeAround_ShakeAround.default.md#httpupload)
- [register](OfficialAccount_ShakeAround_ShakeAround.default.md#register)
- [request](OfficialAccount_ShakeAround_ShakeAround.default.md#request)
- [requestRaw](OfficialAccount_ShakeAround_ShakeAround.default.md#requestraw)
- [setAccessToken](OfficialAccount_ShakeAround_ShakeAround.default.md#setaccesstoken)
- [status](OfficialAccount_ShakeAround_ShakeAround.default.md#status)
- [user](OfficialAccount_ShakeAround_ShakeAround.default.md#user)
- [userWithPoi](OfficialAccount_ShakeAround_ShakeAround.default.md#userwithpoi)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Overrides

[default](OfficialAccount_ShakeAround_Client.default.md).[constructor](OfficialAccount_ShakeAround_Client.default.md#constructor)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:24](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L24)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[accessToken](OfficialAccount_ShakeAround_Client.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[app](OfficialAccount_ShakeAround_Client.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L15)

___

### client

• **client**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:16](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L16)

___

### device

• **device**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L17)

___

### group

• **group**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L20)

___

### material

• **material**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:19](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L19)

___

### page

• **page**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:18](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L18)

___

### relation

• **relation**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L21)

___

### stats

• **stats**: [`default`](Core_BaseClient.default.md)

#### Defined in

[OfficialAccount/ShakeAround/ShakeAround.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/ShakeAround.ts#L22)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[doRequest](OfficialAccount_ShakeAround_Client.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[getAccessToken](OfficialAccount_ShakeAround_Client.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L30)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpGet](OfficialAccount_ShakeAround_Client.default.md#httpget)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpPost](OfficialAccount_ShakeAround_Client.default.md#httppost)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpPostJson](OfficialAccount_ShakeAround_Client.default.md#httppostjson)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpUpload](OfficialAccount_ShakeAround_Client.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L51)

___

### register

▸ **register**(`data`): `Promise`<`any`\>

申请开通摇一摇

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[register](OfficialAccount_ShakeAround_Client.default.md#register)

#### Defined in

[OfficialAccount/ShakeAround/Client.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/Client.ts#L20)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[request](OfficialAccount_ShakeAround_Client.default.md#request)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[requestRaw](OfficialAccount_ShakeAround_Client.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_ShakeAround_ShakeAround.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_ShakeAround_ShakeAround.default.md)

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[setAccessToken](OfficialAccount_ShakeAround_Client.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(): `Promise`<`any`\>

查询审核状态

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[status](OfficialAccount_ShakeAround_Client.default.md#status)

#### Defined in

[OfficialAccount/ShakeAround/Client.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/Client.ts#L11)

___

### user

▸ **user**(`ticket?`, `needPoi?`): `Promise`<`any`\>

获取摇一摇的设备及用户信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ticket` | `string` | `''` | 摇周边业务的ticket，可在摇到的URL中得到 |
| `needPoi` | `Boolean` | `false` | 是否需要返回门店poi_id，传1则返回，否则不返回，默认：false |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[user](OfficialAccount_ShakeAround_Client.default.md#user)

#### Defined in

[OfficialAccount/ShakeAround/Client.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/Client.ts#L30)

___

### userWithPoi

▸ **userWithPoi**(`ticket?`): `Promise`<`any`\>

获取摇一摇的设备及用户信息，返回门店poi_id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ticket` | `string` | `''` | 摇周边业务的ticket，可在摇到的URL中得到 |

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[userWithPoi](OfficialAccount_ShakeAround_Client.default.md#userwithpoi)

#### Defined in

[OfficialAccount/ShakeAround/Client.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/Client.ts#L45)
