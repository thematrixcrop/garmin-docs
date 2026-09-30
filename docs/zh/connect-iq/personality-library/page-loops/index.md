---
title: "Page Loops"
---
# Page Loops

Page loops present the user with a set of pages containing data and insights. There are standard behaviors for moving to the next and previous pages. Advancing from the last page typically loops the user back to the first page.

## Activity Page Loop

One common page loop on Garmin® products appears when the user records an activity. While the activity is in progress, the user can navigate through multiple pages of information and metrics related to it.

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
