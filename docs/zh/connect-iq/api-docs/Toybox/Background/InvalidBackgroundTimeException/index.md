---
title: "Class: Toybox.Background.InvalidBackgroundTimeException"
---
# Class: Toybox.Background.InvalidBackgroundTimeException

Inherits:

Toybox.Lang.Exception

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)

-   [Toybox.Background.InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/)


[show all](#)

## Overview

Indicates a invalid time was provided to [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function), which may be invalid because it either:

-   Occurs less than five minutes after the last background event occurred

-   Has a duration of less than five minutes


Since:

API Level 2.3.0

## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))

    Constructor.


## Instance Method Details

### **initialize(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))**

Constructor

Parameters:

-   msg — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The exception message


Since:

API Level 2.3.0
