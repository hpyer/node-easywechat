[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/Media/MediaClient](../modules/Work_Media_MediaClient.md) / default

# Class: default

[Work/Media/MediaClient](../modules/Work_Media_MediaClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_Media_MediaClient.default.md#constructor)

### Properties

- [accessToken](Work_Media_MediaClient.default.md#accesstoken)
- [allowTypes](Work_Media_MediaClient.default.md#allowtypes)
- [app](Work_Media_MediaClient.default.md#app)

### Methods

- [doRequest](Work_Media_MediaClient.default.md#dorequest)
- [get](Work_Media_MediaClient.default.md#get)
- [getAccessToken](Work_Media_MediaClient.default.md#getaccesstoken)
- [getHdVoice](Work_Media_MediaClient.default.md#gethdvoice)
- [getResources](Work_Media_MediaClient.default.md#getresources)
- [httpGet](Work_Media_MediaClient.default.md#httpget)
- [httpPost](Work_Media_MediaClient.default.md#httppost)
- [httpPostJson](Work_Media_MediaClient.default.md#httppostjson)
- [httpUpload](Work_Media_MediaClient.default.md#httpupload)
- [request](Work_Media_MediaClient.default.md#request)
- [requestRaw](Work_Media_MediaClient.default.md#requestraw)
- [setAccessToken](Work_Media_MediaClient.default.md#setaccesstoken)
- [upload](Work_Media_MediaClient.default.md#upload)
- [uploadFile](Work_Media_MediaClient.default.md#uploadfile)
- [uploadImage](Work_Media_MediaClient.default.md#uploadimage)
- [uploadImg](Work_Media_MediaClient.default.md#uploadimg)
- [uploadVideo](Work_Media_MediaClient.default.md#uploadvideo)
- [uploadVoice](Work_Media_MediaClient.default.md#uploadvoice)

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

### allowTypes

• `Protected` **allowTypes**: `string`[]

#### Defined in

[Work/Media/MediaClient.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L9)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L15)

## Methods

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

▸ **get**(`mediaId`): `Promise`<`any`\>

获取临时素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L15)

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

### getHdVoice

▸ **getHdVoice**(`mediaId`): `Promise`<`any`\>

获取高清语音素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:102](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L102)

___

### getResources

▸ `Protected` **getResources**(`mediaId`, `url`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `url` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:107](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L107)

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

▸ **setAccessToken**(`accessToken`): [`default`](Work_Media_MediaClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](Work_Media_MediaClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseClient.ts#L23)

___

### upload

▸ **upload**(`type`, `file`, `form?`): `Promise`<`any`\>

上传到临时素材

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | 类型，可选值：image,video,voice,thumb |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:63](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L63)

___

### uploadFile

▸ **uploadFile**(`file`, `form?`): `Promise`<`any`\>

上传临时文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:52](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L52)

___

### uploadImage

▸ **uploadImage**(`file`, `form?`): `Promise`<`any`\>

上传临时图片

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:25](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L25)

___

### uploadImg

▸ **uploadImg**(`file`, `form?`): `Promise`<`any`\>

上传永久图片

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:85](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L85)

___

### uploadVideo

▸ **uploadVideo**(`file`, `form?`): `Promise`<`any`\>

上传临时视频

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L34)

___

### uploadVoice

▸ **uploadVoice**(`file`, `form?`): `Promise`<`any`\>

上传临时语音

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `string` \| `ReadableStream`<`any`\> | `undefined` | 文件路径或可读stream |
| `form` | `object` | `null` | 表单参数 |

#### Returns

`Promise`<`any`\>

#### Defined in

[Work/Media/MediaClient.ts:43](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Work/Media/MediaClient.ts#L43)
