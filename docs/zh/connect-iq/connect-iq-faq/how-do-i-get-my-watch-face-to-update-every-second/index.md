---
title: "如何让表盘每秒更新？"
---
# 如何让表盘每秒更新？

*自 API 级别 2.3 起支持*

部分设备支持表盘每秒更新。这些设备与其他设备一样，会在每分钟开始时通过 `onUpdate()` 执行常规更新；此外还会每秒调用 `onPartialUpdate()`。`onPartialUpdate()` 的执行时间限制非常严格，必须在规定时间内完成。如果超出限制，系统会调用 `WatchFaceDelegate` 中的 `onPowerBudgetExceeded()`，并在应用剩余生命周期内停止执行局部更新。

在 `onPartialUpdate` 期间，应尽量减少更新的屏幕像素数量，因为刷新显示屏是更新过程中开销较大的步骤。因此，Connect IQ API 提供了两个有用的工具：`Dc.setClip()` 和 `BufferedBitmap`。

绘制 `onPartialUpdate()` 回调时，可以使用 `Dc.setClip()` 限制渲染区域。每当剪辑区域中的任意像素发生修改，活动剪辑区域内的所有像素都会被视为已修改。

对于更复杂的图形，可以将资源渲染到一个或多个 `BufferedBitmap` 对象中，再将其作为单个对象复制到屏幕上，以重绘背景像素。应在 `onUpdate()` 期间完成 `BufferedBitmap` 的渲染，因为它不受 `onPartialUpdate()` 的执行时间限制。

SDK 示例中的 Analog watch face 展示了如何实现每秒更新的表盘。

```java
module WatchUi
{
    class WatchFace extends Toybox.WatchUi.View
    {
        //! onPartialUpdate() is called each second as long as the device
        //! power budget is not exceeded.
        //! It is important to update as small of a portion of the display as possible
        //! in this method to avoid exceeding the allowed power budget. To do this,
        //! the application must set the clipping region for the Graphics.Dc object
        //! using the setClip method. Calls to Toybox.System.println() and
        //! Toybox.System.print() will not execute on devices when this function is
        //! being invoked, but can be used in the device simulator.
        //! @param [Graphics.Dc] dc The drawing context
        //! @since 2.3.0
        function onPartialUpdate(dc);
    }
}
```
