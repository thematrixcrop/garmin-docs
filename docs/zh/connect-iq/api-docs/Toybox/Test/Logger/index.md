---
title: "Class: Toybox.Test.Logger"
---
# Class: Toybox.Test.Logger

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

    Write a debug [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.

- [**error**](#error-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Write an error [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.

- [**warning**](#warning-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Write a warning [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.


## 实例方法详情

### **debug(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

Write a debug [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.

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

Write an error [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.

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

Write a warning [String](/connect-iq/api-docs/Toybox/Lang/String/) to the output stream.

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
