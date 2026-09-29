# International comparison: primary-source check

Checked: 2026-09-29. These are research notes for the maintainers. URLs appear here so that anyone can re-verify the claims. Per the editorial rule, the website cites these sources by name and does not hyperlink to them.

Legend: ✅ confirmed from a primary source · ◐ confirmed, but only for a restricted audience · ⚠️ needs a manual re-check before publishing (reason given) · — not found in the primary sources

## Summary matrix

| Practice                                                  | Switzerland (Swiss Post)                                                                         | Estonia (IVXV)                                                             | Brazil (TSE urna)                                                      | USA (EAC / VotingWorks)                                   | ElectionGuard (spec/SDK)                    | Norway (2011–13 trials)                      | Australia, Victoria (vVote 2014)                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| Source code available                                     | ✅ public, required by law [CH1][CH2]                                                            | ✅ public, the code used for elections [EE1][EE2]                          | ◐ accredited inspecting entities only [BR1]                            | ✅ VxSuite public under GPL-3.0 [US3]. Other vendors: —   | ✅ public reference libraries [EG1]         | ✅ published by the government (2011) [NO2]  | ⚠️ described as open source [AU1]; repository availability today unverified |
| Specification / architecture                              | ✅ [CH2][CH3]                                                                                    | ✅ architecture and protocol documents [EE2]                               | ⚠️ not checked                                                         | ✅ technical data package listing [US2]                   | ✅ versioned spec v0.85 to v2.1 [EG1]       | ⚠️ architecture document found; not reviewed | ✅ technical reports [AU1]                                                  |
| Independent examination reports published                 | ✅ reports published from Apr 2022 to Aug 2026 [CH1]                                             | ⚠️ not checked                                                             | ⚠️ not checked                                                         | ✅ test plan, test report, certificate [US2]              | n/a                                         | ✅ source-code audit report [NO1]            | ⚠️ not checked                                                              |
| Standing public testing                                   | ✅ permanent bug bounty required (OEV Art. 13); 2019 public intrusion test [CH1][CH3]            | —                                                                          | ✅ Public Security Test (TPS), held the year before elections [BR2]    | —                                                         | —                                           | —                                            | —                                                                           |
| Deployed = published (hashes / signatures / build record) | ✅ OEV Art. 11 requires evidence that executables were generated from the published source [CH2] | ✅ README states the repo holds "the code that is used for election" [EE1] | ✅ hashes published; digital signature and sealing ceremony [BR3][BR4] | ✅ record of trusted build + hashes (VxSuite 4.0.7) [US2] | n/a                                         | ⚠️ not checked                               | ⚠️ not checked                                                              |
| Voter / public verifiability                              | ✅ "complete verifiability" is a condition of approval [CH1]                                     | ✅ individual verification app [EE2]                                       | ⚠️ not checked                                                         | — (paper-ballot system; out of scope for this row)        | ✅ end-to-end verifiability by design [EG2] | ⚠️ not checked                               | ✅ "the output from the election is verifiable" [AU1]                       |
| Status today                                              | In use (cantonal trials)                                                                         | In use                                                                     | In use                                                                 | Certified 2026-09-15 [US2]                                | Specification / SDK, not a voting system    | **Discontinued in 2014** [NO3]               | Used in 2014                                                                |

## Findings, with evidence

### Switzerland

- **CH1, Federal Chancellery, "Examination of systems"** (primary; bk.admin.ch). "only completely verifiable e-voting systems that meet the following examination and transparency requirements will be approved". The cantons "must ensure that comprehensive information on the system and its operation is published; this includes in particular the source code and the documentation" (Art. 27lbis PoRO, Art. 11–12 OEV). The cantons "are to offer a permanent bug bounty programme" (Art. 13 OEV). Examination reports were published from April 2022 through August 2026.
  https://www.bk.admin.ch/bk/en/home/politische-rechte/e-voting/ueberpruefung_systeme.html
- **CH2, Federal Chancellery Ordinance on Electronic Voting (OEV/VEleS), SR 161.116, Art. 11** (primary law). The canton must publish "a. the source code of the system software including files with relevant parameters; b. evidence that the machine-readable programmes were generated from the published software source code; c. the software documentation…".
  https://www.fedlex.admin.ch/eli/cc/2022/336/en
  ⚠️ fedlex needs JS to render. The Art. 11 text above was read from the search index. Before publishing, open the page in a browser and confirm the wording.
- **CH3, Swiss Post, "Publications and source code"** (primary, operator). The 2019 public intrusion test ran from 25 Feb to 24 Mar 2019, with ~3,200 participants, 173 findings and 16 confirmed. The final reports are published. Source and specifications are on GitLab (swisspost-evoting).
  https://swisspost-digital.ch/en/solutions/e-voting/publications-and-source-code

### Estonia

