---
title: "How do I use the Connect IQ Mobile SDK"
---
# 如何使用 Connect IQ 移动 SDK

The first step to writing a partner powered Connect IQ app is getting your partner app and Connect IQ app connected. The Partner SDK provides the tools for you to do this how you feel it best fits into the flow of the app.

## Get the Latest Connect IQ Mobile SDK

Make sure you have the latest [Partner SDK from the developer site](/connect-iq/sdk/). Staying up to date keeps you in sync with the latest APIs and functionality.

***Note:*** *iOS developers should get the latest SDK from the developer site. An important update was made to the iOS mobile SDK to support upcoming devices.*

## Checking for Garmin Connect Mobile

The Partner SDKs are designed to work in unison with Garmin Connect Mobile. This means the user of your partner app will need to have Garmin Connect Mobile installed. The Partner SDKs provide an API to check the status of Connect Mobile as well as an API to open the Garmin Connect Mobile store page (with an optional simple dialog).

![](/connect-iq/resources/faq/Included_versus_custom_install_dialogs.png)

## Connect First

You may be using your Connect IQ app to augment the functionality of your partner app/existing mobile app. If this is the case you also probably don't want to force a user to select a device before using the rest of your mobile app. We'll handle this case by providing a menu option to select a device; this is also a good option to include even if you require a device connection so the user has the ability to change which device is connected within the app. When a user selects that menu option we'll launch a new page which lists the connected devices, save the device the users selects and then close the page.

![](/connect-iq/resources/faq/Select_Device_Flow.png)

In iOS, the `showConnectIQDeviceSelection` call will launch GCM for the device list and will re-launch your app with a list of paired CIQ devices. It is important to configure your app to be re-launched by GCM for this to work.

## Checking If the Connect IQ App Is Installed

Finally you'll need to make sure your Connect IQ app is installed on the device the user selected regardless of the flow you use to connect. The Partner SDKs provide APIs to check the status of an app. If the app isn't installed you'll want to prompt the user to install your Connect IQ app before proceeding. You'll want to prompt the user to install your Connect IQ app before proceeding. The Partner SDKs provide APIs to open the Connect IQ store – within Connect Mobile – to your app's store page. Use the `showConnectIQStoreForApp:` API in iOS or `openStore` API in Android.

Now that you have established the connection with the device, you can now use the [Communications.transmit](/connect-iq/api-docs/Toybox/Communications/#transmit-instance_function) API to send a message directly from a Connect IQ app to a wearable and the sendMessage to put a message in the Connect IQ app mailbox from your mobile app. Note that if the Connect IQ app is not running, the message will persist until the app is opened by the user. This allows a phone app to update information for the watch app even if the watch app is not currently running.
