---
title: "Watch Faces"
---
# Watch Faces

与其他类型的应用程序相比,手表面孔的范围有限.它们不采用输入,并且没有传统的UI流动,但仍然需要多种考虑.

## Color Use

连接智能智能应用程序使用了许多不同的屏幕技术,并允许您在一个应用程序中支持所有这些技术.设计时,您可能需要考虑在八种颜色,64种颜色或AMOLED显示屏中出现的外观.相反,您可以选择仅支持使用最适合您的手表面的技术的设备.这将节省设计和实施阶段,但限制您的观众.

## Screen Size and Shape

连接IQ可穿戴设备有很多不同的屏幕形状,但最常见的是圆形或方形,面积比为1:1.

对于具有1:1的视角比的设备,将表面与相对坐标进行规划可以帮助您同时设计多个设备.

### Custom Fonts

随着不同分辨率的设计,您的设计应指定每个分辨率使用的点尺寸.

## Low- and High-Power Modes

![](/connect-iq/resources/ux-guide/low-power-modes.png)

Connect IQ watch faces typically operate in a low-power state where the system requests updates every minute. When the user gestures to look at the watch, 系统将 request the watch face enter a high-power state. During this period, typically 10 seconds, the watch face can enable timers and play animations. Use this time to add some action to your watch faces.

## Always Active

按默认情况下每分钟一次更新MIP手表.高功率模式确实允许在一段时间内绘制秒钟或二手,但有时用户希望在眼睛专注于手表时获得此类信息.

始终活跃的表表面可以每秒进行部分屏幕更新.该更新必须在20毫秒的时间框架内进行,这不允许更新整个屏幕,但可以允许更新在一个小部分.例如,该表面的秒次面积 (粉红色突出) 可以每秒更新一次:

![](/connect-iq/resources/ux-guide/partial-update.png)

## Always On (AMOLED)

采用AMOLED显示器的设备通常在不使用时禁显示器,以节约电力,但它们确实允许用户启用始终开放模式.由于长期显示器使用会影响电池寿命,并且可能会磨损显示器,Connect IQ对AMOLED始终开放模式有特殊规则.当表格面进入始终开放模式时,表格面只会每分钟更新,每次更新都限于使用显示器可用的像素的10%.此外,燃烧预防机制将进一步指导一些设备使用显示器.

为了避免使用者体验不佳,预计AMOLED设备的Connect IQ腕表面孔支持始终开放模式,以保持和观看面孔的可见性.

## Settings

移动设置允许用户修改一组应用程序属性.当应用程序发生变化时,您的应用程序将被通知.

在系统4及以上的设备上,Connect IQ手表面孔可以在手表面孔内内置一个可启动的配置流.手表面孔配置可在系统*Watch Face*菜单中提供给用户,使用与原生手表面孔相同的配置机制.从设置流中,您可以按下并弹出视图来启用配置.

## Best Practices

最好的腕表面孔提供了高度的定制,使用户能够以令人愉快的设计美学来看到相关信息.

- 不是所有的设计都能扩展到所有设备. 在开始之前,请选择最重要的设备,并根据它们的功能创建您的设计.如果您试图使用支持八色显示器,64色显示器和AMOLED或LCD显示器的手表面,这可能需要两到三种设计.

- 用户喜欢在AMOLED设备上启用始终启动模式.如果你支持AMOLED设备,总是将始终启动模式纳入你的手表面设计.以下是适应时钟面向始终启动的一些指南:

    -   Avoid using much white or blue. Consider using light gray instead.

- 使用薄纹字体.

- 尽量减少使用永远不动的静态元素 (例如,模拟手表的中心柱).

- 如果您确实有静态元素,请考虑每分钟在始终开放模式下向任何方向移动到4个像素的元素.
