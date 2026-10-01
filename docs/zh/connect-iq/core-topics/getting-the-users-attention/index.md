---
title: "Getting the User's Attention"
---
<a id="getting-the-users-attention"></a>
# 吸引用户注意

应用可能需要在特定时刻提醒用户。[Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) 模块提供了实现这些提醒的能力，包括访问振动马达、音调生成器、屏幕背光和手电筒。

| API | 说明 | API 级别 |
| --- | --- | --- |
| [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) | 控制显示屏背光 | 1.0.0 |
| [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) | 控制设备手电筒 | 1.0.0 |
| [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) | 使用音调生成器播放声音 | 1.0.0 |
| [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) | 驱动振动马达 | 1.0.0 |

## 背光

Garmin 设备的背光行为取决于显示技术。*反射式*显示屏（例如 memory-in-pixel，MIP）通常关闭背光以节省电量。用户可以选择在触摸按键或执行手势等操作时启用背光，系统会根据用户设置自动处理这些操作。

AMOLED 等*自发光*显示屏没有传统意义上的背光，而是通过点亮每个像素来发光。显示亮度可以从“始终开启”模式下的低亮度，变化到用户执行手势时的全亮度。用户可以设置设备亮度，系统会自动遵循这些设置。

[Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) API 允许开发者启用屏幕背光。在 API 级别 3.2.0 及更高版本中，可以将亮度设置为 0.0 到 1.0 之间的值；在 API 级别 3.2.0 之前，只能设置为 `true` 或 `false`。

请注意，长时间以最高亮度点亮 AMOLED 显示屏可能造成损坏。如果系统检测到开发者试图这样做，会抛出异常。尤其在 AMOLED 设备上，不应将背光当作手电筒使用；此时可以使用[手电筒](#flashlight) API。

<a id="flashlight"></a>
## 手电筒

fēnix® 7X 是首款配备设备端手电筒的产品。设备端手电筒支持以下模式：

- 关闭、常亮或闪烁模式
- 多种亮度级别
- 多种颜色

[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) API 用于控制设备手电筒：

```typescript
    function setFlashlightMode(mode as FlashlightMode, options as {
        :color as FlashlightColor,
        :brightness as Number or FlashlightBrightness, // 0 to 100 or special value
        :strobeMode as FlashlightStrobeMode,
        :strobeSpeed as FlashlightStrobeSpeed,
    }?) as FlashlightResult
```

`mode` 可以使用以下枚举值：

| 值 | 说明 | API 级别 |
| --- | --- | --- |
| `FLASHLIGHT_MODE_OFF` | 关闭手电筒 | 4.2.0 |
| `FLASHLIGHT_MODE_ON` | 打开手电筒 | 4.2.0 |
| `FLASHLIGHT_MODE_STROBE` | 设置为闪烁模式。使用 `:strobeMode` 和 `:strobeSpeed` 选项配置闪烁方式。 | 4.2.0 |

`:color` 选项接受 `FLASHLIGHT_COLOR_WHITE`、`FLASHLIGHT_COLOR_GREEN` 或 `FLASHLIGHT_COLOR_RED`。并非所有设备都支持每种颜色，可以使用 [Attention.hasFlashlightColor()](/connect-iq/api-docs/Toybox/Attention/#hasFlashlightColor-instance_function) 检查指定颜色是否受支持。

`:brightness` 选项接受以下值：

| 值 | 说明 | API 级别 |
| --- | --- | --- |
| 0 到 100 | 将亮度设置为 0% 到 100% | 4.2.0 |
| `FLASHLIGHT_BRIGHTNESS_LOW` | 使用设备的低亮度设置 | 4.2.0 |
| `FLASHLIGHT_BRIGHTNESS_MEDIUM` | 使用设备的中亮度设置 | 4.2.0 |
| `FLASHLIGHT_BRIGHTNESS_HIGH` | 使用设备的高亮度设置 | 4.2.0 |

`:strobeMode` 可以设置为以下值：

| 值 | 说明 | API 级别 |
| --- | --- | --- |
| `FLASHLIGHT_STROBE_MODE_BLINK` | 使用 `-- -- -- --` 闪烁模式 | 4.2.0 |
| `FLASHLIGHT_STROBE_MODE_PULSE` | 使用 `=-_ =-_ =-_ =-_` 脉冲模式 | 4.2.0 |
| `FLASHLIGHT_STROBE_MODE_BLITZ` | 使用 `... ... ...` 快速闪烁模式 | 4.2.0 |

`:strobeSpeed` 可以设置为以下值：

| 值 | 说明 | API 级别 |
| --- | --- | --- |
| `FLASHLIGHT_STROBE_SPEED_SLOW` | 使用慢速闪烁 | 4.2.0 |
| `FLASHLIGHT_STROBE_SPEED_MEDIUM` | 使用中速闪烁 | 4.2.0 |
| `FLASHLIGHT_STROBE_SPEED_FAST` | 使用快速闪烁 | 4.2.0 |

[Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) API 会根据输入返回以下结果：

| 值 | 说明 | API 级别 |
| --- | --- | --- |
| `FLASHLIGHT_RESULT_SUCCESS` | 手电筒模式设置成功 | 4.2.0 |
| `FLASHLIGHT_RESULT_INVALID_COLOR` | 无法设置手电筒模式，因为指定了无效颜色 | 4.2.0 |
| `FLASHLIGHT_RESULT_INVALID_BRIGHTNESS` | 无法设置手电筒模式，因为不支持指定亮度 | 4.2.0 |
| `FLASHLIGHT_RESULT_MODE` | 无法设置手电筒模式，因为不支持指定模式 | 4.2.0 |
| `FLASHLIGHT_RESULT_SPEED` | 无法设置手电筒模式，因为不支持指定闪烁速度 | 4.2.0 |
| `FLASHLIGHT_RESULT_FAILURE` | 无法设置手电筒模式 | 4.2.0 |

## 音调

Garmin 设备经常使用声音表示不同事件。[Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) API 提供了音调生成器：

```typescript
    function playTone(options as Tone or {
            :toneProfile as Array<ToneProfile>,
            :repeatCount as Number
        }) as Void
```

要播放系统音调，可以传入相应的枚举值。要播放自定义音调，可以将 [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) 对象数组传给 `:toneProfile` 选项。[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) 允许为每个音符设置频率和持续时间。

## 振动

振动马达可用于提醒用户发生了需要注意的事件。可以通过 [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API 驱动振动马达：

```typescript
function vibrate(vibeProfiles as Array<VibeProfile>) as Void
```

向 [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API 传入一组 [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) 对象。每个 [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) 都包含占空比和持续时间。设备会按顺序处理这些 profile，并在指定时长内调整占空比。

`FLASHLIGHT_STROBE_MODE_FUNKADELIC` 可能会在未来版本中加入。

也可以将其表示为 `☀🔆🌥 ☀🔆🌥 ☀🔆🌥`。
