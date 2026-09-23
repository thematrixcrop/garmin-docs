---
title: "Class: Toybox.Media.SyncDelegate"
---
# Class: Toybox.Media.SyncDelegate

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Media.SyncDelegate](/connect-iq/api-docs/Toybox/Media/SyncDelegate/)


[show all](#)

## Overview

A delegate object that the user implements to respond to media sync requests from the system.

**This has been deprecated**

This class may be removed after System 9.

## See Also:

-   [Toybox.Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)


Since:

API Level 3.0.0

## Instance Method Summary [collapse](#)

-   [**isSyncNeeded**](#isSyncNeeded-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Check if a sync is needed.

-   [**onStartSync**](#onStartSync-instance_function)() as **Void**

    Called when a sync is started by the system.

-   [**onStopSync**](#onStopSync-instance_function)() as **Void**

    Called when an active sync is cancelled.


## Instance Method Details

### **isSyncNeeded()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Check if a sync is needed.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    -   When `true`, a sync is needed

    -   When `false` a sync is not needed and [onStartSync](/connect-iq/api-docs/Toybox/Media/SyncDelegate/#onStartSync-instance_function) will not be called if a sync is triggered for this application



Since:

API Level 3.0.0

### **onStartSync()** as **Void**

Called when a sync is started by the system.

This method should be used to kick-off the application sync process. This includes any setup required to fetch the data needed to prepare the sync, as well as the initial call to [makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) to download the first piece of audio content. Note that, when using this method, you must chain your makeWebRequest() calls together manually. Additionally, you must call [notifySyncProgress()](/connect-iq/api-docs/Toybox/Media/#notifySyncProgress-instance_function) intermittently to enable sync progress updates to be displayed in the native user interface for the device. Finally, [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function) must be called either when the sync has successfully completed, or if an error occurs, so that the device can be properly notified that the sync process is finished.

Since:

API Level 3.0.0

### **onStopSync()** as **Void**

Called when an active sync is cancelled.

This method will be called when an active sync is being cancelled by the user. The app is responsible for calling the [cancelAllRequests()](/connect-iq/api-docs/Toybox/Communications/#cancelAllRequests-instance_function) to cancel any requests made for a sync process. The app is also responsible to let the system know that sync has successfully been cancelled by calling [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function).

Since:

API Level 3.0.0
