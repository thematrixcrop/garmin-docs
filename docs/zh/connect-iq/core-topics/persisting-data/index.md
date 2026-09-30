---
title: "Persisting Data"
---
# Persisting Data

Connect IQ is also able to save data from within an app at runtime. For example, an app may need to obtain or calculate data and store it for later use. This is accomplished by the use of Storage, Properties, and Settings.

-   *Storage* represents data written to disk so it may persist across executions of an application.

-   *Properties* are constant values defined at build time and included in the executable that are useful for product-specific values that shouldn't be defined in code. Properties may also define the default Settings values.

-   *Settings* are user-editable values modified through Garmin Connect Mobile and Garmin Express. Default settings values are defined by Properties.


## Storage

Storage is used for saving and retrieving data from the file system of the device at run time as defined by the developer. This data is only available to the application and is not accessible by the end user. For example, this feature could be used to store a location from when an app was last used. The next time the app is launched, Storage can provide the last known location to the app.

The following data types may be stored:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

-   [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

-   [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

-   [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


It is important to note that an [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) may only contain the data types listed above. For example, it is not possible to store a [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) in an [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) in Storage.

## Accessing Properties and Settings: Object Store

Prior to API level 2.4.0, all content was persisted in the object store. If your app runs on Connect IQ System 1 devices, you will need to use [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) and [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) to persist data. These functions allow access to both settings and persisted data.

The object store is a [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) that lives in memory until your app terminates, at which point it is saved to disk. Because the object store costs against your runtime memory, do not use these methods unless you are running on System 1 devices.

| API | Purpose | API Level |
| --- | --- | --- |
| [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) | Retrieve information by key from the object store | 1.0.0 |
| [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) | Store information by key in the object store | 1.0.0 |

## Accessing Storage: `Application.Storage`

*Since API level 2.4.0*

The [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) module manages persistent key-value pair data storage. Information is automatically saved on disk when [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) is called. Keys and values are limited to 8 KB each, and a total of 128 KB of storage is available.

For example, an application might save a location for later use with the code below:

```java
Storage.setValue("location", locationValue.toDegrees());
```

The next time the application is launched, the stored location value can be retrieved and displayed:

```java
var myLastLocation = Application.Storage.getValue("location");
dc.drawText(x, y, Graphics.FONT_SMALL, "Last location: " + myLastLocation, Graphics.TEXT_JUSTIFY_LEFT);
```

API level 3.2.0 introduced the ability to access the [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) module from background processes. The background process can modify storage using [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function), [Storage.deleteValue()](/connect-iq/api-docs/Toybox/Application/Storage/#deleteValue-instance_function) and . When the storage is written from the background process, [AppBase.onStorageChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStorageChanged-instance_function) callback will be invoked for the foreground process if the background and foreground process are active at the same time and vice-versa. The application would then have to reload data from storage to reflect updated information.

| API | Purpose | API Level |
| --- | --- | --- |
| [Storage.getValue()](/connect-iq/api-docs/Toybox/Application/Storage/#getValue-instance_function) | Retrieve information by key from persisted storage | 2.4.0 |
| [Storage.setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) | Store information by key in persisted storage | 2.4.0 |

## Accessing Properties and Settings: `Application.Properties`

*Since API level 2.4.0*

The [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) 模块提供 an interface for accessing the values and properties of settings. Information is automatically saved on disk when [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) is called. To get or set a property value use the [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) or methods, respectively:

```java
// Set an Object Store app setting
Properties.setValue("mySetting", mySetting);

// Get an Object Store app setting value
var mySetting = Properties.getValue("mySetting");
```

| API | Purpose | API Level |
| --- | --- | --- |
| [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) | Retrieve information by key from properties. Property values must be defined in a resources xml file in a `<properties>` element. If a key that is not present in application properties is passed to [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function), an exception will be thrown | 2.4.0 |
| [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) | Store information by key in persisted storage. Property values must be defined in the resource xml file in a `<properties>` element. If a key that is not present in application properties is passed to [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function), an exception will be thrown | 2.4.0 |

## Which API Should I Use?

If your app runs on devices at API level 2.4.0 or above, [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) offers a superior solution for persisting application data compared to the Object Store. Using the newer APIs in an existing app is simply a matter of updating code to call the new methods. However, there are a couple of important things of which to be aware:

1.  Object Store data files are not converted to the new format.

    If an app used storage prior to API level 2.4.0, existing properties will not automatically migrate to the new file format used by the [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) module. If a conversion is needed, an app must include a routine to get the data from the old files and store it in the new format.

2.  [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) will throw an exception if attempting to write to an undefined property. Prior to API level 2.4.0, an attempt to write to an undefined property would result in a value written to storage (the .STR file) since [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) and [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) were overloaded to function with each of Storage, Properties, and Settings. This behavior will no longer occur when using the [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) module since it is distinct from . Instead, an [Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/) is thrown.


To maximize the number of supported devices, use a `has` check to see if the Storage API is available and then call the appropriate methods based on what the device supports:

```typescript
if ( Toybox.Application has :Storage ) {
    // use Application.Storage and Application.Properties methods
} else {
    // use Application.AppBase methods
}
```

For more, see the `ApplicationStorage` sample app distributed with the SDK.
