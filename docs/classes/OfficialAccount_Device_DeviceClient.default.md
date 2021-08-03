[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Device/DeviceClient](../modules/OfficialAccount_Device_DeviceClient.md) / default

# Class: default

[OfficialAccount/Device/DeviceClient](../modules/OfficialAccount_Device_DeviceClient.md).default

**`see`** http://iot.weixin.qq.com/wiki/new/index.html

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Device_DeviceClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Device_DeviceClient.default.md#accesstoken)
- [app](OfficialAccount_Device_DeviceClient.default.md#app)

### Methods

- [authorize](OfficialAccount_Device_DeviceClient.default.md#authorize)
- [bind](OfficialAccount_Device_DeviceClient.default.md#bind)
- [createId](OfficialAccount_Device_DeviceClient.default.md#createid)
- [doRequest](OfficialAccount_Device_DeviceClient.default.md#dorequest)
- [forceBind](OfficialAccount_Device_DeviceClient.default.md#forcebind)
- [forceUnbind](OfficialAccount_Device_DeviceClient.default.md#forceunbind)
- [getAccessToken](OfficialAccount_Device_DeviceClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Device_DeviceClient.default.md#httpget)
- [httpPost](OfficialAccount_Device_DeviceClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Device_DeviceClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Device_DeviceClient.default.md#httpupload)
- [message](OfficialAccount_Device_DeviceClient.default.md#message)
- [qrCode](OfficialAccount_Device_DeviceClient.default.md#qrcode)
- [request](OfficialAccount_Device_DeviceClient.default.md#request)
- [requestRaw](OfficialAccount_Device_DeviceClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Device_DeviceClient.default.md#setaccesstoken)
- [status](OfficialAccount_Device_DeviceClient.default.md#status)
- [unbind](OfficialAccount_Device_DeviceClient.default.md#unbind)

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

### authorize

▸ **authorize**(`devices`, `productId`, `opType?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `devices` | `string`[] | `undefined` |
| `productId` | `string` | `undefined` |
| `opType` | `number` | `0` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:29](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L29)

___

### bind

▸ **bind**(`openid`, `deviceId`, `ticket`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `deviceId` | `string` |
| `ticket` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:46](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L46)

___

### createId

▸ **createId**(`productId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `productId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:39](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L39)

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

### forceBind

▸ **forceBind**(`openid`, `deviceId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `deviceId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:64](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L64)

___

### forceUnbind

▸ **forceUnbind**(`openid`, `deviceId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `deviceId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:72](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L72)

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

### message

▸ **message**(`deviceId`, `openid`, `content`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |
| `openid` | `string` |
| `content` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L11)

___

### qrCode

▸ **qrCode**(`deviceIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L21)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Device_DeviceClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Device_DeviceClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(`deviceId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:80](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L80)

___

### unbind

▸ **unbind**(`openid`, `deviceId`, `ticket`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |
| `deviceId` | `string` |
| `ticket` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Device/DeviceClient.ts:55](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Device/DeviceClient.ts#L55)
