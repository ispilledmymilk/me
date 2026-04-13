// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  site: 'https://ispilledmymilk.github.io',
  base: '/me/',
  vite: {
    plugins: [tailwindcss()]
  }
});