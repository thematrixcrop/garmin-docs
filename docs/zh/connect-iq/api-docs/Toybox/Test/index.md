---
title: "Module: Toybox.Test"
---
# 模块：Toybox.Test

## 概述

The Test module provides a testing framework for Monkey C.

The test module provides the tools to implement your own unit test and asserts in your source code. Unit tests take a [Logger](/connect-iq/api-docs/Toybox/Test/Logger/) object and allow for different levels of output. Unit tests are annotated with `:test` and ignored if testing is not run. Asserts do not require the `:test` annotation and will be compiled out in release versions or you Connect IQ Content. A test RESULTS section is printed to the console with the tests run, test status, and failure rates.

## 另见：

- [Core Topics - Unit Testing](/connect-iq/core-topics/unit-testing/)


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

上述示例的控制台输出

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

API 级别 2.1.0

## 命名空间下的类

类：[AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/), [Logger](/connect-iq/api-docs/Toybox/Test/Logger/)

## 实例方法摘要 [collapse](#)

- [**assert**](#assert-instance_function)(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    如果测试结果为 `false`，则抛出异常。

- [**assertEqual**](#assertEqual-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    如果 value1 和 value2 不相等，则抛出异常。

- [**assertEqualMessage**](#assertEqualMessage-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    如果 value1 和 value2 不相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

- [**assertMessage**](#assertMessage-instance_function)(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    如果测试结果为 `false`，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

- [**assertNotEqual**](#assertNotEqual-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    如果 value1 和 value2 相等，则抛出异常。

- [**assertNotEqualMessage**](#assertNotEqualMessage-instance_function)(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    如果 value1 和 value2 相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。


## 实例方法详情

### **assert(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

如果测试结果为 `false`，则抛出异常。

Parameters:

- test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

如果 value1 和 value2 不相等，则抛出异常。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

Parameters:

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The first value to test for equality

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果 value1 和 value2 不相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

Parameters:

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertMessage(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果测试结果为 `false`，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

Parameters:

- test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    用于测试 `true` 的表达式

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

如果 value1 和 value2 相等，则抛出异常。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

Parameters:

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值


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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果 value1 和 value2 相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

Parameters:

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


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

API 级别 2.1.0

Throws:

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))
