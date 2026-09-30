---
title: "Page Loops"
---
# 页面循环

页面循环向用户提供一组包含数据和见解的页面. 转移到下一个页面和前一个页面的标准行为. 从最后页面前进通常将用户转向第一页.

## 活动页面循环

在 Garmin® 产品上,当用户记录活动时,会出现一个常见的页面循环.

## 示例

System 6 中的 [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) 可用于处理页面之间的输入和切换。您需要创建一个 [WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/)，按需提供 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)。用户选择系统输入来浏览页面循环时，[WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) 会处理页面切换并显示页面指示器。您需要为每个视图提供自己的 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，以处理与页面导航无关的输入。

```typescript
// InputDelegate.mc

import Toybox.Lang;
import Toybox.WatchUi;

var loop = new WatchUi.ViewLoop(new PageLoopFactory(),
    {:wrap => true});
WatchUi.pushView(loop, new ViewLoopDelegate(loop),
    WatchUi.SLIDE_IMMEDIATE);
```
