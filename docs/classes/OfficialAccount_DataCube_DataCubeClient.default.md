[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/DataCube/DataCubeClient](../modules/OfficialAccount_DataCube_DataCubeClient.md) / default

# Class: default

[OfficialAccount/DataCube/DataCubeClient](../modules/OfficialAccount_DataCube_DataCubeClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_DataCube_DataCubeClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_DataCube_DataCubeClient.default.md#accesstoken)
- [app](OfficialAccount_DataCube_DataCubeClient.default.md#app)

### Methods

- [articleSummary](OfficialAccount_DataCube_DataCubeClient.default.md#articlesummary)
- [articleTotal](OfficialAccount_DataCube_DataCubeClient.default.md#articletotal)
- [cardSummary](OfficialAccount_DataCube_DataCubeClient.default.md#cardsummary)
- [doRequest](OfficialAccount_DataCube_DataCubeClient.default.md#dorequest)
- [freeCardSummary](OfficialAccount_DataCube_DataCubeClient.default.md#freecardsummary)
- [getAccessToken](OfficialAccount_DataCube_DataCubeClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_DataCube_DataCubeClient.default.md#httpget)
- [httpPost](OfficialAccount_DataCube_DataCubeClient.default.md#httppost)
- [httpPostJson](OfficialAccount_DataCube_DataCubeClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_DataCube_DataCubeClient.default.md#httpupload)
- [interfaceSummary](OfficialAccount_DataCube_DataCubeClient.default.md#interfacesummary)
- [interfaceSummaryHourly](OfficialAccount_DataCube_DataCubeClient.default.md#interfacesummaryhourly)
- [memberCardSummary](OfficialAccount_DataCube_DataCubeClient.default.md#membercardsummary)
- [memberCardSummaryById](OfficialAccount_DataCube_DataCubeClient.default.md#membercardsummarybyid)
- [query](OfficialAccount_DataCube_DataCubeClient.default.md#query)
- [request](OfficialAccount_DataCube_DataCubeClient.default.md#request)
- [requestRaw](OfficialAccount_DataCube_DataCubeClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_DataCube_DataCubeClient.default.md#setaccesstoken)
- [upstreamMessageDistMonthly](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagedistmonthly)
- [upstreamMessageDistSummary](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagedistsummary)
- [upstreamMessageDistWeekly](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagedistweekly)
- [upstreamMessageHourly](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagehourly)
- [upstreamMessageMonthly](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagemonthly)
- [upstreamMessageSummary](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessagesummary)
- [upstreamMessageWeekly](OfficialAccount_DataCube_DataCubeClient.default.md#upstreammessageweekly)
- [userCumulate](OfficialAccount_DataCube_DataCubeClient.default.md#usercumulate)
- [userReadHourly](OfficialAccount_DataCube_DataCubeClient.default.md#userreadhourly)
- [userReadSummary](OfficialAccount_DataCube_DataCubeClient.default.md#userreadsummary)
- [userShareHourly](OfficialAccount_DataCube_DataCubeClient.default.md#usersharehourly)
- [userShareSummary](OfficialAccount_DataCube_DataCubeClient.default.md#usersharesummary)
- [userSummary](OfficialAccount_DataCube_DataCubeClient.default.md#usersummary)

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

### articleSummary

▸ **articleSummary**(`from`, `to`): `Promise`<`any`\>

获取图文群发每日数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L34)

___

### articleTotal

▸ **articleTotal**(`from`, `to`): `Promise`<`any`\>

获取图文群发总数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:44](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L44)

___

### cardSummary

▸ **cardSummary**(`from`, `to`, `condSource?`): `Promise`<`any`\>

获取普通卡券分析分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `string` | `undefined` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | `undefined` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |
| `condSource` | `number` | `0` | 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:185](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L185)

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

### freeCardSummary

▸ **freeCardSummary**(`from`, `to`, `condSource?`, `cardId?`): `Promise`<`any`\>

获取免费券分析分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `string` | `undefined` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | `undefined` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |
| `condSource` | `number` | `0` | 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据 |
| `cardId` | `string` | `''` | 卡券id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:200](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L200)

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

### interfaceSummary

▸ **interfaceSummary**(`from`, `to`): `Promise`<`any`\>

获取接口分析数据, 最大时间跨度：30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:164](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L164)

___

### interfaceSummaryHourly

▸ **interfaceSummaryHourly**(`from`, `to`): `Promise`<`any`\>

获取接口分析分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:174](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L174)

___

### memberCardSummary

▸ **memberCardSummary**(`from`, `to`, `condSource?`): `Promise`<`any`\>

获取会员卡分析分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `string` | `undefined` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | `undefined` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |
| `condSource` | `number` | `0` | 卡券来源，0为公众平台创建的卡券数据、1是API创建的卡券数据 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:215](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L215)

___

### memberCardSummaryById

▸ **memberCardSummaryById**(`from`, `to`, `cardId`): `Promise`<`any`\>

获取单张会员卡数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |
| `cardId` | `string` | 卡券id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:229](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L229)

___

### query

▸ `Protected` **query**(`api`, `from`, `to`, `ext?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `from` | `string` |
| `to` | `string` |
| `ext` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:237](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L237)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_DataCube_DataCubeClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_DataCube_DataCubeClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### upstreamMessageDistMonthly

▸ **upstreamMessageDistMonthly**(`from`, `to`): `Promise`<`any`\>

获取消息发送分布月数据, 最大时间跨度：30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:154](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L154)

___

### upstreamMessageDistSummary

▸ **upstreamMessageDistSummary**(`from`, `to`): `Promise`<`any`\>

获取消息发送分布数据, 最大时间跨度：15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:134](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L134)

___

### upstreamMessageDistWeekly

▸ **upstreamMessageDistWeekly**(`from`, `to`): `Promise`<`any`\>

获取消息发送分布周数据, 最大时间跨度：30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:144](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L144)

___

### upstreamMessageHourly

▸ **upstreamMessageHourly**(`from`, `to`): `Promise`<`any`\>

获取消息发送分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:104](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L104)

___

### upstreamMessageMonthly

▸ **upstreamMessageMonthly**(`from`, `to`): `Promise`<`any`\>

获取消息发送月数据, 最大时间跨度：30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:124](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L124)

___

### upstreamMessageSummary

▸ **upstreamMessageSummary**(`from`, `to`): `Promise`<`any`\>

获取消息发送概况数据, 最大时间跨度：7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:94](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L94)

___

### upstreamMessageWeekly

▸ **upstreamMessageWeekly**(`from`, `to`): `Promise`<`any`\>

获取消息发送周数据, 最大时间跨度：30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:114](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L114)

___

### userCumulate

▸ **userCumulate**(`from`, `to`): `Promise`<`any`\>

获取累计用户数据, 最大时间跨度：7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L24)

___

### userReadHourly

▸ **userReadHourly**(`from`, `to`): `Promise`<`any`\>

获取图文统计分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:64](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L64)

___

### userReadSummary

▸ **userReadSummary**(`from`, `to`): `Promise`<`any`\>

获取图文统计数据, 最大时间跨度：3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:54](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L54)

___

### userShareHourly

▸ **userShareHourly**(`from`, `to`): `Promise`<`any`\>

获取图文分享转发分时数据, 最大时间跨度：1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:84](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L84)

___

### userShareSummary

▸ **userShareSummary**(`from`, `to`): `Promise`<`any`\>

获取图文分享转发数据, 最大时间跨度：7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:74](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L74)

___

### userSummary

▸ **userSummary**(`from`, `to`): `Promise`<`any`\>

获取用户增减数据, 最大时间跨度：7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | 起始日期，示例：2014-12-02。起始日期和结束日期的差值需小于“最大时间跨度”（比如最大时间跨度为1时，起始日期和结束日期的差值只能为0，才能小于1），否则会报错 |
| `to` | `string` | 结束日期，示例：2014-12-07。允许设置的最大值为昨日 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/DataCube/DataCubeClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/DataCube/DataCubeClient.ts#L14)
