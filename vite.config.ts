import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vinext from "vinext";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: [
      ".cloudflare/**",
      ".impeccable/**",
      ".next/**",
      ".vinext/**",
      "DESIGN.md",
      "PRODUCT.md",
      "SOURCES.md",
      "README.md",
      "dist/**",
      "rti/**",
      "test-results/**",
      "public/**",
      "package-lock.json",
    ],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }, "@shadcn/lint"],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: [
      ".cloudflare/**",
      ".impeccable/**",
      ".next/**",
      ".vinext/**",
      "dist/**",
      "rti/**",
      "test-results/**",
    ],
    settings: { shadcn: { theme: "src/style.css", ui: "src/components" } },
  },
  optimizeDeps: { exclude: ["lucide-react"] },
  plugins: lazyPlugins(() => [
    tailwindcss(),
    vinext(),
    cloudflare({ viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] } }),
  ]),
});
