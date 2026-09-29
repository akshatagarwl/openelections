import { defineConfig, lazyPlugins } from "vite-plus";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  // Vite Task: `vp run build` / `vp run check` are cached and replayed when inputs are unchanged.
  run: {
    tasks: {
      check: "vp check",
      build: {
        command: "vp build",
        // The Cloudflare plugin rewrites .wrangler/deploy/config.json on every build; it is output, not input.
        cache: { input: [{ auto: true }, "!.wrangler/**"] },
      },
      start: {
        command: "wrangler dev --config dist/server/wrangler.json",
        dependsOn: ["build"],
        cache: false,
      },
      deploy: {
        command: "wrangler deploy --config dist/server/wrangler.json",
        dependsOn: ["check", "build"],
        cache: false,
      },
    },
  },
  lint: {
    // Stock shadcn/ui source is vendored as-is; lint how we use it, not its internals.
    ignorePatterns: ["components/ui/**"],
    jsPlugins: [
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      { name: "shadcn", specifier: "@shadcn/lint" },
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "shadcn/no-arbitrary-values": "error",
      "shadcn/no-inline-styles": "error",
      "shadcn/no-raw-colors": "error",
      "shadcn/no-restyle": "error",
      "shadcn/no-unknown-classes": "error",
      "shadcn/require-static-classes": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm],
        remarkRehypeOptions: { footnoteLabel: "Sources", footnoteLabelTagName: "h2" },
      }),
    },
    vinext({
      cache: { cdn: staticAssetsAdapter() },
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ]),
});
