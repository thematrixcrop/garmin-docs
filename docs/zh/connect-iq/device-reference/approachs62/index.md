---
title: "Approach® S62"
---
# Approach® S62

| 属性 | 值 |
| --- | --- |
| 标识 | approachs62 |
| 屏幕形状 | round |
| 屏幕尺寸 | 260 x 260 |
| 显示颜色 | 64 |
| 触摸 | True |
| 按键 | enter, menu, esc |
| 启动图标尺寸 | 35 x 35 |

**应用类型**

| 应用类型 | 内存上限 | 说明 |
| --- | --- | --- |
| 后台 | 65536 | 需要权限 |
| 数据字段 | 131072 |  |
| 手表应用 | 1048576 |  |
| 表盘 | 135168 |  |
| 微件 | 65536 |  |

**调色板**

&lt;table class="table palette">&lt;caption>&lt;/caption>&lt;colgroup>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;/colgroup>&lt;tbody class="tbody">&lt;tr class="row">&lt;td class="entry">0x000000&lt;/td>&lt;td class="entry">0x000055&lt;/td>&lt;td class="entry">0x0000aa&lt;/td>&lt;td class="entry">0x0000ff&lt;/td>&lt;td class="entry">0x005500&lt;/td>&lt;td class="entry">0x005555&lt;/td>&lt;td class="entry">0x0055aa&lt;/td>&lt;td class="entry">0x0055ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x00aa00&lt;/td>&lt;td class="entry">0x00aa55&lt;/td>&lt;td class="entry">0x00aaaa&lt;/td>&lt;td class="entry">0x00aaff&lt;/td>&lt;td class="entry">0x00ff00&lt;/td>&lt;td class="entry">0x00ff55&lt;/td>&lt;td class="entry">0x00ffaa&lt;/td>&lt;td class="entry">0x00ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x550000&lt;/td>&lt;td class="entry">0x550055&lt;/td>&lt;td class="entry">0x5500aa&lt;/td>&lt;td class="entry">0x5500ff&lt;/td>&lt;td class="entry">0x555500&lt;/td>&lt;td class="entry">0x555555&lt;/td>&lt;td class="entry">0x5555aa&lt;/td>&lt;td class="entry">0x5555ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x55aa00&lt;/td>&lt;td class="entry">0x55aa55&lt;/td>&lt;td class="entry">0x55aaaa&lt;/td>&lt;td class="entry">0x55aaff&lt;/td>&lt;td class="entry">0x55ff00&lt;/td>&lt;td class="entry">0x55ff55&lt;/td>&lt;td class="entry">0x55ffaa&lt;/td>&lt;td class="entry">0x55ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaa0000&lt;/td>&lt;td class="entry">0xaa0055&lt;/td>&lt;td class="entry">0xaa00aa&lt;/td>&lt;td class="entry">0xaa00ff&lt;/td>&lt;td class="entry">0xaa5500&lt;/td>&lt;td class="entry">0xaa5555&lt;/td>&lt;td class="entry">0xaa55aa&lt;/td>&lt;td class="entry">0xaa55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaaaa00&lt;/td>&lt;td class="entry">0xaaaa55&lt;/td>&lt;td class="entry">0xaaaaaa&lt;/td>&lt;td class="entry">0xaaaaff&lt;/td>&lt;td class="entry">0xaaff00&lt;/td>&lt;td class="entry">0xaaff55&lt;/td>&lt;td class="entry">0xaaffaa&lt;/td>&lt;td class="entry">0xaaffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xff0000&lt;/td>&lt;td class="entry">0xff0055&lt;/td>&lt;td class="entry">0xff00aa&lt;/td>&lt;td class="entry">0xff00ff&lt;/td>&lt;td class="entry">0xff5500&lt;/td>&lt;td class="entry">0xff5555&lt;/td>&lt;td class="entry">0xff55aa&lt;/td>&lt;td class="entry">0xff55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xffaa00&lt;/td>&lt;td class="entry">0xffaa55&lt;/td>&lt;td class="entry">0xffaaaa&lt;/td>&lt;td class="entry">0xffaaff&lt;/td>&lt;td class="entry">0xffff00&lt;/td>&lt;td class="entry">0xffff55&lt;/td>&lt;td class="entry">0xffffaa&lt;/td>&lt;td class="entry">0xffffff&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>

**1 字段布局**


