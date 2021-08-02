[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/ExternalContact/SchoolClient](../modules/Work_ExternalContact_SchoolClient.md) / default

# Class: default

[Work/ExternalContact/SchoolClient](../modules/Work_ExternalContact_SchoolClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_ExternalContact_SchoolClient.default.md#constructor)

### Properties

- [accessToken](Work_ExternalContact_SchoolClient.default.md#accesstoken)
- [app](Work_ExternalContact_SchoolClient.default.md#app)

### Methods

- [batchCreateParents](Work_ExternalContact_SchoolClient.default.md#batchcreateparents)
- [batchCreateStudents](Work_ExternalContact_SchoolClient.default.md#batchcreatestudents)
- [batchDeleteParents](Work_ExternalContact_SchoolClient.default.md#batchdeleteparents)
- [batchDeleteStudents](Work_ExternalContact_SchoolClient.default.md#batchdeletestudents)
- [batchUpdateParents](Work_ExternalContact_SchoolClient.default.md#batchupdateparents)
- [batchUpdateStudents](Work_ExternalContact_SchoolClient.default.md#batchupdatestudents)
- [convertOpenid](Work_ExternalContact_SchoolClient.default.md#convertopenid)
- [createDepartment](Work_ExternalContact_SchoolClient.default.md#createdepartment)
- [createParent](Work_ExternalContact_SchoolClient.default.md#createparent)
- [createStudent](Work_ExternalContact_SchoolClient.default.md#createstudent)
- [deleteDepartment](Work_ExternalContact_SchoolClient.default.md#deletedepartment)
- [deleteParent](Work_ExternalContact_SchoolClient.default.md#deleteparent)
- [deleteStudent](Work_ExternalContact_SchoolClient.default.md#deletestudent)
- [doRequest](Work_ExternalContact_SchoolClient.default.md#dorequest)
- [filterNullValue](Work_ExternalContact_SchoolClient.default.md#filternullvalue)
- [getAccessToken](Work_ExternalContact_SchoolClient.default.md#getaccesstoken)
- [getDepartments](Work_ExternalContact_SchoolClient.default.md#getdepartments)
- [getStudents](Work_ExternalContact_SchoolClient.default.md#getstudents)
- [getSubscribeMode](Work_ExternalContact_SchoolClient.default.md#getsubscribemode)
- [getSubscribeQrCode](Work_ExternalContact_SchoolClient.default.md#getsubscribeqrcode)
- [getTeacherViewMode](Work_ExternalContact_SchoolClient.default.md#getteacherviewmode)
- [getUser](Work_ExternalContact_SchoolClient.default.md#getuser)
- [httpGet](Work_ExternalContact_SchoolClient.default.md#httpget)
- [httpPost](Work_ExternalContact_SchoolClient.default.md#httppost)
- [httpPostJson](Work_ExternalContact_SchoolClient.default.md#httppostjson)
- [httpUpload](Work_ExternalContact_SchoolClient.default.md#httpupload)
- [request](Work_ExternalContact_SchoolClient.default.md#request)
- [requestRaw](Work_ExternalContact_SchoolClient.default.md#requestraw)
- [setAccessToken](Work_ExternalContact_SchoolClient.default.md#setaccesstoken)
- [setSubscribeMode](Work_ExternalContact_SchoolClient.default.md#setsubscribemode)
- [setTeacherViewMode](Work_ExternalContact_SchoolClient.default.md#setteacherviewmode)
- [updateDepartment](Work_ExternalContact_SchoolClient.default.md#updatedepartment)
- [updateParent](Work_ExternalContact_SchoolClient.default.md#updateparent)
- [updateStudent](Work_ExternalContact_SchoolClient.default.md#updatestudent)

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

### batchCreateParents

▸ **batchCreateParents**(`parents`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parents` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:145](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L145)

___

### batchCreateStudents

▸ **batchCreateStudents**(`students`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `students` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:89](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L89)

___

### batchDeleteParents

▸ **batchDeleteParents**(`userIdList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIdList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:159](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L159)

___

### batchDeleteStudents

▸ **batchDeleteStudents**(`userIdList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIdList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:103](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L103)

___

### batchUpdateParents

▸ **batchUpdateParents**(`parents`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parents` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:152](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L152)

___

### batchUpdateStudents

▸ **batchUpdateStudents**(`students`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `students` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:96](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L96)

___

### convertOpenid

▸ **convertOpenid**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:210](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L210)

___

### createDepartment

▸ **createDepartment**(`name`, `parentId`, `type`, `standardGrade`, `registerYear`, `order`, `departmentAdmins`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `parentId` | `number` |
| `type` | `number` |
| `standardGrade` | `number` |
| `registerYear` | `number` |
| `order` | `number` |
| `departmentAdmins` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L9)

___

### createParent

▸ **createParent**(`userId`, `mobile`, `toInvite`, `children`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `mobile` | `string` |
| `toInvite` | `boolean` |
| `children` | `object`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:110](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L110)

___

### createStudent

▸ **createStudent**(`userId`, `name`, `department`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `name` | `string` |
| `department` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L55)

___

### deleteDepartment

▸ **deleteDepartment**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:38](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L38)

___

### deleteParent

▸ **deleteParent**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:138](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L138)

___

### deleteStudent

▸ **deleteStudent**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:82](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L82)

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

### filterNullValue

▸ `Protected` **filterNullValue**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Object`

#### Defined in

[Work/ExternalContact/SchoolClient.ts:217](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L217)

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

### getDepartments

▸ **getDepartments**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L45)

___

### getStudents

▸ **getStudents**(`departmentId`, `fetchChild`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `departmentId` | `number` |
| `fetchChild` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:173](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L173)

___

### getSubscribeMode

▸ **getSubscribeMode**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:193](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L193)

___

### getSubscribeQrCode

▸ **getSubscribeQrCode**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:181](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L181)

___

### getTeacherViewMode

▸ **getTeacherViewMode**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:205](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L205)

___

### getUser

▸ **getUser**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:166](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L166)

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

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_ExternalContact_SchoolClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_ExternalContact_SchoolClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### setSubscribeMode

▸ **setSubscribeMode**(`mode`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:186](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L186)

___

### setTeacherViewMode

▸ **setTeacherViewMode**(`mode`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:198](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L198)

___

### updateDepartment

▸ **updateDepartment**(`id`, `name`, `parentId`, `type`, `standardGrade`, `registerYear`, `order`, `departmentAdmins`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `name` | `string` |
| `parentId` | `number` |
| `type` | `number` |
| `standardGrade` | `number` |
| `registerYear` | `number` |
| `order` | `number` |
| `departmentAdmins` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L23)

___

### updateParent

▸ **updateParent**(`userId`, `mobile?`, `newUserId?`, `children?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userId` | `string` | `undefined` |
| `mobile` | `string` | `null` |
| `newUserId` | `string` | `null` |
| `children` | `string`[] | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:121](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L121)

___

### updateStudent

▸ **updateStudent**(`userId`, `name?`, `newUserId?`, `department?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userId` | `string` | `undefined` |
| `name` | `string` | `null` |
| `newUserId` | `string` | `null` |
| `department` | `string`[] | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/SchoolClient.ts:65](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/ExternalContact/SchoolClient.ts#L65)
