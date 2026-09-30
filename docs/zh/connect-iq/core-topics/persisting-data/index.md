---
title: "Persisting Data"
---
# Persisting Data

连接智能也可以在运行时间内存储应用程序内部的数据.例如,应用程序可能需要获取或计算数据并存储其以后使用.这通过使用存储,属性和设置实现.

- *存储*表示写到磁盘上的数据,以便在应用程序执行中保持.

- *属性*是构建时定义的常数值,并包含在可执行中的值,用于不应该在代码中定义的特定产品值.属性也可以定义默认设置值.

- *设置*是通过 Garmin Connect Mobile和 Garmin Express 修改的用户可编辑的值.默认设置值由 Properties 定义.


## Storage

存储是用来在开发人员定义的运行时间内从设备的文件系统保存和检索数据.这些数据仅可用于应用程序,最终用户无法访问.例如,该功能可以用于存储应用程序最后使用时的位置.下一次应用程序启动时,存储可以为应用程序提供最后已知位置.

下列数据类型可存储:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

-   [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

-   [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

-   [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


值得注意的是,[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)或[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)可能只包含上述数据类型.例如,无法在存储中存储[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)在[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)或[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/).

## Accessing Properties and Settings: Object Store

在 API 级别 2.4.0 之前,所有内容都存在于对象存储中.如果您的应用程序运行在 Connect IQ System 1 设备上,则需要使用[AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function)和[AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function)来保持数据.这些功能允许访问既设置,又保持数据.

由于对象存储器的成本与运行时间内存相比,除非您在系统1设备上运行,否则不要使用这些方法.

| API |目的| API Level |
| --- | --- | --- |
| [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) |从物体存储器中按键获取信息| 1.0.0 |
| [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) |存储信息按键在物体存储器中| 1.0.0 |

## Accessing Storage: `Application.Storage`

*Since API level 2.4.0*

[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/)模块管理持续的键值对数据存储.当调用[Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)时,信息自动存储在磁盘上.键和值每个限制在8 KB,总共可存储 128 KB.

例如,一个应用程序可能会保存一个位置以后使用以下代码:

```java
Storage.setValue("location", locationValue.toDegrees());
```

下次启动应用程序时,可检索并显示存储的位置值:

```java
var myLastLocation = Application.Storage.getValue("location");
dc.drawText(x, y, Graphics.FONT_SMALL, "Last location: " + myLastLocation, Graphics.TEXT_JUSTIFY_LEFT);
```

API级 3.2.0 引入了从背景过程中访问[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/)模块的能力.后台过程可以使用[Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function),[Storage.deleteValue()](/connect-iq/api-docs/Toybox/Application/Storage/#deleteValue-instance_function)和 .当存储从背景过程中编写时,如果背景和前景过程同时和相反而活跃,则将调用[AppBase.onStorageChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStorageChanged-instance_function)调用后台进程.应用程序将不得不重新加载存储数据以反映更新信息.

| API |目的| API Level |
| --- | --- | --- |
| [Storage.getValue()](/connect-iq/api-docs/Toybox/Application/Storage/#getValue-instance_function) |从持续存储中按键获取信息| 2.4.0 |
| [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) | Store information by key in persisted storage | 2.4.0 |

## Accessing Properties and Settings: `Application.Properties`

*Since API level 2.4.0*

The [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) 模块提供 an interface for accessing the values and properties of settings. Information is automatically saved on disk when [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) is called. To get or set a property value use the [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) or methods, respectively:

```java
// Set an Object Store app setting
Properties.setValue("mySetting", mySetting);

// Get an Object Store app setting value
var mySetting = Properties.getValue("mySetting");
```

| API |目的| API Level |
| --- | --- | --- |
| [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) |从属性中按键获取信息.属性值必须在`<properties>`元素中的资源xml文件中定义.如果一个不存在应用属性中的密钥被传递给[Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function),则会抛出一个例外| 2.4.0 |
| [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) |存储信息按按键在持续存储中.资源xml文件中必须在`<properties>`元素中定义属性值.如果在应用属性中不存在的密钥被传递到[Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function),则会抛出一个例外| 2.4.0 |

##我应该使用哪个API?

如果您的应用程序在API级别2.4.0或以上的设备上运行,[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/)比对象存储器提供了更好的应用数据持久解决方案.在现有应用程序中使用更新的API只是更新代码来调用新方法.

1. 对象存储数据文件不会转换为新格式.

如果应用程序使用了 API 级别 2.4.0 之前的存储,现有的属性不会自动迁移到[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/)模块所使用的新文件格式.如果需要转换,应用程序必须包含一个程序,以从旧文件中获取数据并将其存储在新的格式中.

2.[Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/)将在未定义的属性上尝试写时抛出例外.在API级别2.4.0之前,尝试写到未定义的属性会导致为存储写入值 ( .STR文件),因为[AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function)和[AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function)被过载以与存储,属性和设置每个功能.使用[Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/)模块时,这种行为将不再发生,因为它与 .而不是,一个[Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)被抛出.


为了最大限度地使用支持设备的数量,使用`has`检查查是否可用存储API,然后根据设备支持的方法调用适当的方法:

```typescript
if ( Toybox.Application has :Storage ) {
    // use Application.Storage and Application.Properties methods
} else {
    // use Application.AppBase methods
}
```

查看与SDK共享的`ApplicationStorage`样本应用.
