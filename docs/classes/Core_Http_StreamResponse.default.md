[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Http/StreamResponse](../modules/Core_Http_StreamResponse.md) / default

# Class: default

[Core/Http/StreamResponse](../modules/Core_Http_StreamResponse.md).default

## Hierarchy

- [`default`](Core_Http_Response.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Core_Http_StreamResponse.default.md#constructor)

### Properties

- [content](Core_Http_StreamResponse.default.md#content)
- [headers](Core_Http_StreamResponse.default.md#headers)
- [statusCode](Core_Http_StreamResponse.default.md#statuscode)

### Methods

- [addHeader](Core_Http_StreamResponse.default.md#addheader)
- [getContent](Core_Http_StreamResponse.default.md#getcontent)
- [getHeader](Core_Http_StreamResponse.default.md#getheader)
- [getHeaders](Core_Http_StreamResponse.default.md#getheaders)
- [getStatusCode](Core_Http_StreamResponse.default.md#getstatuscode)
- [save](Core_Http_StreamResponse.default.md#save)
- [saveAs](Core_Http_StreamResponse.default.md#saveas)
- [setContent](Core_Http_StreamResponse.default.md#setcontent)
- [setHeaders](Core_Http_StreamResponse.default.md#setheaders)
- [setStatusCode](Core_Http_StreamResponse.default.md#setstatuscode)
- [buildFromResponse](Core_Http_StreamResponse.default.md#buildfromresponse)

## Constructors

### constructor

• **new default**(`content`, `statusCode?`, `headers?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `Buffer` | `undefined` |
| `statusCode` | `number` | `200` |
| `headers` | `object` | `{}` |

#### Inherited from

[default](Core_Http_Response.default.md).[constructor](Core_Http_Response.default.md#constructor)

#### Defined in

[Core/Http/Response.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L9)

## Properties

### content

• `Protected` **content**: `Buffer` = `null`

#### Inherited from

[default](Core_Http_Response.default.md).[content](Core_Http_Response.default.md#content)

#### Defined in

[Core/Http/Response.ts:5](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L5)

___

### headers

• `Protected` **headers**: `object` = `{}`

#### Inherited from

[default](Core_Http_Response.default.md).[headers](Core_Http_Response.default.md#headers)

#### Defined in

[Core/Http/Response.ts:7](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L7)

___

### statusCode

• `Protected` **statusCode**: `number` = `200`

#### Inherited from

[default](Core_Http_Response.default.md).[statusCode](Core_Http_Response.default.md#statuscode)

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

#### Inherited from

[default](Core_Http_Response.default.md).[addHeader](Core_Http_Response.default.md#addheader)

#### Defined in

[Core/Http/Response.ts:36](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L36)

___

### getContent

▸ **getContent**(): `Buffer`

#### Returns

`Buffer`

#### Inherited from

[default](Core_Http_Response.default.md).[getContent](Core_Http_Response.default.md#getcontent)

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

#### Inherited from

[default](Core_Http_Response.default.md).[getHeader](Core_Http_Response.default.md#getheader)

#### Defined in

[Core/Http/Response.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L51)

___

### getHeaders

▸ **getHeaders**(): `object`

#### Returns

`object`

#### Inherited from

[default](Core_Http_Response.default.md).[getHeaders](Core_Http_Response.default.md#getheaders)

#### Defined in

[Core/Http/Response.ts:46](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L46)

___

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[default](Core_Http_Response.default.md).[getStatusCode](Core_Http_Response.default.md#getstatuscode)

#### Defined in

[Core/Http/Response.ts:31](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L31)

___

### save

▸ **save**(`directory`, `filename?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `directory` | `string` | `undefined` |
| `filename` | `string` | `''` |

#### Returns

`string`

#### Defined in

[Core/Http/StreamResponse.ts:9](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/StreamResponse.ts#L9)

___

### saveAs

▸ **saveAs**(`directory`, `filename?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `directory` | `string` | `undefined` |
| `filename` | `string` | `''` |

#### Returns

`string`

#### Defined in

[Core/Http/StreamResponse.ts:38](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/StreamResponse.ts#L38)

___

### setContent

▸ **setContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Buffer` |

#### Returns

`void`

#### Inherited from

[default](Core_Http_Response.default.md).[setContent](Core_Http_Response.default.md#setcontent)

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

#### Inherited from

[default](Core_Http_Response.default.md).[setHeaders](Core_Http_Response.default.md#setheaders)

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

#### Inherited from

[default](Core_Http_Response.default.md).[setStatusCode](Core_Http_Response.default.md#setstatuscode)

#### Defined in

[Core/Http/Response.ts:26](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/Response.ts#L26)

___

### buildFromResponse

▸ `Static` **buildFromResponse**(`res`): [`default`](Core_Http_StreamResponse.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`default`](Core_Http_Response.default.md) |

#### Returns

[`default`](Core_Http_StreamResponse.default.md)

#### Defined in

[Core/Http/StreamResponse.ts:43](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/Http/StreamResponse.ts#L43)
