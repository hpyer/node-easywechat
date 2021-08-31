[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/User/UserClient](../modules/OfficialAccount_User_UserClient.md) / default

# Class: default

[OfficialAccount/User/UserClient](../modules/OfficialAccount_User_UserClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_User_UserClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_User_UserClient.default.md#accesstoken)
- [app](OfficialAccount_User_UserClient.default.md#app)

### Methods

- [blacklist](OfficialAccount_User_UserClient.default.md#blacklist)
- [block](OfficialAccount_User_UserClient.default.md#block)
- [changeOpenid](OfficialAccount_User_UserClient.default.md#changeopenid)
- [doRequest](OfficialAccount_User_UserClient.default.md#dorequest)
- [get](OfficialAccount_User_UserClient.default.md#get)
- [getAccessToken](OfficialAccount_User_UserClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_User_UserClient.default.md#httpget)
- [httpPost](OfficialAccount_User_UserClient.default.md#httppost)
- [httpPostJson](OfficialAccount_User_UserClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_User_UserClient.default.md#httpupload)
- [list](OfficialAccount_User_UserClient.default.md#list)
- [remark](OfficialAccount_User_UserClient.default.md#remark)
- [request](OfficialAccount_User_UserClient.default.md#request)
- [requestRaw](OfficialAccount_User_UserClient.default.md#requestraw)
- [select](OfficialAccount_User_UserClient.default.md#select)
- [setAccessToken](OfficialAccount_User_UserClient.default.md#setaccesstoken)
- [unblock](OfficialAccount_User_UserClient.default.md#unblock)

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

### blacklist

▸ **blacklist**(`begin_openid?`): `Promise`<`any`\>

获取黑名单

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `begin_openid` | `string` | `''` | 第一个拉取的OPENID，不填默认从头开始拉取，默认：'' |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:67](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L67)

___

### block

▸ **block**(`openid_list`): `Promise`<`any`\>

拉黑用户

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid_list` | `string`[] | 用户openid列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:78](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L78)

___

### changeOpenid

▸ **changeOpenid**(`from_appid`, `openid_list`): `Promise`<`any`\>

账号迁移 openid 转换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from_appid` | `string` | 原帐号app_id |
| `openid_list` | `string`[] | 原账号用户openid列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:101](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L101)

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

### get

▸ **get**(`openid`, `lang?`): `Promise`<`any`\>

获取单个用户信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `openid` | `string` | `undefined` | 用户openid |
| `lang` | `string` | `'zh_CN'` | 语言，默认：zh_CN |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:12](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L12)

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

▸ **list**(`next_openid?`): `Promise`<`any`\>

获取用户列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `next_openid` | `string` | `''` | 第一个拉取的OPENID，不填默认从头开始拉取，默认：'' |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:43](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L43)

___

### remark

▸ **remark**(`openid`, `remark`): `Promise`<`any`\>

修改用户备注

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid` | `string` | 用户openid |
| `remark` | `string` | 备注 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:55](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L55)

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

### select

▸ **select**(`openids`, `lang?`): `Promise`<`any`\>

获取多个用户信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `openids` | `string`[] | `undefined` | 用户openid列表 |
| `lang` | `string` | `'zh_CN'` | 语言，默认：zh_CN |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:25](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L25)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_User_UserClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_User_UserClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)

___

### unblock

▸ **unblock**(`openid_list`): `Promise`<`any`\>

取消拉黑用户

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid_list` | `string`[] | 用户openid列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/User/UserClient.ts:89](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/OfficialAccount/User/UserClient.ts#L89)
