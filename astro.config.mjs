import { defineConfig, passthroughImageService } from 'astro/config';
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs({
    devtools: true
  }), tailwind()],
  image: {
    service: passthroughImageService(),
  },
});