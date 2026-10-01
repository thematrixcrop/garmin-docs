---
title: "MARQ® Driver"
---
# MARQ® Driver

| 属性 | 值 |
| --- | --- |
| 标识 | marqdriver |
| 屏幕形状 | round |
| 屏幕尺寸 | 240 x 240 |
| 显示颜色 | 64 |
| 触摸 | False |
| 按键 | enter, up, menu, down, esc |
| 启动图标尺寸 | 40 x 40 |

**应用类型**

| 应用类型 | 内存上限 | 说明 |
| --- | --- | --- |
| 音频内容提供者 | 524288 |  |
| 后台 | 32768 | 需要权限 |
| 数据字段 | 131072 |  |
| 速览 | 32768 | 构建为小工具 |
| 手表应用 | 1310720 |  |
| 表盘 | 98304 |  |
| 微件 | 1048576 |  |

**调色板**

&lt;table class="table palette">&lt;caption>&lt;/caption>&lt;colgroup>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;col>&lt;/colgroup>&lt;tbody class="tbody">&lt;tr class="row">&lt;td class="entry">0x000000&lt;/td>&lt;td class="entry">0x000055&lt;/td>&lt;td class="entry">0x0000aa&lt;/td>&lt;td class="entry">0x0000ff&lt;/td>&lt;td class="entry">0x005500&lt;/td>&lt;td class="entry">0x005555&lt;/td>&lt;td class="entry">0x0055aa&lt;/td>&lt;td class="entry">0x0055ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x00aa00&lt;/td>&lt;td class="entry">0x00aa55&lt;/td>&lt;td class="entry">0x00aaaa&lt;/td>&lt;td class="entry">0x00aaff&lt;/td>&lt;td class="entry">0x00ff00&lt;/td>&lt;td class="entry">0x00ff55&lt;/td>&lt;td class="entry">0x00ffaa&lt;/td>&lt;td class="entry">0x00ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x550000&lt;/td>&lt;td class="entry">0x550055&lt;/td>&lt;td class="entry">0x5500aa&lt;/td>&lt;td class="entry">0x5500ff&lt;/td>&lt;td class="entry">0x555500&lt;/td>&lt;td class="entry">0x555555&lt;/td>&lt;td class="entry">0x5555aa&lt;/td>&lt;td class="entry">0x5555ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0x55aa00&lt;/td>&lt;td class="entry">0x55aa55&lt;/td>&lt;td class="entry">0x55aaaa&lt;/td>&lt;td class="entry">0x55aaff&lt;/td>&lt;td class="entry">0x55ff00&lt;/td>&lt;td class="entry">0x55ff55&lt;/td>&lt;td class="entry">0x55ffaa&lt;/td>&lt;td class="entry">0x55ffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaa0000&lt;/td>&lt;td class="entry">0xaa0055&lt;/td>&lt;td class="entry">0xaa00aa&lt;/td>&lt;td class="entry">0xaa00ff&lt;/td>&lt;td class="entry">0xaa5500&lt;/td>&lt;td class="entry">0xaa5555&lt;/td>&lt;td class="entry">0xaa55aa&lt;/td>&lt;td class="entry">0xaa55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xaaaa00&lt;/td>&lt;td class="entry">0xaaaa55&lt;/td>&lt;td class="entry">0xaaaaaa&lt;/td>&lt;td class="entry">0xaaaaff&lt;/td>&lt;td class="entry">0xaaff00&lt;/td>&lt;td class="entry">0xaaff55&lt;/td>&lt;td class="entry">0xaaffaa&lt;/td>&lt;td class="entry">0xaaffff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xff0000&lt;/td>&lt;td class="entry">0xff0055&lt;/td>&lt;td class="entry">0xff00aa&lt;/td>&lt;td class="entry">0xff00ff&lt;/td>&lt;td class="entry">0xff5500&lt;/td>&lt;td class="entry">0xff5555&lt;/td>&lt;td class="entry">0xff55aa&lt;/td>&lt;td class="entry">0xff55ff&lt;/td>&lt;/tr>&lt;tr class="row">&lt;td class="entry">0xffaa00&lt;/td>&lt;td class="entry">0xffaa55&lt;/td>&lt;td class="entry">0xffaaaa&lt;/td>&lt;td class="entry">0xffaaff&lt;/td>&lt;td class="entry">0xffff00&lt;/td>&lt;td class="entry">0xffff55&lt;/td>&lt;td class="entry">0xffffaa&lt;/td>&lt;td class="entry">0xffffff&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>

