---
title: "Complications"
---
# 复杂功能

Garmin 设备在用户佩戴时收集大量数据点。其中许多数据点可以汇总，并作为[复杂功能](https://en.wikipedia.org/wiki/Complication_(horology))显示在表盘上。Connect IQ SDK 提供多个 API 来访问用户指标，并在每个版本中不断扩展可用功能。

[Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/)模块将Garmin设备通常显示的特定指标结合成一个统一的接口.这种统一的接口为开发者提供了开发者通常在表面上显示的信息的访问权限.使用发布/订阅模型来揭示并发症.

此外，设备应用和音频内容提供者开发人员现在可以使用此新框架发布最多四个复杂功能。在系统中，复杂功能具有公开、受保护和私有三种可见性级别。

最后，Face It 也将成为 Connect IQ 复杂功能的使用者。这使开发者能够创建可发布到 Face It 表盘的信息。

## 发布者和订阅者


![](/connect-iq/resources/programmers-guide/complication_publishers_and_subscribers.png)

复杂功能系统的核心是发布者/订阅者系统。系统发布供订阅者使用的复杂功能数据。Connect IQ 设备应用和音频内容提供者可以发布复杂功能数据，但只有表盘可以订阅复杂功能信息。

### 复杂功能对象

数据作为[Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)对象发布.复杂性对象暴露以下信息:

| 标识符 | 描述 | API 级别 |
| --- | --- | --- |
| [Complication.complicationId](/connect-iq/api-docs/Toybox/Complications/Complication/#complicationId-var) |发布的[Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)类型数据类型的唯一标识符| 4.2.0 |
| [Complication.longLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#longLabel-var) |长标签是用于配置菜单中显示的.| 4.2.0 |
| [Complication.ranges](/connect-iq/api-docs/Toybox/Complications/Complication/#ranges-var) |选项数值阵列. 范围允许将可集成到显示器中的数值组分解.| 4.2.0 |
| [Complication.shortLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#shortLabel-var) |五个字符的字符串旨在总结你的复杂性为一个半径复杂性.| 4.2.0 |
| [Complication.unit](/connect-iq/api-docs/Toybox/Complications/Complication/#unit-var) |如果这是`null`则该单元不应该显示.如果这是`UNIT`标识符,则`value`预计将在特定的单元中进行转换.如果`unit`是字符串,则`value`应在没有转换的情况下解释.| `4.2.0` |
| [Complication.value](/connect-iq/api-docs/Toybox/Complications/Complication/#value-var) |列或数字值,描述向用户显示的值| `4.2.0` |

您可以使用这些配件查询更多信息:

| 方法 | 描述 | API 级别 |
| --- | --- | --- |
| [Complication.getIcon()](/connect-iq/api-docs/Toybox/Complications/Complication/#getIcon-instance_function) |对于 Connect IQ 复杂性,请查询应用程序提供的图标| 4.2.0 |
| [Complication.getType()](/connect-iq/api-docs/Toybox/Complications/Complication/#getType-instance_function) |对于本土的并发症,返回`COMPLICATION_TYPE`.将返回`COMPLICATION_TYPE_INVALID`连接智商并发症.| 4.2.0 |

### 单位

复杂性允许在用户在系统设置中配置的单位中发布信息.在收到复杂性值时,用户的角色是将值转换为系统设置中指定的指标.

预计单位将以以下方式公布:

| 单位 | 预期值 |
| --- | --- |
| [`Complications.UNIT_DISTANCE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_ELEVATION`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_HEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_SPEED`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米/秒 |
| [`Complications.UNIT_TEMPERATURE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 摄氏度 |
| [`Complications.UNIT_WEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 克 |

## 订阅复杂性

要订阅复杂功能，您需要在清单文件中添加 `ComplicationSubscriber` 权限。订阅复杂功能需要使用 [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)。您可以使用 [Complications.getComplications()](/connect-iq/api-docs/Toybox/Complications/#getComplications-instance_function) 查询系统支持的所有复杂功能，也可以通过显式构造 [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) 直接查询原生复杂功能：

```typescript
var complication = Complications.getComplication(
    new Id(Complications.COMPLICATION_TYPE_CALORIES)
);
```

这只适用于本土的并发症. 一旦您获得了并发症ID,您可以保留存储的ID以后使用.

您可以使用[Complications.registerComplicationChangeCallback()](/connect-iq/api-docs/Toybox/Complications/#registerComplicationChangeCallback-instance_function)订阅多个复杂值.当应用程序关闭时,所有订阅都会终止,并且必须在应用程序启动时重新完成.

```typescript
function onStart(params as Dictionary) as Void {
    // 获取持久化的复杂功能 ID
    mComplicationId = Storage.getValue(COMPLICATION_ID_KEY);

    // 注册用于接收复杂功能信息
    // 更新的回调
    Complications.registerComplicationChangeCallback(
        self.method(:onComplicationChanged));

    // 建立链接并订阅
    Complications.subscribeToUpdates(mComplicationId);
}
```

在回调中,您可以查询更新的信息并处理:

```typescript
function onComplicationChanged(
    complicationId as Complication.Id) as Void {
    // 确定正在更新的复杂功能
    if (complicationId == mComplicationId) {
        // 获取复杂功能信息
        try {
            var data = Complications.getComplication(
                complicationId);
            // 处理应用逻辑
            updateData(complicationId, data);
        } catch (e instanceof ComplicationNotFoundException) {
            handleComplicationRemoval(complicationId);
        }
    }
}
```

如果复杂功能不再可用（例如用户卸载了发布应用），系统会抛出 [Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)。您应捕获此异常并在应用程序中进行处理。如果发布应用被卸载，系统会向您的 `ComplicationChangeCallback` 发送事件，并自动取消应用程序对所有已订阅复杂功能的订阅。

当轮椅模式启用时,`COMPLICATION_TYPE_STEPS`和`COMPLICATION_TYPE_FLOORS_CLIMBED`将被`COMPLICATION_TYPE_WHEELCHAIR_PUSHES`取代.

### 保持发射

一些Connect IQ产品有一个功能,按下并保持一个复杂的功能,启动相关的应用程序.你可以通过实施[WatchFaceDelegate.onPress()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPress-instance_function)方法,将此功能添加到你的手表面:

```typescript
function onPress(clickEvent as ClickEvent) as Boolean {
    if ((mComplicationId != null) &&
         isClickInside(clickEvent, mBoundingBox)) {

        // 启动发布该复杂功能的
        // 应用
        try {
            Complications.exitTo(mComplicationId);
            return true;
        } catch (e instanceof AppNotInstalledException) {
            // 继续执行
        }
    }

    return false;
}
```

如果您的复杂性发布器通过等待启动启动,则您的`state`字典参数将设置`:launchedFromComplication`选项为启动的复杂性 id.

## 发布复杂功能

如果您正在开发设备或音频内容提供者应用，可以向框架发布最多四个复杂功能。要发布复杂功能，您需要在清单文件中添加 `ComplicationPublisher` 权限。

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

| 属性 | 描述 | 必需 | API 级别 |
| --- | --- | --- | --- |
| `id` | 在版本之间保持此值稳定。在版本之间更改此值会影响应用程序更新后使用您复杂功能的应用程序。 | 是 | 4.2.0 |
| `access` | `public`、`protected` 或 `private` | 是 | 4.2.0 |
| `longLabel` | 描述复杂功能值。 | 是 | 4.2.0 |
| `shortLabel` | 用于将复杂功能显示为环形复杂功能的应用程序的短字符串。 | 否 | 4.2.0 |
| `icon` | 要与此复杂功能关联的图标资源标识符。如果 `access` 为 `public` 或 `protected`，指定的资源必须是 `svg`。图标无法在运行时更改。 | 是 | 4.2.0 |
| `glancePreview` | 布尔值。用户查看概览时，可将一个复杂功能标识为预览值。只能将一个复杂功能标识为预览值。 | 否 | 4.2.0 |

通过使用`access`属性,您可以控制您的并发症是否只能通过开发者键,所有应用程序,以及面对它或以上所有应用程序看到:

| 访问级别 | 您的应用 | Face It | 所有应用 |
| --- | --- | --- | --- |
| `public` | X | X | X |
| `protected` | X | X |  |
| `private` | X |  |  |

要求的`faceIt`元素允许您提供面对它的信息:

| 属性 | 描述 | 必需 | API 级别 |
| --- | --- | --- | --- |
| `defaultText` | 在 Face It 中显示为复杂功能名称。 | 是 | 4.2.0 |

选择性`range`元素允许您提供一个顺序的数值集合,定义您的值的不同范围.

## 发布值

一旦您的复杂性定义,您可以使用[Complications.updateComplication()](/connect-iq/api-docs/Toybox/Complications/#updateComplication-instance_function)函数发布数据:

```typescript
var data = {
    // String、Number、Float、Long、Double 或 null
    :value => newValue,

    // String
    :shortLabel => newShortLabel,

    // String 或 Complication.UNITS_* 值
    :units => newUnits,

    // 至少包含 3 个元素的 Array<Numeric>
    :ranges => newRanges,
}

// 更新复杂功能
// 0 是复杂功能的 ID
// 来自 complications.xml
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
