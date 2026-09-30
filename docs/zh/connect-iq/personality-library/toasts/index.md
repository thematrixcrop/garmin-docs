---
title: "Toasts"
---
# Toasts

无同步事件可以发生在用户的当前流量之外.例如,GPS可以在启用后确定用户的位置.当这些事件发生时,您可以使用吐司来更新用户,而不打断用户的当前流量.吐司是UI元素,占据了屏幕的小部分,并在短时间后消失.当与振动或音调结合时,它们可以有效地更新用户.

## Standard Toast

The System 6 [WatchUi.showToast()](/connect-iq/api-docs/Toybox/WatchUi/#showToast-instance_function) API 提供访问 the system toast. The toast can display a short text string and an icon.

## Example

使用`size__toast_icon`选择器将图标资产扩展到烤面包的系统大小.

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
