---
title: "Page Loops"
---
# Page Loops

页面循环向用户提供一组包含数据和见解的页面. 转移到下一个页面和前一个页面的标准行为. 从最后页面前进通常将用户转向第一页.

## Activity Page Loop

在 Garmin® 产品上,当用户记录活动时,会出现一个常见的页面循环.

## Example

The System 6 [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) 可用于 handle the inputs and transitions between pages. You create a [WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/) that feeds [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) on demand. As the user selects the system input to navigate the page loop, the [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) handles the page transitions and displays the page indicators. You provide your own [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) for each view to handle inputs not involved with page navigation.

```typescript
// InputDelegate.mc

import Toybox.Lang;
import Toybox.WatchUi;

var loop = new WatchUi.ViewLoop(new PageLoopFactory(),
    {:wrap => true});
WatchUi.pushView(loop, new ViewLoopDelegate(loop),
    WatchUi.SLIDE_IMMEDIATE);
```
