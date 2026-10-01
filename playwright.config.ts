import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  snapshotPathTemplate: "{testDir}/visual-baseline/{arg}{ext}",
  use: { baseURL: "http://127.0.0.1:4173", headless: true },
  webServer: {
    command: `npm run ${process.env.SITE_TEST_SERVER === "preview" ? "preview" : "dev"} -- --port 4173`,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI && process.env.SITE_TEST_SERVER !== "preview",
  },
});
