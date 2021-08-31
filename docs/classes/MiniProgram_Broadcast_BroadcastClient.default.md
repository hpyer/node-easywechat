[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Broadcast/BroadcastClient](../modules/MiniProgram_Broadcast_BroadcastClient.md) / default

# Class: default

[MiniProgram/Broadcast/BroadcastClient](../modules/MiniProgram_Broadcast_BroadcastClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_Broadcast_BroadcastClient.default.md#constructor)

### Properties

- [accessToken](MiniProgram_Broadcast_BroadcastClient.default.md#accesstoken)
- [app](MiniProgram_Broadcast_BroadcastClient.default.md#app)

### Methods

- [addAssistant](MiniProgram_Broadcast_BroadcastClient.default.md#addassistant)
- [addGoods](MiniProgram_Broadcast_BroadcastClient.default.md#addgoods)
- [addRole](MiniProgram_Broadcast_BroadcastClient.default.md#addrole)
- [addSubAnchor](MiniProgram_Broadcast_BroadcastClient.default.md#addsubanchor)
- [create](MiniProgram_Broadcast_BroadcastClient.default.md#create)
- [createLiveRoom](MiniProgram_Broadcast_BroadcastClient.default.md#createliveroom)
- [delete](MiniProgram_Broadcast_BroadcastClient.default.md#delete)
- [deleteAssistant](MiniProgram_Broadcast_BroadcastClient.default.md#deleteassistant)
- [deleteGoodsInRoom](MiniProgram_Broadcast_BroadcastClient.default.md#deletegoodsinroom)
- [deleteLiveRoom](MiniProgram_Broadcast_BroadcastClient.default.md#deleteliveroom)
- [deleteRole](MiniProgram_Broadcast_BroadcastClient.default.md#deleterole)
- [deleteSubAnchor](MiniProgram_Broadcast_BroadcastClient.default.md#deletesubanchor)
- [doRequest](MiniProgram_Broadcast_BroadcastClient.default.md#dorequest)
- [downloadGoodsExplanationVideo](MiniProgram_Broadcast_BroadcastClient.default.md#downloadgoodsexplanationvideo)
- [getAccessToken](MiniProgram_Broadcast_BroadcastClient.default.md#getaccesstoken)
- [getApproved](MiniProgram_Broadcast_BroadcastClient.default.md#getapproved)
- [getAssistantList](MiniProgram_Broadcast_BroadcastClient.default.md#getassistantlist)
- [getFollowers](MiniProgram_Broadcast_BroadcastClient.default.md#getfollowers)
- [getGoodsWarehouse](MiniProgram_Broadcast_BroadcastClient.default.md#getgoodswarehouse)
- [getPlaybacks](MiniProgram_Broadcast_BroadcastClient.default.md#getplaybacks)
- [getPushUrl](MiniProgram_Broadcast_BroadcastClient.default.md#getpushurl)
- [getRoleList](MiniProgram_Broadcast_BroadcastClient.default.md#getrolelist)
- [getRooms](MiniProgram_Broadcast_BroadcastClient.default.md#getrooms)
- [getShareQrcode](MiniProgram_Broadcast_BroadcastClient.default.md#getshareqrcode)
- [getSubAnchor](MiniProgram_Broadcast_BroadcastClient.default.md#getsubanchor)
- [httpGet](MiniProgram_Broadcast_BroadcastClient.default.md#httpget)
- [httpPost](MiniProgram_Broadcast_BroadcastClient.default.md#httppost)
- [httpPostJson](MiniProgram_Broadcast_BroadcastClient.default.md#httppostjson)
- [httpUpload](MiniProgram_Broadcast_BroadcastClient.default.md#httpupload)
- [pushGoods](MiniProgram_Broadcast_BroadcastClient.default.md#pushgoods)
- [pushMessage](MiniProgram_Broadcast_BroadcastClient.default.md#pushmessage)
- [request](MiniProgram_Broadcast_BroadcastClient.default.md#request)
- [requestRaw](MiniProgram_Broadcast_BroadcastClient.default.md#requestraw)
- [resetAudit](MiniProgram_Broadcast_BroadcastClient.default.md#resetaudit)
- [resubmitAudit](MiniProgram_Broadcast_BroadcastClient.default.md#resubmitaudit)
- [setAccessToken](MiniProgram_Broadcast_BroadcastClient.default.md#setaccesstoken)
- [sortGoods](MiniProgram_Broadcast_BroadcastClient.default.md#sortgoods)
- [update](MiniProgram_Broadcast_BroadcastClient.default.md#update)
- [updateAssistant](MiniProgram_Broadcast_BroadcastClient.default.md#updateassistant)
- [updateComment](MiniProgram_Broadcast_BroadcastClient.default.md#updatecomment)
- [updateFeedPublic](MiniProgram_Broadcast_BroadcastClient.default.md#updatefeedpublic)
- [updateGoodsInRoom](MiniProgram_Broadcast_BroadcastClient.default.md#updategoodsinroom)
- [updateKf](MiniProgram_Broadcast_BroadcastClient.default.md#updatekf)
- [updateLiveRoom](MiniProgram_Broadcast_BroadcastClient.default.md#updateliveroom)
- [updateReplay](MiniProgram_Broadcast_BroadcastClient.default.md#updatereplay)
- [updateSubAnchor](MiniProgram_Broadcast_BroadcastClient.default.md#updatesubanchor)

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

### addAssistant

▸ **addAssistant**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:88](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L88)

___

### addGoods

▸ **addGoods**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:48](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L48)

___

### addRole

▸ **addRole**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:136](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L136)

___

### addSubAnchor

▸ **addSubAnchor**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L104)

___

### create

▸ **create**(`goodsInfo`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goodsInfo` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:7](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L7)

___

### createLiveRoom

▸ **createLiveRoom**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:68](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L68)

___

### delete

▸ **delete**(`goodsId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goodsId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:26](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L26)

___

### deleteAssistant

▸ **deleteAssistant**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:96](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L96)

___

### deleteGoodsInRoom

▸ **deleteGoodsInRoom**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:160](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L160)

___

### deleteLiveRoom

▸ **deleteLiveRoom**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:72](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L72)

___

### deleteRole

▸ **deleteRole**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:140](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L140)

___

### deleteSubAnchor

▸ **deleteSubAnchor**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:112](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L112)

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

### downloadGoodsExplanationVideo

▸ **downloadGoodsExplanationVideo**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:172](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L172)

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

### getApproved

▸ **getApproved**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:44](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L44)

___

### getAssistantList

▸ **getAssistantList**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:100](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L100)

___

### getFollowers

▸ **getFollowers**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:148](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L148)

___

### getGoodsWarehouse

▸ **getGoodsWarehouse**(`goodsIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goodsIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:38](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L38)

___

### getPlaybacks

▸ **getPlaybacks**(`roomId`, `start?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `roomId` | `number` | `undefined` |
| `start` | `number` | `0` |
| `limit` | `number` | `10` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:59](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L59)

___

### getPushUrl

▸ **getPushUrl**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:80](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L80)

___

### getRoleList

▸ **getRoleList**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:144](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L144)

___

### getRooms

▸ **getRooms**(`start?`, `limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `0` |
| `limit` | `number` | `10` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:52](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L52)

___

### getShareQrcode

▸ **getShareQrcode**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:84](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L84)

___

### getSubAnchor

▸ **getSubAnchor**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:116](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L116)

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

### pushGoods

▸ **pushGoods**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:164](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L164)

___

### pushMessage

▸ **pushMessage**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:152](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L152)

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

### resetAudit

▸ **resetAudit**(`auditId`, `goodsId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `auditId` | `number` |
| `goodsId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L13)

___

### resubmitAudit

▸ **resubmitAudit**(`goodsId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goodsId` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L20)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](MiniProgram_Broadcast_BroadcastClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](MiniProgram_Broadcast_BroadcastClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseClient.ts#L23)

___

### sortGoods

▸ **sortGoods**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:168](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L168)

___

### update

▸ **update**(`goodsInfo`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goodsInfo` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L32)

___

### updateAssistant

▸ **updateAssistant**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:92](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L92)

___

### updateComment

▸ **updateComment**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:132](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L132)

___

### updateFeedPublic

▸ **updateFeedPublic**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:120](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L120)

___

### updateGoodsInRoom

▸ **updateGoodsInRoom**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:156](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L156)

___

### updateKf

▸ **updateKf**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:128](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L128)

___

### updateLiveRoom

▸ **updateLiveRoom**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:76](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L76)

___

### updateReplay

▸ **updateReplay**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:124](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L124)

___

### updateSubAnchor

▸ **updateSubAnchor**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[MiniProgram/Broadcast/BroadcastClient.ts:108](https://github.com/hpyer/node-easywechat/blob/b017670/src/MiniProgram/Broadcast/BroadcastClient.ts#L108)