**1 字段布局**


![1 Field](/connect-iq/resources/device-reference/marqdriver/layout0.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 240 | 15 | True | True | True | True |

**2 字段布局**


![2 Fields](/connect-iq/resources/device-reference/marqdriver/layout1.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 119 | 7 | True | True | True | False |
| 字段 2 | 0 | 122 | 240 | 119 | 13 | True | True | False | True |

**3 字段 A 布局**


![3 Fields A](/connect-iq/resources/device-reference/marqdriver/layout2.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 76 | 7 | True | True | True | False |
| 字段 2 | 0 | 78 | 240 | 84 | 5 | True | True | False | False |
| 字段 3 | 0 | 164 | 240 | 76 | 13 | True | True | False | True |

**3 字段 B 布局**


![3 Fields B](/connect-iq/resources/device-reference/marqdriver/layout3.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 86 | 7 | True | True | True | False |
| 字段 2 | 0 | 86 | 240 | 68 | 5 | True | True | False | False |
| 字段 3 | 0 | 153 | 240 | 86 | 13 | True | True | False | True |

**3 字段 C 布局**


![3 Fields C](/connect-iq/resources/device-reference/marqdriver/layout4.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 119 | 7 | True | True | True | False |
| 字段 2 | 0 | 121 | 119 | 119 | 9 | True | False | False | True |
| 字段 3 | 121 | 121 | 119 | 119 | 12 | False | True | False | True |

**4 字段 A 布局**


![4 Fields A](/connect-iq/resources/device-reference/marqdriver/layout5.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 240 | 85 | 7 | True | True | True | False |
| 字段 2 | 0 | 87 | 119 | 67 | 1 | True | False | False | False |
| 字段 3 | 121 | 87 | 119 | 67 | 4 | False | True | False | False |
| 字段 4 | 0 | 156 | 240 | 85 | 13 | True | True | False | True |

**4 字段 B 布局**


![4 Fields B](/connect-iq/resources/device-reference/marqdriver/layout6.svg)

| 名称 | 左 | 上 | 宽 | 高 | 遮挡标志 | 遮挡左侧 | 遮挡右侧 | 遮挡顶部 | 遮挡底部 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 字段 1 | 0 | 0 | 119 | 119 | 3 | True | False | True | False |
| 字段 2 | 121 | 0 | 119 | 119 | 6 | False | True | True | False |
| 字段 3 | 0 | 121 | 119 | 119 | 9 | True | False | False | True |
| 字段 4 | 121 | 121 | 119 | 119 | 12 | False | True | False | True |

**部件号 006-B3246-00**

*语言*

ara, bul, ces, dan, deu, dut, eng, est, fin, fre, gre, heb, hrv, hun, ita, lav, lit, nob, pol, por, ron, rus, slo, slv, spa, swe, tur, ukr

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 19 | MARQ\_CDPG\_ROBOTO\_13B |
| FONT\_TINY | Roboto Condensed | 26 | MARQ\_CDPG\_ROBOTO\_17B |
| FONT\_SMALL | Roboto Condensed | 29 | MARQ\_CDPG\_ROBOTO\_19B |
| FONT\_MEDIUM | Roboto Condensed | 34 | MARQ\_CDPG\_ROBOTO\_22B |
| FONT\_LARGE | Roboto Condensed | 37 | MARQ\_CDPG\_ROBOTO\_24B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 19 | MARQ\_CDPG\_ROBOTO\_13B |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 26 | MARQ\_CDPG\_ROBOTO\_17B |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 29 | MARQ\_CDPG\_ROBOTO\_19B |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 34 | MARQ\_CDPG\_ROBOTO\_22B |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 37 | MARQ\_CDPG\_ROBOTO\_24B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Roboto Condensed | 22 | MARQ\_CDPG\_ROBOTO\_15B |
| FONT\_GLANCE\_NUMBER | Bionic | 37 | MARQ\_BIONIC\_BOLD\_NUMBER\_18 |

**部件号 006-B3420-00**

*语言*

eng, ind, zsm

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 19 | MARQ\_CDPG\_ROBOTO\_13B |
| FONT\_TINY | Roboto Condensed | 26 | MARQ\_CDPG\_ROBOTO\_17B |
| FONT\_SMALL | Roboto Condensed | 29 | MARQ\_CDPG\_ROBOTO\_19B |
| FONT\_MEDIUM | Roboto Condensed | 34 | MARQ\_CDPG\_ROBOTO\_22B |
| FONT\_LARGE | Roboto Condensed | 37 | MARQ\_CDPG\_ROBOTO\_24B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 19 | MARQ\_CDPG\_ROBOTO\_13B |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 26 | MARQ\_CDPG\_ROBOTO\_17B |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 29 | MARQ\_CDPG\_ROBOTO\_19B |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 34 | MARQ\_CDPG\_ROBOTO\_22B |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 37 | MARQ\_CDPG\_ROBOTO\_24B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Roboto Condensed | 22 | MARQ\_CDPG\_ROBOTO\_15B |
| FONT\_GLANCE\_NUMBER | Bionic | 37 | MARQ\_BIONIC\_BOLD\_NUMBER\_18 |

*语言*

zhs

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_19 |
| FONT\_TINY | Noto Sans CJK SC Bold | 26 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_26B |
| FONT\_SMALL | Noto Sans CJK SC Bold | 29 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_29B |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 34 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_34B |
| FONT\_LARGE | Noto Sans CJK SC Bold | 37 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_37B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_19 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 26 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_26B |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 29 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_29B |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 34 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_34B |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 37 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_37B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_19 |
| FONT\_GLANCE\_NUMBER | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_CHN\_19 |

*语言*

zht

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_19 |
| FONT\_TINY | Noto Sans CJK SC Bold | 26 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_26B |
| FONT\_SMALL | Noto Sans CJK SC Bold | 29 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_29B |
| FONT\_MEDIUM | Noto Sans CJK SC Bold | 34 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_34B |
| FONT\_LARGE | Noto Sans CJK SC Bold | 37 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_37B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_19 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK SC Bold | 26 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_26B |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK SC Bold | 29 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_29B |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK SC Bold | 34 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_34B |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK SC Bold | 37 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_37B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_19 |
| FONT\_GLANCE\_NUMBER | Noto Sans CJK SC Bold | 19 | NOTO\_SANS\_CJK\_SC\_BOLD\_TWN\_19 |

*语言*

jpn

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK JP Bold | 19 | NOTO\_SANS\_CJK\_JP\_BOLD\_19 |
| FONT\_TINY | Noto Sans CJK JP Bold | 26 | NOTO\_SANS\_CJK\_JP\_BOLD\_26B |
| FONT\_SMALL | Noto Sans CJK JP Bold | 29 | NOTO\_SANS\_CJK\_JP\_BOLD\_29B |
| FONT\_MEDIUM | Noto Sans CJK JP Bold | 34 | NOTO\_SANS\_CJK\_JP\_BOLD\_34B |
| FONT\_LARGE | Noto Sans CJK JP Bold | 37 | NOTO\_SANS\_CJK\_JP\_BOLD\_37B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK JP Bold | 19 | NOTO\_SANS\_CJK\_JP\_BOLD\_19 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK JP Bold | 26 | NOTO\_SANS\_CJK\_JP\_BOLD\_26B |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK JP Bold | 29 | NOTO\_SANS\_CJK\_JP\_BOLD\_29B |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK JP Bold | 34 | NOTO\_SANS\_CJK\_JP\_BOLD\_34B |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK JP Bold | 37 | NOTO\_SANS\_CJK\_JP\_BOLD\_37B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Noto Sans CJK JP Bold | 19 | NOTO\_SANS\_CJK\_JP\_BOLD\_19 |
| FONT\_GLANCE\_NUMBER | Noto Sans CJK JP Bold | 19 | NOTO\_SANS\_CJK\_JP\_BOLD\_19 |

*语言*

kor

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Noto Sans CJK KR Bold | 19 | NOTO\_SANS\_CJK\_KR\_BOLD\_19 |
| FONT\_TINY | Noto Sans CJK KR Bold | 26 | NOTO\_SANS\_CJK\_KR\_BOLD\_26B |
| FONT\_SMALL | Noto Sans CJK KR Bold | 29 | NOTO\_SANS\_CJK\_KR\_BOLD\_29B |
| FONT\_MEDIUM | Noto Sans CJK KR Bold | 34 | NOTO\_SANS\_CJK\_KR\_BOLD\_34B |
| FONT\_LARGE | Noto Sans CJK KR Bold | 37 | NOTO\_SANS\_CJK\_KR\_BOLD\_37B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Noto Sans CJK KR Bold | 19 | NOTO\_SANS\_CJK\_KR\_BOLD\_19 |
| FONT\_SYSTEM\_TINY | Noto Sans CJK KR Bold | 26 | NOTO\_SANS\_CJK\_KR\_BOLD\_26B |
| FONT\_SYSTEM\_SMALL | Noto Sans CJK KR Bold | 29 | NOTO\_SANS\_CJK\_KR\_BOLD\_29B |
| FONT\_SYSTEM\_MEDIUM | Noto Sans CJK KR Bold | 34 | NOTO\_SANS\_CJK\_KR\_BOLD\_34B |
| FONT\_SYSTEM\_LARGE | Noto Sans CJK KR Bold | 37 | NOTO\_SANS\_CJK\_KR\_BOLD\_37B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Noto Sans CJK KR Bold | 19 | NOTO\_SANS\_CJK\_KR\_BOLD\_19 |
| FONT\_GLANCE\_NUMBER | Noto Sans CJK KR Bold | 19 | NOTO\_SANS\_CJK\_KR\_BOLD\_19 |

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
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_TINY | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_SMALL | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_SYSTEM\_MEDIUM | Vera Sans | 21 | bitstreamVeraSans 21 |
| FONT\_SYSTEM\_LARGE | Vera Sans | 27 | bitstreamVeraSans 27 |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Vera Sans | 16 | bitstreamVeraSans 16 |
| FONT\_GLANCE\_NUMBER | Vera Sans | 16 | bitstreamVeraSans 16 |

*语言*

vie

*字体*

| 字体符号 | 字体 | 字号 | Font |
| --- | --- | --- | --- |
| FONT\_XTINY | Roboto Condensed | 19 | ROBOTO\_CONDENSED\_BOLD\_VIET\_19 |
| FONT\_TINY | Roboto Condensed | 26 | ROBOTO\_CONDENSED\_BOLD\_VIET\_26B |
| FONT\_SMALL | Roboto Condensed | 29 | ROBOTO\_CONDENSED\_BOLD\_VIET\_29B |
| FONT\_MEDIUM | Roboto Condensed | 34 | ROBOTO\_CONDENSED\_BOLD\_VIET\_34B |
| FONT\_LARGE | Roboto Condensed | 37 | ROBOTO\_CONDENSED\_BOLD\_VIET\_37B |
| FONT\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_SYSTEM\_XTINY | Roboto Condensed | 19 | ROBOTO\_CONDENSED\_BOLD\_VIET\_19 |
| FONT\_SYSTEM\_TINY | Roboto Condensed | 26 | ROBOTO\_CONDENSED\_BOLD\_VIET\_26B |
| FONT\_SYSTEM\_SMALL | Roboto Condensed | 29 | ROBOTO\_CONDENSED\_BOLD\_VIET\_29B |
| FONT\_SYSTEM\_MEDIUM | Roboto Condensed | 34 | ROBOTO\_CONDENSED\_BOLD\_VIET\_34B |
| FONT\_SYSTEM\_LARGE | Roboto Condensed | 37 | ROBOTO\_CONDENSED\_BOLD\_VIET\_37B |
| FONT\_SYSTEM\_NUMBER\_MILD | Bionic | 54 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_28 |
| FONT\_SYSTEM\_NUMBER\_MEDIUM | Bionic | 66 | MARQ\_BIONIC\_COND\_BOLD\_NUMBER\_34 |
| FONT\_SYSTEM\_NUMBER\_HOT | Bionic | 90 | MARQ\_BIONIC\_BOLD\_NUMBER\_46 |
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | Bionic | 104 | MARQ\_BIONIC\_BOLD\_NUMBER\_53 |
| FONT\_GLANCE | Roboto Condensed | 19 | ROBOTO\_CONDENSED\_BOLD\_VIET\_19 |
| FONT\_GLANCE\_NUMBER | Roboto Condensed | 19 | ROBOTO\_CONDENSED\_BOLD\_VIET\_19 |
