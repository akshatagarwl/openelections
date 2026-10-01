# Base UI expansion review

Baseline: clean `f4bca0d`. Candidate source fingerprint: `f7f2bcf38246cd8a3f39e6db2b2d73f88c2525b5a1086236a01cf5c033690715`.

The SHA-256 covers sorted NUL-delimited paths/bodies for README, DESIGN, PRODUCT, Vite/Playwright/TypeScript/Cloudflare configs, package manifest/lock, and every file under app, src and tests. Research/review notes and generated outputs are excluded. Requirements and primary references: `docs/base-ui-expansion.md`.

## Verification

- Formatting, Oxlint and TypeScript: pass.
- Production build: pass; full output in `/tmp/openelections-base-ui-final-build.log`.
- Production-preview Playwright: 21/21 pass.
- Development Playwright: 21/21 pass. A separate run after deleting the dependency-optimizer cache also passed; explicit scan entries and Base UI prebundling avoid late dependency-discovery reloads during cold startup.
- Original desktop/mobile hero screenshot baselines: pass, without updating baselines.
- Desktop/mobile axe checks: zero violations in initial and expanded/error states.
- Screenshots inspected: `.impeccable/review/base-ui-checklist-{1440,390}.png`, `base-ui-methodology-{1440,390}.png`, and desktop/mobile hero captures.
- Dependency audit: zero vulnerabilities. Whitespace check: pass.

Tests cover arrow-key traversal, required selection, single-open/closable publication requirements, methodology controls, progress values, keyboard-scrolling chapter navigation, anchor Space/Enter semantics, copy success/denied/missing clipboard with no download, changing reduced-motion preferences, privacy, metadata, references and 404s. Server-rendered narrative remains tested; disclosure controls intentionally require JavaScript.

## Standards — PASS

No unresolved findings against README, DESIGN, PRODUCT or the code-smell/AI-slop baseline. App-level client wrappers now own real shared behavior, not passive prose: selection, disclosure relationships, progress, scroll tracking and notifications. Content remains server-authored and passed through React children. No unsafe casts, blanket hydration suppressions, duplicate native UI or fake controls were introduced.

Attempted refutation: custom anchor adaptation or disclosure layout could undermine accessibility/design. Contrary evidence: the shared Button-backed ActionLink retains real href/link semantics and native Space scrolling; keyboard tests and expanded-state axe scans pass. Screenshot review caught and resolved closed-panel padding and a percentage row-gap that let expanded methodology overlap the footer. The footer case has a failing-then-passing browser geometry regression. No unresolved standards findings remain.

## Spec — PASS

Both selection groups, all six disclosures, reading progress, mobile chapter scrolling, styled reading/repository/back-to-top actions, inline copy feedback and reduced-motion subscription now use Base UI. Ordinary citations/chapter/source links and authored SVGs remain semantic HTML/SVG because no Base UI behavior is required. The publicly exported media-query hook is marked unstable upstream; the pinned installed release and initial/changing-preference tests establish the currently supported behavior.

Attempted refutation: retaining fallbacks or changing content could violate the updated request. Contrary evidence: native details/summary, noscript copies, hydration-warning suppressions, the download branch and the custom media subscription are removed; browser tests verify missing/denied clipboard produces one error notification and no download. Editorial content, URLs, privacy, palette and hero design remain covered. The deliberate loss of no-JavaScript disclosure operation matches the user's confirmed decision.

Summary: Standards 0 unresolved findings; Spec 0 unresolved findings. No commit, push or live deployment performed for this expansion.
