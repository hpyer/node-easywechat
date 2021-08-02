[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/POI/POIClient](../modules/OfficialAccount_POI_POIClient.md) / default

# Class: default

[OfficialAccount/POI/POIClient](../modules/OfficialAccount_POI_POIClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_POI_POIClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_POI_POIClient.default.md#accesstoken)
- [app](OfficialAccount_POI_POIClient.default.md#app)

### Methods

- [categories](OfficialAccount_POI_POIClient.default.md#categories)
- [create](OfficialAccount_POI_POIClient.default.md#create)
- [createAndGetId](OfficialAccount_POI_POIClient.default.md#createandgetid)
- [delete](OfficialAccount_POI_POIClient.default.md#delete)
- [doRequest](OfficialAccount_POI_POIClient.default.md#dorequest)
- [get](OfficialAccount_POI_POIClient.default.md#get)
- [getAccessToken](OfficialAccount_POI_POIClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_POI_POIClient.default.md#httpget)
- [httpPost](OfficialAccount_POI_POIClient.default.md#httppost)
- [httpPostJson](OfficialAccount_POI_POIClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_POI_POIClient.default.md#httpupload)
- [list](OfficialAccount_POI_POIClient.default.md#list)
- [request](OfficialAccount_POI_POIClient.default.md#request)
- [requestRaw](OfficialAccount_POI_POIClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_POI_POIClient.default.md#setaccesstoken)
- [update](OfficialAccount_POI_POIClient.default.md#update)

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

### categories

▸ **categories**(): `Promise`<`any`\>

获取门店类目表

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:10](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L10)

___

### create

▸ **create**(`base_info`): `Promise`<`any`\>

创建门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base_info` | `object` | 门店信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:43](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L43)

___

### createAndGetId

▸ **createAndGetId**(`base_info`): `Promise`<`any`\>

创建门店并返回id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base_info` | `object` | 门店信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:56](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L56)

___

### delete

▸ **delete**(`poi_id`): `Promise`<`any`\>

删除门店

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poi_id` | `string` | 门店id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:81](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L81)

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

### get

▸ **get**(`poi_id`): `Promise`<`any`\>

查询门店信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poi_id` | `number` | 门店id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:19](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L19)

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

### list

▸ **list**(`begin?`, `limit?`): `Promise`<`any`\>

查询门店列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `begin` | `number` | `0` | 开始位置，从0开始，默认：0 |
| `limit` | `number` | `20` | 返回数据条数，最大允许50，默认：20 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:31](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L31)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_POI_POIClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_POI_POIClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### update

▸ **update**(`poi_id`, `base_info`): `Promise`<`any`\>

修改门店信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poi_id` | `number` | 门店id |
| `base_info` | `object` | 门店信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/POI/POIClient.ts:67](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/POI/POIClient.ts#L67)
