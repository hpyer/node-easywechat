[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Express/ExpressClient](../modules/MiniProgram_Express_ExpressClient.md) / default

# Class: default

[MiniProgram/Express/ExpressClient](../modules/MiniProgram_Express_ExpressClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_Express_ExpressClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_Express_ExpressClient.default.md#accesstoken)
- [app](MiniProgram_Express_ExpressClient.default.md#app)

### Methods

- [bindPrinter](MiniProgram_Express_ExpressClient.default.md#bindprinter)
- [createWaybill](MiniProgram_Express_ExpressClient.default.md#createwaybill)
- [deleteWaybill](MiniProgram_Express_ExpressClient.default.md#deletewaybill)
- [doRequest](MiniProgram_Express_ExpressClient.default.md#dorequest)
- [getAccessToken](MiniProgram_Express_ExpressClient.default.md#getaccesstoken)
- [getAllAccount](MiniProgram_Express_ExpressClient.default.md#getallaccount)
- [getBalance](MiniProgram_Express_ExpressClient.default.md#getbalance)
- [getWaybill](MiniProgram_Express_ExpressClient.default.md#getwaybill)
- [getWaybillTrack](MiniProgram_Express_ExpressClient.default.md#getwaybilltrack)
- [httpGet](MiniProgram_Express_ExpressClient.default.md#httpget)
- [httpPost](MiniProgram_Express_ExpressClient.default.md#httppost)
- [httpPostJson](MiniProgram_Express_ExpressClient.default.md#httppostjson)
- [httpUpload](MiniProgram_Express_ExpressClient.default.md#httpupload)
- [listProviders](MiniProgram_Express_ExpressClient.default.md#listproviders)
- [request](MiniProgram_Express_ExpressClient.default.md#request)
- [requestRaw](MiniProgram_Express_ExpressClient.default.md#requestraw)
- [setAccessToken](MiniProgram_Express_ExpressClient.default.md#setaccesstoken)
- [unbindPrinter](MiniProgram_Express_ExpressClient.default.md#unbindprinter)

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

### bindPrinter

▸ **bindPrinter**(`openid?`): `Promise`<`any`\>

绑定打印员

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `openid` | `string` | `''` | 用户openid |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:77](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L77)

___

### createWaybill

▸ **createWaybill**(`params?`): `Promise`<`any`\>

生成运单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `object` | 订单信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L28)

___

### deleteWaybill

▸ **deleteWaybill**(`params?`): `Promise`<`any`\>

取消运单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `object` | 订单信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:37](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L37)

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

### getAllAccount

▸ **getAllAccount**(): `Promise`<`any`\>

获取所有绑定的物流账号

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:19](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L19)

___

### getBalance

▸ **getBalance**(`deliveryId?`, `bizId?`): `Promise`<`any`\>

获取电子面单余额

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deliveryId` | `string` | `''` | 快递公司ID |
| `bizId` | `string` | `''` | 快递公司客户编码 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:65](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L65)

___

### getWaybill

▸ **getWaybill**(`params?`): `Promise`<`any`\>

获取运单数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `object` | 订单信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:46](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L46)

___

### getWaybillTrack

▸ **getWaybillTrack**(`params?`): `Promise`<`any`\>

查询运单轨迹

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `object` | 订单信息 |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L55)

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

### listProviders

▸ **listProviders**(): `Promise`<`any`\>

获取支持的快递公司列表

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L11)

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

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_Express_ExpressClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_Express_ExpressClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### unbindPrinter

▸ **unbindPrinter**(`openid?`): `Promise`<`any`\>

解绑打印员

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `openid` | `string` | `''` | 用户openid |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Express/ExpressClient.ts:89](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Express/ExpressClient.ts#L89)
