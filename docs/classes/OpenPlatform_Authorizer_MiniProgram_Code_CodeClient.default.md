[node-easywechat](../README.md) / [Exports](../modules.md) / [OpenPlatform/Authorizer/MiniProgram/Code/CodeClient](../modules/OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.md) / default

# Class: default

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient](../modules/OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#constructor)

### Properties

- [accessToken](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#accesstoken)
- [app](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#app)

### Methods

- [changeVisitStatus](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#changevisitstatus)
- [commit](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#commit)
- [doRequest](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#dorequest)
- [getAccessToken](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getaccesstoken)
- [getAuditStatus](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getauditstatus)
- [getCategory](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getcategory)
- [getGrayRelease](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getgrayrelease)
- [getLatestAuditStatus](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getlatestauditstatus)
- [getPage](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getpage)
- [getQrCode](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getqrcode)
- [getSupportVersion](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#getsupportversion)
- [grayRelease](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#grayrelease)
- [httpGet](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#httpget)
- [httpPost](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#httppost)
- [httpPostJson](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#httppostjson)
- [httpUpload](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#httpupload)
- [queryQuota](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#queryquota)
- [release](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#release)
- [request](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#request)
- [requestRaw](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#requestraw)
- [revertGrayRelease](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#revertgrayrelease)
- [rollbackRelease](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#rollbackrelease)
- [setAccessToken](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#setaccesstoken)
- [setSupportVersion](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#setsupportversion)
- [speedupAudit](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#speedupaudit)
- [submitAudit](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#submitaudit)
- [withdrawAudit](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md#withdrawaudit)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L15)

## Methods

### changeVisitStatus

▸ **changeVisitStatus**(`action`): `Promise`<`any`\>

修改小程序线上代码的可见状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `string` | 设置可访问状态，发布后默认可访问，close 为不可见，open 为可见 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:115](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L115)

___

### commit

▸ **commit**(`templateId`, `extJson`, `version`, `description`): `Promise`<`any`\>

上传小程序代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | 代码模板 ID |
| `extJson` | `string` | 第三方自定义的配置 |
| `version` | `string` | 代码版本号 |
| `description` | `string` | 代码描述 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L15)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L114)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L30)

___

### getAuditStatus

▸ **getAuditStatus**(`auditId`): `Promise`<`any`\>

查询指定发布审核单的审核状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `auditId` | `string` | 提交审核时获得的审核 id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:72](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L72)

___

### getCategory

▸ **getCategory**(): `Promise`<`any`\>

获取审核时可填写的类目信息

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:43](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L43)

___

### getGrayRelease

▸ **getGrayRelease**(): `Promise`<`any`\>

查询当前分阶段发布详情

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:144](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L144)

___

### getLatestAuditStatus

▸ **getLatestAuditStatus**(): `Promise`<`any`\>

查询最新一次提交的审核状态

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:82](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L82)

___

### getPage

▸ **getPage**(): `Promise`<`any`\>

获取已上传的代码的页面列表

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L51)

___

### getQrCode

▸ **getQrCode**(`path`): `Promise`<`any`\>

获取体验版二维码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 扫码后直接进入的页面路径，可同时带上参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:29](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L29)

___

### getSupportVersion

▸ **getSupportVersion**(): `Promise`<`any`\>

查询当前设置的最低基础库版本及各版本用户占比

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:152](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L152)

___

### grayRelease

▸ **grayRelease**(`grayPercentage`): `Promise`<`any`\>

分阶段发布

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grayPercentage` | `string` | 灰度的百分比 1 ~ 100 的整数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:126](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L126)

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

[default](Core_BaseClient.default.md).[httpPost](Core_BaseClient.default.md#httppost)

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

[default](Core_BaseClient.default.md).[httpPostJson](Core_BaseClient.default.md#httppostjson)

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

[default](Core_BaseClient.default.md).[httpUpload](Core_BaseClient.default.md#httpupload)

#### Defined in

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L51)

___

### queryQuota

▸ **queryQuota**(): `Promise`<`any`\>

查询服务商的当月提审限额（quota）和加急次数

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:171](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L171)

___

### release

▸ **release**(): `Promise`<`any`\>

发布已通过审核的小程序

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:90](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L90)

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

[default](Core_BaseClient.default.md).[requestRaw](Core_BaseClient.default.md#requestraw)

#### Defined in

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L104)

___

### revertGrayRelease

▸ **revertGrayRelease**(): `Promise`<`any`\>

取消分阶段发布

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:136](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L136)

___

### rollbackRelease

▸ **rollbackRelease**(): `Promise`<`any`\>

版本回退

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:106](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L106)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OpenPlatform_Authorizer_MiniProgram_Code_CodeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### setSupportVersion

▸ **setSupportVersion**(`version`): `Promise`<`any`\>

设置最低基础库版本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `string` | 为已发布的基础库版本号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:161](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L161)

___

### speedupAudit

▸ **speedupAudit**(`auditId`): `Promise`<`any`\>

加急审核申请

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `auditId` | `string` | 审核ID |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:180](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L180)

___

### submitAudit

▸ **submitAudit**(`itemList`, `feedbackInfo?`, `feedbackStuff?`): `Promise`<`any`\>

提交审核

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `itemList` | `string`[] | `undefined` |
| `feedbackInfo` | `string` | `null` |
| `feedbackStuff` | `string` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:59](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L59)

___

### withdrawAudit

▸ **withdrawAudit**(): `Promise`<`any`\>

撤回当前审核

#### Returns

`Promise`<`any`\>

#### Defined in

[OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts:98](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OpenPlatform/Authorizer/MiniProgram/Code/CodeClient.ts#L98)
