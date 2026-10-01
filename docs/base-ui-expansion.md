# Base UI expansion

## Confirmed scope

Migrate every meaningful existing interaction to Base UI without changing the visual design or editorial content. Use Base UI directly: no parallel native disclosure UI, no no-JavaScript disclosure-control fallback, and no clipboard-to-download fallback. Clipboard failures get explicit error feedback. Server-rendered narrative and standard link behavior remain; disclosure controls require JavaScript. Readiness disabling and reduced-motion support are not alternate fallback implementations and remain.

No commit, push or deployment is included in this request.

## Primary-source audit

- [Toggle Group](https://base-ui.com/react/components/toggle-group) owns shared selection, arrow-key focus and single-selection behavior. Both the code explorer and perspective switch currently coordinate independent toggles, so both migrate. The last selection remains required; clicking it does not blank the diagram.
- [Accordion](https://base-ui.com/react/components/accordion) owns trigger/panel relationships and single-open behavior. It replaces the five publication disclosures. Keep panel content mounted for server-rendered content and browser search; do not retain native details/summary or warning suppressions.
- [Collapsible](https://base-ui.com/react/components/collapsible) replaces the single methodology disclosure, with no native duplicate.
- [Progress](https://base-ui.com/react/components/progress) owns reading-progress value, width and accessible progress semantics, replacing imperative style mutation.
- [Button](https://base-ui.com/react/components/button) supports rendering another element. Button-styled reading/repository actions can use it with real anchors, preserving href, link semantics, Enter, modifier clicks and Space scrolling. Ordinary citations, source hyperlinks and chapter anchors stay native: they need no button behavior.
- [Toast](https://base-ui.com/react/components/toast) manages copy success/error feedback in the existing inline location, with one persistent notification; no floating notification redesign or download path is needed.
- A second audit found the actual horizontally scrolling mobile chapter strip. [Scroll Area](https://base-ui.com/react/components/scroll-area) now owns that viewport and overflow tracking; links remain native, with touch and keyboard scrolling and no new scrollbar chrome.
- The installed `@base-ui/react/unstable-use-media-query` export replaces the hand-rolled reduced-motion subscription. This publicly exported hook is marked unstable by Base UI; it is covered by initial and changing-preference browser tests.

The installed 1.8.0 declarations and implementation are the primary compatibility reference, especially `ToggleGroup`, `AccordionRoot`, `useCollapsiblePanel`, `useButton`, `ProgressRoot`, and Toast's manager/provider contracts.

## Acceptance seam

Use Playwright in development and production preview. Preserve screenshot baselines, copy text, adjacent citations, diagrams, mobile overflow, reduced motion, privacy and 404 behavior. Add keyboard traversal and required-selection coverage, single-open accordion and methodology toggle coverage, reading-progress semantics, anchor keyboard semantics, and copy-denied/no-download coverage. JavaScript-disabled coverage continues to verify narrative/references and initial disclosure content, but no longer promises disclosure operation.

## Audit stopping point

Do not fabricate menus, tabs, dialogs, tooltips, inputs, separators or forms. The site has no interaction requiring those primitives; layout borders and SVG artwork remain CSS/SVG. Further migrations should remove real hand-rolled behavior, not wrap passive prose merely to increase primitive counts.

## Baseline

Clean task baseline: `f4bca0d`. All 11 existing browser tests pass before this work.
