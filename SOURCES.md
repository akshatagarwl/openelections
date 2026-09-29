# Evidence register

Research baseline: 29 September 2026. This is not a continuously monitored inventory.

## [1] ECINet announcement

- Publisher: Election Commission of India, through the Press Information Bureau.
- Date: 4 May 2025.
- Title: ECI to soon launch a single-point App for stakeholders; to subsume over existing 40 IT Apps with enhanced UI/UX.
- URL: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126682
- Supports: consolidation of more than 40 apps; Voter Helpline, cVIGIL, Saksham, polling/turnout, Know Your Candidate and ENCORE; authorised data entry; statutory-form data prevailing over digital discrepancies.
- Limit: an announcement is not an architecture specification or proof of correct implementation.

## [2] ECINet launch

- Publisher: ECI through PIB.
- Date: 22 January 2026.
- URL: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2217429
- Supports: launch of the unified platform and integration of 40+ apps/portals.

## [3] Commission decisions and review

- Publisher: ECI through PIB.
- Date: 26 September 2026.
- URL: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2315309
- Supports: field officers' role-based ECINet access according to statutory powers; committee led by a Senior Deputy Election Commissioner and including an independent IIT/IIIT expert, reporting to the Commission; compliance with Acts and Rules as the review's purpose.
- Do not say: IITs/IIITs have completed an independent audit; the entire committee is institutionally independent; its scope or results have been publicly released.

## [4] Estonian election authority

- Title: Questions about the reliability of i-voting.
- URL: https://www.valimised.ee/en/internet-voting/frequently-asked-questions/questions-about-reliability-i-voting
- Relevant section: question 31.
- Primary passage: “In July 2013, the source code of i-voting system software was made public for examination and studying to all who are interested via the elections web page.”
- Also describes monitoring, observation and independent audits.
- Limit: an internet-voting system; not equivalent to ECINet.

## [5] Swiss Federal Chancellery

- Title: Examination of systems.
- URL: https://www.bk.admin.ch/en/examination-of-systems
- Primary passages: “Publication of information on the system and its operation” includes source and documentation; “Public scrutiny” includes involvement of the public and experts; commissioned examination covers cryptography, software, infrastructure/operations and intrusion testing.
- The page lists published examination reports.
- Limit: Swiss e-voting regulation does not establish requirements under Indian law.

## [6] Indian Express explainer — reporting, not an official document

- Title: Election Commission’s nine new decisions: What changes and what doesn’t.
- URL: https://indianexpress.com/article/explained/election-commission-nine-new-decisions-what-changes-and-what-doesnt-10895475/
- Full article directly fetched and read, 29 September 2026.
- Reports the announced review and says ECI's note does not specify whether the mandatory online Form 6 question was removed or explain why the requested Goa restoration facility was not enabled.
- Do not turn the reporter's analysis of silence into proof of motive or a technical vulnerability.

## [7] Indian Express editorial — opinion

- Title: CEC needs to correct course, not just damage control.
- Published: 29 September 2026, 06:00 IST.
- URL: https://indianexpress.com/article/opinion/editorials/cec-needs-to-correct-course-not-just-damage-control-10898169/
- Full article directly fetched and read.
- Argues that the announced decisions leave accountability questions unanswered. Used as context for the user's demand, not as independent proof of technical facts or manipulation. Do not adopt the editorial's personal or partisan framing as this site's voice.

## [8] Indian Express original investigation — attributed reporting

- Title: 14 times in 10 months, two Election Commissioners objected on record to poll panel steps.
- URL: https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/
- Full article directly fetched and read, 29 September 2026.
- The newspaper says it saw the internal exchanges and interviewed officials.
- Supports attributed statements that the online Form 6 blocked progress without answering an added SIR-linked question; that Commissioners raised concerns about centralised access and field officials lacking proper and complete access; and that 97 voters found eligible by Goa EROs remained excluded after the requested restoration facility was not enabled in time.
- This website has not independently obtained the underlying internal records or inspected the actual software. Every substantive use is visibly labelled as a reported concern, not our own verified technical finding.
- Deliberately excluded from the site: election-outcome extrapolations, partisan blame, allegations about named individuals, and treating draft deletion totals as permanent disenfranchisement.

## [9] Estonia's IVXV source repository

