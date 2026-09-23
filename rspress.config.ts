import { defineConfig } from '@rspress/core';

const SITE_TITLE_EN = 'Garmin Connect IQ Docs';
const SITE_TITLE_ZH = 'Garmin Connect IQ 文档';

// Nav and sidebar are intentionally NOT declared here. They are generated from
// the per-language _nav.json and _meta.json files, which the pipeline emits from
// the source site's own navigation order.
export default defineConfig({
  root: 'docs',
  lang: 'en',
  title: SITE_TITLE_EN,
  base: '/',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: SITE_TITLE_EN,
      description: 'Garmin Connect IQ developer documentation, mirrored as Markdown.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: SITE_TITLE_ZH,
      description: 'Garmin Connect IQ 开发者文档，Markdown 镜像。',
    },
  ],
  themeConfig: {
    search: true,
  },
});
