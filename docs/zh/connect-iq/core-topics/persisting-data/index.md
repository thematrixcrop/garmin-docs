---
title: "持久化数据"
---
<a id="persisting-data"></a>
# 持久化数据

Connect IQ 支持应用在运行时保存数据。例如，应用可能需要获取或计算数据，并将其存储起来供后续使用。这可以通过 Storage、Properties 和 Settings 实现。

-   *Storage* 表示写入磁盘的数据，因此数据可以在多次运行应用之间保留。

-   *Properties*（属性）是在构建时定义并包含在可执行文件中的常量值，适合存放不应直接写在代码中的产品特定值。Properties 也可以定义 Settings 的默认值。

-   *Settings*（设置）是用户可通过 Garmin Connect Mobile 和 Garmin Express 修改的值。Settings 的默认值由 Properties 定义。


## Storage

Storage 用于在运行时按照开发者的定义，从设备文件系统保存和读取数据。这些数据仅供应用使用，最终用户无法访问。例如，可以使用此功能保存应用上次运行时的位置。下次启动应用时，Storage 就能向应用提供上次记录的位置。

Storage 可以存储以下数据类型：

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

-   [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

-   [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

-   [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


请注意，[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) 和 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 中只能包含上述数据类型。例如，不能在 Storage 中将 [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) 存入 [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) 或 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)。

## 访问属性和设置：对象存储

在 API 级别 2.4.0 之前，所有内容都持久化在对象存储中。如果应用运行在 Connect IQ System 1 设备上，则需要使用 [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) 和 [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) 持久化数据。这两个函数可以同时访问设置和已持久化的数据。

对象存储是一个 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)，在应用终止之前一直保存在内存中；应用终止时，对象存储才会写入磁盘。由于对象存储会占用运行时内存，因此除非需要支持 System 1 设备，否则不要使用这些方法。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) | 按键从对象存储读取信息 | 1.0.0 |
| [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) | 按键将信息写入对象存储 | 1.0.0 |

## 访问 Storage：`Application.Storage`

*自 API 级别 2.4.0 起可用*

[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) 模块用于管理持久化的键值对数据。调用 [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) 后，信息会自动保存到磁盘。每个键和值的大小上限为 8 KB，Storage 总容量为 128 KB。

例如，应用可以使用以下代码保存一个位置，供之后使用：

```java
Storage.setValue("location", locationValue.toDegrees());
```

下次启动应用时，可以读取并显示保存的位置：

```java
var myLastLocation = Application.Storage.getValue("location");
dc.drawText(x, y, Graphics.FONT_SMALL, "Last location: " + myLastLocation, Graphics.TEXT_JUSTIFY_LEFT);
```

从 API 级别 3.2.0 起，后台进程也可以访问 [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) 模块。后台进程可以使用 [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)、[Storage.deleteValue()](/connect-iq/api-docs/Toybox/Application/Storage/#deleteValue-instance_function) 和 [Storage.clearValues()](/connect-iq/api-docs/Toybox/Application/Storage/#clearValues-instance_function) 修改 Storage。当后台进程写入 Storage 时，如果后台进程和前台进程同时处于活动状态，另一进程会调用 [AppBase.onStorageChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStorageChanged-instance_function) 回调，反之亦然。应用随后需要重新从 Storage 加载数据，才能反映更新后的信息。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [Storage.getValue()](/connect-iq/api-docs/Toybox/Application/Storage/#getValue-instance_function) | 按键从持久化 Storage 读取信息 | 2.4.0 |
| [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) | 按键将信息写入持久化 Storage | 2.4.0 |

## 访问属性和设置：`Application.Properties`

*自 API 级别 2.4.0 起可用*

[Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) 模块提供访问应用属性和设置值的接口。调用 [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) 时，信息会自动保存到磁盘。分别使用 [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) 和 [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) 获取或设置属性值：

```java
// Set an Object Store app setting
Properties.setValue("mySetting", mySetting);

// Get an Object Store app setting value
var mySetting = Properties.getValue("mySetting");
```

| API | 用途 | API 级别 |
| --- | --- | --- |
| [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) | 按键从属性中读取信息。属性值必须在资源 XML 文件的 `<properties>` 元素中定义。如果将应用属性中不存在的键传递给 [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function)，就会抛出异常 | 2.4.0 |
| [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) | 按键将信息写入持久化存储。属性值必须在资源 XML 文件的 `<properties>` 元素中定义。如果将应用属性中不存在的键传递给 [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function)，就会抛出异常 | 2.4.0 |

## 应该使用哪个 API？

如果应用运行在 API 级别 2.4.0 或更高版本的设备上，使用 [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) 持久化应用数据，比使用对象存储更合适。要在现有应用中使用新版 API，只需更新代码以调用新方法。不过，有以下几点需要注意：

1.  对象存储数据文件不会转换为新格式。

    如果应用在 API 级别 2.4.0 之前使用过存储，现有属性不会自动迁移到 [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) 模块使用的新文件格式。如果需要转换，应用必须实现相应逻辑，从旧文件读取数据并以新格式存储。

2.  如果尝试写入未定义的属性，[Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) 会抛出异常。

    在 API 级别 2.4.0 之前，尝试写入未定义的属性会将值写入 Storage（即 `.STR` 文件），因为 [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) 和 [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) 曾被重载，可以分别操作 Storage、Properties 和 Settings。使用 [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) 模块后，这种行为不再存在，因为该模块与 Storage、Properties 和 Settings 的其他接口彼此独立。此时会抛出 [Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)。

为了支持尽可能多的设备，请使用 `has` 检查 Storage API 是否可用，再根据设备支持的 API 调用相应方法：

```typescript
if ( Toybox.Application has :Storage ) {
    // use Application.Storage and Application.Properties methods
} else {
    // use Application.AppBase methods
}
```

更多信息请参阅 SDK 随附的 `ApplicationStorage` 示例应用。
