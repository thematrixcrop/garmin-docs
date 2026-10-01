---
title: "复杂功能"
---
<a id="complications"></a>
# 复杂功能（Complications）

Garmin 设备在用户佩戴期间会收集大量数据点。其中许多数据点可以汇总，并作为[复杂功能（complication）](https://en.wikipedia.org/wiki/Complication_(horology))显示在表盘上。Connect IQ SDK 提供了多个访问用户指标的 API，并在每个版本中不断扩展可用指标。

[Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/) 模块将 Garmin 设备通常显示的特定指标整合为统一接口，为开发者提供表盘上常见的信息。复杂功能通过发布/订阅模型公开。

此外，设备应用和音频内容提供商开发者现在可以使用这一框架发布最多四个复杂功能。复杂功能在系统中有 `public`、`protected` 和 `private` 三种可见性级别。

最后，Face It 也可以使用 Connect IQ 复杂功能。开发者可以创建能够发布到 Face It 表盘的信息。

## 发布者和订阅者

![](/connect-iq/resources/programmers-guide/complication_publishers_and_subscribers.png)

复杂功能系统的核心是发布者和订阅者模型。系统发布复杂功能数据供订阅者使用。Connect IQ 设备应用和音频内容提供商可以发布复杂功能数据，但只有表盘可以订阅复杂功能信息。

### 复杂功能对象（Complication）

数据以 [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/) 对象发布。该对象提供以下信息：

| 标识符 | 描述 | API 级别 |
| --- | --- | --- |
| [Complication.complicationId](/connect-iq/api-docs/Toybox/Complications/Complication/#complicationId-var) | 所发布数据类型的唯一标识符，类型为 [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)。 | 4.2.0 |
| [Complication.longLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#longLabel-var) | 复杂功能的文字名称，用于在配置菜单中显示。 | 4.2.0 |
| [Complication.ranges](/connect-iq/api-docs/Toybox/Complications/Complication/#ranges-var) | 可选的数值数组，用于定义值的区间，以便整合到显示内容中。 | 4.2.0 |
| [Complication.shortLabel](/connect-iq/api-docs/Toybox/Complications/Complication/#shortLabel-var) | 最多五个字符的字符串，用于以径向复杂功能（radial complication）形式概括复杂功能。 | 4.2.0 |
| [Complication.unit](/connect-iq/api-docs/Toybox/Complications/Complication/#unit-var) | 值使用的单位。如果为 `null`，则不显示单位；如果是 `UNIT` 标识符，`value` 应使用指定单位，以便系统转换；如果是字符串，则直接解释 `value`，不进行转换。 | 4.2.0 |
| [Complication.value](/connect-iq/api-docs/Toybox/Complications/Complication/#value-var) | 描述要向用户显示的值的字符串或数值。 | 4.2.0 |

还可以通过以下方法查询更多信息：

| 方法 | 描述 | API 级别 |
| --- | --- | --- |
| [Complication.getIcon()](/connect-iq/api-docs/Toybox/Complications/Complication/#getIcon-instance_function) | 对于 Connect IQ 复杂功能，获取应用提供的图标。 | 4.2.0 |
| [Complication.getType()](/connect-iq/api-docs/Toybox/Complications/Complication/#getType-instance_function) | 对于原生复杂功能，返回 `COMPLICATION_TYPE`。对于 Connect IQ 复杂功能，返回 `COMPLICATION_TYPE_INVALID`。 | 4.2.0 |

### 单位

复杂功能可以使用用户在系统设置中配置的单位发布信息。接收复杂功能值时，订阅者负责将其转换为系统设置中指定的单位。

单位应按以下方式发布：

| 单位 | 预期值 |
| --- | --- |
| [`Complications.UNIT_DISTANCE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_ELEVATION`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_HEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米 |
| [`Complications.UNIT_SPEED`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 米/秒 |
| [`Complications.UNIT_TEMPERATURE`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 摄氏度 |
| [`Complications.UNIT_WEIGHT`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) | 克 |

## 订阅复杂功能

要订阅复杂功能，需要在 Manifest 文件中添加 `ComplicationSubscriber` 权限。订阅复杂功能需要 [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)。可以使用 [Complications.getComplications()](/connect-iq/api-docs/Toybox/Complications/#getComplications-instance_function) 查询系统支持的全部复杂功能，也可以显式构造 [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) 来直接查询原生复杂功能：

```typescript
var complication = Complications.getComplication(
    new Id(Complications.COMPLICATION_TYPE_CALORIES)
);
```

这种方式只适用于原生复杂功能。获取复杂功能 ID 后，可以将其持久化到 Storage，供之后使用。

可以使用 [Complications.registerComplicationChangeCallback()](/connect-iq/api-docs/Toybox/Complications/#registerComplicationChangeCallback-instance_function) 订阅多个复杂功能值。应用关闭时所有订阅都会终止，应用下次启动时必须重新订阅。订阅时，需要注册一个在值更新时调用的回调：

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

在回调中，可以查询更新后的信息并进行处理：

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

如果复杂功能不再可用，例如用户卸载了发布应用，系统会抛出 [Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)。应捕获此异常并在应用中处理。如果发布应用被卸载，系统会向 `ComplicationChangeCallback` 发送事件，并自动取消应用对所有已订阅复杂功能的订阅。

启用轮椅模式后，`COMPLICATION_TYPE_STEPS` 和 `COMPLICATION_TYPE_FLOORS_CLIMBED` 会替换为 `COMPLICATION_TYPE_WHEELCHAIR_PUSHES`。

### 长按启动

部分 Connect IQ 产品支持长按复杂功能启动关联应用。可以通过实现 [WatchFaceDelegate.onPress()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPress-instance_function) 方法，将此功能加入表盘：

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

如果发布者应用通过长按启动，传入应用的 `state` 字典参数会包含 `:launchedFromComplication` 选项，其值为触发启动的复杂功能 ID。

## 发布复杂功能

如果开发设备应用或音频内容提供商应用，可以向框架发布最多四个复杂功能。发布复杂功能前，需要在 Manifest 文件中添加 `ComplicationPublisher` 权限。

### 资源

发布复杂功能时，必须在资源中定义每个复杂功能：

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

`complication` 元素包含以下属性：

| 属性 | 描述 | 必需 | API 级别 |
| --- | --- | --- | --- |
| `id` | 0 到 255 的数值标识符。不同版本间应保持稳定；更改此值会影响应用更新后使用该复杂功能的应用。 | 是 | 4.2.0 |
| `access` | `public`、`protected` 或 `private`。 | 是 | 4.2.0 |
| `longLabel` | 描述复杂功能值的标题。 | 是 | 4.2.0 |
| `shortLabel` | 用于以径向复杂功能（radial complication）形式显示该值的应用的短字符串。 | 否 | 4.2.0 |
| `icon` | 要关联的图标资源标识符。如果 access 为 `public` 或 `protected`，该资源必须是 `svg`。图标不能在运行时更改。 | 是 | 4.2.0 |
| `glancePreview` | `Boolean` 值。用户将 Glance 放入 Glance 文件夹时，可以指定一个复杂功能作为预览值。只能指定一个预览复杂功能。 | 否 | 4.2.0 |

通过 `access` 属性，可以控制复杂功能对哪些应用可见：使用相同开发者密钥的应用、所有应用、Face It，或这些范围的组合：

| 可见性 | 应用 | Face It | 所有应用 |
| --- | --- | --- | --- |
| `public` | X | X | X |
| `protected` | X | X |  |
| `private` | X |  |  |

必需的 `faceIt` 元素用于向 Face It 提供信息：

| 属性 | 描述 | 必需 | API 级别 |
| --- | --- | --- | --- |
| `defaultText` | 在 Face It 中显示为复杂功能名称。 | 是 | 4.2.0 |

可选的 `range` 元素用于提供一组有序数值，定义该值的不同区间。

## 发布值

定义复杂功能后，可以使用 [Complications.updateComplication()](/connect-iq/api-docs/Toybox/Complications/#updateComplication-instance_function) 发布数据：

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

将复杂功能以 `public` 形式发布后，Face It 就可以集成它。Face It 始终显示复杂功能图标，并按以下规则显示复杂功能值：

| 单位为…… | 值应为…… | 显示为…… |
| --- | --- | --- |
| 除 `Complications.UNIT_INVALID` 外的 `Complications.UNIT_*` 类型 | 数值 | 将单位类型定义的默认单位转换为系统单位，并附加相应单位缩写后的数值。 |
| `String` | 数值 | 数值后附加字符串单位。 |
| [`Complications.UNIT_INVALID`](/connect-iq/api-docs/Toybox/Complications/#Unit-module) 或 `null` | 数值或字符串 | 不转换、不附加单位，直接显示数值或字符串。 |

最佳实践：

-   确保 Face It 图标具有高对比度，在移动端的浅色和深色模式下都能清晰显示。

-   发布的复杂功能字符串请使用拉丁字符（A-Z、a-z、0-9）。
