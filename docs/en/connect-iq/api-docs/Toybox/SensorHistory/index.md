---
title: "Module: Toybox.SensorHistory"
---
# Module: Toybox.SensorHistory

## Overview

The SensorHistory module contains the interface for SensorHistory.

SensorHistory provides access to historical information recorded by the on-board sensors of device hardware. The amount of information that is available is device dependent. This means that one device may provide more information than another. This class provides an ORDER\_\* enum which is used to select the data order of the sample iterator.

Since:

API Level 2.1.0

:::details Supported Devices

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

Requires Permission:

-   SensorHistory


## Classes Under Namespace

**Classes:** [SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/), [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

## Constant Summary

### Order

Since:

API Level 2.1.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| ORDER\_NEWEST\_FIRST | 0 |
API Level 2.1.0

 |

Request iterator with newest data first

 |
| ORDER\_OLDEST\_FIRST | 1 |

API Level 2.1.0

 |

Request iterator with oldest data first

 |

## Instance Method Summary [collapse](#)

-   [**getBodyBatteryHistory**](#getBodyBatteryHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the body battery history for the given period.

-   [**getElevationHistory**](#getElevationHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the elevation history for the given period, up to the last power cycle.

-   [**getHeartRateHistory**](#getHeartRateHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) or **Null** } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the heart rate history for the given period, up to the last power cycle.

-   [**getOxygenSaturationHistory**](#getOxygenSaturationHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the oxygen saturation history for the given period This function always returns the most recent sensor history samples.

-   [**getPressureHistory**](#getPressureHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the pressure history for the given period, up to the last power cycle.

-   [**getStressHistory**](#getStressHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get stress history data for the given period This function always returns the most recent sensor history samples.

-   [**getTemperatureHistory**](#getTemperatureHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    Get the temperature history for the given period, up to the last power cycle.


## Instance Method Details

### **getBodyBatteryHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the body battery history for the given period.

This function always returns the most recent sensor history samples. The time between each \`SensorSample\` in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples:

        -   If `null`, the samples will be [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Shows the use of BodyBatteryIterator

```
using Toybox.SensorHistory;
using Toybox.System;

  // Create a method to get the SensorHistoryIterator object
  function getIterator() {
      // Check device for SensorHistory compatibility
      if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getBodyBatteryHistory)) {
          // Set up the method with parameters
          return Toybox.SensorHistory.getBodyBatteryHistory({});
      }
      return null;
  }
  // get the body battery iterator object
  var bbIterator = getIterator();
  var sample = bbIterator.next();                         // get the body battery data

  while (sample != null) {
      System.println("Sample: " + sample.data);           // print the current sample
      sample = bbIterator.next();
  }
```

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the body battery history for the given period. Samples returned by this iterator are ranges from 0-100. A 0 indicates that the body is drained and a 100 indicates the body is rested and charged.


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 3.3.0

### **getElevationHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the elevation history for the given period, up to the last power cycle.

This function always returns the most recent pressure samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples:

        -   If `null`, the samples will be [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Gets a SensoryHistoryIterator and prints out the elevation value from the most recent SensorSample

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getElevationHistory)) {
        return Toybox.SensorHistory.getElevationHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details Supported Devices

-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
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
-   Edge® 130 Plus
-   Edge® 130
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the elevation history for the given period. Samples returned by this iterator are in meters (m).


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 2.1.0

### **getHeartRateHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) or **Null** } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the heart rate history for the given period, up to the last power cycle.

This function always returns the most recent heart rate samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples:

        -   If `null`, the samples will be listed [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Gets a SensoryHistoryIterator and prints out the heart rate value from the most recent SensorSample

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getHeartRateHistory)) {
        return Toybox.SensorHistory.getHeartRateHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the heart rate history for the given period. Samples returned by this iterator are in beats per minute (bpm).


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 2.1.0

### **getOxygenSaturationHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the oxygen saturation history for the given period

This function always returns the most recent sensor history samples. The time between each \`SensorSample\` in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples:

        -   If `null`, the samples will be [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Gets a SensoryHistoryIterator and prints out the Muscle Oxygen Saturation value from the most recent SensorSample

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getOxygenSaturationHistory)) {
        // Set up the method with parameters
        return Toybox.SensorHistory.getOxygenSaturationHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details Supported Devices

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the oxygen saturation history for the given period. Samples returned by this iterator are in percent (%).


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 3.2.0

### **getPressureHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the pressure history for the given period, up to the last power cycle.

This function always returns the most recent pressure samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples.

        -   If period is `null`, the entire available history is retrieved

        -   If period is a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If period is a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples.

        -   If order is `null`, the samples will be [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Gets a SensoryHistoryIterator and prints out the pressure value from the most recent SensorSample

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getPressureHistory)) {
        return Toybox.SensorHistory.getPressureHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details Supported Devices

-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the pressure history for the given period. Samples returned by this iterator are in Pascals (Pa).


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 2.1.0

### **getStressHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get stress history data for the given period

This function always returns the most recent sensor history samples. The time between each \`SensorSample\` in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples:

        -   If `null`, the samples will be [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Shows the use of StressHistoryIterator

```
using Toybox.ActivityMonitor;
using Toybox.System;

  // Create a method to get the SensorHistoryIterator object
  function getIterator() {
      // Check device for SensorHistory compatibility
      if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getStressHistory)) {
          // Set up the method with parameters
          return Toybox.SensorHistory.getStressHistory({});
      }
      return null;
  }

// get stress history iterator object
var stressIterator = getIterator();
var sample = stressIterator.next();                        // get the stress data

while (sample != null) {
    System.println("Sample: " + sample.data);        // print the current sample
    sample = stressIterator.next();
}
```

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
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

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the stress history for the given period. Samples returned by this iterator are ranges from 0-100. Higher value indicate higher stress and lower value indicate lower stress. and a 100 indicates the body is rested and charged.


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 3.3.0

### **getTemperatureHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

Get the temperature history for the given period, up to the last power cycle.

This function always returns the most recent temperature samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Can be `null`.

    -   :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples:

        -   If `null`, the entire available history is retrieved

        -   If a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/), then the history for the given Duration is retrieved

        -   If a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last specified Number of entries are retrieved


    -   :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The order in which to retrieve the samples.

        -   If `null`, the samples will be listed [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

        -   Use the ORDER\_\* enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Gets a SensoryHistoryIterator and prints out the temperature value from the most recent SensorSample

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getTemperatureHistory)) {
        // Set up the method with parameters
        return Toybox.SensorHistory.getTemperatureHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details Supported Devices

-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

-   [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    An iterator for the temperature history for the given period. Samples returned by this iterator are in degrees Celsius (C).


See Also:

-   [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

-   [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 2.1.0
