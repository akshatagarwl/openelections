# openelections.in

A single-page, source-backed public record of what can and cannot be publicly verified about ECINet, what other election systems publish, and a transparency request.

- Content: `content/en/page.mdx`
- Source URLs: `research/sources.md`
- Design: `DESIGN.md`
- Corrections: open a GitHub issue

## Develop

```bash
vp install
vp dev            # dev server
vp run check      # format, lint (incl. @shadcn/lint), type check (cached)
vp run build      # pre-rendered Worker build (cached)
vp run start      # build if needed, then serve locally with npx wrangler dev
```

Deploy (after the gate in `DESIGN.md`): `vp run deploy` (runs `check` and `build` from cache, then `npx wrangler deploy`)

Code: MIT. Content: CC BY 4.0 (see `content/LICENSE.md`).
