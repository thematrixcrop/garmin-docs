---
title: "模块：Toybox.Test"
---
# 模块：Toybox.Test

## 概述

Test 模块为 Monkey C 提供测试框架。

Test 模块提供在源代码中实现自定义单元测试和断言的工具。单元测试接受一个 [Logger](/connect-iq/api-docs/Toybox/Test/Logger/) 对象，并允许使用不同级别的输出。单元测试使用 `:test` 注释，并在未运行测试时被忽略。断言不需要 `:test` 注释，在发布版本或 Connect IQ Content 中将被编译移除。控制台会打印测试结果（RESULTS）部分，其中包含已运行的测试、测试状态和失败率。

## 另见：

- [核心主题 - 单元测试](/connect-iq/core-topics/unit-testing/)


示例：

测试实现

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

示例：

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

起始版本：

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

参数：

- test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    要测试是否为 `true` 的表达式


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

如果 value1 和 value2 不相等，则抛出异常。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

参数：

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要测试是否相等的第一个值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于测试相等性的第二个值


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果 value1 和 value2 不相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

参数：

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertMessage(test as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果测试结果为 `false`，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

参数：

- test — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    用于测试 `true` 的表达式

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqual(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

如果 value1 和 value2 相等，则抛出异常。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

参数：

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))

### **assertNotEqualMessage(value1 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value2 as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

如果 value1 和 value2 相等，随后抛出开发者定义的 [String](/connect-iq/api-docs/Toybox/Lang/String/)。

传入此函数的对象必须实现 [Object.equals()](/connect-iq/api-docs/Toybox/Lang/Object/#equals-instance_function) 方法，该方法会比较类型和值。

参数：

- value1 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- value2 — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较是否相等的值

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于标识断言的消息


示例：

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

起始版本：

API 级别 2.1.0

抛出：

- ([Test.AssertException](/connect-iq/api-docs/Toybox/Test/AssertException/))
