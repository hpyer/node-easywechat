[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/ExternalContact/Client](../modules/Work_ExternalContact_Client.md) / default

# Class: default

[Work/ExternalContact/Client](../modules/Work_ExternalContact_Client.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_ExternalContact_Client.default.md#constructor)

### Properties

- [accessToken](Work_ExternalContact_Client.default.md#accesstoken)
- [app](Work_ExternalContact_Client.default.md#app)

### Methods

- [addCorpTag](Work_ExternalContact_Client.default.md#addcorptag)
- [batchGet](Work_ExternalContact_Client.default.md#batchget)
- [batchGetByUser](Work_ExternalContact_Client.default.md#batchgetbyuser)
- [deleteCorpTag](Work_ExternalContact_Client.default.md#deletecorptag)
- [doRequest](Work_ExternalContact_Client.default.md#dorequest)
- [get](Work_ExternalContact_Client.default.md#get)
- [getAccessToken](Work_ExternalContact_Client.default.md#getaccesstoken)
- [getCorpTags](Work_ExternalContact_Client.default.md#getcorptags)
- [getFollowUsers](Work_ExternalContact_Client.default.md#getfollowusers)
- [getGroupChat](Work_ExternalContact_Client.default.md#getgroupchat)
- [getGroupChats](Work_ExternalContact_Client.default.md#getgroupchats)
- [getTransferResult](Work_ExternalContact_Client.default.md#gettransferresult)
- [getUnassigned](Work_ExternalContact_Client.default.md#getunassigned)
- [httpGet](Work_ExternalContact_Client.default.md#httpget)
- [httpPost](Work_ExternalContact_Client.default.md#httppost)
- [httpPostJson](Work_ExternalContact_Client.default.md#httppostjson)
- [httpUpload](Work_ExternalContact_Client.default.md#httpupload)
- [list](Work_ExternalContact_Client.default.md#list)
- [markTags](Work_ExternalContact_Client.default.md#marktags)
- [remark](Work_ExternalContact_Client.default.md#remark)
- [request](Work_ExternalContact_Client.default.md#request)
- [requestRaw](Work_ExternalContact_Client.default.md#requestraw)
- [resignedTransferCustomer](Work_ExternalContact_Client.default.md#resignedtransfercustomer)
- [setAccessToken](Work_ExternalContact_Client.default.md#setaccesstoken)
- [transfer](Work_ExternalContact_Client.default.md#transfer)
- [transferCustomer](Work_ExternalContact_Client.default.md#transfercustomer)
- [transferGroupChat](Work_ExternalContact_Client.default.md#transfergroupchat)
- [transferResult](Work_ExternalContact_Client.default.md#transferresult)
- [updateCorpTag](Work_ExternalContact_Client.default.md#updatecorptag)

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

### addCorpTag

▸ **addCorpTag**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:134](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L134)

___

### batchGet

▸ **batchGet**(`userId`, `cursor?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userId` | `string` | `undefined` |
| `cursor` | `string` | `''` |
| `limit` | `number` | `1` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L27)

___

### batchGetByUser

▸ **batchGetByUser**(`userId`, `cursor?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userId` | `string` | `undefined` |
| `cursor` | `string` | `''` |
| `limit` | `number` | `1` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:36](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L36)

___

### deleteCorpTag

▸ **deleteCorpTag**(`tagId`, `groupId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `string`[] |
| `groupId` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:153](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L153)

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

▸ **get**(`externalUserId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L20)

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

### getCorpTags

▸ **getCorpTags**(`tagIds`, `groupIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagIds` | `string`[] |
| `groupIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:126](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L126)

___

### getFollowUsers

▸ **getFollowUsers**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:8](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L8)

___

### getGroupChat

▸ **getGroupChat**(`chatId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:119](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L119)

___

### getGroupChats

▸ **getGroupChats**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:114](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L114)

___

### getTransferResult

▸ **getTransferResult**(`externalUserId`, `handoverUserId`, `takeoverUserId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserId` | `string` |
| `handoverUserId` | `string` |
| `takeoverUserId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:105](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L105)

___

### getUnassigned

▸ **getUnassigned**(`pageId?`, `pageSize?`, `cursor?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pageId` | `number` | `0` |
| `pageSize` | `number` | `1000` |
| `cursor` | `string` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:50](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L50)

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

▸ **list**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L13)

___

### markTags

▸ **markTags**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:161](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L161)

___

### remark

▸ **remark**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L45)

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

### resignedTransferCustomer

▸ **resignedTransferCustomer**(`externalUserId`, `handoverUserId`, `takeoverUserId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserId` | `string` |
| `handoverUserId` | `string` |
| `takeoverUserId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:79](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L79)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_ExternalContact_Client.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_ExternalContact_Client.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### transfer

▸ **transfer**(`externalUserId`, `handoverUserId`, `takeoverUserId`, `transferSuccessMessage`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserId` | `string` |
| `handoverUserId` | `string` |
| `takeoverUserId` | `string` |
| `transferSuccessMessage` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:59](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L59)

___

### transferCustomer

▸ **transferCustomer**(`externalUserId`, `handoverUserId`, `takeoverUserId`, `transferSuccessMessage`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserId` | `string` |
| `handoverUserId` | `string` |
| `takeoverUserId` | `string` |
| `transferSuccessMessage` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:69](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L69)

___

### transferGroupChat

▸ **transferGroupChat**(`chatIds`, `newOwner`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatIds` | `string`[] |
| `newOwner` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:88](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L88)

___

### transferResult

▸ **transferResult**(`handoverUserId`, `takeoverUserId`, `cursor?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handoverUserId` | `string` | `undefined` |
| `takeoverUserId` | `string` | `undefined` |
| `cursor` | `string` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:96](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L96)

___

### updateCorpTag

▸ **updateCorpTag**(`id`, `name?`, `order?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `name` | `string` | `null` |
| `order` | `number` | `null` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/ExternalContact/Client.ts:139](https://github.com/hpyer/node-easywechat/blob/b017670/src/Work/ExternalContact/Client.ts#L139)
