[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Broadcasting/BroadcastingClient](../modules/OfficialAccount_Broadcasting_BroadcastingClient.md) / default

# Class: default

[OfficialAccount/Broadcasting/BroadcastingClient](../modules/OfficialAccount_Broadcasting_BroadcastingClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Broadcasting_BroadcastingClient.default.md#constructor)

### Properties

- [PREVIEW\_BY\_NAME](OfficialAccount_Broadcasting_BroadcastingClient.default.md#preview_by_name)
- [PREVIEW\_BY\_OPENID](OfficialAccount_Broadcasting_BroadcastingClient.default.md#preview_by_openid)
- [accessToken](OfficialAccount_Broadcasting_BroadcastingClient.default.md#accesstoken)
- [app](OfficialAccount_Broadcasting_BroadcastingClient.default.md#app)

### Methods

- [delete](OfficialAccount_Broadcasting_BroadcastingClient.default.md#delete)
- [doRequest](OfficialAccount_Broadcasting_BroadcastingClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_Broadcasting_BroadcastingClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Broadcasting_BroadcastingClient.default.md#httpget)
- [httpPost](OfficialAccount_Broadcasting_BroadcastingClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Broadcasting_BroadcastingClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Broadcasting_BroadcastingClient.default.md#httpupload)
- [preview](OfficialAccount_Broadcasting_BroadcastingClient.default.md#preview)
- [previewCard](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewcard)
- [previewCardByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewcardbyname)
- [previewImage](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewimage)
- [previewImageByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewimagebyname)
- [previewMessage](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewmessage)
- [previewNews](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewnews)
- [previewNewsByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewnewsbyname)
- [previewText](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewtext)
- [previewTextByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewtextbyname)
- [previewVideo](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewvideo)
- [previewVideoByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewvideobyname)
- [previewVoice](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewvoice)
- [previewVoiceByName](OfficialAccount_Broadcasting_BroadcastingClient.default.md#previewvoicebyname)
- [request](OfficialAccount_Broadcasting_BroadcastingClient.default.md#request)
- [requestRaw](OfficialAccount_Broadcasting_BroadcastingClient.default.md#requestraw)
- [send](OfficialAccount_Broadcasting_BroadcastingClient.default.md#send)
- [sendCard](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendcard)
- [sendImage](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendimage)
- [sendMessage](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendmessage)
- [sendNews](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendnews)
- [sendText](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendtext)
- [sendVideo](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendvideo)
- [sendVoice](OfficialAccount_Broadcasting_BroadcastingClient.default.md#sendvoice)
- [setAccessToken](OfficialAccount_Broadcasting_BroadcastingClient.default.md#setaccesstoken)
- [status](OfficialAccount_Broadcasting_BroadcastingClient.default.md#status)

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

### PREVIEW\_BY\_NAME

• **PREVIEW\_BY\_NAME**: `string` = `'towxname'`

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L12)

___

### PREVIEW\_BY\_OPENID

• **PREVIEW\_BY\_OPENID**: `string` = `'touser'`

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L11)

___

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

### delete

▸ **delete**(`msgId`): `Promise`<`any`\>

删除群发消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgId` | `string` | 消息id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L34)

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

### preview

▸ `Protected` **preview**(`message?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:25](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L25)

___

### previewCard

▸ **previewCard**(`cardId`, `reception`, `method?`): `Promise`<`any`\>

发送卡券消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardId` | `string` | 卡券id |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:202](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L202)

___

### previewCardByName

▸ **previewCardByName**(`cardId`, `reception`): `Promise`<`any`\>

发送卡券消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardId` | `string` | 卡券id |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:263](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L263)

___

### previewImage

▸ **previewImage**(`mediaId`, `reception`, `method?`): `Promise`<`any`\>

发送图片消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:192](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L192)

___

### previewImageByName

▸ **previewImageByName**(`mediaId`, `reception`): `Promise`<`any`\>

发送图片消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:253](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L253)

___

### previewMessage

▸ **previewMessage**(`message`, `reception`, `method?`): `Promise`<`any`\>

发送卡券消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Message`](Core_Messages_Message.Message.md) | 消息实例 |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:140](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L140)

___

### previewNews

▸ **previewNews**(`mediaId`, `reception`, `method?`): `Promise`<`any`\>

发送图文消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:162](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L162)

___

### previewNewsByName

▸ **previewNewsByName**(`mediaId`, `reception`): `Promise`<`any`\>

发送图文消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:223](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L223)

___

### previewText

▸ **previewText**(`message`, `reception`, `method?`): `Promise`<`any`\>

发送文本消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 文本 |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:152](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L152)

___

### previewTextByName

▸ **previewTextByName**(`message`, `reception`): `Promise`<`any`\>

发送文本消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:213](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L213)

___

### previewVideo

▸ **previewVideo**(`mediaId`, `reception`, `method?`): `Promise`<`any`\>

发送视频消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:182](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L182)

___

### previewVideoByName

▸ **previewVideoByName**(`mediaId`, `reception`): `Promise`<`any`\>

发送视频消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:243](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L243)

___

### previewVoice

▸ **previewVoice**(`mediaId`, `reception`, `method?`): `Promise`<`any`\>

发送语音消息预览给指定openId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | openid |
| `method` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:172](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L172)

___

### previewVoiceByName

▸ **previewVoiceByName**(`mediaId`, `reception`): `Promise`<`any`\>

发送语音消息预览给指定微信号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mediaId` | `string` | 素材id |
| `reception` | `string` | 微信号 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:233](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L233)

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

### send

▸ `Protected` **send**(`message?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L14)

___

### sendCard

▸ **sendCard**(`cardId`, `reception?`, `attributes?`): `Promise`<`any`\>

发送卡券消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cardId` | `string` | `undefined` | 卡券id |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:128](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L128)

___

### sendImage

▸ **sendImage**(`mediaId`, `reception?`, `attributes?`): `Promise`<`any`\>

发送图片消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` | 素材id |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:118](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L118)

___

### sendMessage

▸ **sendMessage**(`message`, `reception?`, `attributes?`): `Promise`<`any`\>

发送消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | [`Message`](Core_Messages_Message.Message.md) | `undefined` | 消息实例 |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:58](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L58)

___

### sendNews

▸ **sendNews**(`mediaId`, `reception?`, `attributes?`): `Promise`<`any`\>

发送图文消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` | 素材id |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:88](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L88)

___

### sendText

▸ **sendText**(`message`, `reception?`, `attributes?`): `Promise`<`any`\>

发送文本消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | 文本 |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:78](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L78)

___

### sendVideo

▸ **sendVideo**(`mediaId`, `reception?`, `attributes?`): `Promise`<`any`\>

发送视频消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` | 素材id |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:108](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L108)

___

### sendVoice

▸ **sendVoice**(`mediaId`, `reception?`, `attributes?`): `Promise`<`any`\>

发送语音消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` | 素材id |
| `reception` | `any` | `null` | 数字表示标签id，或openid列表，或null表示全部，默认：null |
| `attributes` | `object` | `{}` | 附加参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:98](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L98)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Broadcasting_BroadcastingClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Broadcasting_BroadcastingClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### status

▸ **status**(`msgId`): `Promise`<`any`\>

查询群发消息发送状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgId` | `string` | 消息id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Broadcasting/BroadcastingClient.ts:45](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/OfficialAccount/Broadcasting/BroadcastingClient.ts#L45)
