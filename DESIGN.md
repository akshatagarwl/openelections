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

Everything that could be taken ready-made was. The only custom pieces are:

| Custom piece                    | Size      | Why nothing ready-made fits                                                                                                     |
| ------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `app/page.tsx`                  | ~70 lines | Header, footer, and mapping Markdown tables to the shadcn `Table`. Every framework needs one page file.                         |
| Band rules in `app/globals.css` | ~25 lines | Full-bleed section bands with a start-aligned container, the warm surface, table-cell wrapping, and button links under `prose`. |
| `--surface-warm` token          | 1 line    | The uselayouts warm band colour (`#F5F3EE`) as a theme token, so `@shadcn/lint` accepts it.                                     |

There are **no custom React components.**

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

## 3. Labelled statements

| Label          | Rendered as                   | Meaning                                                   |
| -------------- | ----------------------------- | --------------------------------------------------------- |
| Fact           | `<Badge>`                     | Verifiable from a cited document                          |
| Official claim | `<Badge variant="secondary">` | What an authority says, which the public cannot yet check |
| Analysis       | `<Badge variant="outline">`   | Our reasoning                                             |
| Open question  | `<Badge variant="ghost">`     | Something public evidence cannot yet answer               |

Ledger and comparison statuses: **Public** (secondary), **Claimed** or **Announced** (secondary), **Restricted** (outline), **None found** (outline). Every label is text, so none of them relies on colour.

## 4. The page

| Anchor     | Band                                      | Content                                                                     |
| ---------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| `#summary` | white                                     | Last-reviewed badge, H1, two-paragraph answer, "Read the request" button    |
| `#ecinet`  | warm                                      | Labelled statements about ECINet, each with a footnote                      |
| `#ledger`  | white                                     | Markdown table of artefact, status, what is public, and what is missing     |
| `#review`  | dark (`.dark` switches the shadcn tokens) | Analysis, plus a table comparing institutional review with public scrutiny  |
| `#compare` | warm                                      | Markdown table of what each system publishes, with a status column          |
| `#request` | white                                     | Numbered asks, a "We are not asking for" `Alert`, and an RTI status `Alert` |
| `#method`  | warm                                      | Sources, labels, scope, corrections table                                   |
| footnotes  | warm                                      | GFM footnotes, labelled "Sources"                                           |

The layout follows the uselayouts reference in `.references/uselayouts`, which is local only and never committed. It uses alternating full-bleed white, warm and dark bands, one centred container (`max-w-6xl`), large tight headings, and Inter for body text.

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

- The page is pre-rendered and readable with JS disabled. The only client JS is what Base UI buttons ship.
- No trackers or third-party requests. Fonts are self-hosted.
- WCAG 2.2 AA. Every section has a stable anchor.
- Licences: code under MIT, content under CC BY 4.0.
