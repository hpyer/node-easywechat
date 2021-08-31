[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Menu/MenuClient](../modules/OfficialAccount_Menu_MenuClient.md) / default

# Class: default

[OfficialAccount/Menu/MenuClient](../modules/OfficialAccount_Menu_MenuClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Menu_MenuClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Menu_MenuClient.default.md#accesstoken)
- [app](OfficialAccount_Menu_MenuClient.default.md#app)

### Methods

- [create](OfficialAccount_Menu_MenuClient.default.md#create)
- [current](OfficialAccount_Menu_MenuClient.default.md#current)
- [delete](OfficialAccount_Menu_MenuClient.default.md#delete)
- [doRequest](OfficialAccount_Menu_MenuClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_Menu_MenuClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Menu_MenuClient.default.md#httpget)
- [httpPost](OfficialAccount_Menu_MenuClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Menu_MenuClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Menu_MenuClient.default.md#httpupload)
- [list](OfficialAccount_Menu_MenuClient.default.md#list)
- [match](OfficialAccount_Menu_MenuClient.default.md#match)
- [request](OfficialAccount_Menu_MenuClient.default.md#request)
- [requestRaw](OfficialAccount_Menu_MenuClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Menu_MenuClient.default.md#setaccesstoken)

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

### create

▸ **create**(`button`, `matchrule?`): `Promise`<`any`\>

添加菜单

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `button` | `object` | `undefined` | 菜单信息，只传该参数表示黄金普通菜单 |
| `matchrule` | `object` | `null` | 个性化菜单所需参数，默认：null |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Menu/MenuClient.ts:28](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Menu/MenuClient.ts#L28)

___

### current

▸ **current**(): `Promise`<`any`\>

获取当前菜单

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Menu/MenuClient.ts:18](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Menu/MenuClient.ts#L18)

___

### delete

▸ **delete**(`menuid?`): `Promise`<`any`\>

删除菜单

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `menuid` | `Number` | `null` | 菜单id，默认：null表示删除全部菜单 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Menu/MenuClient.ts:46](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Menu/MenuClient.ts#L46)

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

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

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

### list

▸ **list**(): `Promise`<`any`\>

读取（查询）已设置菜单

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Menu/MenuClient.ts:10](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Menu/MenuClient.ts#L10)

___

### match

▸ **match**(`user_id`): `Promise`<`any`\>

测试个性化菜单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | 用户的openid |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Menu/MenuClient.ts:61](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/Menu/MenuClient.ts#L61)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Menu_MenuClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Menu_MenuClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)
