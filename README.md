# Garmin Connect IQ 文档镜像（Markdown + RSPress）

把 **Garmin Connect IQ** 开发者文档（`developer.garmin.com/connect-iq/**`）抓取下来、转成 Markdown，用
[RSPress 2](https://rspress.rs/) 托管的双语文档站。文档站是**可重复构建**的：源站更新后重跑流水线即可刷新。

在线站点：<https://thematrixcrop.github.io/garmin-docs/>（`main` 推送后由 GitHub Actions 构建并发布）。站点带 `noindex` 与 `robots.txt`，不向搜索引擎和常见爬虫开放索引。

- 语言：英文（`/`）与简体中文（`/zh/`）。**当前只产出英文内容**，中文目录先镜像英文，翻译脚本已就绪但未运行。
- 规模：**616 个页面 × 2 语言 = 1236 页**（Connect IQ 指南 288 页 + API 参考 328 页）。
- 路由：与源站完全一致（保留 `/connect-iq/` 前缀、尾斜杠），跨站深链不失效。

## 环境要求

- Node.js `^20.19.0 || >=22.12.0`（见 `.nvmrc`，推荐 22）
- pnpm

构建 1236 页需要较多内存，`build` 脚本已设置 `NODE_OPTIONS=--max-old-space-size=8192`。

## 快速开始

```bash
pnpm install
pnpm dev        # 本地开发
pnpm build      # 产出静态站到 doc_build/
pnpm preview    # 预览构建结果
```

## 目录结构

```
.
├── rspress.config.ts       # 站点配置（导航/侧边栏由 _nav.json / _meta.json 自动生成）
├── i18n.json               # 导航与栏目文案的 en/zh 对照
├── docs/
│   ├── en/                 # 英文文档树（核心产物，由流水线生成）
│   ├── zh/                 # 中文文档树（当前为英文镜像）
│   └── public/             # 下载的图片，按源站绝对路径存放，URL 无需改写
├── pipeline/               # 抓取与转换流水线（TypeScript，tsx 直接运行）
│   ├── config.ts           # 范围、选择器、并发等全部配置
│   ├── 1-discover.ts … 6-translate.ts
│   ├── verify.ts           # 死链 / 死图 / 覆盖率校验
│   └── lib/                # 路由、DOM、Markdown、资源等工具
└── data/
    ├── manifest.json       # 发现结果（含内容来源）
    ├── glossary.json       # 翻译术语表
    └── cache/              # HTML / 图片 / 译文缓存（已 gitignore）
```

## 流水线

```bash
pnpm docs:pipeline   # discover → fetch → extract → convert → scaffold
pnpm docs:verify     # 校验死链、死图、路由
pnpm docs:translate  # 生成中文（默认不跑，见下）
```

| 阶段 | 做什么 |
|---|---|
| `1-discover` | BFS 爬取 `/connect-iq/**`，为每个 Gatsby 页探测 `page-data.json` 以判定内容来源，产出 `data/manifest.json` |
| `2-fetch` | 补齐 HTML 缓存（幂等，断点续跑） |
| `3-extract` | 按来源抽取正文（DITA 文章 / SSR DOM / API 页），本地化图片，采集侧边栏顺序 |
| `4-convert` | Turndown + GFM 转 Markdown，改写链接、折叠设备列表 |
| `5-scaffold` | 生成 `docs/en` 与 `docs/zh`、`_nav.json`、每目录 `_meta.json` |
| `verify` | 链接、图片、路由一致性校验 |

## 关键设计决策

1. **三类内容源，分别处理。** Connect IQ 站点其实是两套系统：
   - Gatsby 指南页：**markdown 模板页的正文并不在 SSR HTML 里**，而是 DITA 生成的静态文章
     （`/connect-iq/articles/<file>`，由 `page-data.json` 的 `pageContext.fileName` 指向）。
     抽取器按此取正文，质量远好于爬混沌的 DOM。
   - 少数落地页（`/connect-iq/overview/` 等）正文在 SSR DOM 中，用启发式容器定位。
   - API 参考（`/connect-iq/api-docs/**`）是独立的静态 HTML 文档树，有专用转换规则。
2. **路由保留源站前缀与尾斜杠**，`/a/b/` → `docs/<lang>/a/b/index.md`。省掉全站链接改写，风险最低。
3. **统一输出 `.md`（非 `.mdx`）。** 生成内容里的 `<` 会在 rehype-raw 下被当成 HTML 标签，因此散文中
   的 `<` 统一转义为 `&lt;`（代码块与行内代码内除外）。
4. **API 设备列表折叠。** 每个方法下的数百个「Supported Devices」包进 Rspress 的 `:::details` 容器
   （注意 `:::` 前后必须空行，否则不会被识别）。
5. **`_meta.json` 一律用 `type: "dir"`。** 因为每个路由都映射到 `<name>/index.md`，Rspress 的
   `type: "file"` 会去找 `<name>.md`。
6. **导航顺序取自源站侧边栏。** 抽取阶段采集侧边栏链接的顺序与文案，scaffold 用它生成 `_meta.json`；
   顶层栏目用 `i18n.json` 的 key，便于中英切换。
7. **中文目录先镜像英文。** 不依赖 RSPress 对缺页的回退行为，双语切换、搜索、侧边栏都能立即工作，
   且不会有 404。

## 翻译（可选，默认不执行）

翻译脚本通过环境变量读取配置，缺失时显式报错：

```bash
export GARMIN_DOCS_TRANSLATE_API_KEY=...
export GARMIN_DOCS_TRANSLATE_BASE_URL=https://api.openai.com/v1   # 任何 OpenAI 兼容端点
export GARMIN_DOCS_TRANSLATE_MODEL=gpt-4o-mini

pnpm docs:translate                       # 全量（有缓存，逐块增量）
pnpm docs:translate -- --limit=20         # 先翻 20 个文件试水
pnpm docs:translate -- --force            # 忽略缓存重翻
```

- 术语保护：`data/glossary.json` 里的 `keep` 词条会被替换成占位符，模型不会改写；`glossary` 作为
  首选译名写进提示词。
- 代码块、行内代码、链接地址、`:::` 标记都会被遮蔽，翻译后原样还原。
- 按「段落块」缓存到 `data/cache/i18n/zh/`，重跑只翻变更部分，可随时中断。

## 已知限制

- **版权**：内容版权归 Garmin 所有，仅供个人/内部参考，请勿公开再分发。
- 源站 `/connect-iq/reference-guides/devices-reference/` 本身返回 404（Garmin 自己的坏链），流水线将其
  重写到 `/connect-iq/device-reference/`。
- API 文档的**同页锚点**部分失效（标题 slug 变了）；指向其它站点的外链保持原样、不受影响。
- 中文目录目前是英文镜像，页面 `title` 也还是英文，需运行翻译脚本后才会变成中文。
- 少数纯客户端渲染的落地页没有可抓取的正文（如 `/connect-iq/`），会生成一个指向源站的占位页。
