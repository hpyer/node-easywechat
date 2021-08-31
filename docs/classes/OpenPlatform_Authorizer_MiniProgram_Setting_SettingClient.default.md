[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient](../modules/OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.md) / default

# Class: default

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient](../modules/OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#accesstoken)
- [app](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#app)

### Methods

- [addCategories](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#addcategories)
- [deleteCategories](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#deletecategories)
- [doRequest](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#dorequest)
- [getAccessToken](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getaccesstoken)
- [getAllCategories](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getallcategories)
- [getCategories](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getcategories)
- [getDisplayableOfficialAccounts](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getdisplayableofficialaccounts)
- [getDisplayedOfficialAccount](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getdisplayedofficialaccount)
- [getNicknameAuditStatus](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getnicknameauditstatus)
- [getSearchStatus](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#getsearchstatus)
- [httpGet](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#httpget)
- [httpPost](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#httppost)
- [httpPostJson](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#httppostjson)
- [httpUpload](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#httpupload)
- [isAvailableNickname](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#isavailablenickname)
- [request](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#request)
- [requestRaw](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#requestraw)
- [setAccessToken](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#setaccesstoken)
- [setDisplayedOfficialAccount](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#setdisplayedofficialaccount)
- [setNickname](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#setnickname)
- [setSearchable](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#setsearchable)
- [setUnsearchable](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#setunsearchable)
- [updateCategory](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md#updatecategory)

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

### addCategories

▸ **addCategories**(`categories`): `Promise`<`any`\>

添加类目

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `categories` | `object`[] | 类目信息列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L20)

___

### deleteCategories

▸ **deleteCategories**(`firstId`, `secondId`): `Promise`<`any`\>

删除类目

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstId` | `number` | 一级类目 ID |
| `secondId` | `number` | 二级类目 ID |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L32)

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

### getAllCategories

▸ **getAllCategories**(): `Promise`<`any`\>

获取可以设置的所有类目

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L11)

___

### getCategories

▸ **getCategories**(): `Promise`<`any`\>

获取已设置的所有类目

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:43](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L43)

___

### getDisplayableOfficialAccounts

▸ **getDisplayableOfficialAccounts**(`page`, `num`): `Promise`<`any`\>

获取可以用来设置的公众号列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | `number` | 页码，从 0 开始 |
| `num` | `number` | 每页记录数，最大为 20 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:152](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L152)

___

### getDisplayedOfficialAccount

▸ **getDisplayedOfficialAccount**(): `Promise`<`any`\>

获取展示的公众号信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:130](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L130)

___

### getNicknameAuditStatus

▸ **getNicknameAuditStatus**(`auditId`): `Promise`<`any`\>

查询改名审核状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `auditId` | `string` | 审核id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:81](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L81)

___

### getSearchStatus

▸ **getSearchStatus**(): `Promise`<`any`\>

查询隐私设置

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:102](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L102)

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

### isAvailableNickname

▸ **isAvailableNickname**(`nickname`): `Promise`<`any`\>

微信认证名称检测

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nickname` | `string` | 名称（昵称） |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:92](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L92)

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

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Authorizer_MiniProgram_Setting_SettingClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### setDisplayedOfficialAccount

▸ **setDisplayedOfficialAccount**(`appid?`): `Promise`<`any`\>

设置展示的公众号信息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appid` | `string` | `null` | 传入新的公众号 appid表示开启，否则关闭 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:139](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L139)

___

### setNickname

▸ **setNickname**(`nickname`, `idCardMediaId?`, `licenseMediaId?`, `otherStuffs?`): `Promise`<`any`\>

设置名称

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nickname` | `string` | `undefined` | 昵称 |
| `idCardMediaId` | `string` | `''` | 身份证照片 mediaid |
| `licenseMediaId` | `string` | `''` | 组织机构代码证或营业执照 mediaid |
| `otherStuffs` | `string`[] | `[]` | 其它证明材料 mediaid |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:64](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L64)

___

### setSearchable

▸ **setSearchable**(): `Promise`<`any`\>

设置为可搜索

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:110](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L110)

___

### setUnsearchable

▸ **setUnsearchable**(): `Promise`<`any`\>

设置为不可搜索

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:120](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L120)

___

### updateCategory

▸ **updateCategory**(`category`): `Promise`<`any`\>

修改类目资质信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category` | `object` | 类目信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts:52](https://github.com/hpyer/node-easywechat/blob/b017670/src/OpenPlatform/Authorizer/MiniProgram/Setting/SettingClient.ts#L52)
