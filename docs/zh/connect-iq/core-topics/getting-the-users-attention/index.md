---
title: "Getting the User's Attention"
---
# 吸引用户的注意

您的应用可能需要在特定时刻提醒用户注意。Connect IQ 提供了 [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) 模块来实现这一点。[Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) 模块可访问振动马达、音调生成器、屏幕背光和手电筒。

| API |描述| API 级别 |
| --- | --- | --- |
| [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) |控制显示屏后光| 1.0.0 |
| [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) |控制显示屏后光| 1.0.0 |
| [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) |通过调子生成器播放音调| 1.0.0 |
| [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) |使用振动机| 1.0.0 |

## 背光

Garmin 设备的背光行为取决于显示技术。*反射式*显示屏（例如内存像素（MIP）显示屏）通常会关闭背光以节省电量。用户可以选择在触摸按钮或执行手势等操作时启用背光。系统会根据用户设置自动处理这些操作。

AMOLED 等*自发光*显示屏没有背光，而是通常通过为每个像素供电来发光。显示屏亮度可以从“始终开启”模式下的低亮度变化到用户做出手势后的全亮度。用户可以选择设备的亮度设置，系统会自动遵循这些设置。

开发人员可以通过 [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) API 启用屏幕背光。在 API 3.2.0 及更高版本中，背光亮度可以设置为 0.0 到 1.0 之间的值；在 API 3.2 之前，则可以设置为 `true` 或 `false`。

请注意,长期保持AMOLED显示器在全亮度上可能会损坏显示器.如果系统发现开发人员试图这样做,则会提出例外.后照明,特别是AMOLED设备,不应该作为手筒.在这些情况下,您可以使用[flashlight](#flashlight)API.

## 手电筒

fēnix® 7X 是首款配备设备端手电筒的产品。

-   关闭、开启或闪烁模式

-   不同的亮度级别

-   不同的颜色


[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function)API允许开发人员控制设备的手筒:

```typescript
    function setFlashlightMode(mode as FlashlightMode, options as {
        :color as FlashlightColor,
        :brightness as Number or FlashlightBrightness, // 0 到 100 或特殊值
        :strobeMode as FlashlightStrobeMode,
        :strobeSpeed as FlashlightStrobeSpeed,
    }?) as FlashlightResult
```

`mode`是以下可能性的数量:

|值|描述| API 级别 |
| --- | --- | --- |
| `FLASHLIGHT\_MODE\_OFF` |关闭手电筒| 4.2.0 |
| `FLASHLIGHT\_MODE\_ON` |打开手电筒| 4.2.0 |
| `FLASHLIGHT\_MODE\_STROBE` |将手电筒设置为频闪模式。使用 `:strobeMode` 和 `:strobeSpeed` 选项配置频闪。| 4.2.0 |

`:color` 选项接受 `FLASHLIGHT\_COLOR\_WHITE`、`FLASHLIGHT\_COLOR\_GREEN` 或 `FLASHLIGHT\_COLOR\_RED`。并非所有设备都支持每种颜色。使用 [Attention.hasFlashlightColor()](/connect-iq/api-docs/Toybox/Attention/#hasFlashlightColor-instance_function) 检查是否支持指定颜色。

选择`:brightness`接受以下值:

|值|描述| API 级别 |
| --- | --- | --- |
| 0 to 100 |设置亮度从0到100%| 4.2.0 |
| `FLASHLIGHT\_BRIGHTNESS\_LOW` |设置为设备的低亮度| 4.2.0 |
| `FLASHLIGHT\_BRIGHTNESS\_MEDIUM` |设置为设备的中亮度| 4.2.0 |
| `FLASHLIGHT\_BRIGHTNESS\_HIGH` |设置为设备的高亮度| 4.2.0 |

`:strobeMode`可以设置为以下:

|值|描述| API 级别 |
| --- | --- | --- |
| `FLASHLIGHT\_STROBE\_MODE\_BLINK` |设置为 `-- -- -- --` 闪烁模式| 4.2.0 |
| `FLASHLIGHT\_STROBE\_MODE\_PULSE` |设置为 `=-_ =-_ =-_ =-_` 脉冲模式| 4.2.0 |
| `FLASHLIGHT\_STROBE\_MODE\_BLITZ` |设置为 `... ... ...` 闪击模式| 4.2.0 |

`:strobeSpeed`可以设置为以下:

|值|描述| API 级别 |
| --- | --- | --- |
| `FLASHLIGHT\_STROBE\_SPEED\_SLOW` |使用慢速频闪模式| 4.2.0 |
| `FLASHLIGHT\_STROBE\_SPEED\_MEDIUM` |使用中速频闪模式| 4.2.0 |
| `FLASHLIGHT\_STROBE\_SPEED\_FAST` |使用快速频闪模式| 4.2.0 |

基于输入的[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function)API返回以下内容:

|值|描述| API 级别 |
| --- | --- | --- |
| `FLASHLIGHT\_RESULT\_SUCCESS` | 手电筒模式设置成功 | 4.2.0 |
| `FLASHLIGHT\_RESULT\_INVALID\_COLOR` |无法设置手电筒模式，因为指定了无效颜色| 4.2.0 |
| `FLASHLIGHT\_RESULT\_INVALID\_BRIGHTNESS` |无法设置手电筒模式，因为不支持指定亮度| 4.2.0 |
| `FLASHLIGHT\_RESULT\_MODE` |无法设置手电筒模式，因为不支持指定模式| 4.2.0 |
| `FLASHLIGHT\_RESULT\_SPEED` |无法设置手电筒模式，因为不支持指定频闪速度| 4.2.0 |
| `FLASHLIGHT\_RESULT\_FAILURE` | 无法设置手电筒模式 | 4.2.0 |

## 音调

Garmin 设备经常使用可听见的音调表示不同事件。[Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) API 可访问音调生成器：

```typescript
    function playTone(options as Tone or {
            :toneProfile as Array<ToneProfile>,
            :repeatCount as Number
        }) as Void
```

如果您想播放一个自定义的音调,您可以将一组[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)对象传递到`:toneProfile`选项.[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)允许您设置每个音符的频率和持续时间.

## 振动

振动马达可用于提醒用户发生了需要注意的事件。您可以使用 [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API 启动振动马达：

```typescript
function vibrate(vibeProfiles as Array<VibeProfile>) as Void
```

你通过[Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function)API一个集合的[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)对象.每个[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)包含一个工作周期和一个持续时间.设备将通过每个[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)顺序,调整工作周期为指定的持续时间.

在未来更新中可能会出现`FLASHLIGHT_STROBE_MODE_FUNKADELIC`.

也可以定义为 `☀🔆🌥 ☀🔆🌥 ☀🔆🌥` 。
