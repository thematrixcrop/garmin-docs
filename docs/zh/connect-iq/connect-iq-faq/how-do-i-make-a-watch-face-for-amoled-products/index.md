---
title: "How do I Make a Watch Face for AMOLED Products?"
---
# 如何为 AMOLED 产品制作表盘？

*自 API 级别 3.1.0*

Venu是第一款拥有AMOLED屏幕的Garmin手表,AMOLED显示器提供了高像素密度的充满活力的颜色,但随着时间的推移,用于创建显示器的有机材料将腐烂.为了减轻腐烂并延长屏幕寿命,在AMOLED屏幕的手表中部署了一个保护机制,例如Venu.

## 什么情况属于烧屏

在AMOLED显示屏中的像素只能在照明时吸取电源,因此在呈现任何颜色除黑色以外时,将像素视为开放,并且在呈现黑色像素时才会被视为关闭.

仅当 Connect IQ 表盘处于前台且系统进入睡眠模式后，烧屏保护才会启用。在这种情况下，如果超过 10% 的屏幕像素处于点亮状态，或任何像素连续点亮超过 3 分钟，系统就会关闭屏幕。

现有的Connect IQ手表面孔中的大部分都会使燃烧保护器陷入失效,但仍有希望在AMOLED屏幕上能够保持一面一直开放的手表.

## AMOLED屏幕的最佳实践

现在在AMOLED Garmin产品上,您的应用程序可以提供令人惊叹的信息和美丽的图像,同时保持数天的电池使用寿命.

在 AMOLED ED每一个像素都能吸收电源的挑战下.如果你想让你的应用程序在正常的电池寿命范围内使用,你需要尽可能多的黑色在屏幕上,特别是显示活动信息的屏幕.你会注意到,在大多数本土应用程序中,黑色是新黑色.在你的应用程序中使用周期性喷屏幕或梯度是可以的. 让应用程序看起来很好! 但对于应该显示不断更新数据的屏幕,黑色越好.

在做AMOLED屏幕的应用程序布局时,请记住这篇方便的指南:

![](/connect-iq/resources/programmers-guide/amoled_layout.png)

## 如何创建始上时钟面孔

在 AMOLED 屏幕上,您可以使用MIP 屏幕每秒更新屏幕的一部分.在 AMOLED 屏幕上,此不再被允许.相反,当被调用时,您被允许呈现一个必须遵守 AMOLED 燃烧保护器规则的腕表面孔.

在原始[Venu®](/connect-iq/device-reference/venu/)上,屏幕的不超过10%可以上线,并且没有像素可以超过3分钟.你可以通过使用薄字体绘制时间,每分钟都会改变时间,以避免重复放弃相同的像素,并且不会有静态的标记,让相同的像素上线.应用程序可以检测产品是否有屏幕保护通过检查[DeviceSettings.requiresBurnInProtection](/connect-iq/api-docs/Toybox/System/DeviceSettings/#requiresBurnInProtection-var)的值.

由于[Venu® 2](/connect-iq/device-reference/venu2/),常开的规则是使用屏幕亮度不到10% .你可以使用[System.getDisplayMode()](/connect-iq/api-docs/Toybox/System/#getDisplayMode-instance_function)来确定显示屏是否处于高功率模式,低功率模式或关闭状态.查看测量亮度的工具

### 如何测试你总是在手表面

幸运的是,Connect IQ模拟器提供了一个新的功能,可以在几分钟内模拟24小时的运行.只需进入'文件>查看屏幕热地图'来打开'屏幕燃烧模拟'对话框,然后点击'启动'按,让时间飞行.

![](/connect-iq/resources/programmers-guide/burn-in-sim.png)

** 注:** 只有在支持屏幕保护的设备上模拟`WatchFace`时才能启用菜单选项,例如Venu.

## 示例

下面是一个代码片段, 支持在不同设备上使用AMOLED显示模式绘制表面:

```typescript
  if (DeviceSettings has :requiresBurnInProtection) {
    // For device that use the 10% luminance rule, use
    // System.getDisplayMode to see which render mode
    // to use.
    if (System has :getDisplayMode) {
      switch(System.getDisplayMode) {
        case System.DISPLAY_MODE_HIGH_POWER:
          renderAmoledHighPower(dc);
          break;
        case System.DISPLAY_MODE_LOW_POWER:
          renderAmoledLowPower(dc);
        case System.DISPLAY_MODE_OFF:
          break;
      }
    } else {
      // For the original Venu, use requiresBurnInProtection to
      // detect if you should use high or low power mode
      var lowPower = System.getDeviceSettings().requiresBurnInProtection();
      if (lowPower) {
        renderOriginalVenuLowPower(dc);
      } else {
        renderOriginalVenuHighPower(dc);
      }
    }
  } else {
    // Render MIP
    renderMIPHighPower(dc);
  }
```
