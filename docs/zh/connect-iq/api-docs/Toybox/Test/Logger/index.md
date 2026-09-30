---
title: "Class: Toybox.Test.Logger"
---
# 类：Toybox.Test.Logger

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Test.Logger](/connect-iq/api-docs/Toybox/Test/Logger/)


[show all](#)

## 概述

The Logger class provides output capabilities to tests.

It is not necessary to instantiate the Logger class. This is done automatically behind the scenes.

Since:

API 级别 2.1.0

## 实例方法摘要 [collapse](#)

- [**debug**](#debug-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将调试 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

- [**error**](#error-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将错误 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

- [**warning**](#warning-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将警告 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。


## 实例方法详情

### **debug(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将调试 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

The String is prefixed with DEBUG and a time stamp.

Parameters:

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


Example:

```
using Toybox.Test;
(:test)
function aDebugTest(logger) {
   logger.debug("This is a debug message.");
   return true;
}
// Output:
DEBUG (9:23): This is a debug message.
```

Since:

API 级别 2.1.0

### **error(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将错误 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

The String is prefixed with ERROR and time stamp.

Parameters:

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


Example:

```
using Toybox.Test;
(:test)
function anErrorTest(logger) {
   logger.error("This is an error message.");
   return true;
}
// Output:
ERROR (9:24): This is an error message.
```

Since:

API 级别 2.1.0

### **warning(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将警告 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

The String is prefixed with WARNING and a time stamp.

Parameters:

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


Example:

```
using Toybox.Test;
(:test)
function aWarningTest(logger) {
   logger.warning("This is a warning message.");
   return true;
}
// Output:
WARNING (9:23): This is a warning message.
```

Since:

API 级别 2.1.0
