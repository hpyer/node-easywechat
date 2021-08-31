[node-easywechat](../README.md) / [Exports](../modules.md) / [BaseService/Media/MediaClient](../modules/BaseService_Media_MediaClient.md) / default

# Class: default

[BaseService/Media/MediaClient](../modules/BaseService_Media_MediaClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](BaseService_Media_MediaClient.default.md#constructor)

### Properties

- [accessToken](BaseService_Media_MediaClient.default.md#accesstoken)
- [allowTypes](BaseService_Media_MediaClient.default.md#allowtypes)
- [app](BaseService_Media_MediaClient.default.md#app)
- [baseUrl](BaseService_Media_MediaClient.default.md#baseurl)

### Methods

- [createVideoForBroadcasting](BaseService_Media_MediaClient.default.md#createvideoforbroadcasting)
- [doRequest](BaseService_Media_MediaClient.default.md#dorequest)
- [get](BaseService_Media_MediaClient.default.md#get)
- [getAccessToken](BaseService_Media_MediaClient.default.md#getaccesstoken)
- [getJssdkMedia](BaseService_Media_MediaClient.default.md#getjssdkmedia)
- [httpGet](BaseService_Media_MediaClient.default.md#httpget)
- [httpPost](BaseService_Media_MediaClient.default.md#httppost)
- [httpPostJson](BaseService_Media_MediaClient.default.md#httppostjson)
- [httpUpload](BaseService_Media_MediaClient.default.md#httpupload)
- [request](BaseService_Media_MediaClient.default.md#request)
- [requestRaw](BaseService_Media_MediaClient.default.md#requestraw)
- [setAccessToken](BaseService_Media_MediaClient.default.md#setaccesstoken)
- [upload](BaseService_Media_MediaClient.default.md#upload)
- [uploadImage](BaseService_Media_MediaClient.default.md#uploadimage)
- [uploadThumb](BaseService_Media_MediaClient.default.md#uploadthumb)
- [uploadVideo](BaseService_Media_MediaClient.default.md#uploadvideo)
- [uploadVideoForBroadcasting](BaseService_Media_MediaClient.default.md#uploadvideoforbroadcasting)
- [uploadVoice](BaseService_Media_MediaClient.default.md#uploadvoice)

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

[Core/BaseClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L17)

## Properties

### accessToken

• `Protected` **accessToken**: [`default`](Core_BaseAccessToken.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[accessToken](Core_BaseClient.default.md#accesstoken)

#### Defined in

[Core/BaseClient.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L14)

___

### allowTypes

• `Protected` **allowTypes**: `string`[]

#### Defined in

[BaseService/Media/MediaClient.ts:11](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L11)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L15)

___

### baseUrl

• `Protected` **baseUrl**: `string` = `'https://api.weixin.qq.com/cgi-bin/'`

#### Defined in

[BaseService/Media/MediaClient.ts:10](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L10)

## Methods

### createVideoForBroadcasting

▸ **createVideoForBroadcasting**(`media_id`, `title`, `description`): `Promise`<`any`\>

创建群发消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `media_id` | `string` | 上传视频得到 media_id |
| `title` | `string` | 标题 |
| `description` | `string` | 描述 |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:89](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L89)

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

[Core/BaseClient.ts:114](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L114)

___

### get

▸ **get**(`media_id`): `Promise`<`any`\>

获取临时素材内容

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `media_id` | `string` | 上传视频得到 media_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:102](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L102)

___

### getAccessToken

▸ **getAccessToken**(): [`default`](Core_BaseAccessToken.default.md)

#### Returns

[`default`](Core_BaseAccessToken.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[getAccessToken](Core_BaseClient.default.md#getaccesstoken)

#### Defined in

[Core/BaseClient.ts:30](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L30)

___

### getJssdkMedia

▸ **getJssdkMedia**(`media_id`): `Promise`<`any`\>

获取 JSSDK 上传的高清语音

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `media_id` | `string` | 上传视频得到 media_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:130](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L130)

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

[Core/BaseClient.ts:76](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L76)

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

[Core/BaseClient.ts:85](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L85)

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

[Core/BaseClient.ts:94](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L94)

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

[Core/BaseClient.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L51)

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

[Core/BaseClient.ts:35](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L35)

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

[Core/BaseClient.ts:104](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L104)

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): [`default`](BaseService_Media_MediaClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](BaseService_Media_MediaClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### upload

▸ **upload**(`type`, `file`): `Promise`<`any`\>

上传到临时素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | 类型，可选值：image,video,voice,thumb |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L51)

___

### uploadImage

▸ **uploadImage**(`file`): `Promise`<`any`\>

上传图片到临时素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:17](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L17)

___

### uploadThumb

▸ **uploadThumb**(`file`): `Promise`<`any`\>

上传缩略图到临时素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:41](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L41)

___

### uploadVideo

▸ **uploadVideo**(`file`): `Promise`<`any`\>

上传视频到临时素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:25](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L25)

___

### uploadVideoForBroadcasting

▸ **uploadVideoForBroadcasting**(`file`, `title`, `description`): `Promise`<`any`\>

上传群发视频

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |
| `title` | `string` | 标题 |
| `description` | `string` | 描述 |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:74](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L74)

___

### uploadVoice

▸ **uploadVoice**(`file`): `Promise`<`any`\>

上传语音到临时素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Readable` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[BaseService/Media/MediaClient.ts:33](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/BaseService/Media/MediaClient.ts#L33)
