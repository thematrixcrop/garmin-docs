---
title: "Toast 提示"
---
# Toast 提示

异步事件可能在用户当前操作流程之外发生。例如，启用 GPS 后，设备可能需要一段时间才能确定用户的位置。发生这类事件时，可以使用 Toast 更新用户，而不会打断当前操作。Toast 是一种只占用屏幕小部分区域、显示片刻后自动消失的 UI 元素。结合振动或提示音使用时，Toast 可以有效地向用户传达状态变化。

## 标准 Toast

System 6 的 [WatchUi.showToast()](/connect-iq/api-docs/Toybox/WatchUi/#showToast-instance_function) API 提供系统 Toast。Toast 可以显示简短文本和图标。

## 示例

使用 `size__toast_icon` 选择器，将图标资源缩放到系统 Toast 所需的尺寸。

```xml
<!-- drawables.xml -->

    <bitmap id="warningToastIcon" personality="
        system_icon_destructive__warning
        system_size__toast_icon
    "/>
```

```typescript
<!-- InputDelegate.mc -->

WatchUi.showToast("Lost GPS", {:icon=>Rez.Drawables.warningToastIcon});
```
