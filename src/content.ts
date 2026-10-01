export type Workflow =
  | "validation"
  | "permissions"
  | "restoration"
  | "audit"
  | "history"
  | "builds";

export const workflows: Record<Workflow, { index: string; text: string; source?: number }> = {
  validation: {
    index: "01",
    text: "Reported concern: an added SIR-linked family question blocked applicants from proceeding without an answer.",
    source: 8,
  },
  permissions: {
    index: "02",
    text: "Reported concern: Commissioners questioned centralised access and whether field authorities had proper and complete access.",
    source: 8,
  },
  restoration: {
    index: "03",
    text: "Reported concern: Goa’s requested restoration facility was not enabled in time for 97 people found eligible by EROs.",
    source: 8,
  },
  audit: {
    index: "04",
    text: "Our demand: release audit-trail logic and privacy-safe evidence so reviewers can examine how changes and overrides are attributed.",
  },
  history: {
    index: "05",
    text: "Our demand: every current and future module must have public change history, review status and deployment records—not only the parts questioned today.",
  },
  builds: {
    index: "06",
    text: "Our demand: publish dependencies, build inputs and signed hashes for every release, and retain evidence connecting reviewed code to deployments.",
  },
};

export const checklist = `OpenElections.in — our demand to the ECI\n\nMake source code of ECINet/ERONet public. Adopt a standing open-source publication policy for all code that implements election rules or mediates statutory powers: current components, future modules and every update. Today's reported concerns are examples, not the boundary of this demand.\n\n1. Source code: maintain public repositories, dependencies and synthetic tests for every qualifying component. Publish new modules and changes before deployment, under an open-source licence permitting inspection, use, modification and redistribution. Publication must not depend on a controversy.\n2. Architecture & permissions: keep data flows, trust boundaries and statutory role mappings current as modules and rules change.\n3. Audit reports & remediation: identify the scope and versions examined; state review coverage and gaps for each release. Publish findings and fixes, and reassess changes affecting rules or permissions.\n4. Version & change history: tag every release and preserve change, approval and deployment records, including rule-affecting configuration, feature flags and emergency fixes.\n5. Reproducible builds: publish pinned inputs, build instructions and signed hashes for every release; connect releases to deployments with attestations and preserve earlier records.\n\nProtect personal data, passwords, private keys and live credentials. Coordinate disclosure of exploitable vulnerabilities. Openness concerns public-interest logic, not public access to live systems.\nAn expert review does not replace ongoing public scrutiny. This is a nonpartisan demand, not an allegation of manipulation or a claim of an existing legal publication duty.\n\nRead and share the demand: https://openelections.in/#checklist\nEvidence and sources: https://openelections.in/#sources`;
