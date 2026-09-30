---
title: "How do I Make a Watch Face for AMOLED Products?"
---
# 如何为 AMOLED 产品制作表盘？

*Since API level 3.1.0*

The Venu is the first Garmin watch with an AMOLED screen, AMOLED displays provide vibrant colors with a high pixel density, but over time the organic materials used to create the display will decay. In order to mitigate the decay and prolong the screen life in general, a protective mechanism is deployed to watches that have AMOLED screen, such as Venu.

## What Qualifies as Burn-In

Pixels in an AMOLED display only draw power when illuminated, so a pixel is considered on when rendering any color other than black, and is considered off when and only when rendering black pixel.

Burn-in protection is only activated when Connect IQ watch face is in foreground and after system enters sleep mode. Under such conditions, if more than 10% of the screen pixels are on or any pixel is on for longer than 3 minutes, 系统将 shut off the screen.

Most of the existing Connect IQ watch faces will trip the burn-in protector, however there is still hope to have an always-on watch face on AMOLED screens.

## Best Practices for AMOLED Screens

Now on AMOLED Garmin products, your apps can have breathtaking presentations of information and gorgeous imagery, while still retaining days of battery life. However, now that we have given you all these gorgeous colors, could you, like, not use them? Please?

Here is the challenge with AMOLED – every pixel draws power. If you want your apps to fall within the regular amount of battery life, you want to have as much black on screen as possible, especially in screens that are showing activity information. You'll notice that with most of the native applications, black is the new black. It's okay to work a periodic splash screen or gradient into your apps – make the app look great! – but for screens that are supposed to show constantly updating data, the blacker the better. Also, if you have header and footer gradients, try to have the darker parts at the outer edges.

Just remember this handy guide when doing app layouts for AMOLED screens:

![](/connect-iq/resources/programmers-guide/amoled_layout.png)

## How to Create Always-On Watch Faces

Always On watch faces behave differently from MIP to AMOLED. With MIP screens, you can use to update a portion of the screen every second. With AMOLED screen, this is no longer allowed. Instead, when is called, you are allowed to render a watch face that must obey the rules of the AMOLED burn-in protector.

On the original [Venu®](/connect-iq/device-reference/venu/) no more than 10% of the screen can be on, and no pixel can be on longer than 3 mins. Ways you can prevent burn in are by drawing the time with a thin font, shifting the time every minute as not to repeatedly leave the same pixels on, and not having static tick marks that leave the same pixels on. The app can detect whether a product has screen protection enforced by checking the value of [DeviceSettings.requiresBurnInProtection](/connect-iq/api-docs/Toybox/System/DeviceSettings/#requiresBurnInProtection-var).

Since the [Venu® 2](/connect-iq/device-reference/venu2/), the rule for always-on is to use less than 10% of the screen's luminance. You can use [System.getDisplayMode()](/connect-iq/api-docs/Toybox/System/#getDisplayMode-instance_function) to determine if the display is in high power mode, low power mode, or off. See for tools to measure luminance.

### How to Test Your Always-On WatchFace

Waiting for your watch face to run for 3 minutes or longer can be very painful. Luckily, the Connect IQ simulator ships with a new feature to simulate a 24-hour run within minutes. Simply go to 'File->View Screen Heat Map' to open the 'Screen Burn-in Simulation' dialog, then click the 'Start' button and let the time fly.

![](/connect-iq/resources/programmers-guide/burn-in-sim.png)

**Note:** The menu option is only enabled when simulating a `WatchFace` on a device that supports screen protection, such as Venu.

## Example

Here is a code snippet to support drawing a watch face with AMOLED display modes across different devices:

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
