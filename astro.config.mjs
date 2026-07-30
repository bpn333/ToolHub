import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://toolhub.ext.io",
  integrations: [
    sitemap({
      chunks: {
        tools: (item) => item.url.includes("/tool/") && item,
        categories: (item) => item.url.includes("/category/") && item,
        tags: (item) => item.url.includes("/tag/") && item,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets", // instead of "_astro"
  },
});
