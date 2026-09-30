---
title: "fēnix® Chronos"
---
# fēnix® Chronos

| 属性 | 值 |
| --- | --- |
| 标识 | fenixchronos |
| 屏幕形状 | round |
| 屏幕尺寸 | 218 x 218 |
| 显示颜色 | 64 |
| 触摸 | False |
| 按键 | enter, up, menu, down, esc |
| 启动图标尺寸 | 36 x 36 |

**应用类型**

| 应用类型 | 内存上限 | 说明 |
| --- | --- | --- |
| 后台 | 32768 | 需要权限 |
| 数据字段 | 32768 |  |
| 手表应用 | 131072 |  |
| 表盘 | 98304 |  |
| 微件 | 65536 |  |

**调色板**

&lt;table class="table palette">&lt;caption>&lt;/caption>&lt;colgroup>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;/colgroup>&lt;tbody class="tbody">&lt;tr class="row">&lt;td class="entry">0x000000&lt;/td>&lt;td class="entry">0x000055&lt;/td>&lt;td class="entry">0x0000aa&lt;/td>&lt;td class="entry">0x0000ff&lt;/td>&lt;td class="entry">0x005500&lt;/td>&lt;td class="entry">0x005555&lt;/td>&lt;td class="entry">0x0055aa&lt;/td>&lt;td class="entry">0x0055ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x00aa00&lt;/td>&lt;td class="entry">0x00aa55&lt;/td>&lt;td class="entry">0x00aaaa&lt;/td>&lt;td class="entry">0x00aaff&lt;/td>&lt;td class="entry">0x00ff00&lt;/td>&lt;td class="entry">0x00ff55&lt;/td>&lt;td class="entry">0x00ffaa&lt;/td>&lt;td class="entry">0x00ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x550000&lt;/td>&lt;td class="entry">0x550055&lt;/td>&lt;td class="entry">0x5500aa&lt;/td>&lt;td class="entry">0x5500ff&lt;/td>&lt;td class="entry">0x555500&lt;/td>&lt;td class="entry">0x555555&lt;/td>&lt;td class="entry">0x5555aa&lt;/td>&lt;td class="entry">0x5555ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x55aa00&lt;/td>&lt;td class="entry">0x55aa55&lt;/td>&lt;td class="entry">0x55aaaa&lt;/td>&lt;td class="entry">0x55aaff&lt;/td>&lt;td class="entry">0x55ff00&lt;/td>&lt;td class="entry">0x55ff55&lt;/td>&lt;td class="entry">0x55ffaa&lt;/td>&lt;td class="entry">0x55ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaa0000&lt;/td>&lt;td class="entry">0xaa0055&lt;/td>&lt;td class="entry">0xaa00aa&lt;/td>&lt;td class="entry">0xaa00ff&lt;/td>&lt;td class="entry">0xaa5500&lt;/td>&lt;td class="entry">0xaa5555&lt;/td>&lt;td class="entry">0xaa55aa&lt;/td>&lt;td class="entry">0xaa55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaaaa00&lt;/td>&lt;td class="entry">0xaaaa55&lt;/td>&lt;td class="entry">0xaaaaaa&lt;/td>&lt;td class="entry">0xaaaaff&lt;/td>&lt;td class="entry">0xaaff00&lt;/td>&lt;td class="entry">0xaaff55&lt;/td>&lt;td class="entry">0xaaffaa&lt;/td>&lt;td class="entry">0xaaffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xff0000&lt;/td>&lt;td class="entry">0xff0055&lt;/td>&lt;td class="entry">0xff00aa&lt;/td>&lt;td class="entry">0xff00ff&lt;/td>&lt;td class="entry">0xff5500&lt;/td>&lt;td class="entry">0xff5555&lt;/td>&lt;td class="entry">0xff55aa&lt;/td>&lt;td class="entry">0xff55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xffaa00&lt;/td>&lt;td class="entry">0xffaa55&lt;/td>&lt;td class="entry">0xffaaaa&lt;/td>&lt;td class="entry">0xffaaff&lt;/td>&lt;td class="entry">0xffff00&lt;/td>&lt;td class="entry">0xffff55&lt;/td>&lt;td class="entry">0xffffaa&lt;/td>&lt;td class="entry">0xffffff&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>

