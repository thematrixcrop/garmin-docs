---
title: "页面循环"
---
# 页面循环

页面循环向用户提供一组包含数据和信息的页面，并提供切换到上一页和下一页的标准操作。从最后一页继续前进时，通常会回到第一页。

## 活动页面循环

在 Garmin® 产品上，用户记录活动时通常会看到活动页面循环。活动进行期间，用户可以浏览多个活动相关的信息和指标页面。

## 示例

在 System 6 中，可以使用 [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) 处理页面之间的输入和切换。需要创建一个 [WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/)，按需提供 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)。用户使用系统输入浏览页面循环时，[WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) 会处理页面切换并显示页面指示器。还需要为每个视图提供自己的 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，处理与页面导航无关的输入。

```typescript
// InputDelegate.mc

import Toybox.Lang;
import Toybox.WatchUi;

var loop = new WatchUi.ViewLoop(new PageLoopFactory(),
    {:wrap => true});
WatchUi.pushView(loop, new ViewLoopDelegate(loop),
    WatchUi.SLIDE_IMMEDIATE);
```
