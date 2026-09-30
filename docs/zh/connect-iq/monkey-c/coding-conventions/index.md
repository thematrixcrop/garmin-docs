---
title: "Coding Conventions"
---
# 编码约定

以下是子C代码的指南:

## Naming

- 模块和课程以大字母上写的第一字母.

- 函数是 lower驼的,第一个字母总是小字母.

- 私人类成员变量是驼,第一字母是下标 (\_) 然后是第一字母小字母.

- 公共类成员变量是 lower驼子,第一字母是小字母.

- 模块变量应以下面的第一字母

- 号必须有一个共同的前,例如*COLOR\_RED*, *COLOR\_BLUE*.

- 在POMO (平坦的老子C对象) 中,所有公众成员都可以.


## Source

- 每个 source子C源文件上放一个类.

- 子C代码应使用每分数水平均排列4个空间的空间. editor子C编辑器将自动将空间转换为标签,并删除后落的白空间.

- 在定义模块,类别,函数和组时,将开放式放在与定义相同的线上,并将关闭式与定义的第一个字符一致.


## Definitions

- 尽可能避免纯粹的全球变量.

- 由于模块不是纯粹的词汇和运行时间内存成本,因此将类定义纳入全球模块是可接受的.

- 避免在类定义中具有公共静态成员; 相反,将这些定义转移到母模块中.

- 在你的类初始函数的第一个行,总是叫超级类初始.


## Sample

这里有一个样本:

```cpp
class SampleName extends Toybox.Application.AppBase
{
    public var publicVar;
    private var _privateVar;

    function initialize() {
        AppBase.initialize();
    }
    // onStart() is called on application start up
    function onStart(state) {
    }

    // onStop() is called when your application is exiting
    function onStop(state) {
    }

    // Return the initial view of your application here
    function getInitialView(){
        return [new SampleNameView(), new SampleNameDelegate()];
    }
 }
```
