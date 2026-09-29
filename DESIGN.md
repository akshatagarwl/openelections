---
name: OpenElections.in
description: A calm, inspectable public-systems exhibit.
colors:
  paper: "#eeeee7"
  ink: "#243b2e"
  forest: "#25392e"
  green: "#426b41"
  muted: "#626a60"
  line: "#cccec2"
  lime: "#c4dd91"
  panel: "#dee4d3"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(40px, 4.6vw, 72px)"
    fontWeight: 580
    lineHeight: 1.055
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(34px, 3.6vw, 55px)"
    fontWeight: 550
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.75
  control:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "11px"
    fontWeight: 600
rounded:
  control: "3px"
  exhibit: "4px"
spacing:
  icon-gap: "10px"
  grouped: "16px"
  panel: "22px"
  section-desktop: "99px"
  section-mobile: "65px"
components:
  primary-button:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "5px 5px 5px 19px"
  secondary-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  selected-node:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.forest}"
    rounded: "{rounded.control}"
---

# Design System: OpenElections.in

## Overview

**Creative North Star: "The open systems exhibit"**

The user-selected visual world combines a public exhibition's legibility with technical diagrams that can actually be inspected. It uses generous light reading fields, dark system panels and a restrained green emphasis. It is an explicit nonpartisan demand, backed by evidence, not an official government interface. The investigative design serves a scoped demand to open-source electoral-roll code.

**Key Characteristics:**
- Strong, clean typography with spacious editorial pacing.
- Flat surfaces and precise geometric routing lines.
- Evidence notes, interactive states and clear uncertainty boundaries.

## Colors

### Primary
Forest anchors system diagrams and the scrutiny comparison. Green supplies typographic emphasis. Lime indicates active nodes and the concluding proposition.

### Neutral
Paper is the default reading field. Ink carries headings and text; muted carries supporting prose. Line separates rather than boxes content. Panel provides a quieter inset surface.

**The Evidence Rule.** Colour identifies visual roles, never the truth or falsity of a claim by itself.

## Typography

Self-hosted Manrope Variable is used throughout, with a sans-serif fallback. The display scale is intentionally much larger than the editorial body. Weight and grouping establish hierarchy without decorative font pairing.

Headings are balanced. Secondary body copy varies between 11–13px; lead copy reaches 19–20px. Metadata is smaller and should remain metadata, never substantive disclosure. Source text is selectable and browser zoom remains unrestricted.

**The Legibility Rule.** Keep heading tracking at or above -0.04em; reduce scale before allowing text to collide with a diagram boundary.

## Layout

Desktop hero: two near-equal columns inside a 1600px maximum width, with 5% outer margins. Narrative sections use 8% horizontal padding; the responsive intermediate size uses 6%. Section padding is typically 99px vertically on desktop and 65px on mobile.

Breakpoints: 1100px, 760px and 360px. At 760px, content stacks and chapter navigation becomes a horizontally scrollable strip. The network remains an actual responsive diagram, not a screenshot. The five numbered chapters are navigation and story order, not ornamental numbering.

## Elevation & Depth

No box-shadow vocabulary. Depth comes from contrasting paper, inset panel and forest fields. Fine borders denote boundaries. Focus uses an explicit 3px outline with 5px offset.

## Shapes

Controls and panels have nearly square corners. Circles are restricted to diagram geometry and compact icon controls. SVG performs exact geometry; it does not imitate a photograph or undisclosed system architecture.

## Components

### Buttons
Primary reading action: forest field, paper label and lime arrow square. Secondary action: transparent field and a subtle green-grey border. Hover changes the field. Keyboard focus is clearly outlined.

### Code-scope explorer
Six native buttons surround one central hub: three reported areas of concern (application checks, officer permissions and voter restoration) and three supporting audit artifacts (audit trails, change history and build inputs). The selected node is lime and exposes `aria-pressed`. The description updates in a polite live region. Flow traces and an orbit run continuously but have a pause control and obey reduced-motion preferences.

### Perspective switch
Two native toggle buttons share a frame. The active view is forest. Switching updates the diagram explanation and access-rule question, not the list of people.

### Navigation
Five chapter links sit in a sticky rule-bound strip. A thin scroll-progress line shows reading progress; the current chapter also has a short underline and `aria-current`. Mobile navigation scrolls naturally with no drag-only gesture.

### Concern ledger
Three rule-separated rows connect a reported concern to the code requested and a concrete audit question. Attribution remains beside each reported claim. The requested-code column uses a quiet tinted field, while ECI's response is presented separately. Mobile stacks each row in the same evidence-to-demand order.

### Disclosure list
Native details/summary rows contain five required disclosures supporting the open-source demand. One row opens at a time. An icon rotates to indicate expansion; the content also works without JavaScript.

### Sources
Source entries are numbered, linked and publication-attributed. Targeted entries receive an inset tonal highlight. External links explicitly name their new-tab behavior for assistive technology.

## Do's and Don'ts

### Do:
- **Do** retain visible focus, native keyboard operation and reduced-motion behavior.
- **Do** label conceptual diagrams and distinguish statements, analysis and recommendations.
- **Do** keep typography and controls within the existing forest/paper/lime system.

### Don't:
- **Don't** turn institutional claims into assertions that the software has been independently verified.
- **Don't** imply that source publication exposes voter records or credentials.
- **Don't** add ornamental cards, glass effects, fake terminal output or photos to replace explanatory geometry.

### Social preview
The 1200 × 630 OG image uses the user's explicit headline, “Make source code of ECINet/ERONet public.” Original geometric artwork and embedded Manrope reproduce the page's paper/forest/green palette. `public/og.svg` is the editable vector master; `scripts/generate-og.mjs` produces the PNG and embeds provenance. No stock or generative imagery is used.

Documentation note: redundant hero and privacy eyebrows were removed during review; they are not part of the system. The only shipping raster is the original social preview. Display tracking, chapter-number contrast and mobile hub fit were corrected, not canonized as defects.