- **EE1, `valimised/ivxv` README** (primary, the electoral authority's GitHub org). "The intention behind this repository is to make source code of the Estonian online voting system available for public review… the code that can be found here is the code that is used for election."
  https://github.com/valimised/ivxv
- **EE2, State Electoral Office, "Documents about Internet Voting"** (primary). It publishes the architecture and protocol documents and the source code of the voting software, the individual verification application, the mixing application and the audit application.
  https://www.valimised.ee/en/internet-voting/documents-about-internet-voting

### Brazil

- **BR1, TSE news, Apr 2026** (primary). Source code is "à disposição das entidades habilitadas a fiscalizar o processo eleitoral" (available to entities accredited to oversee the process) since 2 Oct 2025. **Access is restricted. It is not a public release.**
  https://www.tse.jus.br/comunicacao/noticias/2026/Abril/eleicoes-2026-codigos-fonte-dos-sistemas-eleitorais-continuam-abertos-para-inspecao
- **BR2, TSE, "TPU / Teste Público de Segurança"** (primary). The test is held in the year before the elections, and registered experts look for weaknesses, which are fixed and re-tested before the election.
  https://www.tse.jus.br/eleicoes/tpu
- **BR3, TSE, "Resumos digitais (hashes)"** (primary). The hashes are generated at the sealing ceremony, and any party can check them.
  https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/hash
- **BR4, TSE Resolution 23.673/2021** (primary law). At the Digital Signature and Sealing Ceremony, source and executables are presented to the oversight entities, then signed and sealed.
  https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-673-14-de-dezembro-de-2021?texto=compilado
  ⚠️ tse.jus.br returns HTTP 403 to automated fetches. The quotes above come from the search index and must be confirmed in a browser.

### USA

- **US1, EAC, "Certified Voting Systems"** (primary). The list has 92 certified systems. Four are certified to VVSG 2.0: Hart Verity Vanguard 1.0 and 1.1, Smartmatic VSR1 2.1, and VotingWorks VxSuite 4.0.
  https://www.eac.gov/voting-equipment/certified-voting-systems
- **US2, EAC, "VotingWorks VxSuite 4.0"** (primary). Certified 2026-09-15 against VVSG 2.0 by the test lab SLI Compliance. The EAC published the test plan, the test report, the technical data package listing, the _Record of Trusted Build_ and a _Hashes_ archive for 4.0.7.
  https://www.eac.gov/voting-equipment/votingworks-vxsuite-4_0
- **US3, `votingworks/vxsuite`** (primary, vendor). "All files are licensed under GNU GPL v3.0 only."
  https://github.com/votingworks/vxsuite
  Note: public source is a VotingWorks property. It is **not** a general property of US certified systems.

### ElectionGuard

- **EG1, ElectionGuard, "Official specifications"** (primary). Versioned specifications from v0.85 to v2.1, with release notes.
  https://electionguard.vote/spec/
- **EG2, ElectionGuard, "What is ElectionGuard?"** (primary). An SDK that adds end-to-end verifiability. It is not a complete voting system, so the site must present it as a _practice or toolkit_ and not as a national system.
  https://electionguard.vote/

### Norway

- **NO1, Ministry of Local Government and Regional Development, "Source code audit of Norwegian electronic voting system"** (primary, government-commissioned).
  https://www.regjeringen.no/globalassets/upload/krd/prosjekter/e-valg/kildekode/evalg_rapport_kildekodegjennomgang.pdf
  ⚠️ The PDF returns HTTP 403 to automated fetches. Read it manually before quoting.
- **NO2, Østvold et al., NIK 2012, "Public review of e-voting source code: Lessons learnt from E-vote 2011"** (secondary, academic). "The source code of the e-voting system was made publicly available by the Norwegian government."
  https://nr.no/publikasjon/969999/
- **NO3, Government of Norway, "E-valgforsøket"** (primary). "Forsøk med stemmegivning over Internett videreføres ikke" (the internet-voting trials will not continue). The decision was taken in spring 2014.
  https://www.regjeringen.no/no/tema/valg-og-demokrati/den-norske-valgordningen/e-valgforsoket/id2407107/

### Australia (Victoria)

- **AU1, Culnane, Ryan, Schneider, Teague, "Secure and Verifiable Electronic Voting in Practice: the use of vVote in the Victorian State Election"** (the system designers, arXiv:1504.07098). "The code is open source, and the output from the election is verifiable."
  https://arxiv.org/abs/1504.07098
- **AU2, Parliament of Victoria, Electoral Matters Committee, "Inquiry into electronic voting"** (primary). ⚠️ The only copy we found is a third-party mirror. Get the parliament.vic.gov.au copy before citing it.

## Before any of this goes on the site

1. Re-check every ⚠️ row manually in a browser (fedlex, tse.jus.br, regjeringen.no PDF, Victorian Parliament PDF).
2. Create an archive.org snapshot for each URL and record it in `content/sources.yaml`.
3. Fill in or drop the "not checked" cells. The website never shows a practice as absent unless we confirmed its absence.
4. Present the comparison as **"what each one publishes"**. It must never be framed as a ranking.
