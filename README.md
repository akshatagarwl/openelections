# openelections.in

A single-page, source-backed public record of what can and cannot be publicly verified about ECINet, what other election systems publish, and a transparency request.

- Content: `content/en/page.mdx`
- Source URLs: `research/sources.md`
- Design: `DESIGN.md`
- Corrections: open a GitHub issue

## Develop

```bash
vp install
vp dev          # dev server
vp check        # format, lint (incl. @shadcn/lint), type check
vp build        # pre-rendered Worker build
pnpm start      # serve the build locally with wrangler
```

Deploy (after the gate in `DESIGN.md`): `vp build && npx wrangler deploy --config dist/server/wrangler.json`

Code: MIT. Content: CC BY 4.0 (see `content/LICENSE.md`).
