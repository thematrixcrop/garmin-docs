---
title: "Getting the User's Attention"
---
# Getting the User's Attention

Your app may need to request the user's attention at certain times. Connect IQ offers ways to do this via the [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) module. The [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) module provides access to the vibration motor, tone generator, screen backlight and flashlight.

| API | Description | API Level |
| --- | --- | --- |
| [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) | Controls the display backlight | 1.0.0 |
| [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) | Controls the display backlight | 1.0.0 |
| [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) | Plays a tone using the tone generator | 1.0.0 |
| [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) | Uses the vibration motor | 1.0.0 |

## Backlight

The backlight behavior for Garmin devices depends on the display technology. *Reflective* displays like memory-in-pixel (MIP) typically keep the backlight off to conserve power. The user has options to have the backlight enable for different actions like button touches and gestures. These will be handled automatically by the system based on the user settings.

*Emissive* displays like AMOLED are not backlit, but instead typically draw power to light every pixel. The brightness of the display can vary from a low brightness of an "always on" mode to full brightness when the user has gestured. The user can choose their brightness settings for the device, and the system will obey them automatically.

The [Attention.backlight()](/connect-iq/api-docs/Toybox/Attention/#backlight-instance_function) API allows the developer to enable the screen backlight. On API 3.2.0 and above, the backlight brightness can be provided as a value between 0.0 and 1.0, and below API 3.2 the brightness can be set to `true` or `false`.

Note that keeping an AMOLED display on for extended periods at full brightness can damage the display. If the system detects the developer is attempting to do this, an exception will be thrown. The backlight, especially on AMOLED devices, should not be used as a flashlight. In these cases, you can use the [flashlight](#flashlight) API.

## Flashlight

The fēnix® 7X was the first device to have an on-device flashlight. The on-device flashlight can support different modes including:

-   Off, on or blink patterns

-   Different brightness levels

-   Different colors


The [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) API allows the developer to control the device flashlight:

```typescript
    function setFlashlightMode(mode as FlashlightMode, options as {
        :color as FlashlightColor,
        :brightness as Number or FlashlightBrightness, // 0 to 100 or special value
        :strobeMode as FlashlightStrobeMode,
        :strobeSpeed as FlashlightStrobeSpeed,
    }?) as FlashlightResult
```

The `mode` is an enum of the following possibilities:

| Value | Description | API Level |
| --- | --- | --- |
| \`FLASHLIGHT\_MODE\_OFF\`odule) | Turns the flashlight off | 4.2.0 |
| \`FLASHLIGHT\_MODE\_ON\`odule) | Turns the flashlight on | 4.2.0 |
| \`FLASHLIGHT\_MODE\_STROBE\`odule) | Sets the flashlight to strobe. Use the `:strobeMode` and `:strobeSpeed` options to configure the strobe. | 4.2.0 |

The `:color` option accepts \`FLASHLIGHT\_COLOR\_WHITE\`odule), \`FLASHLIGHT\_COLOR\_GREEN\`odule), or \`FLASHLIGHT\_COLOR\_RED\`odule). Not every device supports every color. Use [Attention.hasFlashlightColor()](/connect-iq/api-docs/Toybox/Attention/#hasFlashlightColor-instance_function) to check if a color is supported.

The `:brightness` option accepts the following values:

| Value | Description | API Level |
| --- | --- | --- |
| 0 to 100 | Sets the brightness from 0 to 100 percent | 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_LOW\`odule) | Sets the brightness to the device low setting | 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_MEDIUM\`odule) | Sets the brightness to the device medium setting | 4.2.0 |
| \`FLASHLIGHT\_BRIGHTNESS\_HIGH\`odule) | Sets the brightness to the device high setting | 4.2.0 |

The `:strobeMode` can be set to the following:

| Value | Description | API Level |
| --- | --- | --- |
| \`FLASHLIGHT\_STROBE\_MODE\_BLINK\`odule) | Sets the strobe to a `-- -- -- --` pattern | 4.2.0 |
| \`FLASHLIGHT\_STROBE\_MODE\_PULSE\`odule) | Sets the strobe to a `=-_ =-_ =-_ =-_` pattern | 4.2.0 |
| \`FLASHLIGHT\_STROBE\_MODE\_BLITZ\`odule) | Sets the strobe to a `... ... ...` pattern | 4.2.0 |

The `:strobeSpeed` can be set to the following:

| Value | Description | API Level |
| --- | --- | --- |
| \`FLASHLIGHT\_STROBE\_SPEED\_SLOW\`odule) | Uses a slow strobe mode | 4.2.0 |
| \`FLASHLIGHT\_STROBE\_SPEED\_MEDIUM\`odule) | Uses a medium strobe mode | 4.2.0 |
| \`FLASHLIGHT\_STROBE\_SPEED\_FAST\`odule) | Uses a fast strobe mode | 4.2.0 |

The [Attention.setFlashlightMode()](/connect-iq/api-docs/Toybox/Attention/#setFlashlightMode-instance_function) API returns the following based on the input:

| Value | Description | API Level |
| --- | --- | --- |
| \`FLASHLIGHT\_RESULT\_SUCCESS\`odule) | Flashlight mode was set successfully | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_INVALID\_COLOR\`odule) | Flashlight mode could not be set because an invalid color was specified | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_INVALID\_BRIGHTNESS\`odule) | Flashlight mode could not be set because the brightness is not supported | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_MODE\`odule) | Flashlight mode could not be set because the mode is not supported | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_SPEED\`odule) | Flashlight mode could not be set because the strobe speed is not supported | 4.2.0 |
| \`FLASHLIGHT\_RESULT\_FAILURE\`odule) | Flashlight mode could not be set | 4.2.0 |

## Tones

Garmin devices often use audible tones for different events. The [Attention.playTone()](/connect-iq/api-docs/Toybox/Attention/#playTone-instance_function) API provides access to the tone generator:

```typescript
    function playTone(options as Tone or {
            :toneProfile as Array<ToneProfile>,
            :repeatCount as Number
        }) as Void
```

To play a system tone, you can pass one of the odule) enum values. If you want to play a custom tone, you can pass an array of [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) objects to the `:toneProfile` option. The [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) allows you to set a frequency and duration for each note.

## Vibration

The vibration motor can be used to inform the user that an event that needs their attention is occurring. You can engage the vibration motor with the [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API:

```typescript
function vibrate(vibeProfiles as Array<VibeProfile>) as Void
```

You pass the [Attention.vibrate()](/connect-iq/api-docs/Toybox/Attention/#vibrate-instance_function) API a set of [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) objects. Each [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) contains a duty cycle and a duration. The device will go through each [Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) in order, adjusting the duty cycle for the specified durations.

`FLASHLIGHT_STROBE_MODE_FUNKADELIC` may come in a future update.

Could also be defined as `☀🔆🌥 ☀🔆🌥 ☀🔆🌥` .
