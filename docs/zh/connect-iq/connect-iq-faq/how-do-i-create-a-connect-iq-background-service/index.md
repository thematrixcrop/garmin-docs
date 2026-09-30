---
title: "How do I create a Connect IQ Background Service?"
---
# 如何创建 Connect IQ 后台服务？

*This post was written by Jim Miller, a Connect IQ developer in Phoenix, AZ.*

One of the new features in API level 2.3.0 is *background services*, or the ability for a Connect IQ application to have a service that runs even if the main application isn't running. Background services have different abilities than the main process; a watch face or data field that can't do communications itself, but the background process can! The most common example of this right now is a watch face that displays weather information from the internet. When something happens in the background, that process can optionally prompt the user if they want to start the main application, or the background can just collect data for the next time the main application runs.

I'll be talking about background services that take advantage of temporal events. In simple terms, it's a process that's time driven: it runs every "x" minutes, or can be set to run at a certain time. Temporal events can fire at most every 5 minutes, and will run at most 30 seconds each time it runs. The focus here will be on background processes that don't try to start the main app when something happens, but just collect data for the main process.

I've created a very basic watch face with a background service on the [developer forum](https://forums.garmin.com/developer/connect-iq/f/discussion/5287/very-simple-sample-of-a-watch-face-with-a-background-process) and [included a .zip](https://forums.garmin.com/cfs-file/__key/communityserver-discussions-components-files/12/7750.vsbgwf.zip) of the project in the first post so you can see the code and try it out yourself. The watch face itself displays the time, and the last data seen from the background service (plus a counter, etc). And all the background does is return a string with an "hh:mm" timestamp. While it isn't useful, it does show the basics of backgrounding with a temporal event. In this case, there's really isn't much in the [View](/connect-iq/api-docs/Toybox/WatchUi/View/) class, but the things to look at are in App class and the file with the background process - the [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/).

When doing an app with backgrounding, there are a few things that come into play. In the sample project, you'll see how these pieces all fit together.

## The Background Annotation

To save memory, each time the background service runs only the necessary code is loaded. Background services have a 32 KB heap, so things can get tight! The (:background) annotation is used to indicate what classes, modules, and variables need to be available when the background service runs. The main [App](/connect-iq/api-docs/Toybox/Application/AppBase/) class is loaded by default, but you want to use the annotation on things like the [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) and any things it may use or reference.

```typescript
(:background)
class BgbgServiceDelegate extends Toybox.System.ServiceDelegate {
```

Using it doesn't mean that it's only in the background service; classes, modules, and variables will be available in both the main process and background process.

## Service Delegate

A background service can be triggered by different kinds of system events: step goal achievement, sleep/wake times, and temporal events, which are discussed below. The [System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) allows you to define what your app should execute when these events occur. The [AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function) is how the service delegate in your code is found. Use the methods in the [Toybox.Background](/connect-iq/api-docs/Toybox/Background/) module to register your service to fire on given triggers.

## Temporal Events

[Background.registerForTemporalEvents()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) is used to set how often the background temporal event runs. In the sample code, I do it as part of [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) after doing a check to make sure the app is running on a device that supports backgrounding.

```typescript
        //register for temporal events if they are supported
        if(Toybox.System has :ServiceDelegate) {
            canDoBG=true;
            Background.registerForTemporalEvent(new Time.Duration(5 * 60));
        } else {
            Sys.println("****background not available on this device****");
        }
```

