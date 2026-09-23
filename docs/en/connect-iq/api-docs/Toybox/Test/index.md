---
title: "Module: Toybox.Test"
---
# Module: Toybox.Test

## Overview

The Test module provides a testing framework for Monkey C.

The test module provides the tools to implement your own unit test and asserts in your source code. Unit tests take a [Logger](/connect-iq/api-docs/Toybox/Test/Logger/) object and allow for different levels of output. Unit tests are annotated with `:test` and ignored if testing is not run. Asserts do not require the `:test` annotation and will be compiled out in release versions or you Connect IQ Content. A test RESULTS section is printed to the console with the tests run, test status, and failure rates.

## See Also:

-   [Core Topics - Unit Testing](/connect-iq/core-topics/unit-testing/)


Example:

Testing Implementation

```
using Toybox.Test;
var x = 1;
var y = 2;

// Asserts can be called outside of test calls
function assertWithoutLogger(x, y) {
   Test.assertEqual(x, y);
}

(:test)
function aDebugTest(logger) {
   logger.debug("This is a debug message.");
   return true;
}

(:test)
function aTestOfAssert(logger) {
   logger.debug("This tests the assert() function.");
   Test.assert(true);
   logger.debug("Test.assert(true) didn't throw an Exception which is a very good thing.");
   Test.assert(false);
   logger.error("We should not be executing this statement.");
   return true;
}
```

Example:

Console Output for above example

```
// Output:
------------------------------------------------------------------------------
Executing test aDebugTest...
DEBUG (9:21): This is a debug message.
PASS
------------------------------------------------------------------------------
Executing test aTestOfAssert...
DEBUG (9:21): This tests the assert() function.
DEBUG (9:21): Test.assert(true) didn't throw an Exception which is a very good thing.
Unhandled Exception
ASSERTION FAILED
aTestOfAssert in C:\workspace\RunNoEvil\source\RunNoEvil.mc:21
runTest in UnitTests:33
ERROR

==============================================================================
RESULTS
Test:                                Status:
aDebugTest                           PASS
aTestOfAssert                        ERROR
Ran 2 tests

FAILED (passed=1, failed=0, errors=1)
```

Since:

API Level 2.1.0

## Classes Under Namespace

**Classes:** [AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/), [Logger](/connect-iq/api-docs/Toybox/Test/Logger/)

## Instance Method Summary [collapse](#)

-   [**assert**](#assert-instance_function)(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    Throws an exception if the test is `false`.

-   [**assertEqual**](#assertEqual-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    Throws an exception if value1 and value2 are not equal.

-   [**assertEqualMessage**](#assertEqualMessage-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    Throws an exception if value1 and value2 are not equal followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.

-   [**assertMessage**](#assertMessage-instance_function)(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    Throws an exception if the test is `false` followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.

-   [**assertNotEqual**](#assertNotEqual-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    Throws an exception if value1 and value2 are equal.

-   [**assertNotEqualMessage**](#assertNotEqualMessage-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    Throws an exception if value1 and value2 are equal followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.


## Instance Method Details

### **assert(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

Throws an exception if the test is `false`.

Parameters:

-   test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    The expression to test for `true`


Example:

```
using Toybox.Test;
(:test)
function anAssertTest(logger) {
   var x = false;
   Test.assert(x);
   return true;
}
// Output:
ASSERTION FAILED
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

Throws an exception if value1 and value2 are not equal.

The objects passed to this function must implement the [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) method which compares both type and value.

Parameters:

-   value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The first value to test for equality

-   value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The second value to test for equality


Example:

```
using Toybox.Test;
(:test)
function anAssertEqualTest(logger) {
   var x = 1;
   var y = 2;
   Test.assertEqual(x, y);
   return true;
}
// Output:
ASSERTION FAILED
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

Throws an exception if value1 and value2 are not equal followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.

The objects passed to this function must implement the [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) method which compares both type and value.

Parameters:

-   value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality

-   value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality

-   message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The identifying message for the assert


Example:

```
using Toybox.Test;
(:test)
function anAssertEqualMessageTest(logger) {
   var x = 1;
   var y = 2;
   Test.assertEqual(x, y, "x and y are not equal!");
   return true;
}
// Output:
ASSERTION FAILED: x and y are not equal!
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertMessage(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

Throws an exception if the test is `false` followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.

Parameters:

-   test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Expression to test for `true`

-   message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The identifying message for the assert


Example:

```
using Toybox.Test;
(:test)
function anAssertMessageTest(logger) {
   var x = false;
   Test.assertMessage(x, "The assert is False for x.");
   return true;
}
// Output:
ASSERTION FAILED: The assert is False for x.
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

Throws an exception if value1 and value2 are equal.

The objects passed to this function must implement the [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) method which compares both type and value.

Parameters:

-   value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality

-   value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality


Example:

```
using Toybox.Test;
(:test)
function anAssertNotEqualTest(logger) {
   var x = 1;
   var y = 1;
   Test.assertNotEqual(x, y);
   return true;
}
// Output:
ASSERTION FAILED
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

Throws an exception if value1 and value2 are equal followed by a [String](/connect-iq/api-docs/Toybox/Lang/String/) defined by the developer.

The objects passed to this function must implement the [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) method which compares both type and value.

Parameters:

-   value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality

-   value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to test for equality

-   message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The identifying message for the assert


Example:

```
using Toybox.Test;
(:test)
function anAssertNotEqualMessageTest(logger) {
   var x = 1;
   var y = 2;
   Test.assertNotEqual(x, y, "x and y are equal!");
   return true;
}
// Output:
ASSERTION FAILED: x and y are equal!
Unhandled Exception
```

Since:

API Level 2.1.0

Throws:

-   ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))
