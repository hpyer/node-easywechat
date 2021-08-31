[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/OA/OAClient](../modules/Work_OA_OAClient.md) / default

# Class: default

[Work/OA/OAClient](../modules/Work_OA_OAClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_OA_OAClient.default.md#constructor)

### Properties

- [accessToken](Work_OA_OAClient.default.md#accesstoken)
- [app](Work_OA_OAClient.default.md#app)

### Methods

- [approvalDetail](Work_OA_OAClient.default.md#approvaldetail)
- [approvalNumbers](Work_OA_OAClient.default.md#approvalnumbers)
- [approvalRecords](Work_OA_OAClient.default.md#approvalrecords)
- [approvalTemplate](Work_OA_OAClient.default.md#approvaltemplate)
- [checkinRecords](Work_OA_OAClient.default.md#checkinrecords)
- [checkinRules](Work_OA_OAClient.default.md#checkinrules)
- [createApproval](Work_OA_OAClient.default.md#createapproval)
- [dialRecords](Work_OA_OAClient.default.md#dialrecords)
- [doRequest](Work_OA_OAClient.default.md#dorequest)
- [getAccessToken](Work_OA_OAClient.default.md#getaccesstoken)
- [httpGet](Work_OA_OAClient.default.md#httpget)
- [httpPost](Work_OA_OAClient.default.md#httppost)
- [httpPostJson](Work_OA_OAClient.default.md#httppostjson)
- [httpUpload](Work_OA_OAClient.default.md#httpupload)
- [request](Work_OA_OAClient.default.md#request)
- [requestRaw](Work_OA_OAClient.default.md#requestraw)
- [setAccessToken](Work_OA_OAClient.default.md#setaccesstoken)

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

### approvalDetail

▸ **approvalDetail**(`number`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:57](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L57)

___

### approvalNumbers

▸ **approvalNumbers**(`startTime`, `endTime`, `nextCursor?`, `size?`, `filters?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `number` | `undefined` |
| `endTime` | `number` | `undefined` |
| `nextCursor` | `number` | `0` |
| `size` | `number` | `100` |
| `filters` | `string`[] | `[]` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:44](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L44)

___

### approvalRecords

▸ **approvalRecords**(`startTime`, `endTime`, `nextNumber?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `number` | `undefined` |
| `endTime` | `number` | `undefined` |
| `nextNumber` | `any` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:66](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L66)

___

### approvalTemplate

▸ **approvalTemplate**(`templateId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `templateId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:30](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L30)

___

### checkinRecords

▸ **checkinRecords**(`startTime`, `endTime`, `userList`, `type?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `number` | `undefined` |
| `endTime` | `number` | `undefined` |
| `userList` | `string`[] | `undefined` |
| `type` | `number` | `3` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:8](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L8)

___

### checkinRules

▸ **checkinRules**(`datetime`, `userList`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `datetime` | `number` |
| `userList` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:20](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L20)

___

### createApproval

▸ **createApproval**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:39](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L39)

___

### dialRecords

▸ **dialRecords**(`startTime`, `endTime`, `offset?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startTime` | `number` | `undefined` |
| `endTime` | `number` | `undefined` |
| `offset` | `number` | `0` |
| `limit` | `number` | `100` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/OA/OAClient.ts:77](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Work/OA/OAClient.ts#L77)

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

▸ **setAccessToken**(`accessToken`): [`default`](Work_OA_OAClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_OA_OAClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/BaseClient.ts#L23)
