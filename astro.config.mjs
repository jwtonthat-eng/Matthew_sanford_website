import { defineConfig } from 'astro/config';

// https://astro.build/config
// Static output deploys to Vercel out-of-the-box via Vercel's framework detection.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
