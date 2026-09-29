# Design: openelections.in (v0.1)

This document records the design as built. It follows `REQUIREMENTS.md`, and where the two disagree, the decisions below take precedence.

## 0. Decisions

| Topic       | Decision                                                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure   | **One page.** Sections are reached by anchor links. There are no sub-routes.                                                                                           |
| Language    | English at launch. The build is ready for i18n (§6). Later we add the major Indian regional languages.                                                                 |
| Attribution | No personal names in site content or page metadata. The repository at `github.com/akshatagarwl/openelections` and its commit history are attributed to the maintainer. |
| Sources     | Cited by publisher, title, document ID and date. **No hyperlinks to quoted articles.** URLs live only in `research/sources.md`.                                        |
| Feedback    | GitHub issues only.                                                                                                                                                    |
| The request | Published on the page. An RTI application will follow, and the page shows it as "planned" until it is filed.                                                           |
| Comparison  | Only primary-source-checked practices appear. Unchecked cells read "Pending check".                                                                                    |
| Deploy gate | **No deploy** until every 🔎 row in `research/sources.md` has been opened in a browser and archived.                                                                   |
| Code        | **Least custom code.** Stock shadcn/ui components, plain Markdown (MDX + GFM), and the Tailwind typography plugin. `@shadcn/lint` enforces this.                       |

## 1. What is custom, and why

**Visuals and data over prose.** Each section makes its point with a stock component: stat cards, a dated timeline, an icon grid, a status matrix, a comparison table, request cards, and an accordion. The page uses text only for sourced claims and one-line ledes.

| Custom piece                               | Size       | Why nothing ready-made fits                                                                                                |
| ------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `app/page.tsx`                             | ~100 lines | Header with skip link and nav, footer, and mapping Markdown tables to the shadcn `Table`                                   |
| Band rules in `app/globals.css`            | ~80 lines  | Full-bleed bands, a side-heading grid, one spacing rhythm, a table scroll cue, quiet footnote back-links, selection colour |
| `--surface-warm`, `--surface-night` tokens | 2 lines    | The uselayouts band colours as theme tokens, so `@shadcn/lint` accepts them                                                |

There are **no custom React components.** The uselayouts registry was checked, but its components are photo- and gesture-driven showpieces (polaroids, 3D books, drag decks) that don't suit a civic data brief. The page uses shadcn's data components instead.

## 2. Stack

| Concern     | Tool                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework   | vinext 1.0 (Next.js API on Vite 8), App Router, fully pre-rendered                                                                         |
| Toolchain   | Vite+ 1.0: oxlint, oxfmt, pre-commit hook, and Vite Task (`vp run check` and `vp run build` are cached; `start` and `deploy` are not)      |
| Hosting     | Cloudflare Workers with static assets, configured by `wrangler.jsonc`, deployed with `npx wrangler`                                        |
| UI          | shadcn/ui `base-nova` (Base UI), neutral palette; `@uselayouts` registry is configured for future use                                      |
| Content     | One MDX file, with `remark-gfm` for tables and footnotes                                                                                   |
| Typography  | `@tailwindcss/typography` (`prose`)                                                                                                        |
| Fonts       | Inter Variable and Geist Mono Variable, self-hosted through Fontsource                                                                     |
| Design lint | `@shadcn/lint`: no arbitrary values, no raw colours, no inline styles, no restyling of components, no unknown classes, static classes only |

## 3. Labels and statuses

Every label is a stock `Badge` with a lucide icon plus text, so none relies on colour alone.

| Label                        | Badge     | Icon    |
| ---------------------------- | --------- | ------- |
| Fact, Public                 | default   | `Check` |
| Claim, Claimed               | secondary | `Quote` |
| Announced                    | secondary | `Clock` |
| Restricted (accredited only) | secondary | `Lock`  |
| None found                   | outline   | `Minus` |
| Pending check                | ghost     | none    |

## 4. The page

| Anchor     | Band  | Visual                                                   | Components                                  |
| ---------- | ----- | -------------------------------------------------------- | ------------------------------------------- |
| `#summary` | white | Question, one-line answer, three stat cards              | `Card`, `Button`                            |
| `#ecinet`  | warm  | Dated timeline of five sourced events                    | `ItemGroup`/`Item`, `Badge`                 |
| `#ledger`  | white | Grid of the seven artefacts with status                  | `Item` grid, lucide icons, `Badge`          |
| `#review`  | dark  | Institutional review vs public scrutiny                  | Markdown table → `Table`                    |
| `#compare` | warm  | Status matrix with ECINet first, then five other systems | Markdown table → `Table` with `Badge` cells |
| `#request` | white | Seven request cards, "not asking for" and RTI callouts   | `Card`, `Alert`                             |
| `#method`  | warm  | Sourcing, labels, scope, corrections                     | `Accordion`                                 |
| footnotes  | warm  | "Sources"                                                | GFM footnotes                               |

At `lg`, each band is a side-heading grid: the H2 sits on the left and the lede on the right, and component blocks span the full width. The layout follows the uselayouts reference in `.references/uselayouts`, which is local only and never committed.

## 5. Content workflow

1. Edit `content/en/page.mdx`. Prose, tables and footnotes are all plain Markdown.
2. When you add a footnote, add its ID and URL to `research/sources.md` in the same commit.
3. When you change the ledger, comparison or request, bump the version in the `#summary` badge and add a row to the corrections table.
4. Run `vp run check` and `vp run build`. The pre-commit hook runs `vp check --fix` on staged files.

## 6. Localisation readiness

- Content is stored per locale (`content/en/page.mdx`). A new language adds `content/<lang>/page.mdx` and a `/<lang>/` route that renders it, with `hreflang` alternates.
- Fonts: Inter covers Latin. For each regional script we will add the matching Noto Sans Fontsource package (Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia), loaded only on that locale's route.
- The header and footer strings in `app/page.tsx` move into the per-locale MDX or a messages file when the second language lands.

## 7. Non-functional

- The page is pre-rendered. Everything is readable with JS disabled except the `#method` accordion panels, which need Base UI to open.
- No trackers or third-party requests. Fonts are self-hosted.
- WCAG 2.2 AA. Every section has a stable anchor.
- Licences: code under MIT, content under CC BY 4.0.
