[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/User/UserClient](../modules/Work_User_UserClient.md) / default

# Class: default

[Work/User/UserClient](../modules/Work_User_UserClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_User_UserClient.default.md#constructor)

### Properties

- [accessToken](Work_User_UserClient.default.md#accesstoken)
- [app](Work_User_UserClient.default.md#app)

### Methods

- [accept](Work_User_UserClient.default.md#accept)
- [batchDelete](Work_User_UserClient.default.md#batchdelete)
- [create](Work_User_UserClient.default.md#create)
- [delete](Work_User_UserClient.default.md#delete)
- [doRequest](Work_User_UserClient.default.md#dorequest)
- [get](Work_User_UserClient.default.md#get)
- [getAccessToken](Work_User_UserClient.default.md#getaccesstoken)
- [getDepartmentUsers](Work_User_UserClient.default.md#getdepartmentusers)
- [getDetailedDepartmentUsers](Work_User_UserClient.default.md#getdetaileddepartmentusers)
- [getInvitationQrCode](Work_User_UserClient.default.md#getinvitationqrcode)
- [httpGet](Work_User_UserClient.default.md#httpget)
- [httpPost](Work_User_UserClient.default.md#httppost)
- [httpPostJson](Work_User_UserClient.default.md#httppostjson)
- [httpUpload](Work_User_UserClient.default.md#httpupload)
- [invite](Work_User_UserClient.default.md#invite)
- [mobileToUserId](Work_User_UserClient.default.md#mobiletouserid)
- [openidToUserId](Work_User_UserClient.default.md#openidtouserid)
- [request](Work_User_UserClient.default.md#request)
- [requestRaw](Work_User_UserClient.default.md#requestraw)
- [setAccessToken](Work_User_UserClient.default.md#setaccesstoken)
- [update](Work_User_UserClient.default.md#update)
- [userIdToOpenid](Work_User_UserClient.default.md#useridtoopenid)

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

### accept

▸ **accept**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:83](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L83)

___

### batchDelete

▸ **batchDelete**(`userIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:31](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L31)

___

### create

▸ **create**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L9)

___

### delete

▸ **delete**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` \| `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L21)

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

▸ **get**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:38](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L38)

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

### getDepartmentUsers

▸ **getDepartmentUsers**(`departmentId`, `fetchChild`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `departmentId` | `number` |
| `fetchChild` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L45)

___

### getDetailedDepartmentUsers

▸ **getDetailedDepartmentUsers**(`departmentId`, `fetchChild`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `departmentId` | `number` |
| `fetchChild` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:53](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L53)

___

### getInvitationQrCode

▸ **getInvitationQrCode**(`sizeType?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sizeType` | `number` | `1` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:95](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L95)

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

### invite

▸ **invite**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:90](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L90)

___

### mobileToUserId

▸ **mobileToUserId**(`mobile`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mobile` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:76](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L76)

___

### openidToUserId

▸ **openidToUserId**(`openid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:69](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L69)

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

▸ **setAccessToken**(`accessToken`): [`default`](Work_User_UserClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_User_UserClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`id`, `data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L14)

___

### userIdToOpenid

▸ **userIdToOpenid**(`userId`, `agentId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `agentId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/UserClient.ts:61](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/User/UserClient.ts#L61)
