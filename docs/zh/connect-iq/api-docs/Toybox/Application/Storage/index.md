---
title: "Module: Toybox.Application.Storage"
---
# 模块：Toybox.Application.Storage

## 概述

Storage 模块为应用程序提供持久化存储。

Storage 提供对持久磁盘存储的访问。

Since:

API 级别 2.4.0

## 类型定义摘要 [collapse](#)

- [**KeyType**](#KeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
- [**ValueType**](#ValueType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or **Null**

## 实例方法摘要 [collapse](#)

- [**clearValues**](#clearValues-instance_function)() as **Void**

    清空该应用的对象存储。

- [**deleteValue**](#deleteValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) as **Void**

    从对象存储中删除指定的键。

- [**getValue**](#getValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)

    从对象存储中获取与指定键关联的数据。

- [**setValue**](#setValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), value as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)) as **Void**

    把给定数据存入该对象。


## 类型定义详情

### **KeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API 级别 2.4.0

### **ValueType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or **Null**

Since:

API 级别 2.4.0

## 实例方法详情

### **clearValues()** as **Void**

清空该应用的对象存储。

Since:

API 级别 2.4.0

Throws:

- ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    如果在不支持 ConnectIQ 3.2.0 的设备上从后台进程调用，则会抛出此异常。


### **deleteValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type))** as **Void**

从对象存储中删除指定的键。

Parameters:

- key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    要删除的键。


另见：

- [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)


Since:

API 级别 2.4.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 key 是禁止的数据类型则抛出

- ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    如果在不支持 ConnectIQ 3.2.0 的设备上从后台进程调用，则会抛出此异常


### **getValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type))** as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)

从对象存储中获取与指定键关联的数据。

必须先使用 [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) 设置值，然后才能通过 `getValue` 获取这些值。

注意：

符号可能因构建版本不同而发生变化，不得将其用于 Keys 或 Values

Parameters:

- key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    要从对象存储中获取的值所对应的键


Returns:

- [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type) —

    与键关联的内容；如果对象存储中不存在该键，则为 `null`


另见：

- [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)

- [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)


Since:

API 级别 2.4.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 key 是禁止的数据类型则抛出


### **setValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), value as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type))** as **Void**

把给定数据存入该对象。

对存储对象类型的支持随着时间推移不断扩展。

- [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)（自 3.0.0）

- [AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)（自 3.0.8）

- [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)（自 3.2.0）

- [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)（自 4.2.0）

- [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/)（自 5.1.0）


Object Store 的大小存在限制，该限制可能因设备而异。如果达到此限制，值将不会保存，并且会抛出异常。此外，值的大小限制为 32 KB。

注意：

符号可能因构建版本不同而发生变化，不得将其用于 Keys 或 Values

Parameters:

- key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    用于在对象存储中存储和检索值的键（不能是 Symbol）。

- value — ([Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)) —

    要放入对象存储中的值。


Example:

```
using Toybox.Application.Storage;

Storage.setValue("number", 2);               // set value for "number" key
Storage.setValue("float", 3.14);             // set value for "float" key
Storage.setValue("string", "Hello World!");  // set value for "string" key
Storage.setValue("boolean", true);           // set value for "boolean" key

var int = Storage.getValue("number");          // get value for "number" key
var float = Storage.getValue("float");         // get value for "float" key
var string = Storage.getValue("string");       // get value for "string" key
var boolean = Storage.getValue("boolean");     // get value for "boolean" key
```

另见：

- [getValue()](/connect-iq/api-docs/Toybox/Application/Storage/#getValue-instance_function)

- [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)

- [Core Topics - Persisting Data](/connect-iq/core-topics/persisting-data/)


Since:

API 级别 2.4.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 key 是禁止的数据类型则抛出

- ([Lang.StorageFullException](/connect-iq/api-docs/Toybox/Lang/StorageFullException/)) —

    如果对象存储中没有足够的剩余空间存储给定的键和值，则抛出

- ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    如果在不支持 ConnectIQ 3.2.0 的设备上从后台进程调用，则抛出。使用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)，始终可以将数据从后台进程传递到前台进程。
