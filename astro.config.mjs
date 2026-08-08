// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to the final domain before launch (used for canonical URLs,
// sitemap, and Open Graph tags).
export default defineConfig({
  site: 'https://www.peterboroughaliveconcert.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
