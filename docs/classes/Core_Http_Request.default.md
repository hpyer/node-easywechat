[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Http/Request](../modules/Core_Http_Request.md) / default

# Class: default

[Core/Http/Request](../modules/Core_Http_Request.md).default

## Implements

- [`default`](Core_Contracts_RequestInterface.default.md)

## Table of contents

### Constructors

- [constructor](Core_Http_Request.default.md#constructor)

### Properties

- [\_content](Core_Http_Request.default.md#_content)
- [\_contentType](Core_Http_Request.default.md#_contenttype)
- [\_get](Core_Http_Request.default.md#_get)
- [\_headers](Core_Http_Request.default.md#_headers)
- [\_ip](Core_Http_Request.default.md#_ip)
- [\_method](Core_Http_Request.default.md#_method)
- [\_post](Core_Http_Request.default.md#_post)
- [\_req](Core_Http_Request.default.md#_req)
- [\_uri](Core_Http_Request.default.md#_uri)

### Methods

- [get](Core_Http_Request.default.md#get)
- [getAllGet](Core_Http_Request.default.md#getallget)
- [getAllPost](Core_Http_Request.default.md#getallpost)
- [getClientIp](Core_Http_Request.default.md#getclientip)
- [getContent](Core_Http_Request.default.md#getcontent)
- [getContentType](Core_Http_Request.default.md#getcontenttype)
- [getHeaders](Core_Http_Request.default.md#getheaders)
- [getMethod](Core_Http_Request.default.md#getmethod)
- [getUri](Core_Http_Request.default.md#geturi)
- [isValid](Core_Http_Request.default.md#isvalid)
- [post](Core_Http_Request.default.md#post)

## Constructors

### constructor

• **new default**(`req?`, `content?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `req` | `IncomingMessage` | `null` |
| `content` | `string` \| `object` \| `Buffer` | `null` |

#### Defined in

[Core/Http/Request.ts:22](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L22)

## Properties

### \_content

• `Protected` **\_content**: `Buffer` = `null`

#### Defined in

[Core/Http/Request.ts:18](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L18)

___

### \_contentType

• `Protected` **\_contentType**: `string` = `''`

#### Defined in

[Core/Http/Request.ts:19](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L19)

___

### \_get

• `Protected` **\_get**: `object` = `null`

#### Defined in

[Core/Http/Request.ts:16](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L16)

___

### \_headers

• `Protected` **\_headers**: `object` = `null`

#### Defined in

[Core/Http/Request.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L15)

___

### \_ip

• `Protected` **\_ip**: `string` = `''`

#### Defined in

[Core/Http/Request.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L20)

___

### \_method

• `Protected` **\_method**: `string` = `''`

#### Defined in

[Core/Http/Request.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L14)

___

### \_post

• `Protected` **\_post**: `object` = `null`

#### Defined in

[Core/Http/Request.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L17)

___

### \_req

• `Protected` **\_req**: `IncomingMessage` = `null`

#### Defined in

[Core/Http/Request.ts:12](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L12)

___

### \_uri

• `Protected` **\_uri**: `string` = `''`

#### Defined in

[Core/Http/Request.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L13)

## Methods

### get

▸ **get**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

RequestInterface.get

#### Defined in

[Core/Http/Request.ts:118](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L118)

___

### getAllGet

▸ **getAllGet**(): `object`

#### Returns

`object`

#### Defined in

[Core/Http/Request.ts:148](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L148)

___

### getAllPost

▸ **getAllPost**(): `object`

#### Returns

`object`

#### Defined in

[Core/Http/Request.ts:154](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L154)

___

### getClientIp

▸ **getClientIp**(): `string`

#### Returns

`string`

#### Implementation of

RequestInterface.getClientIp

#### Defined in

[Core/Http/Request.ts:188](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L188)

___

### getContent

▸ **getContent**(): `Promise`<`Buffer`\>

#### Returns

`Promise`<`Buffer`\>

#### Implementation of

RequestInterface.getContent

#### Defined in

[Core/Http/Request.ts:160](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L160)

___

### getContentType

▸ **getContentType**(): `string`

#### Returns

`string`

#### Implementation of

RequestInterface.getContentType

#### Defined in

[Core/Http/Request.ts:176](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L176)

___

### getHeaders

▸ **getHeaders**(): `object`

#### Returns

`object`

#### Implementation of

RequestInterface.getHeaders

#### Defined in

[Core/Http/Request.ts:182](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L182)

___

### getMethod

▸ **getMethod**(): `string`

#### Returns

`string`

#### Implementation of

RequestInterface.getMethod

#### Defined in

[Core/Http/Request.ts:112](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L112)

___

### getUri

▸ **getUri**(): `string`

#### Returns

`string`

#### Implementation of

RequestInterface.getUri

#### Defined in

[Core/Http/Request.ts:170](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L170)

___

### isValid

▸ **isValid**(): `Boolean`

#### Returns

`Boolean`

#### Defined in

[Core/Http/Request.ts:107](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L107)

___

### post

▸ **post**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

RequestInterface.post

#### Defined in

[Core/Http/Request.ts:125](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Http/Request.ts#L125)
