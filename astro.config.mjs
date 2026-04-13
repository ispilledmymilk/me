// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Set to your production URL for absolute Open Graph URLs. For GitHub Pages at /<repo>/, also set base: '/<repo>/'.
  site: 'https://ispilledmymilk.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});