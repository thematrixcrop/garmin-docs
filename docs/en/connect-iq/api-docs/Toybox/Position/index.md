---
title: "Module: Toybox.Position"
---
# Module: Toybox.Position

## Overview

The Position module provides an interface for location information and positioning sensors.

This module also provides two sets of constants:

-   **GEO:** Used to specify the [Location](/connect-iq/api-docs/Toybox/Position/Location/) formatting.

-   **QUALITY:** Represents the GPS fix quality when the [Location](/connect-iq/api-docs/Toybox/Position/Location/) information was calculated


Example:

```
using Toybox.Position;
using Toybox.System;
Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));
function onPosition(info) {
    var myLocation = info.position.toDegrees();
    System.println("Latitude: " + myLocation[0]); // e.g. 38.856147
    System.println("Longitude: " + myLocation[1]); // e.g -94.800953
}
```

Since:

API Level 1.0.0

## Classes Under Namespace

**Classes:** [Info](/connect-iq/api-docs/Toybox/Position/Info/), [Location](/connect-iq/api-docs/Toybox/Position/Location/)

## Constant Summary

### Constellation

**This has been deprecated**

This enum may be removed after System 10.

Since:

API Level 1.0.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| CONSTELLATION\_GPS | 0 |
API Level 3.2.0

 |

Use the GPS satellite constellation

 |
| CONSTELLATION\_GLONASS | 1 |

API Level 3.2.0

 |

Use the GLONASS satellite constellation

 |
| CONSTELLATION\_GALILEO | 2 |

API Level 3.2.0

 |

Use the GALILEO satellite constellation

 |

### Configuration

Configuration values for known GNSS configurations

Since:

API Level 3.3.6

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| CONFIGURATION\_GPS | 1 |
API Level 3.3.6

 |

GPS L1

 |
| CONFIGURATION\_GPS\_GLONASS | 2 |

API Level 3.3.6

 |

GPS L1 and GLONASS

 |
| CONFIGURATION\_GPS\_GALILEO | 3 |

API Level 3.3.6

 |

GPS L1 and GALILEO L1

 |
| CONFIGURATION\_GPS\_BEIDOU | 4 |

API Level 3.3.6

 |

GPS L1 and BEIDOU L1

 |
| CONFIGURATION\_GPS\_GLONASS\_GALILEO\_BEIDOU\_L1 | 5 |

API Level 3.3.6

 |

GPS L1, GLONASS, GALILEO L1, BEIDOU L1

This option is supported by System 6 devices like fenix7 and edge1040

 |
| CONFIGURATION\_GPS\_GLONASS\_GALILEO\_BEIDOU\_L1\_L5 | 6 |

API Level 3.3.6

 |

GPS L1, GPS L5, GLONASS, GALILEO L1A, GALILEO L5, BEIDOU L1, BEIDOU L5

Referred to as Multi-GNSS Multi-band on Edge 1040.

This option is supported by System 6 devices like fenix7 and edge1040

 |
| CONFIGURATION\_SAT\_IQ | 255 |

API Level 3.3.6

 |

AutoGNSS (SatIQ™)

 |

### CoordinateFormat

Since:

API Level 1.0.0

| Name | Value | Since | Description | See Also |
| --- | --- | --- | --- | --- |
| GEO\_DEG | 0 |
API Level 1.0.0

 |

