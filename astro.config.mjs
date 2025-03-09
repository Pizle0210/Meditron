// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import favicons from "astro-favicons";

import sanity from '@sanity/astro'
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    favicons(),
    sanity({
      projectId: "d9y70zdq",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-03-08",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
});
