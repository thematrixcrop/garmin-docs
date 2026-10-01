---
title: "如何为 AMOLED 产品制作表盘？"
---
# 如何为 AMOLED 产品制作表盘？

*自 API 级别 3.1.0 起支持*

Venu 是首款配备 AMOLED 屏幕的 Garmin 手表。AMOLED 显示屏可以提供鲜艳的色彩和高像素密度，但用于制造显示屏的有机材料会随着时间老化。为了减缓老化并延长屏幕寿命，Venu 等 AMOLED 产品配备了屏幕保护机制。

## 什么情况会触发烧屏保护

AMOLED 显示屏中的像素只有在点亮时才会耗电。因此，除黑色以外的任何颜色都被视为像素处于开启状态，只有显示黑色时才被视为关闭状态。

当 Connect IQ 表盘位于前台且系统进入睡眠模式后，烧屏保护才会启用。在这种情况下，如果屏幕上亮起的像素超过 10%，或任意像素持续亮起超过 3 分钟，系统会关闭屏幕。

大多数现有的 Connect IQ 表盘都会触发烧屏保护，但仍然可以在 AMOLED 屏幕上实现常亮表盘。

## AMOLED 屏幕的最佳实践

AMOLED Garmin 产品可以呈现信息丰富、视觉出色的画面，同时保持数天的电池续航。不过，AMOLED 的每个像素都会消耗电量。要让应用保持正常的电池续航，应尽量让屏幕保持黑色，尤其是在持续显示活动信息的页面上。对于需要持续更新数据的页面，使用越多黑色越好；周期性启动画面或渐变效果则可以适度使用。若页面包含页眉或页脚渐变，应将较暗的部分放在外侧边缘。

设计 AMOLED 屏幕的应用布局时，请参考以下指南：

![](/connect-iq/resources/programmers-guide/amoled_layout.png)

## 如何创建常亮表盘

常亮表盘在 MIP 屏幕和 AMOLED 屏幕上的行为不同。MIP 屏幕允许每秒更新屏幕的一部分；AMOLED 屏幕不允许这样做。AMOLED 表盘在被调用时，必须按照烧屏保护规则进行渲染。

在最初的 [Venu®](/connect-iq/device-reference/venu/) 上，屏幕亮起的像素不能超过屏幕面积的 10%，并且任何像素持续亮起的时间不能超过 3 分钟。可以使用细字体绘制时间，每分钟移动时间的位置以避免反复点亮相同像素，并避免使用会让相同像素持续亮起的静态刻度线。应用可以通过检查 [DeviceSettings.requiresBurnInProtection](/connect-iq/api-docs/Toybox/System/DeviceSettings/#requiresBurnInProtection-var) 的值，判断产品是否启用了屏幕保护。

从 [Venu® 2](/connect-iq/device-reference/venu2/) 开始，常亮模式的规则变为屏幕亮度低于 10%。可以使用 [System.getDisplayMode()](/connect-iq/api-docs/Toybox/System/#getDisplayMode-instance_function) 判断显示屏处于高功耗模式、低功耗模式还是关闭状态。有关测量亮度的工具，请参阅相关 API 文档。

### 如何测试常亮表盘

等待表盘运行 3 分钟或更长时间来验证烧屏保护可能非常耗时。Connect IQ Simulator 提供了在几分钟内模拟运行 24 小时的功能。打开 *File > View Screen Heat Map*，在弹出的 *Screen Burn-in Simulation* 对话框中点击 *Start*，即可开始模拟。

![](/connect-iq/resources/programmers-guide/burn-in-sim.png)

**注意：** 只有在支持屏幕保护的设备（例如 Venu）上模拟 `WatchFace` 时，该菜单选项才会启用。

## 示例

下面的代码片段展示了如何在不同设备上根据 AMOLED 显示模式绘制表盘：

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
