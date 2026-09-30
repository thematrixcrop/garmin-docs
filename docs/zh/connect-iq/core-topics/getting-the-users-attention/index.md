---
title: "Getting the User's Attention"
---
# 吸引用户的注意

Your app may need to request the user's attention at certain times. Connect IQ offers ways to do this via the [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) module. The [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) 模块提供 access to the vibration motor, tone generator, screen backlight and flashlight.

| API |描述| API 级别 |
| --- | --- | --- |
| [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) |控制显示屏后光| 1.0.0 |
| [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) |控制显示屏后光| 1.0.0 |
| [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) |通过调子生成器播放音调| 1.0.0 |
| [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) |使用振动机| 1.0.0 |

## 背光

Garmin设备的后光行为取决于显示技术. *反射式*显示器如内存像素 (MIP) 通常保持后光 typ灭节能.用户有选择让后光启用按触摸和手势等不同的操作.这些操作将根据用户设置自动由系统处理.

*Emissive* displays like AMOLED are not backlit, but instead typically draw power to light every pixel. The brightness of the display can vary from a low brightness of an "always on" mode to full brightness when the user has gestured. The user can choose their brightness settings for the device, and 系统将 obey them automatically.

采用[Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function)API,开发人员可以启用屏幕后光.在API 3.2.0及以上,后光亮度可以提供为0.0至1.0之间的值,而在API 3.2以下,可以设置为`true`或`false`.

请注意,长期保持AMOLED显示器在全亮度上可能会损坏显示器.如果系统发现开发人员试图这样做,则会提出例外.后照明,特别是AMOLED设备,不应该作为手筒.在这些情况下,您可以使用[flashlight](#flashlight)API.

## 手电筒

fēnix® 7X是第一台设备上有笔记本电筒的设备.

-   关闭、开启或闪烁模式

-   不同的亮度级别

-   不同的颜色


[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function)API允许开发人员控制设备的手筒:

```typescript
    function setFlashlightMode(mode as FlashlightMode, options as {
        :color as FlashlightColor,
        :brightness as Number or FlashlightBrightness, // 0 to 100 or special value
        :strobeMode as FlashlightStrobeMode,
        :strobeSpeed as FlashlightStrobeSpeed,
    }?) as FlashlightResult
```

`mode`是以下可能性的数量:

|值|描述| API 级别 |
| --- | --- | --- |
| \`FLASHLIGHT\_MODE\_OFF\`odule) |关掉手灯| 4.2.0 |
| \`FLASHLIGHT\_MODE\_ON\`odule) |点灯| 4.2.0 |
| \`FLASHLIGHT\_MODE\_STROBE\`odule) |使用`:strobeMode`和`:strobeSpeed`选项来配置光盘.| 4.2.0 |

`:color`选项接受 \`FLASHLIGHT\_COLOR\_WHITE\`odule), \`FLASHLIGHT\_COLOR\_GREEN\`odule),或 \`FLASHLIGHT\_COLOR\_RED\`odule). 并非每个设备都支持每种颜色.使用[Attention.hasFlashlightColor()](/connect-iq/api-docs/Toybox/Attention/#hasFlashlightColor-instance_function)检查是否支持颜色.

选择`:brightness`接受以下值:

|值|描述| API 级别 |
| --- | --- | --- |
| 0 to 100 |设置亮度从0到100%| 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_LOW\`odule) |设置亮度为设备低设置| 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_MEDIUM\`odule) |设置亮度为设备介质设置| 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_HIGH\`odule) |设置亮度为设备高设置| 4.2.0 |

`:strobeMode`可以设置为以下:

|值|描述| API 级别 |
| --- | --- | --- |
| \`FLASHLIGHT\_STROBE\_MODE\_BLINK\`odule) |设置横幅为`-- -- -- --`模式| 4.2.0 |
| \`FLASHLIGHT\_STROBE\_MODE\_PULSE\`odule) |设置横幅为`=-_ =-_ =-_ =-_`模式| 4.2.0 |
| \`FLASHLIGHT\_STROBE\_MODE\_BLITZ\`odule) |设置横幅为`... ... ...`模式| 4.2.0 |

`:strobeSpeed`可以设置为以下:

|值|描述| API 级别 |
| --- | --- | --- |
| \`FLASHLIGHT\_STROBE\_SPEED\_SLOW\`odule) |使用缓慢的静音模式| 4.2.0 |
| \`FLASHLIGHT\_STROBE\_SPEED\_MEDIUM\`odule) |使用中度光谱模式| 4.2.0 |
| \`FLASHLIGHT\_STROBE\_SPEED\_FAST\`odule) |使用快速光模式| 4.2.0 |

基于输入的[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function)API返回以下内容:

|值|描述| API 级别 |
| --- | --- | --- |
| \`FLASHLIGHT\_RESULT\_SUCCESS\`odule) | 手电筒模式设置成功 | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_INVALID\_COLOR\`odule) |无法设置闪光灯模式,因为指定了无效的颜色| 4.2.0 |
| \`FLASHLIGHT\_RESULT\_INVALID\_BRIGHTNESS\`odule) |闪电模式无法设置,因为亮度不支持| 4.2.0 |
| \`FLASHLIGHT\_RESULT\_MODE\`odule) |无法设置闪光灯模式,因为该模式不支持| 4.2.0 |
| \`FLASHLIGHT\_RESULT\_SPEED\`odule) |闪光灯模式无法设置,因为光谱速度不支持| 4.2.0 |
| \`FLASHLIGHT\_RESULT\_FAILURE\`odule) | 无法设置手电筒模式 | 4.2.0 |

## 音调

Garmin devices often use audible tones for different events. The [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) API 提供访问 the tone generator:

```typescript
    function playTone(options as Tone or {
            :toneProfile as Array<ToneProfile>,
            :repeatCount as Number
        }) as Void
```

如果您想播放一个自定义的音调,您可以将一组[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)对象传递到`:toneProfile`选项.[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)允许您设置每个音符的频率和持续时间.

## 振动

The vibration motor 可用于 inform the user that an event that needs their attention is occurring. You can engage the vibration motor with the [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API:

```typescript
function vibrate(vibeProfiles as Array<VibeProfile>) as Void
```

你通过[Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function)API一个集合的[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)对象.每个[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)包含一个工作周期和一个持续时间.设备将通过每个[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)顺序,调整工作周期为指定的持续时间.

在未来更新中可能会出现`FLASHLIGHT_STROBE_MODE_FUNKADELIC`.

也可以定义为 `☀🔆🌥 ☀🔆🌥 ☀🔆🌥` 。
