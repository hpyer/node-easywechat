[node-easywechat](../README.md) / [Exports](../modules.md) / Core/Utils

# Module: Core/Utils

## Table of contents

### Functions

- [AesDecrypt](Core_Utils.md#aesdecrypt)
- [AesEncrypt](Core_Utils.md#aesencrypt)
- [applyMixins](Core_Utils.md#applymixins)
- [buildQueryString](Core_Utils.md#buildquerystring)
- [createHash](Core_Utils.md#createhash)
- [createHmac](Core_Utils.md#createhmac)
- [getTimestamp](Core_Utils.md#gettimestamp)
- [inArray](Core_Utils.md#inarray)
- [isArray](Core_Utils.md#isarray)
- [isFunction](Core_Utils.md#isfunction)
- [isIp](Core_Utils.md#isip)
- [isIpv4](Core_Utils.md#isipv4)
- [isIpv6](Core_Utils.md#isipv6)
- [isNumber](Core_Utils.md#isnumber)
- [isObject](Core_Utils.md#isobject)
- [isString](Core_Utils.md#isstring)
- [makeSignature](Core_Utils.md#makesignature)
- [merge](Core_Utils.md#merge)
- [parseQueryString](Core_Utils.md#parsequerystring)
- [randomString](Core_Utils.md#randomstring)
- [singleItem](Core_Utils.md#singleitem)
- [strCamel](Core_Utils.md#strcamel)
- [strLcwords](Core_Utils.md#strlcwords)
- [strStudly](Core_Utils.md#strstudly)
- [strUcwords](Core_Utils.md#strucwords)

## Functions

### AesDecrypt

▸ `Const` **AesDecrypt**(`ciphertext`, `key`, `iv?`, `method?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ciphertext` | `any` | `undefined` |
| `key` | `any` | `undefined` |
| `iv` | `string` | `''` |
| `method` | `string` | `'AES-256-ECB'` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:220](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L220)

___

### AesEncrypt

▸ `Const` **AesEncrypt**(`data`, `key`, `iv?`, `method?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `key` | `any` | `undefined` |
| `iv` | `string` | `''` |
| `method` | `string` | `'AES-256-ECB'` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:230](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L230)

___

### applyMixins

▸ `Const` **applyMixins**(`derivedCtor`, `baseCtors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `derivedCtor` | `any` |
| `baseCtors` | `any`[] |

#### Returns

`void`

#### Defined in

[Core/Utils.ts:161](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L161)

___

### buildQueryString

▸ `Const` **buildQueryString**(`data`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |
| `options` | `object` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:57](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L57)

___

### createHash

▸ `Const` **createHash**(`str`, `type?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `type` | `string` | `'sha1'` |

#### Returns

`any`

#### Defined in

[Core/Utils.ts:35](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L35)

___

### createHmac

▸ `Const` **createHmac**(`str`, `key`, `type?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `key` | `string` | `undefined` |
| `type` | `string` | `'sha256'` |

#### Returns

`any`

#### Defined in

[Core/Utils.ts:40](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L40)

___

### getTimestamp

▸ `Const` **getTimestamp**(`datetime?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `datetime` | `string` | `null` |

#### Returns

`number`

#### Defined in

[Core/Utils.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L45)

___

### inArray

▸ `Const` **inArray**(`data`, `arr`, `strict?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `arr` | `any` | `undefined` |
| `strict` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:143](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L143)

___

### isArray

▸ `Const` **isArray**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:112](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L112)

___

### isFunction

▸ `Const` **isFunction**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:124](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L124)

___

### isIp

▸ `Const` **isIp**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:138](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L138)

___

### isIpv4

▸ `Const` **isIpv4**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:128](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L128)

___

### isIpv6

▸ `Const` **isIpv6**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:133](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L133)

___

### isNumber

▸ `Const` **isNumber**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:116](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L116)

___

### isObject

▸ `Const` **isObject**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:120](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L120)

___

### isString

▸ `Const` **isString**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Core/Utils.ts:108](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L108)

___

### makeSignature

▸ `Const` **makeSignature**(`params`, `key?`, `type?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | `object` | `undefined` |
| `key` | `string` | `''` |
| `type` | `string` | `'md5'` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:77](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L77)

___

### merge

▸ `Const` **merge**(`target`, `source`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `source` | `any` |

#### Returns

`any`

#### Defined in

[Core/Utils.ts:6](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L6)

___

### parseQueryString

▸ `Const` **parseQueryString**(`data`, `options?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `options` | `object` |

#### Returns

`object`

#### Defined in

[Core/Utils.ts:62](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L62)

___

### randomString

▸ `Const` **randomString**(`len?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `len` | `number` | `16` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:67](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L67)

___

### singleItem

▸ `Const` **singleItem**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[Core/Utils.ts:199](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L199)

___

### strCamel

▸ `Const` **strCamel**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:193](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L193)

___

### strLcwords

▸ `Const` **strLcwords**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:179](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L179)

___

### strStudly

▸ `Const` **strStudly**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:187](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L187)

___

### strUcwords

▸ `Const` **strUcwords**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:171](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Utils.ts#L171)
