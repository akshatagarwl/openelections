# Stack migration

## Agreed scope

Migrate the complete site to React/Vinext, Base UI controls, Tailwind v4, TypeScript's latest stable release, and Vite+ with @shadcn/lint. Preserve editorial copy, citations, metadata, custom SVG geometry, visual design, native disclosures, keyboard accessibility, reduced motion, clipboard fallback and no-JavaScript reading. Keep the existing Cloudflare domains and disabled workers.dev/preview URLs. Do not deploy as part of this migration.

## Primary-source findings

- [Vinext](https://github.com/cloudflare/vinext) supports React App Router, server rendering, metadata and Cloudflare Workers. Its README explicitly documents Vite+ integration and warns that compatibility must be verified per application.
- [Cloudflare deployment](https://vinext.dev/docs/deploying/cloudflare) uses the Cloudflare Vite plugin v2, typed `cloudflare.config.ts`, and Cloudflare Build Output. No cache or database is required for this single-page site.
- [Vite+ migration rules](https://viteplus.dev/guide/migrate-rules) require upgrading to Vite 8 before migration; config imports become `vite-plus` and Vite resolves to the matching core alias. Playwright remains a project task, not the built-in Vitest command.
- [@shadcn/lint](https://github.com/shadcn-ui/lint) supports Oxlint and Tailwind v4 without requiring shadcn/ui. Its [setup instructions](https://github.com/shadcn-ui/lint/blob/main/SETUP.md) register the plugin without silently choosing design-system rule policies.
- [Base UI](https://base-ui.com/react/components/toggle) provides unstyled React controls. Existing design classes remain authoritative; native details retain no-JavaScript operation.

## Acceptance specification

Visitors must see the same narrative, references and design on desktop and mobile. Diagram controls must update the selected concern and authority perspective, motion must obey user preference, chapter links must reflect reading position, and the demand must copy or download on clipboard failure. Native disclosures and all narrative text must work with JavaScript disabled. Unknown routes must return 404; assets and social metadata must retain their URLs.

The existing Playwright browser seam is the acceptance boundary. Keep all nine tests and add production-server and visual-baseline validation. Build, type-check, lint and formatting must pass through the migrated toolchain. No editorial rewrites, analytics, account features, cache services or live deployment are in scope.

## Baseline

All nine existing Playwright tests pass before migration and after the prerequisite Vite 8 upgrade. Desktop/mobile screenshots are preserved outside the repository at `/tmp/openelections-baseline` for comparison.

Registry latest versions checked at migration time: Vite+ 1.0.0, Vinext 1.0.0, Base UI 1.8.0, Tailwind 4.3.3, TypeScript 7.0.2, @shadcn/lint 0.2.0.
