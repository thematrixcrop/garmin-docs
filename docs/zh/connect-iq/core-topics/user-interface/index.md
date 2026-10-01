---
title: "视图、可绘制对象和层"
---
# 视图、可绘制对象和层

![](/connect-iq/resources/programmers-guide/artsy-monkey.png)

## 视图

表盘和应用有一个页面栈。[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 是一个代表页面的对象。视图可以推入和弹出页面栈，或者视图可以通过过渡替换页面栈上的另一个视图。

[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 的子类通常实现以下函数：

-   [View.onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function): 当您的 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 首次变为可见时调用。这是在需要时初始化资源和计时器的好时机。

-   [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function): 在此函数中，您可以加载在 [布局（Layouts）]（/connect-iq/core-topics/layouts/#layouts）部分中定义的布局。

-   [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function): 当您的视图需要更新显示时调用。此函数的默认版本将绘制布局元素，但您可以调用 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 让系统绘制布局然后运行您自己的自定义绘图。

-   [View.onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function): 当您的视图正在从视图栈中移除时调用。


### 增强可读性模式

*自 API 级别 4.2.0 起*

某些设备有一个新设置，可以增大菜单、速览和应用页面中字体的大小以增强可读性。要添加对增强可读性模式的支持，请在运行时检查以确定是否应使用更大的字体。

某些设备只有单个较大的字体大小，但有些也允许用户缩放字体。如果为 `true`，请检查 [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/) 是否有 `:fontScale`。您可以使用 [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) 使用 `:font` 和 `:scale` 选项获取系统字体的缩放版本。

实现 [AppBase.onEnhancedReadabilityModeChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onEnhancedReadabilityModeChanged-instance_function) 或 [AppBase.onDeviceSettingChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onDeviceSettingChanged-instance_function) 将使您知道应用运行时设置是否已更改。

## 可绘制对象

每个 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 都包含一个布局。布局是 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 对象的数组。[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 可以通过 [Drawable.draw()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#draw-instance_function) 方法将其自身绘制到设备上下文中。

图 1. 布局、视图和可绘制对象的插图

![布局、视图和可绘制对象的插图](/connect-iq/resources/programmers-guide/layout.png)

任何扩展 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 的对象都是可绘制对象，公开其属性。（这在我们讨论动画系统时会变得有用。）Monkey C 提供基本可绘制对象 [WatchUi.Text](/connect-iq/api-docs/Toybox/WatchUi/Text/) 和 [WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/)，允许文本和位图资源包含在布局中。

## 层

*自 API 级别 3.1.0 起*

层用于合并属于同一视图的多个级别的可绘制内容。一旦添加到视图中，层将按照添加顺序自动在屏幕上渲染。在概念上，层更接近 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 而不是 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)，并且具有类似运行时内存成本。

以下是关于如何使用 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) 系统的代码片段：

```typescript
class MyLayerView extends WatchUi.View {

    function initialize() {
        // 创建 240x240 层，位于屏幕左上角 [0,0] 偏移处
        var backgroundLayer = new WatchUi.Layer({:x=>0, :y=>0, :width=>240, :height=>240});

        // 在层上绘制一些内容
        backgroundLayer.getDc().drawBitmap( ... );
        backgroundLayer.getDc().drawPolyline( ... );

        // 将层作为背景添加到 View
        addLayer(backgroundLayer);

        // 创建另一个 20x20 层并将其作为前景层添加到视图
        var foregroundLayer = new WatchUi.Layer({:x=>10, :y=>10, :width=>20, :height=>20});
        addLayer(foregroundLayer);

        // 在前景层上绘制一些内容
        foregroundLayer.getDc().drawText( ... );
    }
}
```

### AnimationLayer

层对于将动画与您的 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 内容融合很有用。[WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/) 是一种特殊层，允许集成 [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) 和您的 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)。使用层，您可以在 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 上叠加动画，或在播放的动画上叠加静态内容。

图 2. 具有 3 层的动画表盘

![速览页面](/connect-iq/resources/programmers-guide/layers.png)

上述截图展示了来自 `samples/AnimationWatchFace` 示例应用的 3 层表盘。请参阅 [资源（Resources）]（/connect-iq/core-topics/resources/#animations）部分了解如何将资源嵌入到您的应用中。查看 `samples/AnimationWatchFace` 示例以了解更多。
