---
title: "Module: Toybox.Application.Storage"
---
# Module: Toybox.Application.Storage

## Overview

The Storage module provides persistent storage to applications.

Storage provides access to persistent disk storage.

Since:

API Level 2.4.0

## Typedef Summary [collapse](#)

-   [**KeyType**](#KeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
-   [**ValueType**](#ValueType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or **Null**

## Instance Method Summary [collapse](#)

-   [**clearValues**](#clearValues-instance_function)() as **Void**

    Clear the object store for the application.

-   [**deleteValue**](#deleteValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) as **Void**

    Delete the given key from the object store.

-   [**getValue**](#getValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)

    Get the data associated with a given key from the object store.

-   [**setValue**](#setValue-instance_function)(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), value as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)) as **Void**

    Store the given data in the object.


## Typedef Details

### **KeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API Level 2.4.0

### **ValueType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)\> or **Null**

Since:

API Level 2.4.0

## Instance Method Details

### **clearValues()** as **Void**

Clear the object store for the application.

Since:

API Level 2.4.0

Throws:

-   ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    Thrown if called from a background process on device that does not have ConnectIQ 3.2.0 support.


### **deleteValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type))** as **Void**

Delete the given key from the object store.

Parameters:

-   key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    The key to delete


See Also:

-   [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)


Since:

API Level 2.4.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if key is a disallowed data type

-   ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    Thrown if called from a background process on device that does not have ConnectIQ 3.2.0 support


### **getValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type))** as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)

Get the data associated with a given key from the object store.

Values must first be set with [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function) before they are can be obtained with `getValue`.

Note:

Symbols can change from build to build and are not to be used for for Keys or Values

Parameters:

-   key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    The key of the value to retrieve from the object store


Returns:

-   [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type) —

    The content associated with the key, or `null` if the key is not in the object store


See Also:

-   [setValue()](/connect-iq/api-docs/Toybox/Application/Storage/#setValue-instance_function)

-   [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)


Since:

API Level 2.4.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if key is a disallowed data type


### **setValue(key as [Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type), value as [Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type))** as **Void**

Store the given data in the object.

Support for storing object types has been expanded over time.

-   [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) (Since 3.0.0)

-   [AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) (Since 3.0.8)

-   [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) (Since 3.2.0)

-   [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) (Since 4.2.0)

-   [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) (Since 5.1.0)


There is a limit on the size of the Object Store that can vary between devices. If you reach this limit, the value will not be saved and an exception will be thrown. Also, values are limited to 32 KB in size.

Note:

Symbols can change from build to build and are not to be used for for Keys or Values

Parameters:

-   key — ([Storage.KeyType](/connect-iq/api-docs/Toybox/Application/Storage/#KeyType-named_type)) —

    The key used to store and retrieve the value from the object store (cannot be a Symbol)

-   value — ([Storage.ValueType](/connect-iq/api-docs/Toybox/Application/Storage/#ValueType-named_type)) —

    The value to put into the object store


Example:

```
using Toybox.Application.Storage;

Storage.setValue("number", 2);               // set value for "number" key
Storage.setValue("float", 3.14);             // set value for "float" key
Storage.setValue("string", "Hello World!");  // set value for "string" key
Storage.setValue("boolean", true);           // set value for "boolean" key

var int = Storage.getValue("number");          // get value for "number" key
var float = Storage.getValue("float");         // get value for "float" key
var string = Storage.getValue("string");       // get value for "string" key
var boolean = Storage.getValue("boolean");     // get value for "boolean" key
```

See Also:

-   [getValue()](/connect-iq/api-docs/Toybox/Application/Storage/#getValue-instance_function)

-   [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)

-   [Core Topics - Persisting Data](/connect-iq/core-topics/persisting-data/)


Since:

API Level 2.4.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if key is a disallowed data type

-   ([Lang.StorageFullException](/connect-iq/api-docs/Toybox/Lang/StorageFullException/)) —

    Thrown if there is not enough remaining space in the Object Store for the given key and value

-   ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    Thrown if called from a background process on device that does not have ConnectIQ 3.2.0 support. Data can always be passed to the foreground process from a background process with [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function).
