[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/User/TagClient](../modules/Work_User_TagClient.md) / default

# Class: default

[Work/User/TagClient](../modules/Work_User_TagClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_User_TagClient.default.md#constructor)

### Properties

- [accessToken](Work_User_TagClient.default.md#accesstoken)
- [app](Work_User_TagClient.default.md#app)

### Methods

- [create](Work_User_TagClient.default.md#create)
- [delete](Work_User_TagClient.default.md#delete)
- [doRequest](Work_User_TagClient.default.md#dorequest)
- [get](Work_User_TagClient.default.md#get)
- [getAccessToken](Work_User_TagClient.default.md#getaccesstoken)
- [httpGet](Work_User_TagClient.default.md#httpget)
- [httpPost](Work_User_TagClient.default.md#httppost)
- [httpPostJson](Work_User_TagClient.default.md#httppostjson)
- [httpUpload](Work_User_TagClient.default.md#httpupload)
- [list](Work_User_TagClient.default.md#list)
- [request](Work_User_TagClient.default.md#request)
- [requestRaw](Work_User_TagClient.default.md#requestraw)
- [setAccessToken](Work_User_TagClient.default.md#setaccesstoken)
- [tagDepartments](Work_User_TagClient.default.md#tagdepartments)
- [tagOrUntagUsers](Work_User_TagClient.default.md#tagoruntagusers)
- [tagUsers](Work_User_TagClient.default.md#tagusers)
- [untagDepartments](Work_User_TagClient.default.md#untagdepartments)
- [untagUsers](Work_User_TagClient.default.md#untagusers)
- [update](Work_User_TagClient.default.md#update)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L15)

## Methods

### create

▸ **create**(`tagName`, `tagId?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagName` | `string` | `undefined` |
| `tagId` | `number` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L13)

___

### delete

▸ **delete**(`tagId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:29](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L29)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L114)

___

### get

▸ **get**(`tagId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:36](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L36)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L30)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L51)

___

### list

▸ **list**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:8](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L8)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_User_TagClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_User_TagClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### tagDepartments

▸ **tagDepartments**(`tagId`, `partyList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `partyList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:48](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L48)

___

### tagOrUntagUsers

▸ `Protected` **tagOrUntagUsers**(`endpoint`, `tagId`, `userList?`, `partyList?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `tagId` | `number` | `undefined` |
| `userList` | `string`[] | `[]` |
| `partyList` | `string`[] | `[]` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:63](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L63)

___

### tagUsers

▸ **tagUsers**(`tagId`, `userList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `userList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:43](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L43)

___

### untagDepartments

▸ **untagDepartments**(`tagId`, `partyList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `partyList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:58](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L58)

___

### untagUsers

▸ **untagUsers**(`tagId`, `userList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `userList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:53](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L53)

___

### update

▸ **update**(`tagId`, `tagName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `tagName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/User/TagClient.ts:21](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Work/User/TagClient.ts#L21)
