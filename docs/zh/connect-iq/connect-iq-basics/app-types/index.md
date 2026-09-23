---
title: "App Types"
---
# App Types

![](/connect-iq/resources/programmers-guide/cyclist-monkey.png)

Every Connect IQ app must identify its app type. The app type sets the use case and boundaries for the app when it runs. There are five app types available in the Connect IQ system:

-   [Watch Faces](#watch-faces) - These are the home screen for Garmin wearables. They can be simple timepieces or complex data screens with dozens of health and fitness stats.

-   [Data Fields](#data-fields) - Data fields are plug-ins to the Garmin activity experience. They allow computation of new metrics or allow bringing new data into a workout.

-   [Widgets](#widgets) - Widgets are mini-apps that can be launched from the home screen. They are intended to provide glanceable access to information.

-   [Device Apps](#device-apps) - Device apps are the most powerful app type and provide full access to the system.

-   [Audio Content Providers](#audio-content-providers) - Audio content providers are plug-ins to the media player on music-enabled wearables, and they provide a bridge between the media and third-party content services.


## APIs and App Types

The app type defines the user context of an app. Watch faces, for example, have many constraints because they operate in low power mode. To enforce these limits, the Connect IQ Virtual Machine will limit your available APIs based on your app type.

| Module Name | Data Field | Watch Face | Widget | App | Audio Content Provider | API Level |
| --- | --- | --- | --- | --- | --- | --- |
| [Toybox.Activity](/connect-iq/api-docs/Toybox/Activity/) | ✓ |  |  | ✓ | ✓ | 1.0.0 |
| [Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/)\* | ✓ |  |  |  |  | 5.2.0 |
| [Toybox.ActivityRecording](/connect-iq/api-docs/Toybox/ActivityRecording/)\* |  |  |  | ✓ |  | 1.0.0 |
| [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/)\* | ✓ |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Application](/connect-iq/api-docs/Toybox/Application/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.4.0 |
| [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.4.0 |
| [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) | ✓ |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Authentication](/connect-iq/api-docs/Toybox/Authentication/) | ✓ | ✓ | ✓ | ✓ | ✓ | 3.3.0 |
| [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 2.3.0 |
| [Toybox.BluetoothLowEnergy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/)\* |  | ✓ | ✓ | ✓ | ✓ | 3.1.0 |
| [Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/)\* | ✓\*\* |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/)\* |  | ✓ |  | ✓ | ✓ | 4.1.0 |
| [Toybox.Cryptography](/connect-iq/api-docs/Toybox/Cryptography/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 3.0.0 |
| [Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/)\* | ✓ |  |  | ✓ | ✓ | 1.3.0 |
| [Toybox.Graphics](/connect-iq/api-docs/Toybox/Graphics/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Lang](/connect-iq/api-docs/Toybox/Lang/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Math](/connect-iq/api-docs/Toybox/Math/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Media](/connect-iq/api-docs/Toybox/Media/) |  |  |  |  | ✓ | 3.0.0 |
| [Toybox.Notifications](/connect-iq/api-docs/Toybox/Notifications/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 5.1.0 |
| [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)\* |  |  | ✓ | ✓ | ✓ | 2.2.0 |
| [Toybox.PersistedLocations](/connect-iq/api-docs/Toybox/PersistedLocations/)\* |  |  |  | ✓ | ✓ | 1.0.0 |
| [Toybox.Position](/connect-iq/api-docs/Toybox/Position/)\* |  |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/)\* |  |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 2.1.0 |
| [Toybox.SensorLogging](/connect-iq/api-docs/Toybox/SensorLogging/)\* |  |  |  | ✓ | ✓ | 2.3.0 |
| [Toybox.StringUtil](/connect-iq/api-docs/Toybox/StringUtil/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.3.0 |
| [Toybox.System](/connect-iq/api-docs/Toybox/System/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.3.0 |
| [Toybox.Test](/connect-iq/api-docs/Toybox/Test/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.1.0 |
| [Toybox.Time](/connect-iq/api-docs/Toybox/Time/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Timer](/connect-iq/api-docs/Toybox/Timer/) |  | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Weather](/connect-iq/api-docs/Toybox/Weather/) | ✓ | ✓ | ✓ | ✓ | ✓ | 3.2.0 |

*\* Requires app permission*

*\*\* Communications support in data field introduced in API level 5.0.0*

A Toybox module requested for your app type that is outside this list will result in a *Symbol Not Found* error.

## Watch Faces

Watch faces are a special application type that display on the main screen of Garmin's wearable devices. These application types are limited some ways to allow them to have minimal impact on the device's battery life.

Watch faces run continuously on the device and can have the most effect on power consumption. A poorly designed watch face — one that takes too long to draw — can greatly degrade the battery life of the wearable.

Due to these battery life concerns, watch faces have the least access to APIs in the system. They have access to graphics, bitmaps, fonts, current activity tracker status, current battery status, and the user's activity profile. They cannot access the compass, GPS, or other sensors.

If you use custom fonts for numeric display, use the filter option to only load the critical glyphs. This will save memory that you can use for additional graphics

### Watch Face Sleep

Watch faces spend the majority of the time in "Sleep Mode" in this mode, execution is restricted to updates once each minute, and cannot use timers or animations. When a user raises the watch to look at it, the watch face exits sleep mode. When this occurs, the [WatchFace.onExitSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onExitSleep-instance_function) method is called, and updates will increase to once per second, and timers and animations are allowed until the [WatchFace.onEnterSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onEnterSleep-instance_function) method is called.

### Watch Face Delegate

*Since API Level 2.3.0*

The [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) provides input from the system to watch faces. The delegate should be returned as the second element of the array returned from [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) similar to input delegates for other application types. This delegate is currently only used to report power budget violations for watch faces that support every second updates. If the execution budget is exceeded over the course of a minute, the [WatchFaceDelegate.onPowerBudgetExceeded()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPowerBudgetExceeded-instance_function) callback will be invoked, providing information about the execution time of the watch face, and the limit that was exceeded.

## Data Fields

Dynamic data fields allow customers and third party developers to write additional metrics and data that will display with Garmin activities. The goal is to create a system that not only makes it easy for a user to make a quick data field based off our workout data, but also gives the developer the the ability to customize the presentation.

Data fields can display during an already supported activity on the device. They are a great way to provide new metrics to users by performing calculations on data that is already being recorded. Data fields are integrated within existing activities, so it's best if they appear in the same font and format as that used for the native data fields on the device. For that reason, the simple layout is best, as it will ensure your data field will have the same native look and will scale appropriately to all data screen layouts. If you would like to customize your data field, for example, by inserting a bitmap in place of a numerical value, you will need to ensure that your custom field will scale appropriately among one-field, two-field, three-field, and other layouts.

### Data Fields and Simple Data Fields

The base class for data fields is [WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/). This class extends [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/), and in many ways behaves similarly to other View objects. The [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) method call will be made every time the data field needs to update.

In Garmin activities, the user controls the data page layout; specifically, whether it displays one, two, three, or more fields. The Connect IQ data field must handle displaying in all of those layouts, and the developer can use the simulator to test their field in all layouts supported by devices.

Many developers will only want to display a single value and not want to handle all the complexity of the drawing of a data field. In those instances, they can use a [WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/) object. A simple data field handles the drawing of the field in multiple sizes, and only requires the developer to implement a [DataField.compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function) method. The [DataField.compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function) method is passed an [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) object, which contains all current workout information.

Use a [WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/) when possible to guarantee your data field will have the native look and feel of the other Garmin Data Fields. Connect IQ will try to ensure your data displays with the best font and layout possible.

The following is an example of a "Beers Earned" data field, which displays how many beers you have "earned" during your workout:

```typescript
using Toybox.Application;
using Toybox.WatchUi;

class BeerView extends WatchUi.SimpleField
{
    function initialize() {
        units = "beers";
    }

    function compute(info) {
        return info.calories / 150; // Calories in average bottle of beer
    }
}

class BeersEarned extends Application.AppBase
{
    function getInitialView() {
        return new BeerView();
    }
}
```

### Simulating a Workout

To test your data field in the simulator, feed your data field simulated data by clicking the *Simulation* menu, choose *FIT Data* and then *Simulate*. This will generate random but valid data. You can also use *Simulation* > *FIT Data* > *Playback File...* to simulate a workout by using a pre-recorded FIT file.

## Widgets

Widgets are mini-apps that allow developers to provide glanceable views of information. The information may be from a cloud service, from the onboard sensors, or from other Connect IQ APIs. Widgets are launchable from a rotating carousel of pages accessible from the main screen of wearables, or from a side view on bike computers and outdoor handhelds. Unlike apps, Widgets time out after a period of inactivity and are not allowed to record activities, but they are also launchable at any time.

### Base View and the Widget Carousel

On wearable products the watch face is the home screen of the widget carousel. Users can use the up/down buttons (on button products) or up/down swipes (on touchscreen wearables) to navigate through the widgets.

When a widget launches the initial view returned from [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) is shown. Since they are used for widget navigation, the will never receive either the up/down button or up/down swipe events when the base view is shown. Any views pushed on top of the base view using [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) will not have these input restrictions.

The expectation for all views in the widget loop is that the system menu shows when the user performs the menu behavior. For widgets, the first item on the system menu will be to view the menu options for the widget. When the user makes that selection, your widget's [BehaviorDelegate.onMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onMenu-instance_function) will be called.

### Glances

*Since API Level 3.1.0*

The Fenix 6 moved glanceable information from a page carousel presentation to a list presentation. Each item offers a small area of real-estate to display information. If the user selects it the full widget is launched. When launched in this context, the widget base view don't have the input restrictions regularly applied.

Glance views run in a limited runtime space, with reduced memory and privileges and do not accept any input.

When your widget is launched, you can check if `DeviceInfo` has `isGlanceModeEnabled` defined. If it does, you can also determine what the value is. If glance mode is enabled you can launch directly into the interactive portion of your widget. Otherwise you should launch the base view.

See the [Glance](/connect-iq/core-topics/glances/#glances) section for more information.

### Designing a Widget

Your widget should be designed with both a glance and a base view. Your base view and glance should both offer a simple summary of the presented data. If the user performs a behavior (pressing the start button, touching the screen) that indicates they want more information, your widget should then push a view that allows navigation through the offered information.

## Device Apps

Device apps are by far the most robust type of app available. These allow the most flexibility and customization to the app designer. They also provide the most access to the capabilities of the wearable device, such as accessing ANT+ sensors, the accelerometer and reading/recording FIT files.

The suite of Garmin wearables are each designed to fulfill different needs and behaviors of active individuals, from endurance runners to triathletes to outdoor enthusiasts and adventurers. The core focus of these wearables centers on the recording and tracking of activities, from running to hiking to skiing. Users of the different Garmin wearables desire to track specific types of data and great care should be taken in designing your watch app to understand the needs of the user doing a particular activity or task and provide appropriate feedback, metrics and configurability to give the user the best experience.

The initial view of the app should be a call to action. If your app represents some form of activity like hiking or weight lifting, the initial view of the app should ask to be started. Present the user with information from the sensors that make them want to hit the start button.

Garmin commonly uses page loops to present multiple pages of information. Page loops are a carousel of pages, each one a unique view on the activity. This is a common metaphor in Garmin products and easy to implement in Connect IQ.

When your app is presenting large amounts of text to the user, try to keep information in the center of the screen. On round screens the top and bottom of the screen provide a limited viewing area. Use the top for contextual headers, scroll arrows, and other small hints of information.

## Audio Content Providers

Garmin media enabled devices are designed for active lifestyle users who want to listen to music without carrying their phone on their rides, runs or other activities. The media player allows the user to listen to their music, podcasts, and audio-books on the go.

Audio content providers function as plug-ins for the media player on media-enabled product. These apps act as bridges between music services and the Garmin media player. Audio content providers allow users to select content from a content provider, sync the content over Wi-Fi to the device, and listen to it

These apps have three contexts:

1.  Playback Configuration: Allows the user to select what content they want to listen to from what they have synced

2.  Sync: The device activates Wi-Fi and allows the audio content provider to request content for later offline playback

3.  Playback: The playback experience. The audio content provider tells the media player what to play based on the user's selection.


Your app should implement an [Application.AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/) instead of the traditional [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/). This class adds the following methods:

| Method | Purpose |
| --- | --- |
| [AudioContentProviderApp.getContentDelegate()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getContentDelegate-instance_function) | Get a [Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/) for use by the system to get and iterate through media content on the device. |
| [AudioContentProviderApp.getPlaybackConfigurationView()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getPlaybackConfigurationView-instance_function) | Get the initial view for configuring playback. This is the main view when launched by the media player. |
| [AudioContentProviderApp.getProviderIconInfo()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getProviderIconInfo-instance_function) | Get audio provider icon information. |
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) | Get a [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) object that communicates sync status to the system for syncing media content to the device. |

Sync Configuration has been deprecated. We recommend providing the user a mechanism to download content inside of the playback configuration.

See the [How do I create an Audio Content Provider?](/connect-iq/connect-iq-faq/how-do-i-create-an-audio-content-provider/#how-do-i-create-an-audio-content-provider) section for more information.