- Publisher: `valimised`, the Estonian election authority's GitHub organisation.
- Repository: https://github.com/valimised/ivxv
- README fetched directly: https://raw.githubusercontent.com/valimised/ivxv/master/README.md
- Verified passage: “the code that can be found here is the code that is used for election.”
- The README says publication is for public review, the repository is not the active development workspace, and actual development of the legally binding i-voting system and verification app is supervised by the State Electoral Office.
- The quote is explicitly attributed to the repository. We did not independently audit Estonia's deployed software.

## [10] Swiss Post e-voting source repository

- Repository: https://gitlab.com/swisspost-evoting/e-voting/e-voting
- README fetched directly: https://gitlab.com/swisspost-evoting/e-voting/e-voting/-/raw/master/README.md
- Build guide fetched directly: https://gitlab.com/swisspost-evoting/e-voting/e-voting/-/raw/master/BUILDING.md
- Changelog: https://gitlab.com/swisspost-evoting/e-voting/e-voting/-/blob/master/CHANGELOG.md
- The README links system architecture, detailed specification, cryptographic proofs and an infrastructure whitepaper. It expressly states that reproducible builds let researchers verify the source-to-binary path and that hashes of a Linux-based build are published.
- We link the repository as published source without making a separate claim about the legal classification of its licence.

## [11] Swiss Post specifications, proofs and trusted-build evidence

- Documentation repository: https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation
- The System README, Protocol README, Trusted-Build README and the complete trusted-build/deployment process were fetched directly and read. File names below were also checked using the public GitLab repository-tree API.
- Architecture: `System/SwissPost_Voting_System_architecture_document.pdf`
- Detailed protocol specification: `System/System_Specification.pdf`
- Cryptographic proofs: `Protocol/Swiss_Post_Voting_Protocol_Computational_proof.pdf`
- Reproducible-build and deployment process: `Trusted-Build/Trusted Build of the Swiss Post Voting System.md`
- Release hashes and signed protocols: `Trusted-Build/E-Voting`
- The System README distinguishes the detailed protocol specification from the computational proof and architecture. The proof README states assumptions and limitations.
- The Trusted-Build README says the E-Voting directory contains per-release hash values and trusted-build/deployment protocols. The process document describes independent rebuilding, signed hash records and a separately witnessed deployment ceremony.
- These are linked materials and the publisher's described process, not this site's independent confirmation that a particular deployment followed it. Matching hashes alone do not establish the live deployment; cryptographic proofs are conditional on their assumptions.
- Repository links follow current default/master branches. Pin a release/commit before attempting to reproduce a specific historical build.

## Retrieval and uncertainty

PIB returned HTTP 403 to direct automated fetches in this session. Its releases were checked through search-indexed passages from the primary PIB URLs. The Estonia and Switzerland pages, IVXV README, Swiss Post source README, build guide, documentation indexes and trusted-build process were directly fetched and inspected. We did not compile the systems, independently validate the cryptographic proofs, or audit deployed binaries. Publication wording and dates should be rechecked against the originals before future publication or reliance. The site's methodology discloses this limitation.

The public-artifact statement is narrowly worded: the reviewed material did not establish a publicly available source repository, architecture, audit report or reproducible-build package. It is not an exhaustive search of all ECI publications, a definitive assertion that nothing has been published, or evidence of wrongdoing. Amend this statement if new primary documentation is identified.

## Analysis and advocacy demands, not external facts

- Shared software makes implementation and permission rules consequential.
- Commissioned expert review and public verification are complementary and distinct.
- Source disclosure alone does not prove a live deployment matches reviewed code.
- The site demands a standing open-source publication policy for all ECINet/ERONet code that implements election rules or mediates statutory powers—current components, future modules and every update. Current application-validation, official-permission and restoration reports are illustrations, not an exhaustive scope.
- Publication before deployment, review coverage for each release, preserved version history, rule-affecting configuration and feature-flag records, and deployment attestations are demands for continuing auditability, not descriptions of present ECI practice.
- This is an advocacy position, not a claim of an existing legal duty to publish code. The protected-data boundaries are part of the demand.
- Source availability is the starting point; the demand also seeks permission to run, modify and redistribute the released code. The boundary excludes personal data, credentials and live operational access—not future or currently undisputed public-interest logic. The website's own MIT licence is separate.
- Build reproducibility should be paired with signed artifacts and deployment attestations.

All diagrams are explicitly illustrative. No diagram purports to disclose ECINet's actual topology, a vulnerability, or a mechanism for changing votes.
