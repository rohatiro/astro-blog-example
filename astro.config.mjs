import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://thunderous-basbousa-d80e17.netlify.app/",
  integrations: [preact()]
});