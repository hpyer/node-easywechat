[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/ShakeAround/RelationClient](../modules/OfficialAccount_ShakeAround_RelationClient.md) / default

# Class: default

[OfficialAccount/ShakeAround/RelationClient](../modules/OfficialAccount_ShakeAround_RelationClient.md).default

## Hierarchy

- [`default`](OfficialAccount_ShakeAround_Client.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_ShakeAround_RelationClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_ShakeAround_RelationClient.default.md#accesstoken)
- [app](OfficialAccount_ShakeAround_RelationClient.default.md#app)

### Methods

- [bindPages](OfficialAccount_ShakeAround_RelationClient.default.md#bindpages)
- [doRequest](OfficialAccount_ShakeAround_RelationClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_ShakeAround_RelationClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_ShakeAround_RelationClient.default.md#httpget)
- [httpPost](OfficialAccount_ShakeAround_RelationClient.default.md#httppost)
- [httpPostJson](OfficialAccount_ShakeAround_RelationClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_ShakeAround_RelationClient.default.md#httpupload)
- [listByDeviceId](OfficialAccount_ShakeAround_RelationClient.default.md#listbydeviceid)
- [listByPageId](OfficialAccount_ShakeAround_RelationClient.default.md#listbypageid)
- [register](OfficialAccount_ShakeAround_RelationClient.default.md#register)
- [request](OfficialAccount_ShakeAround_RelationClient.default.md#request)
- [requestRaw](OfficialAccount_ShakeAround_RelationClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_ShakeAround_RelationClient.default.md#setaccesstoken)
- [status](OfficialAccount_ShakeAround_RelationClient.default.md#status)
- [user](OfficialAccount_ShakeAround_RelationClient.default.md#user)
- [userWithPoi](OfficialAccount_ShakeAround_RelationClient.default.md#userwithpoi)

## Constructors

### constructor

• **new default**(`app`, `accessToken?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`default`](Core_BaseApplication.default.md) | `undefined` |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) | `null` |

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[constructor](OfficialAccount_ShakeAround_Client.default.md#constructor)

#### Defined in

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[accessToken](OfficialAccount_ShakeAround_Client.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[app](OfficialAccount_ShakeAround_Client.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

## Methods

### bindPages

▸ **bindPages**(`deviceIdentifier`, `pageIds`): `Promise`<`any`\>

配置设备与页面的关联关系

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifier` | `object` | 设备标识 |
| `pageIds` | `number`[] | 页面ID列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/RelationClient.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/RelationClient.ts#L13)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[doRequest](OfficialAccount_ShakeAround_Client.default.md#dorequest)

#### Defined in

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[getAccessToken](OfficialAccount_ShakeAround_Client.default.md#getaccesstoken)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpGet](OfficialAccount_ShakeAround_Client.default.md#httpget)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpPost](OfficialAccount_ShakeAround_Client.default.md#httppost)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpPostJson](OfficialAccount_ShakeAround_Client.default.md#httppostjson)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[httpUpload](OfficialAccount_ShakeAround_Client.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L51)

___

### listByDeviceId

▸ **listByDeviceId**(`deviceIdentifier`): `Promise`<`any`\>

查询指定设备所关联的页面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifier` | `object` | 设备标识 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/RelationClient.ts:25](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/RelationClient.ts#L25)

___

### listByPageId

▸ **listByPageId**(`pageId`, `begin`, `count`): `Promise`<`any`\>

查询指定页面所关联的设备

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageId` | `number` | 页面id |
| `begin` | `number` | 关联关系列表的起始索引值 |
| `count` | `number` | 待查询的关联关系数量，不能超过50个 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/RelationClient.ts:39](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/RelationClient.ts#L39)

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

[OfficialAccount/ShakeAround/Client.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/Client.ts#L20)

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

[default](OfficialAccount_ShakeAround_Client.default.md).[requestRaw](OfficialAccount_ShakeAround_Client.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_ShakeAround_RelationClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_ShakeAround_RelationClient.default.md)

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[setAccessToken](OfficialAccount_ShakeAround_Client.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(): `Promise`<`any`\>

查询审核状态

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](OfficialAccount_ShakeAround_Client.default.md).[status](OfficialAccount_ShakeAround_Client.default.md#status)

#### Defined in

[OfficialAccount/ShakeAround/Client.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/Client.ts#L11)

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

[OfficialAccount/ShakeAround/Client.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/Client.ts#L30)

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

[OfficialAccount/ShakeAround/Client.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/ShakeAround/Client.ts#L45)
