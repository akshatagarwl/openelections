# Design: openelections.in (draft v1)

Status: proposal for review. This document follows `REQUIREMENTS.md`, and where the two disagree, the decisions below take precedence.

## 0. Decisions

| Topic | Decision |
|---|---|
| Structure | **One page.** Sections are reached by anchor links. There are no sub-routes. |
| Language | English at launch. The build is ready for i18n from day one (§7). Later we add the major Indian regional languages. |
| Attribution | No personal names in site content, page metadata, or commit authorship. Commits use the git identity `openelections <maintainers@openelections.in>`, which is a label only and has no email routing. The repository is hosted at `github.com/akshatagarwl/openelections`, so the owner's account is visible through the repo link. |
| Sources | Cited by name, publisher, date and document identifier. **No hyperlinks to quoted articles.** URLs and archive snapshots are kept only in the public repo (`content/sources.yaml`, `research/`), so anyone can re-verify them. |
| Feedback | GitHub issues only. We use issue templates for correction, new source and scope. |
| Repository | Public. The site links only to the repo itself, which is the one outbound link. |
| The request | Published on the site. An RTI application will follow. The site includes an RTI status block that shows "Planned" until the application is filed. |
| Comparison | Each system appears only after a primary-source check (see `research/international-comparison.md`). Any cell marked ⚠️ stays hidden until someone re-checks it by hand. |
| Brand | Mark and wordmark are in `brand/` (§6). |
| Components | Reuse over custom. We use stock shadcn/ui and uselayouts registry components, plus plain Markdown. The target is zero custom components. |

## 1. Design goal

The page reads like a careful public brief, not a campaign. Within 10 seconds a reader can see what can be verified about ECINet, what cannot, and what we are asking for. Every statement shows what kind of statement it is.

## 2. Labelled statements

| Label | Meaning | Needs |
|---|---|---|
| **Fact** | Verifiable from a primary document | Footnote to a primary source |
| **Official claim** | What ECI or another authority says | Footnote to the statement itself |
| **Analysis** | Our reasoning | References to the facts it relies on |
| **Open question** | Public evidence cannot answer it | The evidence that would answer it |

Artefact status: `Public` · `Restricted access` · `Claimed, not verifiable` · `Not public` · `Unknown`.
`Restricted access` is needed for cases like Brazil, where source code is shown only to accredited entities.

All labels are stock shadcn `Badge` with a lucide icon. They always carry text, so they never depend on colour alone.

## 3. The single page

The sections run top to bottom. The sticky nav links to the anchors.

```
#top        Header: wordmark · section links · GitHub
#summary    Hero: the question, one-paragraph answer, three status counts
#ecinet     What ECINet is and what ECI states
#ledger     Transparency ledger (the main content)
#review     Institutional review vs public scrutiny
#compare    What other systems publish
#request    The transparency request + "not asking for" box + RTI status
#method     Methodology, sources, corrections, changelog
#footer     Licence · repository · issue link · last reviewed/version
```

### Section rhythm (borrowed from uselayouts)
The uselayouts landing page alternates full-bleed bands and keeps content inside one container. We follow the same pattern:

| Section | Band |
|---|---|
| summary | white, inset rounded panel (`rounded-[10px]`, like the uselayouts hero card) |
| ecinet | warm off-white `#F5F3EE` |
| ledger | white |
| review | dark `#1B1C1D`, the single high-contrast moment |
| compare | warm off-white |
| request | white |
| method | warm off-white |

Every band uses: container `max-w-[1200px]`; padding `px-4 sm:px-8 lg:px-[120px]` and `py-16 lg:py-[100px]`. The section head is an H2 with a short lede, arranged in a row at `lg` (`flex-col lg:flex-row lg:items-end lg:justify-between`).

### Wireframe
```
┌──────────────────────────────────────────────────────────────┐
│ [■] openelections.in   Ledger  Compare  Request  Method   GH │ sticky
├──────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ What can the public verify about ECINet?                 │ │ #summary
│ │ One neutral paragraph.                  [Read the request]│ │
│ │ [Public n]  [Claimed n]  [Not public n]                  │ │
│ └──────────────────────────────────────────────────────────┘ │
│ What ECINet is ─────────────── labelled statements + notes   │ #ecinet
│ Transparency ledger ── filter chips ── table ── accordion    │ #ledger
│ ███ Review ≠ scrutiny ███ two-column comparison (dark) ███   │ #review
│ What others publish ── tabs: by system | by practice         │ #compare
│ The request ── numbered asks ── [not asking for] ── RTI      │ #request
│ Method · Sources · Corrections · Changelog (accordion)       │ #method
│ footer: CC BY 4.0 · repo · open an issue · v0.1 · date       │
└──────────────────────────────────────────────────────────────┘
```

### Section details
- **#summary:** the three status counts are shadcn `Card`s. Each count links to `#ledger` with that status pre-filtered through a URL hash (e.g. `#ledger?status=not-public`).
- **#ecinet:** Markdown prose with labels. Each Official claim is a Markdown blockquote with its footnote.
- **#ledger:** shadcn `Data Table` (TanStack) with filtering and sorting. Below it, a stock `Accordion` has one item per artefact with an anchor id, e.g. `#ledger-rbac`. On mobile the table scrolls horizontally.
- **#review:** a stock `Table` compares the two approaches (who can look, what they see, whether findings are published, whether issues can be reproduced, whether it repeats per release). A neutral paragraph explaining why institutional review is valuable comes first.
- **#compare:** stock `Tabs`. One view shows each system as a `Card`; the other shows practices as a `Table`. Cells show a status `Badge` and a footnote. "Status today" is always visible, so Norway (discontinued 2014) is not presented as current practice. ElectionGuard is labelled as a toolkit, not a national system.
- **#request:**
  - a numbered Markdown list, where each ask links to its ledger anchor
  - a stock `Alert` for "We are not asking for": voter data, credentials, keys, infrastructure details, operational secrets
  - an RTI status `Alert` reading "Planned". When the application is filed it shows the filing date and the public authority. Personal details of the filer are never shown.
  - a print stylesheet, so "Save as PDF" produces a clean copy with the version and content hash in the footer
