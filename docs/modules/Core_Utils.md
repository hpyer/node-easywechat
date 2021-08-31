[node-easywechat](../README.md) / [Exports](../modules.md) / Core/Utils

# Module: Core/Utils

## Table of contents

### Functions

- [applyMixins](Core_Utils.md#applymixins)
- [buildQueryString](Core_Utils.md#buildquerystring)
- [buildXml](Core_Utils.md#buildxml)
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
- [md5File](Core_Utils.md#md5file)
- [merge](Core_Utils.md#merge)
- [parseQueryString](Core_Utils.md#parsequerystring)
- [parseXml](Core_Utils.md#parsexml)
- [randomString](Core_Utils.md#randomstring)
- [singleItem](Core_Utils.md#singleitem)
- [strCamel](Core_Utils.md#strcamel)
- [strLcwords](Core_Utils.md#strlcwords)
- [strStudly](Core_Utils.md#strstudly)
- [strUcwords](Core_Utils.md#strucwords)

## Functions

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

[Core/Utils.ts:189](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L189)

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

[Core/Utils.ts:85](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L85)

___

### buildXml

▸ `Const` **buildXml**(`data`, `rootName?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `rootName` | `string` | `'xml'` |

#### Returns

`string`

#### Defined in

[Core/Utils.ts:256](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L256)

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

[Core/Utils.ts:38](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L38)

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

[Core/Utils.ts:43](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L43)

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

[Core/Utils.ts:73](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L73)

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

[Core/Utils.ts:171](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L171)

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

[Core/Utils.ts:140](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L140)

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

[Core/Utils.ts:152](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L152)

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

[Core/Utils.ts:166](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L166)

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

[Core/Utils.ts:156](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L156)

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

[Core/Utils.ts:161](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L161)

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

[Core/Utils.ts:144](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L144)

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

[Core/Utils.ts:148](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L148)

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

[Core/Utils.ts:136](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L136)

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

[Core/Utils.ts:105](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L105)

___

### md5File

▸ `Const` **md5File**(`path`): `Promise`<`string`\>

计算文件的 md5 值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` \| `Readable` | 文件路径或文件可读流 |

#### Returns

`Promise`<`string`\>

#### Defined in

[Core/Utils.ts:52](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L52)

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

[Core/Utils.ts:9](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L9)

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

[Core/Utils.ts:90](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L90)

___

### parseXml

▸ `Const` **parseXml**(`xml`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xml` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/Utils.ts:248](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L248)

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

[Core/Utils.ts:95](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L95)

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

[Core/Utils.ts:227](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L227)

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

[Core/Utils.ts:221](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L221)

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

[Core/Utils.ts:207](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L207)

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

[Core/Utils.ts:215](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L215)

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

[Core/Utils.ts:199](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Utils.ts#L199)
