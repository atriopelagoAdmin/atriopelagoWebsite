import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

// Workaround: Astro 6 + Vite ESM resolution fails on Windows/pnpm for the
// internal `astro/entrypoints/prerender` subpath export during `npm run build`.
// Do NOT remove until upstream Astro fix lands.
const prerenderEntry = fileURLToPath(import.meta.resolve("astro/entrypoints/prerender"));

export default defineConfig({
  site: "https://atriopelago.pl",
  output: "static",
  trailingSlash: "never",
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/prerender": prerenderEntry
      }
    }
  }
});
