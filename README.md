# OpenElections.in

A nonpartisan demand for a standing open-source publication policy for ECINet/ERONet code that implements election rules or mediates statutory powers: current components, future modules and every update. Three current reported concerns—Form 6 validation, officer permissions and voter restoration—illustrate the need; they do not bound the scope. The site demands continuing source, review, change-history and deployment evidence rather than a one-time audit. This is an independent project, not an ECI service.

## Run

Requires Node.js 22.12 or newer (the Cloudflare `cf` CLI requires Node 22+, and Vite requires at least 22.12 on that line).

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

The Cloudflare Vite plugin emits Cloudflare Build Output under `.cloudflare/output/`, consumed by `cf deploy --prebuilt`. The site remains static: no backend, accounts, API keys, cookies, external font requests or analytics. HTTPS is recommended for clipboard access; a text-file download is provided if clipboard access fails.

### Deploy with the Cloudflare CLI

Live Workers URL: https://openelections-in.akshatag.workers.dev

```sh
npx cf auth login          # once, for an authorised Cloudflare account
npm run build
npm test
npx cf deploy --prebuilt   # deploy the exact build just checked
```

For subsequent deployments, `npm run deploy` builds and deploys through the pinned `cf` CLI. `cloudflare.config.ts` names the static-assets Worker `openelections-in`, enables its `workers.dev` URL, and returns 404 for unknown asset paths. It does not configure a custom domain or modify DNS. Authentication remains in the CLI profile, not the repository; `.cloudflare/`, `.wrangler/` and local credentials are ignored.

The pinned beta CLI and Vite plugin are recorded in the lockfile. Use `npm ci` for repeatable installs. The `undici` patch override fixes GHSA-3wwx-pv8p-q78v in the CLI's local Miniflare tooling; remove it when upstream ships a patched dependency.

The site links directly to the public source repository: [akshatagarwl/openelections](https://github.com/akshatagarwl/openelections). No source ZIP is generated or served.

## Social preview

The hero and social preview use: **Make source code of ECINet/ERONet public.**

`public/og.png` is a committed 1200 × 630 Open Graph image, with a self-contained editable SVG at `public/og.svg`. Open Graph and Twitter metadata use the production URL `https://openelections.in/og.png`; update those absolute URLs if deploying under a different domain. The image becomes available at `/og.png` on the deployed host. The canonical and social URLs intentionally still point to `openelections.in`; that domain must be connected before those production URLs work.

To regenerate the original vector artwork (requires Playwright Chromium):

```sh
npx playwright install chromium
npm run og:generate
```

The generator embeds Manrope and artwork provenance. Normal production builds do not need a browser.

## Test

```sh
npx playwright install chromium
npm test
```

Playwright covers desktop/mobile screenshots, WCAG A/AA axe checks, 320px overflow, diagram controls, pause/reduced motion, chapter navigation, clipboard/download fallback, native disclosure and no-JavaScript reading. Automated accessibility tests are not a substitute for assistive-technology testing. Screenshots are saved in `.impeccable/review/`.

## Structure

- `index.html`: complete semantic story and adjacent citations; readable without JavaScript.
- `src/main.ts`: small progressively enhanced interactions and reading progress.
- `src/style.css`: responsive exhibition design, self-hosted Manrope, reduced motion and print styles.
- `cloudflare.config.ts`, `vite.config.ts`: Cloudflare static-assets Worker configuration.
- `SOURCES.md`: evidence mapping, research limitations and update instructions.
- `scripts/generate-og.mjs`: reproducible social-preview artwork.
- `public/og.png`, `public/og.svg`: raster social preview and vector master.
- `tests/site.spec.ts`: browser and accessibility tests.
- `DESIGN.md`, `PRODUCT.md`: development-only design and product context; not served.

The site intentionally uses native HTML, CSS and Vite rather than a component framework. The narrative does not require a hydration runtime. Lucide provides a consistent icon set; diagrams are authored SVG geometry, not images of actual ECINet architecture.

## Editorial guardrails

Research baseline: **29 September 2026**. ECI statements are attributed. A commissioned review is not represented as a completed audit. The open-source demand is an advocacy position, not a claim of an existing statutory publication requirement. Scope is defined by function, not controversy: all current and future components implementing election rules or mediating statutory powers, with their required dependencies. It excludes voter records, operational secrets and unrestricted production access. Code and synthetic tests should be public before deployment, with review status and signed artifacts for each release and retained change/deployment records. Source availability alone does not grant permission to run, modify or redistribute code; the demand seeks those permissions too. This website's MIT licence is separate. The original investigation, follow-up explainer and editorial are distinctly labelled; internal records reported by the newspaper were not independently obtained by this site. A bounded failure to establish public artifacts is not proof of manipulation or proof that the artifacts do not exist.

The Estonia and Switzerland precedents link directly to their source repositories. Swiss Post's architecture, detailed protocol specification, proofs, build guide, changelog, trusted-build process and release-hash records are linked individually. The IVXV production-code statement is attributed to its README, not asserted as our own deployment audit.

See `SOURCES.md` before changing factual claims. The ECINet diagrams are conceptual. Estonia and Switzerland are examples of disclosure practice for internet-voting systems, not equivalents to ECINet and not recommendations for Indian internet voting.

## Contributing and corrections

Change the claim and its supporting source together. Prefer primary publications and record publication/access dates. Describe what the source actually establishes and what remains unknown. Add tests for interaction changes. Run `npm run build` and `npm test` before publishing.

Inspect, fork or contribute at [github.com/akshatagarwl/openelections](https://github.com/akshatagarwl/openelections). Submit corrections through [GitHub issues](https://github.com/akshatagarwl/openelections/issues), with supporting primary evidence where available.

## Licence

MIT for this project's code and original copy. Third-party primary sources retain their own rights. Manrope: SIL Open Font License. Lucide: ISC. Licence copies are in `public/licenses/`.