![1 Field](/connect-iq/resources/device-reference/approachs62/layout0.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 260 | 260 | 15 | True | True | True | True |

**2 字段布局**


![2 Fields](/connect-iq/resources/device-reference/approachs62/layout1.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 260 | 129 | 7 | True | True | True | False |
| 字段 2 | 0 | 131 | 260 | 129 | 13 | True | True | False | True |

**3 字段 A 布局**


![3 Fields A](/connect-iq/resources/device-reference/approachs62/layout2.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 260 | 85 | 7 | True | True | True | False |
| 字段 2 | 0 | 87 | 260 | 86 | 5 | True | True | False | False |
| 字段 3 | 0 | 175 | 260 | 85 | 13 | True | True | False | True |

**3 字段 B 布局**


![3 Fields B](/connect-iq/resources/device-reference/approachs62/layout3.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 50 | 260 | 160 | 5 | True | True | False | False |

**4 字段布局**


![4 Fields](/connect-iq/resources/device-reference/approachs62/layout4.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 50 | 260 | 79 | 5 | True | True | False | False |
| 字段 2 | 0 | 131 | 260 | 79 | 5 | True | True | False | False |

**Part Number 006-B3393-00**

*语言*

ara, bul, ces, dan, deu, dut, eng, est, fin, fre, gre, heb, hrv, hun, ita, lav, lit, nob, pol, por, ron, rus, slo, slv, spa, swe, tur, ukr

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 19 | VIVOACTIVE4\_ROBOTO\_XTINY\_BOLD |
| FONT\_TINY | Roboto Condensed | 27 | VIVOACTIVE4\_ROBOTO\_TINY\_PLUS\_BOLD |
| FONT\_SMALL | Roboto Condensed | 30 | VIVOACTIVE4\_ROBOTO\_SMALL\_BOLD |
| FONT\_MEDIUM | Roboto Condensed | 35 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_BOLD |
| FONT\_LARGE | Roboto Condensed | 40 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_PLUS\_BOLD |
| FONT\_NUMBER\_MILD | Roboto Condensed | 48 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_1 |
| FONT\_NUMBER\_MEDIUM | Roboto Condensed | 55 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_2 |
| FONT\_NUMBER\_HOT | Roboto Black | 83 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_5 |
| FONT\_NUMBER\_THAI\_HOT | Roboto Black | 97 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_6 |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 19 | VIVOACTIVE4\_ROBOTO\_XTINY\_BOLD |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 27 | VIVOACTIVE4\_ROBOTO\_TINY\_PLUS\_BOLD |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 30 | VIVOACTIVE4\_ROBOTO\_SMALL\_BOLD |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 35 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_BOLD |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 40 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_PLUS\_BOLD |
| FONT\_SYSTEM\_NUMBER\_MILD | Roboto Condensed | 48 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_1 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Roboto Condensed | 55 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_2 |
| FONT\_SYSTEM\_NUMBER\_HOT | Roboto Black | 83 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_5 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Roboto Black | 97 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_6 |

**Part Number 006-B3700-00**

*语言*

eng, ind, zsm

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 19 | VIVOACTIVE4\_ROBOTO\_XTINY\_BOLD |
| FONT\_TINY | Roboto Condensed | 27 | VIVOACTIVE4\_ROBOTO\_TINY\_PLUS\_BOLD |
| FONT\_SMALL | Roboto Condensed | 30 | VIVOACTIVE4\_ROBOTO\_SMALL\_BOLD |
| FONT\_MEDIUM | Roboto Condensed | 35 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_BOLD |
| FONT\_LARGE | Roboto Condensed | 40 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_PLUS\_BOLD |
| FONT\_NUMBER\_MILD | Roboto Condensed | 48 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_1 |
| FONT\_NUMBER\_MEDIUM | Roboto Condensed | 55 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_2 |
| FONT\_NUMBER\_HOT | Roboto Black | 83 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_5 |
| FONT\_NUMBER\_THAI\_HOT | Roboto Black | 97 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_6 |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 19 | VIVOACTIVE4\_ROBOTO\_XTINY\_BOLD |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 27 | VIVOACTIVE4\_ROBOTO\_TINY\_PLUS\_BOLD |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 30 | VIVOACTIVE4\_ROBOTO\_SMALL\_BOLD |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 35 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_BOLD |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 40 | VIVOACTIVE4\_ROBOTO\_MEDIUM\_PLUS\_BOLD |
| FONT\_SYSTEM\_NUMBER\_MILD | Roboto Condensed | 48 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_1 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Roboto Condensed | 55 | VIVOACTIVE4\_REGULAR\_NUMBER\_FONT\_2 |
| FONT\_SYSTEM\_NUMBER\_HOT | Roboto Black | 83 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_5 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Roboto Black | 97 | VIVOACTIVE4\_BOLD\_NUMBER\_FONT\_6 |

*语言*

zhs

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 17 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_17PX |
| FONT\_TINY | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SMALL | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_LARGE | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 17 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_17PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |

*语言*

zht

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 17 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_17PX |
| FONT\_TINY | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SMALL | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_LARGE | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 17 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_17PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 24 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_24PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 27 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_27PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |

*语言*

jpn

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK JP Bold | 17 | NOTO\_SANS\_CJK\_JP\_BOLD\_17PX |
| FONT\_TINY | Noto Sans CJK JP Bold | 24 | NOTO\_SANS\_CJK\_JP\_BOLD\_24PX |
| FONT\_SMALL | Noto Sans CJK JP Bold | 24 | NOTO\_SANS\_CJK\_JP\_BOLD\_24PX |
| FONT\_MEDIUM | Noto Sans CJK JP Bold | 27 | NOTO\_SANS\_CJK\_JP\_BOLD\_27PX |
| FONT\_LARGE | Noto Sans CJK JP Bold | 27 | NOTO\_SANS\_CJK\_JP\_BOLD\_27PX |
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK JP Bold | 17 | NOTO\_SANS\_CJK\_JP\_BOLD\_17PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK JP Bold | 24 | NOTO\_SANS\_CJK\_JP\_BOLD\_24PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK JP Bold | 24 | NOTO\_SANS\_CJK\_JP\_BOLD\_24PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK JP Bold | 27 | NOTO\_SANS\_CJK\_JP\_BOLD\_27PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK JP Bold | 27 | NOTO\_SANS\_CJK\_JP\_BOLD\_27PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |

*语言*

kor

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK KR Bold | 17 | NOTO\_SANS\_CJK\_KR\_BOLD\_17PX |
| FONT\_TINY | Noto Sans CJK KR Bold | 24 | NOTO\_SANS\_CJK\_KR\_BOLD\_24PX |
| FONT\_SMALL | Noto Sans CJK KR Bold | 24 | NOTO\_SANS\_CJK\_KR\_BOLD\_24PX |
| FONT\_MEDIUM | Noto Sans CJK KR Bold | 27 | NOTO\_SANS\_CJK\_KR\_BOLD\_27PX |
| FONT\_LARGE | Noto Sans CJK KR Bold | 27 | NOTO\_SANS\_CJK\_KR\_BOLD\_27PX |
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK KR Bold | 17 | NOTO\_SANS\_CJK\_KR\_BOLD\_17PX |
| FONT\_SYSTEM\_TINY | Noto Sans CJK KR Bold | 24 | NOTO\_SANS\_CJK\_KR\_BOLD\_24PX |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK KR Bold | 24 | NOTO\_SANS\_CJK\_KR\_BOLD\_24PX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK KR Bold | 27 | NOTO\_SANS\_CJK\_KR\_BOLD\_27PX |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK KR Bold | 27 | NOTO\_SANS\_CJK\_KR\_BOLD\_27PX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |

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
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_TINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_SMALL | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_MEDIUM | Vera Sans | 21 | bitstreamVeraSans 21 |
| FONT\_SYSTEM\_LARGE | Vera Sans | 27 | bitstreamVeraSans 27 |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |

*语言*

vie

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans | 17 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_17BPX |
| FONT\_TINY | Noto Sans | 24 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_24BPX |
| FONT\_SMALL | Noto Sans | 24 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_24BPX |
| FONT\_MEDIUM | Noto Sans | 27 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_27BPX |
| FONT\_LARGE | Noto Sans | 27 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_27BPX |
| FONT\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
| FONT\_SYSTEM\_XTINY | Noto Sans | 17 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_17BPX |
| FONT\_SYSTEM\_TINY | Noto Sans | 24 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_24BPX |
| FONT\_SYSTEM\_SMALL | Noto Sans | 24 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_24BPX |
| FONT\_SYSTEM\_MEDIUM | Noto Sans | 27 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_27BPX |
| FONT\_SYSTEM\_LARGE | Noto Sans | 27 | NOTO\_SANS\_BOLD\_VIET\_ADJUST\_27BPX |
| FONT\_SYSTEM\_NUMBER\_MILD | Noto Sans | 42 | NOTO\_SANS\_BOLD\_42 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Noto Sans | 52 | NOTO\_SANS\_BOLD\_52 |
| FONT\_SYSTEM\_NUMBER\_HOT | Noto Sans | 82 | NOTO\_SANS\_BOLD\_82 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Noto Sans | 102 | NOTO\_SANS\_BOLD\_102 |