- **#method:** stock `Accordion` with Methodology, Sources, Corrections log and Changelog. The changelog uses the uselayouts timeline component as-is.

## 4. Citations without cross-links

- We use GFM footnotes (`remark-gfm`). Clicking a superscript jumps to the footnote at the bottom of the page, and the footnote links back up to the text. These are the only links inside prose.
- Footnote format: *Publisher, "Title", document id or section, date. Accessed YYYY-MM-DD.* There is no URL.
- A single line under Sources reads: "URLs and archived copies for every source are in the public repository." It links to the repo only.
- The build fails if a source used on the page is missing from `content/sources.yaml`, or has no `url` and `archive_url` there. The repo holds the URLs, and the page never renders them.

## 5. Content model

```
content/
  en/page.mdx           the whole page (sections as H2 with ids)
  sources.yaml          id, publisher, title, doc_id, date, url, archive_url, accessed, kind
  ledger.yaml           id, artefact, status, public, missing, sources[], checked, ask
  compare.yaml          system, kind, status_today, practices{…: {status, sources[]}}
  corrections.yaml      date, section, change, reason, commit
  changelog.yaml        version, date, summary
research/               primary-source notes (not rendered)
brand/                  logo assets
```

The build checks:
1. Every footnote id exists in `sources.yaml`, and each entry has `url` and `archive_url`.
2. Every ledger row has `checked`.
3. Every compare cell has a source, unless its status is `Unknown`.
4. Any change to `ledger.yaml`, `compare.yaml` or the request section requires a `changelog.yaml` bump.

## 6. Visual system

It follows the uselayouts reference in `.references/uselayouts`, which is local only and never committed.

- **Tokens:** the shadcn neutral palette as uselayouts uses it: `--foreground hsl(0 0% 9%)`, `--muted-foreground hsl(0 0% 45%)`, `--border hsl(0 0% 90%)`, `--radius 0.625rem`. Section surfaces are `#F5F3EE` (warm) and `#1B1C1D` (dark). Heading ink is `#071A31` and body ink is `#4B565E`.
- **Type:**
  - Inter for UI and body. Geist Mono for badges, versions and hashes.
  - Headings: `text-[36px] sm:text-[48px] leading-[1.15] tracking-[-0.04em] text-balance`.
  - Body: `text-[16px] leading-[1.5]`.
  - Reading measure: `max-w-[68ch]`.
- **Tags:** uselayouts-style mono pills (`rounded-[6px] border bg-[#F2F3F4] font-mono`), used for status and version.
- **Cards:** `rounded-2xl border border-[#E2E2E2]`. On hover the border darkens (`hover:border-[#071A31]/25`), with no lift.
- **Motion:** we follow the uselayouts rule that "every animation does a job: feedback, focus, or flow". The only motion is what the stock components already have (accordion expand, tab switch). Easing is uselayouts `--ease-out: cubic-bezier(0.23,1,0.32,1)`. `prefers-reduced-motion` disables all of it.
- **Colour neutrality:** no saffron, green or party colours. Status colours are muted greys and blue-greys, always paired with an icon and text.
- **Logo** (`brand/`): a dark rounded square, matching the uselayouts brand shape. Inside it is an *open box* with a single ballot above it, visible before it goes in. The idea is an open process, in plain view.
  - `mark.svg`: the main mark
  - `mark-inverted.svg`: for dark bands
  - `favicon.svg`
  - `wordmark.svg`: mark plus "openelections" in Inter 600 at −0.04em, with ".in" in muted grey. Before we ship, the text must be converted to outlines.

## 7. Localisation readiness

- The locale sits in the content path from day one (`content/en/…`). A new language means adding `content/<lang>/page.mdx` plus UI strings in `messages/<lang>.json`, with no layout changes.
- The page is served at `/`. Other languages will be at `/<lang>/` (e.g. `/hi/`, `/ta/`, `/bn/`), each with `hreflang` alternates. It stays a single page per language.
- Fonts: Inter/Geist cover Latin. For the regional scripts we will add the matching Noto Sans families (Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia), loaded per locale only.
- Layout rules that keep this working: logical CSS properties (`ps-`, `pe-`), no text inside images, and a line-height tall enough for Indic scripts (≥ 1.5 on body text). We will also run Urdu through an RTL check before adding it.
- Translations get their own `checked` date. A section whose translation is older than the English version shows a banner reading "English version updated on {date}".

## 8. Non-functional

- Stack: vinext + Vite+ on Cloudflare Workers, deployed with `npx wrangler`, domain `openelections.in`.
- The page is pre-rendered and readable with JS disabled. JS is limited to the table filter, tabs and accordions.
- Budget: under 100 KB of JS and LCP under 2.5 s on Lighthouse "Slow 4G". CI checks both on every PR.
- No trackers or third-party requests. Fonts are self-hosted.
- WCAG 2.2 AA. Every ledger row and every ask has a stable anchor.
- Licences: code under MIT, content under CC BY 4.0.
