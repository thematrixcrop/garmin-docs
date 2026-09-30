---
title: "Complications"
---
# 复杂功能

Garmin 设备在用户佩戴时收集大量数据点。 Many of these data points can be summarized and displayed on the watch face as a [complication](https://en.wikipedia.org/wiki/Complication_(horology)). The Connect IQ SDK offers multiple APIs to access user metrics, and has expanded the offerings with every release.

[Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/)模块将Garmin设备通常显示的特定指标结合成一个统一的接口.这种统一的接口为开发者提供了开发者通常在表面上显示的信息的访问权限.使用发布/订阅模型来揭示并发症.

此外，设备应用和音频内容提供者开发人员现在可以使用此新框架发布最多四个复杂功能。 Complications have public, protected, and private visibility levels with the system.

最后，Face It 也将成为 Connect IQ 复杂功能的消费者。 This allows developers to create information that can be published on Face It watch faces.

## 发布者和订阅者


![](/connect-iq/resources/programmers-guide/complication_publishers_and_subscribers.png)

复杂系统的核心是一个发布者/订阅者系统。 系统发布供订阅者消费的复杂数据。 Connect IQ device apps and audio content providers can publish complication data, but only watch faces can subscribe to complication information.

### Complication 对象

数据作为[Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)对象发布.复杂性对象暴露以下信息:

| Identifier |描述| API 级别 |
| --- | --- | --- |
| [Complication.complicationId](/connect-iq/api-docs/Toybox/Complications/Complication/#complicationId-var) |发布的[Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)类型数据类型的唯一标识符| 4.2.0 |
| [Complication.longLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#longLabel-var) |长标签是用于配置菜单中显示的.| 4.2.0 |
| [Complication.ranges](/connect-iq/api-docs/Toybox/Complications/Complication/#ranges-var) |选项数值阵列. 范围允许将可集成到显示器中的数值组分解.| 4.2.0 |
| [Complication.shortLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#shortLabel-var) |五个字符的字符串旨在总结你的复杂性为一个半径复杂性.| 4.2.0 |
| [Complication.unit](/connect-iq/api-docs/Toybox/Complications/Complication/#unit-var) |如果这是`null`则该单元不应该显示.如果这是`UNIT`标识符,则`value`预计将在特定的单元中进行转换.如果`unit`是字符串,则`value`应在没有转换的情况下解释.| `4.2.0` |
| [Complication.value](/connect-iq/api-docs/Toybox/Complications/Complication/#value-var) |列或数字值,描述向用户显示的值| `4.2.0` |

您可以使用这些配件查询更多信息:

| Method |描述| API 级别 |
| --- | --- | --- |
| [Complication.getIcon()](/connect-iq/api-docs/Toybox/Complications/Complication/#getIcon-instance_function) |对于 Connect IQ 复杂性,请查询应用程序提供的图标| 4.2.0 |
| [Complication.getType()](/connect-iq/api-docs/Toybox/Complications/Complication/#getType-instance_function) |对于本土的并发症,返回`COMPLICATION_TYPE`.将返回`COMPLICATION_TYPE_INVALID`连接智商并发症.| 4.2.0 |

### 单位

复杂性允许在用户在系统设置中配置的单位中发布信息.在收到复杂性值时,用户的角色是将值转换为系统设置中指定的指标.

预计单位将以以下方式公布:

| Unit |预期价值|
| --- | --- |
| [`Complications.UNIT_DISTANCE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | Meters |
| [`Complications.UNIT_ELEVATION`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | Meters |
| [`Complications.UNIT_HEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | Meters |
| [`Complications.UNIT_SPEED`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米/秒 |
| [`Complications.UNIT_TEMPERATURE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 摄氏度 |
| [`Complications.UNIT_WEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | Grams |

## 订阅复杂性

To subscribe to a complication 您需要 add the `ComplicationSubscriber` permission to your manifest file. Subscribing to Complications requires the [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/). You can use [Complications.getComplications()](/connect-iq/api-docs/Toybox/Complications/#getComplications-instance_function) to query the all complications supported by the system. You can also query a native complication directly by constructing a [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) explicitly:

```typescript
var complication = Complications.getComplication(
    new Id(Complications.COMPLICATION_TYPE_CALORIES)
);
```

这只适用于本土的并发症. 一旦您获得了并发症ID,您可以保留存储的ID以后使用.

您可以使用[Complications.registerComplicationChangeCallback()](/connect-iq/api-docs/Toybox/Complications/#registerComplicationChangeCallback-instance_function)订阅多个复杂值.当应用程序关闭时,所有订阅都会终止,并且必须在应用程序启动时重新完成.

```typescript
function onStart(params as Dictionary) as Void {
    // Retrieve persisted Complication ID
    mComplicationId = Storage.getValue(COMPLICATION_ID_KEY);

    // Register a callback for receiving
    // updates on complication information
    Complications.registerComplicationChangeCallback(
        self.method(:onComplicationChanged));

    // Liking and subscribing
    Complications.subscribeToUpdates(mComplicationId);
}
```

在回调中,您可以查询更新的信息并处理:

```typescript
function onComplicationChanged(
    complicationId as Complication.Id) as Void {
    // Identify the complication being updated
    if (complicationId == mComplicationId) {
        // Get the complication information
        try {
            var data = Complications.getComplication(
                complicationId);
            // Handle the application processing
            updateData(complicationId, data);
        } catch (e instanceof ComplicationNotFoundException) {
            handleComplicationRemoval(complicationId);
        }
    }
}
```

If the complication is no longer available, for example the user has uninstalled the publishing app, 系统将 throw a [Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/). You should trap this exception and handle it within your app. If a publishing app is uninstalled, 系统将 send an event to your `ComplicationChangeCallback` and automatically unsubscribe your app from any subscribed complications.

当轮椅模式启用时,`COMPLICATION_TYPE_STEPS`和`COMPLICATION_TYPE_FLOORS_CLIMBED`将被`COMPLICATION_TYPE_WHEELCHAIR_PUSHES`取代.

### 保持发射

一些Connect IQ产品有一个功能,按下并保持一个复杂的功能,启动相关的应用程序.你可以通过实施[WatchFaceDelegate.onPress()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPress-instance_function)方法,将此功能添加到你的手表面:

```typescript
function onPress(clickEvent as ClickEvent) as Boolean {
    if ((mComplicationId != null) &&
         isClickInside(clickEvent, mBoundingBox)) {

        // launch the app that published the
        // complication
        try {
            Complications.exitTo(mComplicationId);
            return true;
        } catch (e instanceof AppNotInstalledException) {
            // fall through
        }
    }

    return false;
}
```

如果您的复杂性发布器通过等待启动启动,则您的`state`字典参数将设置`:launchedFromComplication`选项为启动的复杂性 id.

## 发布复杂功能

如果您正在开发设备或音频内容提供者应用，可以向框架发布最多四个复杂功能。 To publish a complication 您需要 add the `ComplicationPublisher` permission to your manifest file.

### 资源

要发布复杂功能，您必须在资源中定义每个复杂功能：

```xml
<complications>
    <complication id="0" access="public"
                  longLabel="@Strings.myLongLabel"
                  shortLabel="@Strings.myShortLabel"
                  icon="@Drawables.MyComplication"
                  glancePreview="true">
        <faceIt defaultText="@Strings.complicationName" />
        <range>
            <value>0</value>
            <value>24</value>
            <value>33</value>
            <value>41</value>
            <value>50</value>
            <value>53</value>
        </range>
    </complication>
</complications>
```

`complication`元素具有以下属性:

| Attribute |描述| 必需 | API 级别 |
| --- | --- | --- | --- |
| `id` |在版本中保持这个值稳定.在版本之间更改这个值将会影响应用程序,当应用程序更新时消耗您的复杂性.| Yes | 4.2.0 |
| `access` | `public`, `protected`, or `private` | Yes | 4.2.0 |
| `longLabel` |描述你的复杂性值.| Yes | 4.2.0 |
| `shortLabel` |对于显示您的复杂性为辐射复杂性的应用程序来说,一个短字符串.| No | 4.2.0 |
| `icon` |您想要与这个复杂性联系的图标的资源识别器. 如果您访问的是`public`或`protected`则,所指定的资源必须是`svg`. 运行时无法更改图标. X| Yes | 4.2.0 |
| `glancePreview` |布尔值.当用户把你的眼睛放进一个眼睛文件时,你可以识别一个你的复杂性作为预览值.只有一个你的复杂性可以作为预览区分.| No | 4.2.0 |

通过使用`access`属性,您可以控制您的并发症是否只能通过开发者键,所有应用程序,以及面对它或以上所有应用程序看到:

| Access | 您的应用 | Face It | 所有应用 |
| --- | --- | --- | --- |
| `public` | X | X | X |
| `protected` | X | X |  |
| `private` | X |  |  |

要求的`faceIt`元素允许您提供面对它的信息:

| Attribute |描述| 必需 | API 级别 |
| --- | --- | --- | --- |
| `defaultText` |这将在"面对它"中显示为复杂性的名称.| Yes | 4.2.0 |

选择性`range`元素允许您提供一个顺序的数值集合,定义您的值的不同范围.

## 发布值

一旦您的复杂性定义,您可以使用[Complications.updateComplication()](/connect-iq/api-docs/Toybox/Complications/#updateComplication-instance_function)函数发布数据:

```typescript
var data = {
    // String, Number, Float, Long, Double, or null
    :value => newValue,

    // String
    :shortLabel => newShortLabel,

    // String or Complication.UNITS_* value
    :units => newUnits,

    // Array<Numeric> with at least 3 elements
    :ranges => newRanges,
}

// update complication
// 0 is the id of the complication
// from complications.xml
Complications.updateComplication(0, data);
```

## Face It 复杂功能

发布一个复杂性为`public`允许Face It整合您的复杂性.它将始终显示您的复杂性图标,并将使用以下规则显示您的复杂性值:

|如果单位是...|...那么价值预计是...|...并将被显示为...|
| --- | --- | --- |
| 除 `Complications.UNIT_INVALID` 之外的 `Complications.UNIT_*` 类型 |一个数值|从单位类型所定义的默认单元转换为适当单元缩写的系统单元的数值.|
| 字符串 |一个数值|一个数字值,附带了字符串单位.|
|[`Complications.UNIT_INVALID`](/connect-iq/api-docs/Toybox/Complications/#Unit-module)或`null`|一个数值或字符串值|没有转换和没有任何单元附加的数值或字符串值将显示.|

一些最佳实践：

- 确保您的Face It图标具有高对比度,并且在移动中将在光和暗模式中显示得很好

- 在发表的复杂字符串中使用拉丁字母 (A-Z,一个-z,0-9)
