[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/User/TagClient](../modules/OfficialAccount_User_TagClient.md) / default

# Class: default

[OfficialAccount/User/TagClient](../modules/OfficialAccount_User_TagClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_User_TagClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_User_TagClient.default.md#accesstoken)
- [app](OfficialAccount_User_TagClient.default.md#app)

### Methods

- [create](OfficialAccount_User_TagClient.default.md#create)
- [delete](OfficialAccount_User_TagClient.default.md#delete)
- [doRequest](OfficialAccount_User_TagClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_User_TagClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_User_TagClient.default.md#httpget)
- [httpPost](OfficialAccount_User_TagClient.default.md#httppost)
- [httpPostJson](OfficialAccount_User_TagClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_User_TagClient.default.md#httpupload)
- [list](OfficialAccount_User_TagClient.default.md#list)
- [request](OfficialAccount_User_TagClient.default.md#request)
- [requestRaw](OfficialAccount_User_TagClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_User_TagClient.default.md#setaccesstoken)
- [tagUsers](OfficialAccount_User_TagClient.default.md#tagusers)
- [untagUsers](OfficialAccount_User_TagClient.default.md#untagusers)
- [update](OfficialAccount_User_TagClient.default.md#update)
- [userTags](OfficialAccount_User_TagClient.default.md#usertags)
- [usersOfTag](OfficialAccount_User_TagClient.default.md#usersoftag)

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

▸ **create**(`name`): `Promise`<`any`\>

创建标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 标签名称 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L11)

___

### delete

▸ **delete**(`id`): `Promise`<`any`\>

删除标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 标签id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:47](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L47)

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

### list

▸ **list**(): `Promise`<`any`\>

获取所有标签

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L23)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_User_TagClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_User_TagClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)

___

### tagUsers

▸ **tagUsers**(`openid_list`, `tagid`): `Promise`<`any`\>

批量为用户添加标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid_list` | `string`[] | 用户openid列表 |
| `tagid` | `number` | 标签id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L85)

___

### untagUsers

▸ **untagUsers**(`openid_list`, `tagid`): `Promise`<`any`\>

批量为用户移除标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid_list` | `string`[] | 用户openid列表 |
| `tagid` | `number` | 标签id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:98](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L98)

___

### update

▸ **update**(`id`, `name`): `Promise`<`any`\>

修改标签信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 标签id |
| `name` | `string` | 标签名称 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:33](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L33)

___

### userTags

▸ **userTags**(`openid`): `Promise`<`any`\>

获取指定 openid 用户所属的标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid` | `string` | 用户openid |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:60](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L60)

___

### usersOfTag

▸ **usersOfTag**(`tagid`, `next_openid?`): `Promise`<`any`\>

获取标签下用户列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tagid` | `number` | `undefined` | 标签id |
| `next_openid` | `string` | `''` | 拉取列表最后一个用户的openid，默认：'' |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/TagClient.ts:72](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/TagClient.ts#L72)
