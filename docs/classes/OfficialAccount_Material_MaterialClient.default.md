[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Material/MaterialClient](../modules/OfficialAccount_Material_MaterialClient.md) / default

# Class: default

[OfficialAccount/Material/MaterialClient](../modules/OfficialAccount_Material_MaterialClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Material_MaterialClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Material_MaterialClient.default.md#accesstoken)
- [allowTypes](OfficialAccount_Material_MaterialClient.default.md#allowtypes)
- [app](OfficialAccount_Material_MaterialClient.default.md#app)

### Methods

- [delete](OfficialAccount_Material_MaterialClient.default.md#delete)
- [doRequest](OfficialAccount_Material_MaterialClient.default.md#dorequest)
- [get](OfficialAccount_Material_MaterialClient.default.md#get)
- [getAccessToken](OfficialAccount_Material_MaterialClient.default.md#getaccesstoken)
- [getApiByType](OfficialAccount_Material_MaterialClient.default.md#getapibytype)
- [httpGet](OfficialAccount_Material_MaterialClient.default.md#httpget)
- [httpPost](OfficialAccount_Material_MaterialClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Material_MaterialClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Material_MaterialClient.default.md#httpupload)
- [list](OfficialAccount_Material_MaterialClient.default.md#list)
- [request](OfficialAccount_Material_MaterialClient.default.md#request)
- [requestRaw](OfficialAccount_Material_MaterialClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Material_MaterialClient.default.md#setaccesstoken)
- [stats](OfficialAccount_Material_MaterialClient.default.md#stats)
- [updateArticle](OfficialAccount_Material_MaterialClient.default.md#updatearticle)
- [upload](OfficialAccount_Material_MaterialClient.default.md#upload)
- [uploadArticle](OfficialAccount_Material_MaterialClient.default.md#uploadarticle)
- [uploadArticleImage](OfficialAccount_Material_MaterialClient.default.md#uploadarticleimage)
- [uploadImage](OfficialAccount_Material_MaterialClient.default.md#uploadimage)
- [uploadThumb](OfficialAccount_Material_MaterialClient.default.md#uploadthumb)
- [uploadVideo](OfficialAccount_Material_MaterialClient.default.md#uploadvideo)
- [uploadVoice](OfficialAccount_Material_MaterialClient.default.md#uploadvoice)

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

[OfficialAccount/Material/MaterialClient.ts:12](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L12)

___

### app

• `Protected` **app**: [`default`](Core_BaseApplication.default.md) = `null`

#### Inherited from

[default](Core_BaseClient.default.md).[app](Core_BaseClient.default.md#app)

#### Defined in

[Core/BaseClient.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L15)

## Methods

### delete

▸ **delete**(`media_id`): `Promise`<`any`\>

删除永久素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `media_id` | `string` | 素材media_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:179](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L179)

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

获取永久素材

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `media_id` | `string` | 素材media_id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:151](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L151)

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

### getApiByType

▸ `Protected` **getApiByType**(`type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string`

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:87](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L87)

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

### list

▸ **list**(`type`, `offset?`, `count?`): `Promise`<`any`\>

获取永久素材列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | 素材的类型，图片（image）、视频（video）、语音 （voice）、图文（news） |
| `offset` | `number` | `0` | 偏移起始位置，从0开始，默认：0 |
| `count` | `number` | `20` | 数量, 可选值：1～20，默认：20 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:192](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L192)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Material_MaterialClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Material_MaterialClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseClient.ts#L23)

___

### stats

▸ **stats**(): `Promise`<`any`\>

获取素材计数

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:204](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L204)

___

### updateArticle

▸ **updateArticle**(`media_id`, `article`, `index?`): `Promise`<`any`\>

修改图文消息

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `media_id` | `string` | `undefined` | 文章的media_id |
| `article` | `object` \| [`Article`](Core_Messages_Article.Article.md) | `undefined` | Article 实例 |
| `index` | `number` | `0` | 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:130](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L130)

___

### upload

▸ `Protected` **upload**(`type`, `file`, `form?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `file` | `any` |
| `form` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L64)

___

### uploadArticle

▸ **uploadArticle**(`articles`): `Promise`<`any`\>

上传图文消息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `articles` | `object` \| [`Article`](Core_Messages_Article.Article.md) \| [`Article`](Core_Messages_Article.Article.md)[] | 图文消息（Article）实例或图文消息（Article）实例列表 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:99](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L99)

___

### uploadArticleImage

▸ **uploadArticleImage**(`file`): `Promise`<`any`\>

上传图文消息图片

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:59](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L59)

___

### uploadImage

▸ **uploadImage**(`file`): `Promise`<`any`\>

上传图片

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:18](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L18)

___

### uploadThumb

▸ **uploadThumb**(`file`): `Promise`<`any`\>

上传缩略图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L51)

___

### uploadVideo

▸ **uploadVideo**(`file`, `title`, `description`): `Promise`<`any`\>

上传视频

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | 文件路径或可读stream |
| `title` | `string` | 标题 |
| `description` | `string` | 描述 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L28)

___

### uploadVoice

▸ **uploadVoice**(`file`): `Promise`<`any`\>

上传语音

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | 文件路径或可读stream |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Material/MaterialClient.ts:43](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/OfficialAccount/Material/MaterialClient.ts#L43)
