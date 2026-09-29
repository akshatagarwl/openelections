import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "openelections-in",
    compatibilityDate: "2026-09-25",
    workersDev: true,
    // A static document, not a client-side router: missing files should be 404s.
    assets: {
      notFoundHandling: "none",
    },
  },
});
