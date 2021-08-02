[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Comment/CommentClient](../modules/OfficialAccount_Comment_CommentClient.md) / default

# Class: default

[OfficialAccount/Comment/CommentClient](../modules/OfficialAccount_Comment_CommentClient.md).default

## Hierarchy

- [`default`](Core_BaseClient.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](OfficialAccount_Comment_CommentClient.default.md#constructor)

### Properties

- [accessToken](OfficialAccount_Comment_CommentClient.default.md#accesstoken)
- [app](OfficialAccount_Comment_CommentClient.default.md#app)

### Methods

- [close](OfficialAccount_Comment_CommentClient.default.md#close)
- [delete](OfficialAccount_Comment_CommentClient.default.md#delete)
- [deleteReply](OfficialAccount_Comment_CommentClient.default.md#deletereply)
- [doRequest](OfficialAccount_Comment_CommentClient.default.md#dorequest)
- [getAccessToken](OfficialAccount_Comment_CommentClient.default.md#getaccesstoken)
- [httpGet](OfficialAccount_Comment_CommentClient.default.md#httpget)
- [httpPost](OfficialAccount_Comment_CommentClient.default.md#httppost)
- [httpPostJson](OfficialAccount_Comment_CommentClient.default.md#httppostjson)
- [httpUpload](OfficialAccount_Comment_CommentClient.default.md#httpupload)
- [list](OfficialAccount_Comment_CommentClient.default.md#list)
- [markElect](OfficialAccount_Comment_CommentClient.default.md#markelect)
- [open](OfficialAccount_Comment_CommentClient.default.md#open)
- [reply](OfficialAccount_Comment_CommentClient.default.md#reply)
- [request](OfficialAccount_Comment_CommentClient.default.md#request)
- [requestRaw](OfficialAccount_Comment_CommentClient.default.md#requestraw)
- [setAccessToken](OfficialAccount_Comment_CommentClient.default.md#setaccesstoken)
- [unmarkElect](OfficialAccount_Comment_CommentClient.default.md#unmarkelect)

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

### close

▸ **close**(`msg_data_id`, `index?`): `Promise`<`any`\>

关闭已群发文章评论

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `msg_data_id` | `string` | `undefined` | 群发返回的msg_data_id |
| `index` | `number` | `0` | 多图文时，用来指定第几篇图文，从0开始，默认：0 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:26](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L26)

___

### delete

▸ **delete**(`msg_data_id`, `index`, `user_comment_id`): `Promise`<`any`\>

删除评论

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg_data_id` | `string` | 群发返回的msg_data_id |
| `index` | `number` | 多图文时，用来指定第几篇图文，从0开始 |
| `user_comment_id` | `number` | 评论id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:89](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L89)

___

### deleteReply

▸ **deleteReply**(`msg_data_id`, `index`, `user_comment_id`): `Promise`<`any`\>

删除回复

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg_data_id` | `string` | 群发返回的msg_data_id |
| `index` | `number` | 多图文时，用来指定第几篇图文，从0开始 |
| `user_comment_id` | `number` | 评论id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:121](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L121)

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

▸ **list**(`msg_data_id`, `index`, `begin`, `count`, `type?`): `Promise`<`any`\>

查看指定文章的评论数据

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `msg_data_id` | `string` | `undefined` | 群发返回的msg_data_id |
| `index` | `number` | `undefined` | 多图文时，用来指定第几篇图文，从0开始 |
| `begin` | `number` | `undefined` | 起始位置，从0开始 |
| `count` | `number` | `undefined` | 获取数目（>=50会被拒绝） |
| `type` | `number` | `0` | 评论类型。可选值：0，普通评论&精选评论；1，普通评论；2，精选评论；默认：0 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:42](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L42)

___

### markElect

▸ **markElect**(`msg_data_id`, `index`, `user_comment_id`): `Promise`<`any`\>

将评论标记精选

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg_data_id` | `string` | 群发返回的msg_data_id |
| `index` | `number` | 多图文时，用来指定第几篇图文，从0开始 |
| `user_comment_id` | `number` | 评论id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:59](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L59)

___

### open

▸ **open**(`msg_data_id`, `index?`): `Promise`<`any`\>

打开已群发文章评论

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `msg_data_id` | `string` | `undefined` | 群发返回的msg_data_id |
| `index` | `number` | `0` | 多图文时，用来指定第几篇图文，从0开始，默认：0 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L13)

___

### reply

▸ **reply**(`msg_data_id`, `index`, `user_comment_id`, `content`): `Promise`<`any`\>

回复评论

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg_data_id` | `string` | 群发返回的msg_data_id |
| `index` | `number` | 多图文时，用来指定第几篇图文，从0开始 |
| `user_comment_id` | `number` | 评论id |
| `content` | `string` | 回复内容 |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:105](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L105)

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

▸ **setAccessToken**(`accessToken`): [`default`](OfficialAccount_Comment_CommentClient.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | [`default`](Core_BaseAccessToken.default.md) |

#### Returns

[`default`](OfficialAccount_Comment_CommentClient.default.md)

#### Inherited from

[default](Core_BaseClient.default.md).[setAccessToken](Core_BaseClient.default.md#setaccesstoken)

#### Defined in

[Core/BaseClient.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseClient.ts#L23)

___

### unmarkElect

▸ **unmarkElect**(`msg_data_id`, `index`, `user_comment_id`): `Promise`<`any`\>

将评论取消精选

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg_data_id` | `string` | 群发返回的msg_data_id |
| `index` | `number` | 多图文时，用来指定第几篇图文，从0开始 |
| `user_comment_id` | `number` | 评论id |

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Comment/CommentClient.ts:74](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Comment/CommentClient.ts#L74)
