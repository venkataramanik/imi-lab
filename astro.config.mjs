import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://imi-lab.net',
  integrations: [tailwind()],
  output: 'static'
});
