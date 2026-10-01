import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "openelections-in",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityFlags: ["nodejs_compat"],
    env: { ASSETS: bindings.assets() },
    compatibilityDate: "2026-09-25",
    domains: ["openelections.in", "www.openelections.in"],
    workersDev: false,
    previewUrls: false,
    // Missing assets fall through to Vinext, which returns 404 for unknown routes.
    assets: {
      notFoundHandling: "none",
    },
  }),
});
