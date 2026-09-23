---
title: "Application and System Modules"
---
# Application and System Modules

Every application has to have a class that extends [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/). This object, known as the application object, is the handler for application lifecycle events.

The Application object must be specified in the application `manifest.xml`. This is used by the build tools to denote which class to load at startup. See the [Manifest and Permissions](/connect-iq/core-topics/manifest-and-permissions/#manifest-file-and-permissions) section for more information.

## Install and Uninstall

*Since API level 3.0.0*

Your [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) has two handlers that are called on during installations and updates:

| API | Description | API Level |
| --- | --- | --- |
| [AppBase.onAppInstall()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppInstall-instance_function) | Callback method that is triggered in the background when the app is installed | 3.0.0 |
| [AppBase.onAppUpdate()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppUpdate-instance_function) | Callback method that is triggered in the background when the app is updated | 3.0.0 |

Both of these require that your application has the `Background` permission. Potential use cases include registering a background service on install or starting an authentication method.

These methods are not guaranteed to run. Do not depend on them for essential functionality.

## Application Lifecycle

*Since API level 4.2.0* There are four main application lifecycle states: launched, active, inactive, and suspended

![](/connect-iq/resources/programmers-guide/app-lifecycle.png)

### Launch

After your application is loaded, your application object will be instantiated. From that point forward it will be available throughout the application by calling [Application.getApp()](/connect-iq/api-docs/Toybox/Application/#getApp-instance_function).

After you application object is instantiated, the [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function) function will be called. This is your opportunity to initialize the application and restore state.

If your application is launched via an [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/), the state parameter will contain arguments passed via the intent. Do not attempt to push a [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) instance at this time. See the [Intents](/connect-iq/core-topics/intents/#intents) section for more information.

Once your application is loaded, the system will request the initial view for your application. Depending on what functionality your application implements, you may have to implement several of the following handlers:

-   [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function): The primary method for app startup. Return the base view for your watch face, data field, widget, or device app.

-   [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function): If your are implementing a widget that has a glance, this will be called when the user goes to browse your glance in the glance list. See the [Glances](/connect-iq/core-topics/glances/#glances) section for more information.

-   [AppBase.getGoalView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGoalView-instance_function): If your watch face is overriding the goal views, this gives you an opportunity to present your goal view.

-   : If you are implementing an audio content provider, this method is called when you need to present playback options to the user.


All of these functions return an array: The first item is the [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) instance, and the second is the [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) instance that handles the input for the view.

Apps will behave differently when they are launched from the glance list versus the activity menu. If an app is launched from the glance list, a timeout will be applied to the app. If the user does not exit the app within a given time frame, the system will terminate the app and return to the home screen. If an app is launched from the activity menu, however, it will not time out, and the user must explicitly exit your application.

You can detect which way the user enters your application using the following method:

```typescript
class MySuperApp extends Application.AppBase {
    // if state contains the :resume key and the value
    // is true, then restore app state

    function onStart(state) {
         if ((state != null) && (state.get(:launchedFromGlance)) {
            // Launched from glance
        } else {
            // Launched from activity menu
        }
    }
}
```

### Active, Inactive, and Suspended

*Since API level 4.2.0*

Some devices have a task switcher that makes it easy to switch between activities and apps on the device. This can switch your app from *active* to *inactive*. To take full advantage of the task switcher, you need to utilize the full app lifecycle.

| State | Description |
| --- | --- |
| Active | [AppBase.onActive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onActive-instance_function) is called when your app is transitioning from the inactive to active state. Active apps have access defined by the app type. When transitioning from inactive to active, access to sensors, ANT/BLE, will be restored. |
| Inactive | [AppBase.onInactive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onInactive-instance_function) is called when transitioning from the active to inactive state. |

Based on the state your app is running in, you will have different levels of access to system resources:

| State | Active | Inactive |
| --- | --- | --- |
| Activity | With permission, you may be allowed to start and stop activity recording. | If the app is recording an activity, recording will continue. If the app is not recording, it is not allowed to start or stop activity recording. |
| GPS | GPS access may be denied if another app is recording an activity. | If the app is recording an activity and receiving position events, it will continue to receive events in the inactive state. If the app is not recording an activity, it is blocked from modifying the GPS state. |
| ANT | ANT access may be denied if another app is recording an activity. | If the app is recording an activity, ANT access is permitted. If the app is not recording an activity, all open channels will be closed and will be reopened when transitioning from inactive to active. |
| High Frequency Sensors (Accelerometer, Magnetometer, Gyro) | If the app is recording an activity, access is permitted. If the app is not recording an activity, access may fail in a non-fatal way. | If the app is recording an activity, access will be permitted. Otherwise, measurements can be retrieved at a maximum of 10 hz. |
| Sensors | If the app is recording an activity, access is permitted. If the app is not recording an activity, access may fail in a non-fatal way. | If the app is recording an activity, access will be permitted. Otherwise, sensor access will be limited. |
| Attention | Access is allowed. | Access is denied. |

There may be scenarios where the user has launched more apps than the system has resources to support. If your app is not active but is still running, the system may terminate your app to free up resources.

When this happens, your [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) will be called with a :suspend option to inform you that you are being terminated. You can use this call to persist your state for when you are resumed. When the user returns to your application, you will be called with a `:resume` option on your [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function). You can then restore your state from storage:

```typescript
class MyApp  extends Application.AppBase {
    // if state contains the :resume key and the value is true
    // then restore app state
    function onStart(state) {
        if ((state != null) && (state.get(:resume)) {
                restoreState();
        }
    }

    // if state contains the :suspend key and the value is
    // true, then save app state
     function onStop(state) {
        if ((state != null) && (state.get(:suspend)) {
            saveState();
        }
    }
}
```

If you do nothing, the user will return to your app as if it was just launched.

### App Termination

When your application is terminated, the [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) function is called. This gives your application the option to save state before termination.

## Widgets

*Since API level 4.0.0*

On devices with API level 4.0 and below, there is the widget app type. Widgets are apps that run from a carousel accessible from the watch face. On devices after API 4.0.0, widgets are now from the app launcher, and apps can have glances. The glance list is accessible to the user while they are in an activity, and your apps can be launched from the glance list while the user is recording an activity.

Widgets still build and run for API level 4.0 products without modification. However, you now must create a glance if you want the widget to show in the glance list. If you are building an app, creating a glance for your application gives users two unique ways to launch your app.

## System

The [Toybox.System](/connect-iq/api-docs/Toybox/System/) module provides access to the device state, settings, and metadata. Here you can get runtime information about the device that is running your app, and exercise some execution control.

| API | Description | API Level |
| --- | --- | --- |
| [System.error()](/connect-iq/api-docs/Toybox/System/#error-instance_function) | Write an error to the console and exit the system | 1.0.0 |
| [System.exit()](/connect-iq/api-docs/Toybox/System/#exit-instance_function) | End execution of the current app | 1.0.0 |
| [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) | Exit the current app and launch a new app | 2.2.0 |
| [System.getClockTime()](/connect-iq/api-docs/Toybox/System/#getClockTime-instance_function) | Get the current clock time | 1.0.0 |
| [System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function) | Get the user settings for the device as well as the device metadata | 1.0.0 |
| [System.getSystemStats()](/connect-iq/api-docs/Toybox/System/#getSystemStats-instance_function) | Get runtime statistics for your current runtime | 1.0.0 |
| [System.isAppInstalled()](/connect-iq/api-docs/Toybox/System/#isAppInstalled-instance_function) | Query the system to see if another app is installed | 3.2.0 |
| [System.print()](/connect-iq/api-docs/Toybox/System/#print-instance_function), [System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function) | Writes a message to the console or application log | 1.0.0 |

Connect IQ's hottest API is [System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function). This API has everything: user alarms, device settings, connection state, units, Connect IQ API level, monkeys...
