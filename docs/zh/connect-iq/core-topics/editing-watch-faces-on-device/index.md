---
title: "Watch Face Configurations"
---
# 表盘配置

*自 API 级别 5.1.0 起*

fēnix 8 及更新的可穿戴设备具有设备上的表盘编辑器。表盘编辑器允许用户选择产品提供的表盘之一，对其进行配置并将其保存为新表盘添加到他们的表盘列表中。您可以使用表盘配置 API 添加对原生表盘编辑器的支持。表盘配置有四个主要变量：

-   *样式（Styles）* - 表盘可以有风格变化，例如不同的字体配置或指针。

-   *数据（Data）* - 表盘可能有多个复杂功能。每个复杂功能可以独立配置。

-   *数据颜色（Data Color）* - 表盘可以定义多个可选的颜色选项。数据颜色允许用户为数据选择颜色。

-   *强调色（Accent Color）* – 表盘可以设置一种颜色作为可配置的强调色。


用户可以在设备上创建最多四个 Connect IQ 表盘的配置。

## 定义配置

您可以在资源中定义表盘配置的选项：

```xml
    <watchface-config>

        <styles>
            <style id="0" label="@Strings.AppName" default="true"/>
        </styles>

        <data>
            <complication id="1">
                <type default="true">Complications.COMPLICATION_TYPE_STEPS</type>
                <type>Complications.COMPLICATION_TYPE_HEART_RATE</type>
                <type>Complications.COMPLICATION_TYPE_CURRENT_WEATHER</type>
            </complication>

            <complication id="2">
                <type default="true">Complications.COMPLICATION_TYPE_HEART_RATE</type>
                <type>Complications.COMPLICATION_TYPE_STEPS</type>
                <type>Complications.COMPLICATION_TYPE_CURRENT_WEATHER</type>
            </complication>

            <complication id="3" allowAny="true" />
        </data>

        <dataColors>
            <color label="@Strings.aqua">0x00FFFF</color>
            <color label="@Strings.yellow">0xFFFF00</color>
            <color default="true">0xFFFFFF</color>
            <color>Graphics.COLOR_BLUE</color>
            <color label="@Strings.orange">Graphics.COLOR_ORANGE</color>
        </dataColors>

        <accentColors allowAny="true"/>

    </watchface-config>
```

以下是各选项：

| 标签 | 属性 | 类型 | 描述 |
| --- | --- | --- | --- |
| `style` | `id` | Number | 样式的数字标识符。 |
| `style` | `label` | 字符串标识符 | 样式的标签名称。 |
| `style` | `default` | 布尔值 | 可选字段，指示哪个样式是用户默认值。 |
| `complication` | `id` | Number | 复杂功能的数字标识符。 |
| `complication` | `allowAny` | 布尔值 | 可选。指定给定的复杂功能接受任何系统支持的复杂功能，包括 Connect IQ 复杂功能。 |
| `type` | `default` | 布尔值 | 可选参数，用于标识支持的复杂功能类型。元素值应为 Complication 标识符。如果使用 allowAny，则不应提供此参数。 |
| `dataColors` | `allowAny` | 布尔值 | 可选属性。指定数据颜色允许指定任何系统支持的颜色。如果未指定，则应提供颜色元素。 |
| `color` | `label` | 字符串标识符 | 颜色的可翻译名称。 |
| `color` | `default` | 布尔值 | 可选。将此颜色标记为用户的默认值。 |
| `accentColors` | `allowAny` | 布尔值 | 可选属性。指定强调色允许指定任何系统支持的颜色。如果未指定，则应提供颜色元素。 |

## 读取表盘配置

在支持原生表盘编辑器的设备上运行时，您可以通过调用 WatchFaceConfig.getSettings()（参数为 null）获取活动配置。从这里，您可以读取用户使用原生编辑器定义的样式、复杂功能颜色、强调色和复杂功能。

## 与表盘编辑器交互

当表盘在原生表盘编辑器中编辑时，它以编辑模式启动。您可以通过检查 AppBase.onStart() 中的选项来检测此状态。在编辑模式下运行时，您可以使用以下方法与表盘编辑器交互：

| 方法 | 用法 | API 级别 |
| --- | --- | --- |
| [WatchFaceDelegate.onTap()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onTap-instance_function) | 允许您将屏幕点击映射到可编辑元素。如果用户点击了可编辑的复杂功能，请使用 WatchFaceDelegate.setSelectedComplication() 指示选择了哪个复杂功能。 | 5.1.0 |
| [WatchFaceDelegate.getComplicationDrawable()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#getComplicationDrawable-instance_function) | 允许您提供一个图示所选复杂功能的可绘制对象。系统将在编辑器内动画化此可绘制对象。 | 5.1.0 |
| [WatchFaceDelegate.onWatchFaceConfigEdited()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onWatchFaceConfigEdited-instance_function) | 当用户编辑表盘配置的某个元素时调用。确保下次调用 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 时表示更新的配置。 | 5.1.0 |
