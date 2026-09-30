---
title: "类：Toybox.Lang.Exception"
---
# 类：Toybox.Lang.Exception

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)


[show all](#)

## 概述

Exception 是表示抛出异常的类。可以通过扩展此类来创建自定义异常。

示例：

创建并抛出新的 Exception 类

```
using Toybox.Lang;
var myVar;

class myException extends Lang.Exception {
    function initialize() {
        Exception.initialize();
    }
}

if (myVar == false) {
    throw new myException();
}
```

示例：

处理 try-catch 代码块中的 Exception

```
using Toybox.Lang;
using Toybox.System;
try {
    // Do something here
} catch (e instanceof Lang.Exception) {
    System.println(e.getErrorMessage());
}
```

起始版本：

API 级别 1.0.0

## 直接已知子类

[Ant.EncryptionInvalidSettingsException](/connect-iq/api-docs/Toybox/Ant/EncryptionInvalidSettingsException/), [Ant.UnableToAcquireChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireChannelException/), [Ant.UnableToAcquireEncryptedChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireEncryptedChannelException/), [AntPlus.AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/), [Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/), [Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/), [Attention.BacklightOnTooLongException](/connect-iq/api-docs/Toybox/Attention/BacklightOnTooLongException/), [Background.ExitDataSizeLimitException](/connect-iq/api-docs/Toybox/Background/ExitDataSizeLimitException/), [Background.InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/), [Background.MessageSizeLimitException](/connect-iq/api-docs/Toybox/Background/MessageSizeLimitException/), [BluetoothLowEnergy.DevicePairException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/DevicePairException/), [BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/), [BluetoothLowEnergy.ProfileRegistrationException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ProfileRegistrationException/), [BluetoothLowEnergy.UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/), [Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/), [Cryptography.InvalidBlockSizeException](/connect-iq/api-docs/Toybox/Cryptography/InvalidBlockSizeException/), [Graphics.InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/), [Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/), [Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/), [Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/), [Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/), [Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/), [Lang.SerializationException](/connect-iq/api-docs/Toybox/Lang/SerializationException/), [Lang.StorageFullException](/connect-iq/api-docs/Toybox/Lang/StorageFullException/), [Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/), [Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/), [Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/), [Sensor.TooManySensorDataListenersException](/connect-iq/api-docs/Toybox/Sensor/TooManySensorDataListenersException/), [StringUtil.InvalidHexStringException](/connect-iq/api-docs/Toybox/StringUtil/InvalidHexStringException/), [System.AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/), [System.PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/), [System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/), [Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/), [Time.RealTimeClockNotValidException](/connect-iq/api-docs/Toybox/Time/RealTimeClockNotValidException/), [WatchUi.InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/), [WatchUi.InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/), [WatchUi.InvalidSelectableStateException](/connect-iq/api-docs/Toybox/WatchUi/InvalidSelectableStateException/)

## 实例方法摘要 [collapse](#)

- [**getErrorMessage**](#getErrorMessage-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    获取 Exception 的错误消息。

- [**initialize**](#initialize-instance_function)()

    异常构造函数。

- [**printStackTrace**](#printStackTrace-instance_function)() as **Void**

    打印抛出异常的堆栈跟踪。


## 实例方法详情

### **getErrorMessage()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

获取 Exception 的错误消息。

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    Exception 的错误消息；如果未提供消息，则为 `null`


起始版本：

API 级别 1.2.0

### **initialize()**

异常构造函数。

起始版本：

API 级别 1.1.2

### **printStackTrace()** as **Void**

打印抛出异常的堆栈跟踪。

起始版本：

API 级别 1.1.2