**1 字段布局**


![1 Field](/connect-iq/resources/device-reference/fenixchronos/layout0.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 218 | 218 | 15 | True | True | True | True |

**2 字段布局**


![2 Fields](/connect-iq/resources/device-reference/fenixchronos/layout1.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 218 | 108 | 7 | True | True | True | False |
| 字段 2 | 0 | 110 | 218 | 108 | 13 | True | True | False | True |

**3 字段 A 布局**


![3 Fields A](/connect-iq/resources/device-reference/fenixchronos/layout2.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 218 | 70 | 7 | True | True | True | False |
| 字段 2 | 0 | 72 | 218 | 74 | 5 | True | True | False | False |
| 字段 3 | 0 | 148 | 218 | 70 | 13 | True | True | False | True |

**3 字段 B 布局**


![3 Fields B](/connect-iq/resources/device-reference/fenixchronos/layout3.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 218 | 108 | 7 | True | True | True | False |
| 字段 2 | 0 | 110 | 108 | 108 | 9 | True | False | False | True |
| 字段 3 | 110 | 110 | 108 | 108 | 12 | False | True | False | True |

**4 字段 A 布局**


![4 Fields A](/connect-iq/resources/device-reference/fenixchronos/layout4.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 218 | 70 | 7 | True | True | True | False |
| 字段 2 | 0 | 72 | 108 | 74 | 1 | True | False | False | False |
| 字段 3 | 110 | 72 | 108 | 74 | 4 | False | True | False | False |
| 字段 4 | 0 | 148 | 218 | 70 | 13 | True | True | False | True |

**4 字段 B 布局**


![4 Fields B](/connect-iq/resources/device-reference/fenixchronos/layout5.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 108 | 108 | 3 | True | False | True | False |
| 字段 2 | 110 | 0 | 108 | 108 | 6 | False | True | True | False |
| 字段 3 | 0 | 110 | 108 | 108 | 9 | True | False | False | True |
| 字段 4 | 110 | 110 | 108 | 108 | 12 | False | True | False | True |

**部件号 006-B2432-00**

*语言*

ces, dan, deu, dut, eng, fin, fre, gre, hrv, hun, ita, nob, pol, por, rus, slo, slv, spa, swe

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDREGULAR\_23PX |
| FONT\_TINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDBOLD\_23PX |
| FONT\_SMALL | Roboto Condensed | 25 | FENIX5\_ROBOTOCONDENSEDBOLD\_25PX |
| FONT\_MEDIUM | Roboto Condensed | 31 | FENIX5\_ROBOTOCONDENSEDBOLD\_31PX |
| FONT\_LARGE | Roboto Condensed | 34 | FENIX5\_ROBOTOCONDENSEDBOLD\_34PX |
| FONT\_NUMBER\_MILD | Chronos | 24 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_24PX |
| FONT\_NUMBER\_MEDIUM | Chronos | 32 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_32PX |
| FONT\_NUMBER\_HOT | Chronos | 46 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_46PX |
| FONT\_NUMBER\_THAI\_HOT | Chronos | 53 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_53PX |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDREGULAR\_23PX |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDBOLD\_23PX |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 25 | FENIX5\_ROBOTOCONDENSEDBOLD\_25PX |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 31 | FENIX5\_ROBOTOCONDENSEDBOLD\_31PX |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 34 | FENIX5\_ROBOTOCONDENSEDBOLD\_34PX |

**部件号 006-B2675-00**

*语言*

eng, ind, zsm

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDREGULAR\_23PX |
| FONT\_TINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDBOLD\_23PX |
| FONT\_SMALL | Roboto Condensed | 25 | FENIX5\_ROBOTOCONDENSEDBOLD\_25PX |
| FONT\_MEDIUM | Roboto Condensed | 31 | FENIX5\_ROBOTOCONDENSEDBOLD\_31PX |
| FONT\_LARGE | Roboto Condensed | 34 | FENIX5\_ROBOTOCONDENSEDBOLD\_34PX |
| FONT\_NUMBER\_MILD | Chronos | 24 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_24PX |
| FONT\_NUMBER\_MEDIUM | Chronos | 32 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_32PX |
| FONT\_NUMBER\_HOT | Chronos | 46 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_46PX |
| FONT\_NUMBER\_THAI\_HOT | Chronos | 53 | FENIX5\_CHRONOSSEMIBOLDCONDENSED\_53PX |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDREGULAR\_23PX |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 23 | FENIX5\_ROBOTOCONDENSEDBOLD\_23PX |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 25 | FENIX5\_ROBOTOCONDENSEDBOLD\_25PX |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 31 | FENIX5\_ROBOTOCONDENSEDBOLD\_31PX |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 34 | FENIX5\_ROBOTOCONDENSEDBOLD\_34PX |

*语言*

zhs, zht

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK TC Regular | 22 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_22 |
| FONT\_TINY | Noto Sans CJK TC Regular | 22 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_22 |
| FONT\_SMALL | Noto Sans CJK TC Regular | 27 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_27 |
| FONT\_MEDIUM | Noto Sans CJK TC Medium | 31 | NOTO\_SANS\_CJK\_TC\_MEDIUM\_CHN\_31 |
| FONT\_LARGE | Noto Sans CJK TC Bold | 40 | NOTO\_SANS\_CJK\_TC\_BOLD\_CHN\_40 |
| FONT\_NUMBER\_MILD | Steelfish Rg | 32 | STEELFISH\_22 |
| FONT\_NUMBER\_MEDIUM | Steelfish Rg | 60 | STEELFISH\_40 |
| FONT\_NUMBER\_HOT | Steelfish Rg | 83 | STEELFISH\_54 |
| FONT\_NUMBER\_THAI\_HOT | Steelfish Rg | 116 | STEELFISH\_75 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK TC Regular | 22 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_22 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK TC Regular | 22 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_22 |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK TC Regular | 27 | NOTO\_SANS\_CJK\_TC\_REGULAR\_CHN\_27 |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK TC Medium | 31 | NOTO\_SANS\_CJK\_TC\_MEDIUM\_CHN\_31 |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK TC Bold | 40 | NOTO\_SANS\_CJK\_TC\_BOLD\_CHN\_40 |
| FONT\_SYSTEM\_NUMBER\_MILD | Chronos | 27 | CHRONOS\_27SBC |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Chronos | 32 | CHRONOS\_32SBC |
| FONT\_SYSTEM\_NUMBER\_HOT | Chronos | 46 | CHRONOS\_46SBC |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Chronos | 53 | CHRONOS\_53SBC |

*语言*

jpn

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK JP Regular | 22 | NOTO\_SANS\_CJK\_JP\_REGULAR\_22 |
| FONT\_TINY | Noto Sans CJK JP Regular | 22 | NOTO\_SANS\_CJK\_JP\_REGULAR\_22 |
| FONT\_SMALL | Noto Sans CJK JP Regular | 27 | NOTO\_SANS\_CJK\_JP\_REGULAR\_27 |
| FONT\_MEDIUM | Noto Sans CJK JP Medium | 31 | NOTO\_SANS\_CJK\_JP\_MEDIUM\_31 |
| FONT\_LARGE | Noto Sans CJK JP Bold | 40 | NOTO\_SANS\_CJK\_JP\_BOLD\_40 |
| FONT\_NUMBER\_MILD | Steelfish Rg | 32 | STEELFISH\_22 |
| FONT\_NUMBER\_MEDIUM | Steelfish Rg | 60 | STEELFISH\_40 |
| FONT\_NUMBER\_HOT | Steelfish Rg | 83 | STEELFISH\_54 |
| FONT\_NUMBER\_THAI\_HOT | Steelfish Rg | 116 | STEELFISH\_75 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK JP Regular | 22 | NOTO\_SANS\_CJK\_JP\_REGULAR\_22 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK JP Regular | 22 | NOTO\_SANS\_CJK\_JP\_REGULAR\_22 |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK JP Regular | 27 | NOTO\_SANS\_CJK\_JP\_REGULAR\_27 |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK JP Medium | 31 | NOTO\_SANS\_CJK\_JP\_MEDIUM\_31 |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK JP Bold | 40 | NOTO\_SANS\_CJK\_JP\_BOLD\_40 |
| FONT\_SYSTEM\_NUMBER\_MILD | Chronos | 27 | CHRONOS\_27SBC |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Chronos | 32 | CHRONOS\_32SBC |
| FONT\_SYSTEM\_NUMBER\_HOT | Chronos | 46 | CHRONOS\_46SBC |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Chronos | 53 | CHRONOS\_53SBC |

*语言*

kor

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK KR Regular | 22 | NOTO\_SANS\_CJK\_KR\_REGULAR\_22 |
| FONT\_TINY | Noto Sans CJK KR Regular | 22 | NOTO\_SANS\_CJK\_KR\_REGULAR\_22 |
| FONT\_SMALL | Noto Sans CJK KR Medium | 27 | NOTO\_SANS\_CJK\_KR\_MEDIUM\_27 |
| FONT\_MEDIUM | Noto Sans CJK KR Medium | 31 | NOTO\_SANS\_CJK\_KR\_MEDIUM\_31 |
| FONT\_LARGE | Noto Sans CJK KR Bold | 40 | NOTO\_SANS\_CJK\_KR\_BOLD\_40 |
| FONT\_NUMBER\_MILD | Steelfish Rg | 32 | STEELFISH\_22 |
| FONT\_NUMBER\_MEDIUM | Steelfish Rg | 60 | STEELFISH\_40 |
| FONT\_NUMBER\_HOT | Steelfish Rg | 83 | STEELFISH\_54 |
| FONT\_NUMBER\_THAI\_HOT | Steelfish Rg | 116 | STEELFISH\_75 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK KR Regular | 22 | NOTO\_SANS\_CJK\_KR\_REGULAR\_22 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK KR Regular | 22 | NOTO\_SANS\_CJK\_KR\_REGULAR\_22 |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK KR Medium | 27 | NOTO\_SANS\_CJK\_KR\_MEDIUM\_27 |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK KR Medium | 31 | NOTO\_SANS\_CJK\_KR\_MEDIUM\_31 |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK KR Bold | 40 | NOTO\_SANS\_CJK\_KR\_BOLD\_40 |
| FONT\_SYSTEM\_NUMBER\_MILD | Chronos | 27 | CHRONOS\_27SBC |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Chronos | 32 | CHRONOS\_32SBC |
| FONT\_SYSTEM\_NUMBER\_HOT | Chronos | 46 | CHRONOS\_46SBC |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Chronos | 53 | CHRONOS\_53SBC |

*语言*

tha

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_TINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SMALL | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_MEDIUM | Vera Sans | 21 | bitstreamVeraSans 21 |
| FONT\_LARGE | Vera Sans | 27 | bitstreamVeraSans 27 |
| FONT\_NUMBER\_MILD | Steelfish Rg | 32 | STEELFISH\_22 |
| FONT\_NUMBER\_MEDIUM | Steelfish Rg | 60 | STEELFISH\_40 |
| FONT\_NUMBER\_HOT | Steelfish Rg | 83 | STEELFISH\_54 |
| FONT\_NUMBER\_THAI\_HOT | Steelfish Rg | 116 | STEELFISH\_75 |
| FONT\_SYSTEM\_XTINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_TINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_SMALL | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_MEDIUM | Vera Sans | 21 | bitstreamVeraSans 21 |
| FONT\_SYSTEM\_LARGE | Vera Sans | 27 | bitstreamVeraSans 27 |
| FONT\_SYSTEM\_NUMBER\_MILD | Chronos | 27 | CHRONOS\_27SBC |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Chronos | 32 | CHRONOS\_32SBC |
| FONT\_SYSTEM\_NUMBER\_HOT | Chronos | 46 | CHRONOS\_46SBC |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Chronos | 53 | CHRONOS\_53SBC |
