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
  optimizeDeps: {
    entries: ["app/**/*.tsx", "src/components/**/*.tsx"],
    exclude: ["lucide-react"],
    include: [
      "@base-ui/react/accordion",
      "@base-ui/react/button",
      "@base-ui/react/collapsible",
      "@base-ui/react/progress",
      "@base-ui/react/scroll-area",
      "@base-ui/react/toast",
      "@base-ui/react/toggle",
      "@base-ui/react/toggle-group",
      "@base-ui/react/unstable-use-media-query",
    ],
  },
  plugins: lazyPlugins(() => [
    tailwindcss(),
    vinext(),
    cloudflare({ viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] } }),
  ]),
});
