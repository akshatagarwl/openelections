# Migration verification and review

## Candidate

Baseline commit: `30e935b81b1bf3a9f3b888bacafe8580c2caf924`.

Reviewed source snapshot SHA-256: `3e37463c5d19e1743c40979ce57d9fa4c1cd35b4e2041a9b9881132d48d45553`.

Fingerprint covers the sorted paths and bytes of `.gitignore`, package manifest/lock, Vite/Cloudflare/TypeScript/Playwright configs, README, PRODUCT, OG generator, and all files under `app`, `src`, and `tests`, including visual baselines. Each path and body is NUL-delimited. Deleted `index.html` and `src/main.ts` are replaced by the reviewed app/components. Research/review notes and generated outputs are outside the fingerprint.

Pre-existing changes excluded from the migration assessment: ignored RTI drafts, README's www-domain documentation, and the www-domain Cloudflare binding. These were preserved. No commits, pushes or deployments were performed.

## Verification

- Clean `npm ci`: passes.
- `npm run check`: formatting, Oxlint and type checks pass, without warnings.
- `npm run build`: all Vinext RSC/SSR/client environments build to Cloudflare Build Output.
- `npm run test:production`: 11/11 pass against the built Worker in local preview.
- `npm test`: 11/11 pass against development.
- `npm audit`: zero vulnerabilities with the scoped patched fflate override.
- `git diff --check`: passes.
- Original desktop/mobile hero screenshots remain the checked-in visual baselines, with a 1% maximum differing-pixel ratio. Both pass without replacing the originals. Initial image comparison measured 0.092% desktop-hero and 0.338% mobile-hero differing pixels (RGB difference over 20); desktop full-page dimensions remained identical, mobile full-page height differed by two pixels.

No Vitest suite existed before migration; the existing Playwright suite remains the browser acceptance task. No generated Vitest/tsdown compatibility options were needed. `@shadcn/lint` is registered in Vite+'s Oxlint setup; no design-policy rules were silently enabled.

Development logs contain Vinext/React's upstream workerd `eval()` debugging warning. Production preview has no such warning; browser console errors are included in the desktop/mobile assertions.

## Standards — PASS

Reviewed against README, DESIGN, PRODUCT and the fixed code-smell/AI-slop baseline. No unresolved findings.

Attempted refutation: a React migration could break the project's progressive reading, introduce DOM mutation conflicts, or suppress actual hydration failures. Contrary evidence: narrative and citations are server-rendered, native details remain native, controls are disabled until handlers attach, and browser tests check both JavaScript-disabled reading and console errors. The only hydration-warning suppression is on native disclosures whose browser-owned open state can legitimately change before hydration; this is explicitly documented inline. The migration uses typed finite workflow keys, targeted effects with cleanup, and no unsafe casts. Tailwind theme values preserve the original palette; 171 equivalent layout declarations use Tailwind utilities while custom diagram geometry stays intact.

## Spec — PASS

Reviewed against the user's requested stack and the agreed scope/acceptance specification in `docs/migration.md`. No unresolved findings.

Attempted refutation: installing requested packages without actually using them, losing the original design, or changing deployment behavior without verification would fail the scope. Contrary evidence: Vinext owns App Router rendering, Vite+ owns tooling/builds, Base UI owns live buttons/toggles, Tailwind's Vite plugin compiles theme/layout utilities, TypeScript 7 checks the app, and @shadcn/lint loads through Oxlint. Original screenshot comparisons and all nine retained acceptance tests pass, plus two new privacy/404 cases. The built Cloudflare Worker is tested locally; original domains and disabled workers.dev/preview URLs remain intact.

Summary: Standards 0 findings; Spec 0 findings. Both PASS after attempted refutation. Live deployment remains outside scope.
