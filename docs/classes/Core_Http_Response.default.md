[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Http/Response](../modules/Core_Http_Response.md) / default

# Class: default

[Core/Http/Response](../modules/Core_Http_Response.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](Core_Http_StreamResponse.default.md)

## Table of contents

### Constructors

- [constructor](Core_Http_Response.default.md#constructor)

### Properties

- [content](Core_Http_Response.default.md#content)
- [headers](Core_Http_Response.default.md#headers)
- [statusCode](Core_Http_Response.default.md#statuscode)

### Methods

- [addHeader](Core_Http_Response.default.md#addheader)
- [getContent](Core_Http_Response.default.md#getcontent)
- [getHeader](Core_Http_Response.default.md#getheader)
- [getHeaders](Core_Http_Response.default.md#getheaders)
- [getStatusCode](Core_Http_Response.default.md#getstatuscode)
- [setContent](Core_Http_Response.default.md#setcontent)
- [setHeaders](Core_Http_Response.default.md#setheaders)
- [setStatusCode](Core_Http_Response.default.md#setstatuscode)

## Constructors

### constructor

• **new default**(`content`, `statusCode?`, `headers?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `Buffer` | `undefined` |
| `statusCode` | `number` | `200` |
| `headers` | `object` | `{}` |

#### Defined in

[Core/Http/Response.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L9)

## Properties

### content

• `Protected` **content**: `Buffer` = `null`

#### Defined in

[Core/Http/Response.ts:5](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L5)

___

### headers

• `Protected` **headers**: `object` = `{}`

#### Defined in

[Core/Http/Response.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L7)

___

### statusCode

• `Protected` **statusCode**: `number` = `200`

#### Defined in

[Core/Http/Response.ts:6](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L6)

## Methods

### addHeader

▸ **addHeader**(`key`, `val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[Core/Http/Response.ts:36](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L36)

___

### getContent

▸ **getContent**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[Core/Http/Response.ts:21](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L21)

___

### getHeader

▸ **getHeader**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[Core/Http/Response.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L51)

___

### getHeaders

▸ **getHeaders**(): `object`

#### Returns

`object`

#### Defined in

[Core/Http/Response.ts:46](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L46)

___

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Defined in

[Core/Http/Response.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L31)

___

### setContent

▸ **setContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Buffer` |

#### Returns

`void`

#### Defined in

[Core/Http/Response.ts:16](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L16)

___

### setHeaders

▸ **setHeaders**(`headers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `object` |

#### Returns

`void`

#### Defined in

[Core/Http/Response.ts:41](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L41)

___

### setStatusCode

▸ **setStatusCode**(`statusCode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |

#### Returns

`void`

#### Defined in

[Core/Http/Response.ts:26](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L26)