The decimal degree format: ddd.dddddd (e.g. 38.278652)

 | -   [Decimal Degrees](https://en.wikipedia.org/wiki/Decimal_degrees)
     |
| GEO\_DM | 1 |

API Level 1.0.0

 |

The degrees/decimal minutes format: dddmm.mmm (e.g 38 27.865')

 |  |
| GEO\_DMS | 2 |

API Level 1.0.0

 |

degrees/minutes/seconds (DMS) format: ddd mm ss (e.g. 38 27' 8")

 |  |
| GEO\_MGRS | 3 |

API Level 1.0.0

 |

Military Grid Reference System, or MGRS (e.g. 4QFJ12345678)

 | -   [Military Grid Reference System](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)
     |

### Quality

Since:

API Level 1.0.0

| Name | Value | Since | Description | See Also |
| --- | --- | --- | --- | --- |
| QUALITY\_NOT\_AVAILABLE | 0 |
API Level 1.0.0

 |

GPS is not available

 |  |
| QUALITY\_LAST\_KNOWN | 1 |

API Level 1.0.0

 |

The Location is based on the last known GPS fix.

 |  |
| QUALITY\_POOR | 2 |

API Level 1.0.0

 |

The Location was calculated with a poor GPS fix. Only a 2-D GPS fix is available, likely due to a limited number of tracked satellites.

 |  |
| QUALITY\_USABLE | 3 |

API Level 1.0.0

 |

The Location was calculated with a usable GPS fix. A 3-D GPS fix is available, with marginal HDOP (horizontal dilution of precision)

 | -   [Dilution of Precision](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation))
     |
| QUALITY\_GOOD | 4 |

API Level 1.0.0

 |

The Location was calculated with a good GPS fix. A 3-D GPS fix is available, with good-to-excellent HDOP (horizontal dilution of precision).

 | -   [Dilution of Precision](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation))
     |

### LocationAcquisitionType

Since:

API Level 1.0.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| LOCATION\_ONE\_SHOT | 0 |
API Level 1.0.0

 |

Enables a one-time Location acquisition

 |
| LOCATION\_CONTINUOUS | 1 |

API Level 1.0.0

 |

Enables continuous Location tracking

 |
| LOCATION\_DISABLE | 2 |

API Level 1.0.0

 |

Disables Location tracking

 |

### PositioningMode

Since:

API Level 1.0.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| POSITIONING\_MODE\_NORMAL | 0 |
API Level 3.2.0

 |

Standard positioning mode used by default for fitness activities

 |
| POSITIONING\_MODE\_AVIATION | 1 |

API Level 3.2.0

 |

Enable special mode for aviation use-cases that require support for higher altitudes.

 |

## Instance Method Summary [collapse](#)

-   [**createBoundingBox**](#createBoundingBox-instance_function)(locations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>) as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] or **Null**

    Create a bounding box from an array of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects.

-   [**enableLocationEvents**](#enableLocationEvents-instance_function)(options as { :acquisitionType as [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), :constellations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Constellation](/connect-iq/api-docs/Toybox/Position/#Constellation-module)\>, :configuration as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module), :mode as [Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module) } or [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(loc as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)) as **Void**) as **Void**

    Request a Location event.

-   [**getInfo**](#getInfo-instance_function)() as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

    Get the current [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/).

-   [**hasConfigurationSupport**](#hasConfigurationSupport-instance_function)(config as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determines if the device supports a requested GPS configuration.

-   [**parse**](#parse-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

    Convert a String to a Location object.


## Instance Method Details

### **createBoundingBox(locations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>)** as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] or **Null**

Create a bounding box from an array of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects.

Parameters:

-   locations — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    Array of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects.


Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    Array of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects that specify the bounds of the input array or `null` if the the input array is empty. The first element describes the top left corner, the second describes the bottom right.


Since:

API Level 3.0.3

### **enableLocationEvents(options as { :acquisitionType as [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), :constellations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Constellation](/connect-iq/api-docs/Toybox/Position/#Constellation-module)\>, :configuration as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module), :mode as [Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module) } or [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(loc as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)) as **Void**)** as **Void**

Request a Location event.

Using this API requires enabling the Positioning Permission. Only Device Apps and Widgets may use this API.

Note:

Passing an options [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) is only supported with ConnectIQ 3.2.0 and later.

Note:

Passing the `:configuration` option is only supported with ConnectIQ 3.3.6 or later.

Note:

Multitasking: Location events will be disabled when app enters inacitve state, and re-enabled when is active again. These state changes are denoted by calls to AppBase.onActive() and AppBase.onInactive().

Parameters:

-   options — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A LOCATION\_\* value or [Toybox::Lang::Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) of options.

    -   :acquisitionType — ([Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module)) —

        A LOCATION\_\* enum value indicating the position acquisition type to use.

    -   :constellations — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        An array of CONSTELLATION\_\* enum values specifying what constellations to enable. If not provided, CONSTELLATION\_GPS will be used by default.

    -   :configuration — ([Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) —

        A CONFIGURATION\_\* value specifying what configuration to enable. Only available with ConnectIQ 3.3.6 and later.

    -   :mode — ([Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module)) —

        a POSITIONING\_MODE\_\* value specifying the mode to use. If `null` POSITIONING\_MODE\_NORMAL will be used by default.

-   listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A reference to a listener method:

    -   Called when location updates are received

    -   Receives a Position.Info object



Example:

```
using Toybox.Position;

var options = {
    :acquisitionType => Position.LOCATION_CONTINUOUS
};

if (Position has :POSITIONING_MODE_AVIATION) {
    options[:mode] = Position.POSITIONING_MODE_AVIATION;
}

if (Position has :hasConfigurationSupport) {
    if ((Position has :CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5)) {
        options[:configuration] = Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5;
    } else if ((Position has :CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1)) {
        options[:configuration] = Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1;
    } else if ((Position has :CONFIGURATION_GPS) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS)) {
        options[:configuration] = Position.CONFIGURATION_GPS;
    }
} else if (Position has :CONSTELLATION_GLONASS) {
    // this can fail with InvalidValueException if combination is not supported by device
    options[:constellations] = [ Position.CONSTELLATION_GPS, Position.CONSTELLATION_GLONASS ];
} else {
    options = Position.LOCATION_CONTINUOUS;
}

// Continuous location updates using selected options
Position.enableLocationEvents(options, method(:onPosition));

function onPosition(info) {
    var myLocation = info.position.toDegrees();
}
```

:::details Supported Devices

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
-   D2™ Bravo
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
-   eTrex® Touch
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 230
-   Forerunner® 235
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 45
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 920XT
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Garmin Swim™ 2
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR
-   vívoactive®

:::

Since:

API Level 1.0.0

Throws:

-   ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if :acquisitionType is invalid, if a specific CONSTELLATION\_\* value is not supported by a device, or if an invalid combination of constellation values are specified.


### **getInfo()** as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

Get the current [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/).

Using this API requires enabling the Positioning Permission. This is useful for retrieving the current position info either on demand or periodically within a [Timer](/connect-iq/api-docs/Toybox/Timer/Timer/).

Example:

Get position info once per second

```
using Toybox.Position;
using Toybox.System;
using Toybox.Timer;
var dataTimer = new Timer.Timer();
dataTimer.start(method(:timerCallback), 1000, true); // A one-second timer
function timerCallback() {
    var positionInfo = Position.getInfo();
    if (positionInfo has :altitude && positionInfo.altitude != null) {
        var altitude = positionInfo.altitude;
        System.println("Altitude: " + altitude);
    }
}
```

:::details Supported Devices

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
-   D2™ Bravo
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
-   eTrex® Touch
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 230
-   Forerunner® 235
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 45
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 920XT
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Garmin Swim™ 2
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR
-   vívoactive®

:::

Returns:

-   [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

Since:

API Level 1.0.0

### **hasConfigurationSupport(config as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determines if the device supports a requested GPS configuration

Parameters:

-   config — ([Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) —

    A CONFIGURATION\_\* enum value specifying what configuration to enable. Only available with ConnectIQ 3.3.6 and later.


:::details Supported Devices

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API Level 3.3.6

### **parse(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module))** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

Convert a String to a Location object.

The input String must be in one of the four formats described by the [Position.GEO\_\*](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module) constants.

Parameters:

-   string — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The String to parse

-   format — ([Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) —

    A Position.GEO\_\* value


Example:

```
using Toybox.Position;
using Toybox.System;
var locString = "38.856147, -94.800953";
var myLocation = Position.parse(locString, Position.GEO_DEG);
System.println(myLocation.toRadians()); // [0.678168, -1.654589]
```

Returns:

-   [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    A Location object representing the position described by the input String


Since:

API Level 1.0.0
