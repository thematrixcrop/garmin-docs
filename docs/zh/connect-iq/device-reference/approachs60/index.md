---
title: "Approach® S60"
---
# Approach® S60

| 属性 | 值 |
| --- | --- |
| 标识 | approachs60 |
| 屏幕形状 | round |
| 屏幕尺寸 | 240 x 240 |
| 显示颜色 | 64 |
| 触摸 | True |
| 按键 | enter, menu, esc |
| 启动图标尺寸 | 40 x 33 |

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


![1 Field](/connect-iq/resources/device-reference/approachs60/layout0.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 240 | 15 | True | True | True | True |

**2 字段布局**


![2 Fields](/connect-iq/resources/device-reference/approachs60/layout1.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 120 | 7 | True | True | True | False |
| 字段 2 | 0 | 122 | 240 | 118 | 13 | True | True | False | True |

**3 字段布局**


![3 Fields](/connect-iq/resources/device-reference/approachs60/layout2.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 77 | 7 | True | True | True | False |
| 字段 2 | 0 | 79 | 240 | 82 | 5 | True | True | False | False |
| 字段 3 | 0 | 163 | 240 | 77 | 13 | True | True | False | True |

**Part Number 006-B2656-00**

*语言*

ara, ces, dan, deu, dut, eng, fin, fre, gre, heb, hrv, hun, ind, ita, nob, pol, por, rus, slo, slv, spa, swe, zsm

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans | 16 | NOTO\_SANS\_BOLD\_16PX |
| FONT\_TINY | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SMALL | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_MEDIUM | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_LARGE | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans | 16 | NOTO\_SANS\_BOLD\_16PX |
| FONT\_SYSTEM\_TINY | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SYSTEM\_SMALL | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_SYSTEM\_LARGE | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

**Part Number 006-B2907-00**

*语言*

eng, ind, zsm

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans | 16 | NOTO\_SANS\_BOLD\_16PX |
| FONT\_TINY | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SMALL | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_MEDIUM | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_LARGE | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans | 16 | NOTO\_SANS\_BOLD\_16PX |
| FONT\_SYSTEM\_TINY | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SYSTEM\_SMALL | Noto Sans | 22 | NOTO\_SANS\_BOLD\_22PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_SYSTEM\_LARGE | Noto Sans | 25 | NOTO\_SANS\_BOLD\_25PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

*语言*

zhs

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 15 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_15PX |
| FONT\_TINY | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_21PX |
| FONT\_SMALL | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_21PX |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_23PX |
| FONT\_LARGE | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_23PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 15 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_15PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_21PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_21PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_23PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_23PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

*语言*

zht

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 15 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_15PX |
| FONT\_TINY | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_21PX |
| FONT\_SMALL | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_21PX |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_23PX |
| FONT\_LARGE | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_23PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 15 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_15PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_21PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 21 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_21PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_23PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 23 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_23PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

*语言*

jpn

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK JP Bold | 15 | NOTO\_SANS\_CJK\_JP\_BOLD\_15PX |
| FONT\_TINY | Noto Sans CJK JP Bold | 21 | NOTO\_SANS\_CJK\_JP\_BOLD\_21PX |
| FONT\_SMALL | Noto Sans CJK JP Bold | 21 | NOTO\_SANS\_CJK\_JP\_BOLD\_21PX |
| FONT\_MEDIUM | Noto Sans CJK JP Bold | 23 | NOTO\_SANS\_CJK\_JP\_BOLD\_23PX |
| FONT\_LARGE | Noto Sans CJK JP Bold | 23 | NOTO\_SANS\_CJK\_JP\_BOLD\_23PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK JP Bold | 15 | NOTO\_SANS\_CJK\_JP\_BOLD\_15PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK JP Bold | 21 | NOTO\_SANS\_CJK\_JP\_BOLD\_21PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK JP Bold | 21 | NOTO\_SANS\_CJK\_JP\_BOLD\_21PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK JP Bold | 23 | NOTO\_SANS\_CJK\_JP\_BOLD\_23PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK JP Bold | 23 | NOTO\_SANS\_CJK\_JP\_BOLD\_23PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

*语言*

kor

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK KR Bold | 15 | NOTO\_SANS\_CJK\_KR\_BOLD\_15PX |
| FONT\_TINY | Noto Sans CJK KR Bold | 21 | NOTO\_SANS\_CJK\_KR\_BOLD\_21PX |
| FONT\_SMALL | Noto Sans CJK KR Bold | 21 | NOTO\_SANS\_CJK\_KR\_BOLD\_21PX |
| FONT\_MEDIUM | Noto Sans CJK KR Bold | 23 | NOTO\_SANS\_CJK\_KR\_BOLD\_23PX |
| FONT\_LARGE | Noto Sans CJK KR Bold | 23 | NOTO\_SANS\_CJK\_KR\_BOLD\_23PX |
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK KR Bold | 15 | NOTO\_SANS\_CJK\_KR\_BOLD\_15PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK KR Bold | 21 | NOTO\_SANS\_CJK\_KR\_BOLD\_21PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK KR Bold | 21 | NOTO\_SANS\_CJK\_KR\_BOLD\_21PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK KR Bold | 23 | NOTO\_SANS\_CJK\_KR\_BOLD\_23PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK KR Bold | 23 | NOTO\_SANS\_CJK\_KR\_BOLD\_23PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |

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
| FONT\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
| FONT\_SYSTEM\_XTINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_TINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_SMALL | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_MEDIUM | Vera Sans | 21 | bitstreamVeraSans 21 |
| FONT\_SYSTEM\_LARGE | Vera Sans | 27 | bitstreamVeraSans 27 |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 29 | NOTO\_SANS\_BOLD\_29PX |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 48 | NOTO\_SANS\_BOLD\_NMBR\_48PX |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 76 | NOTO\_SANS\_BOLD\_NMBR\_76PX |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 94 | NOTO\_SANS\_BOLD\_NMBR\_94PX |
