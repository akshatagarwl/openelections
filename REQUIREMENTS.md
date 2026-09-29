# Requirements

This project provides a public-interest transparency resource about ECINet and comparable election technology practices. The requirements below define the initial scope and will be revised through documented changes as sources, scope, and publication plans become clearer.

## Scope

- Explain what ECINet is, what functions it appears to support or control, and what the Election Commission of India officially says about decentralised statutory powers.
- Distinguish clearly between information that is publicly verifiable and information that is not currently verifiable, including source code, architecture, permissions/RBAC, audit scope, release history, and production version.
- Explain why review by IITs/IIITs or similar institutions may be useful, while also clarifying that such review is not the same as broad independent public scrutiny.
- Compare ECINet with relevant international election systems or election-technology projects that publish source code, specifications, audit reports, verification mechanisms, or similar transparency material.
- Publish a clear transparency request covering source availability, architecture, role permissions, audit reports, changelogs, reproducible builds, hashes, or equivalent verification artefacts.
- Keep voter data, credentials, cryptographic keys, infrastructure details, and operational secrets explicitly out of scope.
- Ensure factual claims are source-backed, preferably using primary documents where available.
- Open-source the website itself and maintain a corrections and methodology page.

## Implementation Preferences

- Use https://uselayouts.com/ as a preferred layout and design reference where it fits the project.
- Prefer current stable releases of VitePlus, ViNext, TypeScript, and related tooling.
- Use `npx wrangler` for Cloudflare configuration and deployment workflows.
- Configure deployment around the `openelections.in` domain.
- Treat these as preferences, not hard constraints, when compatibility, maintainability, or security requires a different choice.

## Editorial Principles

- Prefer cautious language over overclaiming.
- Separate facts, official claims, analysis, and open questions.
- Avoid requesting or publishing sensitive operational information.
- Make uncertainty visible where evidence is incomplete.
- Allow the project scope, comparisons, and requested disclosures to change as better sources become available.
