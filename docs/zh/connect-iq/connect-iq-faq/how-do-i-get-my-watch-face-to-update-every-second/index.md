---
title: "How do I Make My Watch Face Update Every Second?"
---
# How do I Make My Watch Face Update Every Second?

*Since API level 2.3*

Some devices support updating the watchface every second. These devices will run normal updates via the `onUpdate()` method at the top of each minute like other devices, but will also call the `onPartialUpdate()` method each second. The `onPartialUpdate()` method has very strict limits set on execution time, and must complete within these limits. If the execution limit is exceeded, the `onPowerBudgetExceeded()` method will be invoked in the WatchFaceDelegate, and partial updates will stop executing for the remainder of the app life-cycle.

Minimizing the number of pixels updated on the display during `onPartialUpdate` is important because refreshing the display is an expensive part of the update process. For this reason, the Connect IQ API provides a couple of useful tools: `Dc.setClip()`and `BufferedBitmap`.

The `Dc.setClip()` method is used to restrict the rendering window when drawing during an `onPartialUpdate()` callback. All pixels in the active clipping area are considered modified every time any pixel in the clip is modified.

For more complex graphics, resources can be rendered off-screen in one or more `BufferedBitmap` objects and copied as a single object to redraw background pixels during `onPartialUpdate()`. Rendering in a `BufferedBitmap` should be completed during `onUpdate()` since it is not subject to the execution time limits as `onPartialUpdate()`.

The Analog watch face, included in the SDK samples, is an example of a watchface that uses every second watchface updates.

```java
module WatchUi
{
    class WatchFace extends Toybox.WatchUi.View
    {
        //! onPartialUpdate() is called each second as long as the device
        //! power budget is not exceeded.
        //! It is important to update as small of a portion of the display as possible
        //! in this method to avoid exceeding the allowed power budget. To do this, the
        //! application must set the clipping region for the Graphics.Dc object using
        //! the setClip method. Calls to Toybox.System.println() and Toybox.System.print()
        //! will not execute on devices when this function is being invoked, but can be
        //! used in the device simulator.
        //! @param [Graphics.Dc] dc The drawing context
        //! @since 2.3.0
        function onPartialUpdate(dc);
    }
}
```