[Background.deleteTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#deleteTemporalEvent-instance_function) can turn off the background process if desired. With a combination of those calls, you can get a bit of control over when a temporal event runs. For example, you can do things like not starting the temporal event until there is a connection to a phone, deleting the temporal event when your app no longer needs it, etc. **Note:** Normally when you have started a temporal event process, it will run even when the parent app isn't running. With watch faces only the temporal event for the currently selected watch face will run.

With some temporal events, you may want to pass an error status back to the main process instead of data. A good example of this would be a background service that does communications. In many cases, you will be passing back the data you received (I often just pass back the dictionary from the callback), but in the case of an error, I just pass back a Number representing the error. Then in [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function), I use instanceof Number to check if I got data or an error, and handle the error or data as needed. Here's a simple example of that:

```typescript
function onBackgroundData(data) {
    if(data instanceof Number) {
        //indicates there was an error, and "data" is the error code
    } else {
        //got good "data"
    }
}
```

## Interprocess Communication

You pass data from your background service to the main process using [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function) in your [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)

```typescript
    function onTemporalEvent() {
        var now=Sys.getClockTime();
        var ts=now.hour+":"+now.min.format("d");
        Sys.println("bg exit: "+ts);
        //just return the timestamp
        Background.exit(ts);
    }
```

[AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) is how the main process gets the latest data from what the service returned by [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function). In the main process, when it first starts, I'll see if data is in the object store, and if so, then you display that as a "last known value". If you don't do something like this with a watch face, each time you leave the watch face and come back, there wouldn't be any data until the background runs again.

```typescript
    function onBackgroundData(data) {
        $.counter++;
        var now=Sys.getClockTime();
        var ts=now.hour+":"+now.min.format("d");
        Sys.println("onBackgroundData="+data+" "+counter+" at "+ts);
        bgdata=data;
        App.getApp().setProperty(OSDATA,bgdata);
        Ui.requestUpdate();
}
```

You can't use [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) in the background process to pass data in the object store or settings; if you try, an exception is thrown. You also can't pass information between the main process and the background with global variables. The word "process" is important here: global variables are per process, so the same global is only global for that process. A variable defined globally exists in both the main process and background process, but each maintains its own copy and they're never synced.. That been said, the only way to pass data from the main app to the background service is as a property. Your [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) can retrieve it with [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function). It can be something in the object store or from settings. Make sure to handle the case where the background may not have the data it needs here, as there are things that may not yet have valid values.

The background can run more than once before the main process sees it in [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function). The main process only sees the last one, not all of them, but in the background process you can use [Background.getBackgroundData()](/connect-iq/api-docs/Toybox/Background/#getBackgroundData-instance_function) to get what's currently queued for the main process, but not yet delivered. You can combine that with what the background process has that's new, and return it all.

## Other Points

-   **Watch Faces** - Watch faces are a bit different than other app times when it comes to if/when a background service runs, and this is by design. The background service for a watch face will only be run if that watch face is the "active" watch face (the one currently selected to be used). Think of the case where you have two watch faces installed, that both get weather data from the same source, with a limit on requests per day. There's no reason for the background service for the non-active watch face to run, as it would just use up the quota of requests per day.

-   **Size of response to makeWebRequest() calls** - If you are doing [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) calls in your background process, one thing to keep in mind is the size of the response you get back. The background process has limited memory. When a response is received, there must be enough memory to contain both the response and to build the dictionary passed back to your callback.

-   **Notes about the Simulator:** - You can test backgrounding in the simulator. In the case of temporal events, they will occur as scheduled, but under the "Simulation" menu, you can trigger the background process to run.


There is a known issue with the simulator with background apps: the simulator will run the background services of apps you've tested in it, even if it isn't the "active" app being tested. So if you are testing "app a" and then switch to "app b", the background for "app a" will run as well as the background for "app b". Even if your current target doesn't have a background service the simulator may attempt to start it. The Connect IQ team is aware of the issue and will address it in a upcoming release

As you can see, background services are a powerful new addition to the Connect IQ toy box. They allow your app to periodically poll the internet for information, including watch faces and data fields. What can you use them for?

**About The Author** *Jim Miller is a Connect IQ developer in Arizona. "In early 2015, I had a forerunner 15, and liked the GPS and step tracking. Then the original vívoactive was announced, and I pre-ordered it, and downloaded the CIQ 1.0.0 SDK the same week!" You can see his* [*apps on the app store*](https://apps.garmin.com/en-US/developer/b73df9e6-4021-4059-b2e8-f9cfa04947c3/apps) *and find him on* [*Instagram*](https://www.instagram.com/jim.m.58/)*, his* [*Connect IQ Facebook Page*](https://www.facebook.com/connectiqaz)*, or on the* [*Connect IQ forums*](https://forums.garmin.com/members/jim_5f00_m_5f00_58)*.*
