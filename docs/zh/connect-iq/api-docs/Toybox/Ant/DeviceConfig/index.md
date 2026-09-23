---
title: "Class: Toybox.Ant.DeviceConfig"
---
# Class: Toybox.Ant.DeviceConfig

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


[show all](#)

## Overview

A class to define the ANT wireless channel device configuration.

## See Also:

-   [ANT Downloads & Resources - ANT Message Protocol](https://www.thisisant.com/developer/resources/downloads/)

-   [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/)


Example:

```
// Set the configuration
deviceCfg = new Ant.DeviceConfig({
    :deviceNumber => 0,                 // Wild card our search
    :deviceType => 31,                  // 1 byte type identifier
    :transmissionType => 0,             // Manufacturer-specific transport type
    :messagePeriod => 8192,             // The message period
    :radioFrequency => 57,              // Ant+ Frequency
    :searchTimeoutLowPriority => 10,    // Timeout in 25s
    :searchThreshold => 0               // Pair to all transmitting sensors
});
genericChannel.setDeviceConfig(deviceCfg);
```

Since:

API Level 1.0.0

## Constant Summary

### Constant Variables

| Type | Name | Value | Since | Description |
| --- | --- | --- | --- | --- |
| Type | DEFAULT\_DEVICE\_NUMBER | 123 |
API Level 1.0.0

 |

The default values for a device configuration

 |
| Type | DEFAULT\_DEVICE\_TYPE | 1 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_MESSAGE\_PERIOD | 8192 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_NETWORK\_KEY | 0 |

API Level 1.2.0

 |  |
| Type | DEFAULT\_RADIO\_FREQUENCY | 10 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_SEARCH\_TIMEOUT\_HIGH | 0 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_SEARCH\_TIMEOUT\_LOW | 6 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_THRESHOLD | 0 |

API Level 1.0.0

 |  |
| Type | DEFAULT\_TRANSMISSION\_TYPE | 0 |

API Level 1.0.0

 |  |
| Type | NETWORK\_KEY\_LENGTH\_128BIT | 16 |

API Level 1.2.0

 |  |
| Type | NETWORK\_KEY\_LENGTH\_64BIT | 8 |

API Level 1.2.0

 |

Network key lengths

 |

## Typedef Summary [collapse](#)

-   [**NetworkKey128Bit**](#NetworkKey128Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]
-   [**NetworkKey64Bit**](#NetworkKey64Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

## Instance Member Summary [collapse](#)

-   [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The unique device number (ANT-id).

-   [**deviceType**](#deviceType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    A 1-Byte device type identifier.

-   [**messagePeriod**](#messagePeriod-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The Message period that the sensor uses.

-   [**networkKey128Bit**](#networkKey128Bit-var) as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

    A 128 bit network key.

-   [**networkKey64Bit**](#networkKey64Bit-var) as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

    A 64 bit network key.

-   [**radioFrequency**](#radioFrequency-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The radio frequency that the sensor operates on.

-   [**searchThreshold**](#searchThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The proximity threshold bin.

-   [**searchTimeoutHighPriority**](#searchTimeoutHighPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    High Priority search timeout that a receiving channel will wait for in order to start tracking a master \* Measured in 2.5s increments \* Limited to a maximum of 5 seconds (Range of 0 to 2).

-   [**searchTimeoutLowPriority**](#searchTimeoutLowPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The low Priority search timeout that a receiving channel will wait for in order to start tracking a master \* Measured in 2.5s increments \* Limited to a maximum of 30 seconds (Range of 0 to 12).

-   [**transmissionType**](#transmissionType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The manufacturer-specific transport type and extended device number.


## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })

    Constructor.


## Typedef Details

### **NetworkKey128Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API Level 1.0.0

### **NetworkKey64Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API Level 1.0.0

## Instance Attribute Details

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The unique device number (ANT-id)

Since:

API Level 1.0.0

### var deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

A 1-Byte device type identifier

Since:

API Level 1.0.0

### var messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The Message period that the sensor uses

Since:

API Level 1.0.0

### var networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

A 128 bit network key

Since:

API Level 1.2.0

### var networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

A 64 bit network key

Since:

API Level 1.2.0

### var radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The radio frequency that the sensor operates on

Since:

API Level 1.0.0

### var searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The proximity threshold bin

Since:

API Level 1.0.0

### var searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

High Priority search timeout that a receiving channel will wait for in order to start tracking a master

-   Measured in 2.5s increments

-   Limited to a maximum of 5 seconds (Range of 0 to 2)


Since:

API Level 1.0.0

### var searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The low Priority search timeout that a receiving channel will wait for in order to start tracking a master

-   Measured in 2.5s increments

-   Limited to a maximum of 30 seconds (Range of 0 to 12)


Since:

API Level 1.0.0

### var transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The manufacturer-specific transport type and extended device number

Since:

API Level 1.0.0

## Instance Method Details

### **initialize(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })**

Constructor

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    The initialization options

    -   :deviceNumber — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The ANT-id of the device to search for. Not setting enables a wild card search

    -   :deviceType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        1-Byte device type identifier

    -   :transmissionType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The manufacturer-specific transport type and extended device number

    -   :messagePeriod — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The message period that the sensor uses

    -   :radioFrequency — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The radio frequency that the sensor operates on. Range of 2 to 80.

    -   :searchTimeoutLowPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The Low Priority search timeout that a receiving channel will wait for in order to start tracking a master

        -   Low Priority search provides the capability of searching for a master without interrupting other channels on the device

        -   Range of 0 to 12 (2.5s increments)

        -   Default 6 (15s)


    -   :searchTimeoutHighPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The High Priority search timeout that a receiving channel will wait for in order to start tracking a master

        -   Is triggered after the Low Priority search mode times out

        -   Will interrupt other channels

        -   Will take priority over any other open channels on that device

        -   If it overlaps another channel the High Priority search takes priority and that other channel is blocked

        -   Keeping this search type disabled unless you have great difficulty acquiring a master through Low Priority search is recommended

        -   High Priority searches are disabled in data-fields, and will be ignored for that application type

        -   Range of 0 to 2 (2.5s increments)

        -   Default 0 (disabled)


    -   :searchThreshold — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        A proximity threshold bin as a Number

        -   Configures the RSSI threshold a slave channel will search for which is effectively the distance at which a slave is willing to be from a master

        -   Values are 0 (disabled), 1 (closest), 10 (farthest)


    -   :networkKey64Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        64 bit network key

        -   Set this when [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) was chosen in the channel assignment


    -   :networkKey128Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        128 bit network key

        -   Set this when NETWORK\_PRIVATE was chosen in the channel assignment



See Also:

-   [ANT Downloads & Resources - ANT Message Protocol and Usage](https://www.thisisant.com/developer/resources/downloads/)


Since:

API Level 1.2.0
