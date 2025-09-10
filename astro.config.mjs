// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://letcode.az',
  output: 'static',
  devToolbar: {
    enabled: false
  }
});
