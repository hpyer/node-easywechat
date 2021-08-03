[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/DataCube/DataCubeClient](../modules/MiniProgram_DataCube_DataCubeClient.md) / default

# Class: default

[MiniProgram/DataCube/DataCubeClient](../modules/MiniProgram_DataCube_DataCubeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_DataCube_DataCubeClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_DataCube_DataCubeClient.default.md#accesstoken)
- [app](MiniProgram_DataCube_DataCubeClient.default.md#app)

### Methods

- [dailyRetainInfo](MiniProgram_DataCube_DataCubeClient.default.md#dailyretaininfo)
- [dailyVisitTrend](MiniProgram_DataCube_DataCubeClient.default.md#dailyvisittrend)
- [devicePerformanceData](MiniProgram_DataCube_DataCubeClient.default.md#deviceperformancedata)
- [doRequest](MiniProgram_DataCube_DataCubeClient.default.md#dorequest)
- [getAccessToken](MiniProgram_DataCube_DataCubeClient.default.md#getaccesstoken)
- [httpGet](MiniProgram_DataCube_DataCubeClient.default.md#httpget)
- [httpPost](MiniProgram_DataCube_DataCubeClient.default.md#httppost)
- [httpPostJson](MiniProgram_DataCube_DataCubeClient.default.md#httppostjson)
- [httpUpload](MiniProgram_DataCube_DataCubeClient.default.md#httpupload)
- [monthlyRetainInfo](MiniProgram_DataCube_DataCubeClient.default.md#monthlyretaininfo)
- [monthlyVisitTrend](MiniProgram_DataCube_DataCubeClient.default.md#monthlyvisittrend)
- [query](MiniProgram_DataCube_DataCubeClient.default.md#query)
- [request](MiniProgram_DataCube_DataCubeClient.default.md#request)
- [requestRaw](MiniProgram_DataCube_DataCubeClient.default.md#requestraw)
- [setAccessToken](MiniProgram_DataCube_DataCubeClient.default.md#setaccesstoken)
- [summaryTrend](MiniProgram_DataCube_DataCubeClient.default.md#summarytrend)
- [userPortrait](MiniProgram_DataCube_DataCubeClient.default.md#userportrait)
- [visitDistribution](MiniProgram_DataCube_DataCubeClient.default.md#visitdistribution)
- [visitPage](MiniProgram_DataCube_DataCubeClient.default.md#visitpage)
- [weeklyRetainInfo](MiniProgram_DataCube_DataCubeClient.default.md#weeklyretaininfo)
- [weeklyVisitTrend](MiniProgram_DataCube_DataCubeClient.default.md#weeklyvisittrend)

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

### dailyRetainInfo

▸ **dailyRetainInfo**(`from`, `to`): `Promise`<`any`\>

访问日留存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:63](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L63)

___

### dailyVisitTrend

▸ **dailyVisitTrend**(`from`, `to`): `Promise`<`any`\>

访问日趋势

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L23)

___

### devicePerformanceData

▸ **devicePerformanceData**(`from`, `to`, `module`, `networktype?`, `device_level?`, `device?`): `Promise`<`any`\>

获取小程序启动性能，运行性能等数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `string` | `undefined` | 开始日期，格式：20170313 |
| `to` | `string` | `undefined` | 结束日期，格式：20170313 |
| `module` | `string` | `undefined` | - |
| `networktype` | `string` | `'-1'` | - |
| `device_level` | `string` | `'-1'` | - |
| `device` | `string` | `'-1'` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:113](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L113)

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

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L30)

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

### monthlyRetainInfo

▸ **monthlyRetainInfo**(`from`, `to`): `Promise`<`any`\>

访问月留存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，为自然月第一天，格式：20170313 |
| `to` | `string` | 结束日期，为自然月最后一天，限定查询一个月数据，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:83](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L83)

___

### monthlyVisitTrend

▸ **monthlyVisitTrend**(`from`, `to`): `Promise`<`any`\>

访问月趋势

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，为自然月第一天，格式：20170313 |
| `to` | `string` | 结束日期，为自然月最后一天，限定查询一个月的数据，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:43](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L43)

___

### query

▸ `Protected` **query**(`api`, `from`, `to`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `from` | `string` |
| `to` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:130](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L130)

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

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_DataCube_DataCubeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_DataCube_DataCubeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### summaryTrend

▸ **summaryTrend**(`from`, `to`): `Promise`<`any`\>

概况趋势

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L13)

___

### userPortrait

▸ **userPortrait**(`from`, `to`): `Promise`<`any`\>

用户画像分布数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:103](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L103)

___

### visitDistribution

▸ **visitDistribution**(`from`, `to`): `Promise`<`any`\>

访问分布

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:53](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L53)

___

### visitPage

▸ **visitPage**(`from`, `to`): `Promise`<`any`\>

访问页面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，格式：20170313 |
| `to` | `string` | 结束日期，限定查询1天数据，允许的最大值为昨天，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:93](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L93)

___

### weeklyRetainInfo

▸ **weeklyRetainInfo**(`from`, `to`): `Promise`<`any`\>

访问周留存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，为周一日期，格式：20170313 |
| `to` | `string` | 结束日期，为周日日期，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:73](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L73)

___

### weeklyVisitTrend

▸ **weeklyVisitTrend**(`from`, `to`): `Promise`<`any`\>

访问周趋势

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 开始日期，为周一日期，格式：20170313 |
| `to` | `string` | 结束日期，为周日日期，限定查询一周数据，格式：20170313 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/DataCube/DataCubeClient.ts:33](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/MiniProgram/DataCube/DataCubeClient.ts#L33)
