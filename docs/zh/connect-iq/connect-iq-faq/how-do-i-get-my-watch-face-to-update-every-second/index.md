---
title: "How do I Make My Watch Face Update Every Second?"
---
# 如何让我的表盘每秒更新？

*Since API level 2.3*

一些设备支持每秒更新watchface. 这些设备会像其他设备一样在每分钟的顶部运行正常更新通过`onUpdate()`方法,但也会每秒调用`onPartialUpdate()`方法.`onPartialUpdate()`方法对执行时间设定了非常严格的限制,并且必须在这些限制范围内完成.如果执行限制超过,WatchFaceDelegate中将调用`onPowerBudgetExceeded()`方法,部分更新将停止执行应用程序生命周期的剩余时间.

在`onPartialUpdate`期间在显示器上更新的像素数量最小化是重要的,因为刷新显示器是更新过程中昂贵的一部分.

采用`Dc.setClip()`方法,在`onPartialUpdate()`回调中限制绘制时的染窗口.每次剪辑中的任何像素都被修改时,将所有活跃剪辑区域中的像素都视为修改.

对于更复杂的图形来说,资源可以在一个或多个`BufferedBitmap`对象中在屏幕外呈现并作为单个对象复制,在`onPartialUpdate()`期间重新绘制背景像素.在`onUpdate()`期间应完成在`BufferedBitmap`中的呈现,因为它不受`onPartialUpdate()`的执行时间限制.

在SDK样本中包含的模拟表面是使用每秒更新表面的表面的一个例子.

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
