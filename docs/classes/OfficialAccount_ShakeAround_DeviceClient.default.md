[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/ShakeAround/DeviceClient](../modules/OfficialAccount_ShakeAround_DeviceClient.md) / default

# Class: default

[OfficialAccount/ShakeAround/DeviceClient](../modules/OfficialAccount_ShakeAround_DeviceClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_ShakeAround_DeviceClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_ShakeAround_DeviceClient.default.md#accesstoken)
- [app](OfficialAccount_ShakeAround_DeviceClient.default.md#app)

### Methods

- [apply](OfficialAccount_ShakeAround_DeviceClient.default.md#apply)
- [bindPoi](OfficialAccount_ShakeAround_DeviceClient.default.md#bindpoi)
- [bindThirdPoi](OfficialAccount_ShakeAround_DeviceClient.default.md#bindthirdpoi)
- [doRequest](OfficialAccount_ShakeAround_DeviceClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_ShakeAround_DeviceClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_ShakeAround_DeviceClient.default.md#httpget)
- [httpPost](OfficialAccount_ShakeAround_DeviceClient.default.md#httppost)
- [httpPostJson](OfficialAccount_ShakeAround_DeviceClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_ShakeAround_DeviceClient.default.md#httpupload)
- [list](OfficialAccount_ShakeAround_DeviceClient.default.md#list)
- [listByApplyId](OfficialAccount_ShakeAround_DeviceClient.default.md#listbyapplyid)
- [listByIds](OfficialAccount_ShakeAround_DeviceClient.default.md#listbyids)
- [request](OfficialAccount_ShakeAround_DeviceClient.default.md#request)
- [requestRaw](OfficialAccount_ShakeAround_DeviceClient.default.md#requestraw)
- [search](OfficialAccount_ShakeAround_DeviceClient.default.md#search)
- [setAccessToken](OfficialAccount_ShakeAround_DeviceClient.default.md#setaccesstoken)
- [status](OfficialAccount_ShakeAround_DeviceClient.default.md#status)
- [update](OfficialAccount_ShakeAround_DeviceClient.default.md#update)

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

### apply

▸ **apply**(`data`): `Promise`<`any`\>

申请设备 ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | 子参数： quantity，申请数量；apply_reason，申请理由；comment，备注，可选；poi_id，门店ID，可选； |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:12](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L12)

___

### bindPoi

▸ **bindPoi**(`deviceIdentifier`, `poiId`): `Promise`<`any`\>

设备与门店关联

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifier` | `object` | 设备标识 |
| `poiId` | `number` | 门店id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:46](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L46)

___

### bindThirdPoi

▸ **bindThirdPoi**(`deviceIdentifier`, `poiId`, `appId`): `Promise`<`any`\>

设备与第三方门店关联

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifier` | `object` | 设备标识 |
| `poiId` | `number` | 门店id |
| `appId` | `string` | 关联门店所归属的公众账号的 app_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:60](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L60)

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

▸ **list**(`lastId`, `count`): `Promise`<`any`\>

分页批量取回设备数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lastId` | `number` | 前一次查询列表末尾的设备编号 device_id |
| `count` | `number` | 设备数量，不能超过50个 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:92](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L92)

___

### listByApplyId

▸ **listByApplyId**(`applyId`, `lastId`, `count`): `Promise`<`any`\>

根据申请时的批次 ID 分页批量取回设备数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `applyId` | `number` | 批次ID |
| `lastId` | `number` | 前一次查询列表末尾的设备编号 device_id |
| `count` | `number` | 设备数量，不能超过50个 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:107](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L107)

___

### listByIds

▸ **listByIds**(`deviceIdentifiers`): `Promise`<`any`\>

根据设备id批量取回设备数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifiers` | `object`[] | 设备ID列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:79](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L79)

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

### search

▸ `Protected` **search**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:70](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L70)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_ShakeAround_DeviceClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_ShakeAround_DeviceClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(`applyId`): `Promise`<`any`\>

查询申请的审核状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `applyId` | `string` | 申请id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L21)

___

### update

▸ **update**(`deviceIdentifier`, `comment`): `Promise`<`any`\>

编辑设备信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceIdentifier` | `object` | 设备标识 |
| `comment` | `string` | 设备备注 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/ShakeAround/DeviceClient.ts:33](https://github.com/hpyer/node-easywechat/blob/b017670/src/OfficialAccount/ShakeAround/DeviceClient.ts#L33)
