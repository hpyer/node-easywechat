[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Schedule/ScheduleClient](../modules/Work_Schedule_ScheduleClient.md) / default

# Class: default

[Work/Schedule/ScheduleClient](../modules/Work_Schedule_ScheduleClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_Schedule_ScheduleClient.default.md#constructor)

### Properties

- [accessToken](Work_Schedule_ScheduleClient.default.md#accesstoken)
- [app](Work_Schedule_ScheduleClient.default.md#app)

### Methods

- [add](Work_Schedule_ScheduleClient.default.md#add)
- [delete](Work_Schedule_ScheduleClient.default.md#delete)
- [doRequest](Work_Schedule_ScheduleClient.default.md#dorequest)
- [get](Work_Schedule_ScheduleClient.default.md#get)
- [getAccessToken](Work_Schedule_ScheduleClient.default.md#getaccesstoken)
- [getByCalendar](Work_Schedule_ScheduleClient.default.md#getbycalendar)
- [httpGet](Work_Schedule_ScheduleClient.default.md#httpget)
- [httpPost](Work_Schedule_ScheduleClient.default.md#httppost)
- [httpPostJson](Work_Schedule_ScheduleClient.default.md#httppostjson)
- [httpUpload](Work_Schedule_ScheduleClient.default.md#httpupload)
- [request](Work_Schedule_ScheduleClient.default.md#request)
- [requestRaw](Work_Schedule_ScheduleClient.default.md#requestraw)
- [setAccessToken](Work_Schedule_ScheduleClient.default.md#setaccesstoken)
- [update](Work_Schedule_ScheduleClient.default.md#update)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L14)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L15)

## Methods

### add

▸ **add**(`schedule`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedule` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Schedule/ScheduleClient.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Schedule/ScheduleClient.ts#L9)

___

### delete

▸ **delete**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Schedule/ScheduleClient.ts:41](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Schedule/ScheduleClient.ts#L41)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L114)

___

### get

▸ **get**(`ids`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Schedule/ScheduleClient.ts:25](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Schedule/ScheduleClient.ts#L25)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

___

### getByCalendar

▸ **getByCalendar**(`calendarId`, `offset?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `calendarId` | `string` | `undefined` |
| `offset` | `number` | `0` |
| `limit` | `number` | `500` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Schedule/ScheduleClient.ts:32](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Schedule/ScheduleClient.ts#L32)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](Work_Schedule_ScheduleClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_Schedule_ScheduleClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`id`, `schedule`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `schedule` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Schedule/ScheduleClient.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Schedule/ScheduleClient.ts#L16)
