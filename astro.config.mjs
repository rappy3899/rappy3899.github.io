import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rappy3899.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      customPages: [
        'https://rappy3899.github.io/touhouquiz/', // クイズサイトのURLを復活
      ],
    }),
  ],
});