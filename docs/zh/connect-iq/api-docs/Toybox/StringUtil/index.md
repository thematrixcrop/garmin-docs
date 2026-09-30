---
title: "Module: Toybox.StringUtil"
---
# Module: Toybox.StringUtil

## 概述

The StringUtil module contains String utility functions

Since:

API 级别 1.3.0

## 命名空间下的类

类：[InvalidHexStringException](/connect-iq/api-docs/Toybox/StringUtil/InvalidHexStringException/)

## 常量摘要

### CharacterEncoding

Since:

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CHAR\_ENCODING\_UTF8 | 0 |
API 级别 3.0.0

 |  |

### Representation

Since:

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REPRESENTATION\_STRING\_BASE64 | 0 |
API 级别 3.0.0

 |  |
| REPRESENTATION\_STRING\_HEX | 1 |

API 级别 3.0.0

 |  |
| REPRESENTATION\_STRING\_PLAIN\_TEXT | 2 |

API 级别 3.0.0

 |  |
| REPRESENTATION\_BYTE\_ARRAY | 3 |

API 级别 3.0.0

 |  |

## 实例方法摘要 [collapse](#)

- [**charArrayToString**](#charArrayToString-instance_function)(charArray as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Given an Array of [Char](/connect-iq/api-docs/Toybox/Lang/Char/) objects, return the String equivalent.

- [**convertEncodedString**](#convertEncodedString-instance_function)(input as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :fromRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :toRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :encoding as [StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module) }) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将 String 或 ByteArray 表示转换为 String 或 ByteArray 表示，其底层字节格式与提供的输入选项相对应。

- [**encodeBase64**](#encodeBase64-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Encodes a String in base64.

- [**utf8ArrayToString**](#utf8ArrayToString-instance_function)(utf8Array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Given an Array of UTF-8 bytes, return the String equivalent.


## 实例方法详情

### **charArrayToString(charArray as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Given an Array of [Char](/connect-iq/api-docs/Toybox/Lang/Char/) objects, return the String equivalent

Parameters:

- charArray — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    An Array of Char objects


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the input Array


Since:

API 级别 1.3.0

### **convertEncodedString(input as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :fromRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :toRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :encoding as [StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module) })** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将 String 或 ByteArray 表示转换为 String 或 ByteArray 表示，其底层字节格式与提供的输入选项相对应。

Parameters:

- input — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    Input that needs to be converted.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))
- :fromRepresentation — ([StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module)) —

        Required. A [REPRESENTATION\_\*](/connect-iq/api-docs/Toybox/StringUtil/) enum value indicating the representation from which the `input` should be converted.

- :toRepresentation — ([StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module)) —

        Required. A [REPRESENTATION\_\*](/connect-iq/api-docs/Toybox/StringUtil/) enum value indicating the representation to which the `input` should be converted.

- :encoding — ([StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module)) —

        A [CHAR\_ENCODING\_\*](/connect-iq/api-docs/Toybox/StringUtil/) value indicating the String encoding to use when generating a hex string or ByteArray when either the `fromRepresentation` or `toRepresentation` is set to REPRESENTATION\_STRING\_PLAIN\_TEXT. Defaults to CHAR\_ENCODING\_UTF8 if not specified.


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    The converted String or ByteArray based on the provided options


Since:

API 级别 3.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if a required option is not set with a valid enumeration value.


### **encodeBase64(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Encodes a String in base64

Parameters:

- string — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The string to encode


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A base64 encoded String


Since:

API 级别 1.3.0

### **utf8ArrayToString(utf8Array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Given an Array of UTF-8 bytes, return the String equivalent

Parameters:

- utf8Array — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    An Array of UTF-8 bytes


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the input Array


Since:

API 级别 1.3.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if a the provided bytes contain an invalid UTF-8 sequence.
