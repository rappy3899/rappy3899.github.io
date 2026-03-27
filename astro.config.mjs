import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rappy3899.github.io', // 新ドメイン
  integrations: [sitemap()],
});