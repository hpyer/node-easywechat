[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/GroupRobot/Messages/Image](../modules/Work_GroupRobot_Messages_Image.md) / Image

# Class: Image

[Work/GroupRobot/Messages/Image](../modules/Work_GroupRobot_Messages_Image.md).Image

## Hierarchy

- [`Message`](Work_GroupRobot_Messages_Message.Message.md)

  ↳ **`Image`**

## Table of contents

### Constructors

- [constructor](Work_GroupRobot_Messages_Image.Image.md#constructor)

### Properties

- [attributes](Work_GroupRobot_Messages_Image.Image.md#attributes)
- [from](Work_GroupRobot_Messages_Image.Image.md#from)
- [id](Work_GroupRobot_Messages_Image.Image.md#id)
- [jsonAliases](Work_GroupRobot_Messages_Image.Image.md#jsonaliases)
- [properties](Work_GroupRobot_Messages_Image.Image.md#properties)
- [required](Work_GroupRobot_Messages_Image.Image.md#required)
- [to](Work_GroupRobot_Messages_Image.Image.md#to)
- [type](Work_GroupRobot_Messages_Image.Image.md#type)
- [ALL](Work_GroupRobot_Messages_Image.Image.md#all)
- [DEVICE\_EVENT](Work_GroupRobot_Messages_Image.Image.md#device_event)
- [DEVICE\_TEXT](Work_GroupRobot_Messages_Image.Image.md#device_text)
- [EVENT](Work_GroupRobot_Messages_Image.Image.md#event)
- [FILE](Work_GroupRobot_Messages_Image.Image.md#file)
- [IMAGE](Work_GroupRobot_Messages_Image.Image.md#image)
- [LINK](Work_GroupRobot_Messages_Image.Image.md#link)
- [LOCATION](Work_GroupRobot_Messages_Image.Image.md#location)
- [MARKDOWN](Work_GroupRobot_Messages_Image.Image.md#markdown)
- [MINIPROGRAM\_NOTICE](Work_GroupRobot_Messages_Image.Image.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Work_GroupRobot_Messages_Image.Image.md#miniprogram_page)
- [SHORT\_VIDEO](Work_GroupRobot_Messages_Image.Image.md#short_video)
- [TEXT](Work_GroupRobot_Messages_Image.Image.md#text)
- [TEXT\_CARD](Work_GroupRobot_Messages_Image.Image.md#text_card)
- [TRANSFER](Work_GroupRobot_Messages_Image.Image.md#transfer)
- [VIDEO](Work_GroupRobot_Messages_Image.Image.md#video)
- [VOICE](Work_GroupRobot_Messages_Image.Image.md#voice)

### Methods

- [all](Work_GroupRobot_Messages_Image.Image.md#all)
- [checkRequiredAttributes](Work_GroupRobot_Messages_Image.Image.md#checkrequiredattributes)
- [get](Work_GroupRobot_Messages_Image.Image.md#get)
- [getAttribute](Work_GroupRobot_Messages_Image.Image.md#getattribute)
- [getRequired](Work_GroupRobot_Messages_Image.Image.md#getrequired)
- [getType](Work_GroupRobot_Messages_Image.Image.md#gettype)
- [has](Work_GroupRobot_Messages_Image.Image.md#has)
- [isRequired](Work_GroupRobot_Messages_Image.Image.md#isrequired)
- [merge](Work_GroupRobot_Messages_Image.Image.md#merge)
- [only](Work_GroupRobot_Messages_Image.Image.md#only)
- [propertiesToObject](Work_GroupRobot_Messages_Image.Image.md#propertiestoobject)
- [set](Work_GroupRobot_Messages_Image.Image.md#set)
- [setAttribute](Work_GroupRobot_Messages_Image.Image.md#setattribute)
- [setAttributes](Work_GroupRobot_Messages_Image.Image.md#setattributes)
- [setType](Work_GroupRobot_Messages_Image.Image.md#settype)
- [toXmlArray](Work_GroupRobot_Messages_Image.Image.md#toxmlarray)
- [transformForJsonRequest](Work_GroupRobot_Messages_Image.Image.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Work_GroupRobot_Messages_Image.Image.md#transformforjsonrequestwithouttype)
- [transformToXml](Work_GroupRobot_Messages_Image.Image.md#transformtoxml)

## Constructors

### constructor

• **new Image**(`base64`, `md5`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64` | `string` |
| `md5` | `string` |

#### Overrides

[Message](Work_GroupRobot_Messages_Message.Message.md).[constructor](Work_GroupRobot_Messages_Message.Message.md#constructor)

#### Defined in

[Work/GroupRobot/Messages/Image.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/GroupRobot/Messages/Image.ts#L11)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[attributes](Work_GroupRobot_Messages_Message.Message.md#attributes)

#### Defined in

[Core/Messages/Message.ts:113](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L113)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[from](Work_GroupRobot_Messages_Message.Message.md#from)

#### Defined in

[Core/Messages/Message.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L32)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[id](Work_GroupRobot_Messages_Message.Message.md#id)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L30)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[jsonAliases](Work_GroupRobot_Messages_Message.Message.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:34](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L34)

___

### properties

• `Protected` **properties**: `string`[]

#### Overrides

[Message](Work_GroupRobot_Messages_Message.Message.md).[properties](Work_GroupRobot_Messages_Message.Message.md#properties)

#### Defined in

[Work/GroupRobot/Messages/Image.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/GroupRobot/Messages/Image.ts#L9)

___

### required

• `Protected` **required**: `string`[] = `[]`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[required](Work_GroupRobot_Messages_Message.Message.md#required)

#### Defined in

[Core/Messages/Message.ts:115](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L115)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[to](Work_GroupRobot_Messages_Message.Message.md#to)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L31)

___

### type

• `Protected` **type**: `string` = `'image'`

#### Overrides

[Message](Work_GroupRobot_Messages_Message.Message.md).[type](Work_GroupRobot_Messages_Message.Message.md#type)

#### Defined in

[Work/GroupRobot/Messages/Image.ts:7](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/GroupRobot/Messages/Image.ts#L7)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[ALL](Work_GroupRobot_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L24)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[DEVICE_EVENT](Work_GroupRobot_Messages_Message.Message.md#device_event)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L15)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[DEVICE_TEXT](Work_GroupRobot_Messages_Message.Message.md#device_text)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L16)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[EVENT](Work_GroupRobot_Messages_Message.Message.md#event)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L20)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[FILE](Work_GroupRobot_Messages_Message.Message.md#file)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L17)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[IMAGE](Work_GroupRobot_Messages_Message.Message.md#image)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L9)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[LINK](Work_GroupRobot_Messages_Message.Message.md#link)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L14)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[LOCATION](Work_GroupRobot_Messages_Message.Message.md#location)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L13)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[MARKDOWN](Work_GroupRobot_Messages_Message.Message.md#markdown)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L23)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[MINIPROGRAM_NOTICE](Work_GroupRobot_Messages_Message.Message.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[MINIPROGRAM_PAGE](Work_GroupRobot_Messages_Message.Message.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L21)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[SHORT_VIDEO](Work_GroupRobot_Messages_Message.Message.md#short_video)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L12)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[TEXT](Work_GroupRobot_Messages_Message.Message.md#text)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L8)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[TEXT_CARD](Work_GroupRobot_Messages_Message.Message.md#text_card)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L18)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[TRANSFER](Work_GroupRobot_Messages_Message.Message.md#transfer)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L19)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[VIDEO](Work_GroupRobot_Messages_Message.Message.md#video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L11)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[VOICE](Work_GroupRobot_Messages_Message.Message.md#voice)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L10)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[all](Work_GroupRobot_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:179](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L179)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[checkRequiredAttributes](Work_GroupRobot_Messages_Message.Message.md#checkrequiredattributes)

#### Defined in

[Core/Messages/Message.ts:196](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L196)

___

### get

▸ **get**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[get](Work_GroupRobot_Messages_Message.Message.md#get)

#### Defined in

[Core/Messages/Message.ts:143](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L143)

___

### getAttribute

▸ **getAttribute**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[getAttribute](Work_GroupRobot_Messages_Message.Message.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:138](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L138)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[getRequired](Work_GroupRobot_Messages_Message.Message.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:186](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L186)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[getType](Work_GroupRobot_Messages_Message.Message.md#gettype)

#### Defined in

[Core/Messages/Message.ts:41](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L41)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[has](Work_GroupRobot_Messages_Message.Message.md#has)

#### Defined in

[Core/Messages/Message.ts:148](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L148)

___

### isRequired

▸ **isRequired**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`boolean`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[isRequired](Work_GroupRobot_Messages_Message.Message.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:191](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L191)

___

### merge

▸ **merge**(`attributes`): [`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[merge](Work_GroupRobot_Messages_Message.Message.md#merge)

#### Defined in

[Core/Messages/Message.ts:158](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L158)

___

### only

▸ **only**(`keys`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`object`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[only](Work_GroupRobot_Messages_Message.Message.md#only)

#### Defined in

[Core/Messages/Message.ts:165](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L165)

___

### propertiesToObject

▸ **propertiesToObject**(`data`, `aliases?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `aliases` | `object` | `null` |

#### Returns

`object`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[propertiesToObject](Work_GroupRobot_Messages_Message.Message.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:96](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L96)

___

### set

▸ **set**(`name`, `value`): [`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[set](Work_GroupRobot_Messages_Message.Message.md#set)

#### Defined in

[Core/Messages/Message.ts:131](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L131)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[setAttribute](Work_GroupRobot_Messages_Message.Message.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:124](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L124)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Image`](Work_GroupRobot_Messages_Image.Image.md)

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[setAttributes](Work_GroupRobot_Messages_Message.Message.md#setattributes)

#### Defined in

[Core/Messages/Message.ts:117](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L117)

___

### setType

▸ **setType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[setType](Work_GroupRobot_Messages_Message.Message.md#settype)

#### Defined in

[Core/Messages/Message.ts:46](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L46)

___

### toXmlArray

▸ **toXmlArray**(): `void`

#### Returns

`void`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[toXmlArray](Work_GroupRobot_Messages_Message.Message.md#toxmlarray)

#### Defined in

[Core/Messages/Message.ts:71](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L71)

___

### transformForJsonRequest

▸ **transformForJsonRequest**(`appends?`, `withType?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `withType` | `boolean` | `true` |

#### Returns

`object`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[transformForJsonRequest](Work_GroupRobot_Messages_Message.Message.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Message.ts:81](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L81)

___

### transformForJsonRequestWithoutType

▸ **transformForJsonRequestWithoutType**(`appends?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appends` | `object` |

#### Returns

`object`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[transformForJsonRequestWithoutType](Work_GroupRobot_Messages_Message.Message.md#transformforjsonrequestwithouttype)

#### Defined in

[Core/Messages/Message.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L76)

___

### transformToXml

▸ **transformToXml**(`appends?`, `returnAsObject?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `returnAsObject` | `boolean` | `false` |

#### Returns

`any`

#### Inherited from

[Message](Work_GroupRobot_Messages_Message.Message.md).[transformToXml](Work_GroupRobot_Messages_Message.Message.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Messages/Message.ts#L51)
