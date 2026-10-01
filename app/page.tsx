import { CodeExplorer } from "../src/components/code-explorer";
import { AuthoritySection } from "../src/components/authority-section";
import { ChapterNav } from "../src/components/chapter-nav";
import { CopyDemand } from "../src/components/copy-demand";
import { Icon } from "../src/components/icon";
import {
  PublicationChecklist,
  PublicationRequirement,
} from "../src/components/publication-checklist";
import { Methodology } from "../src/components/methodology";
import { ActionLink } from "../src/components/action-link";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="OpenElections.in home">
          <span className="brand-symbol" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          open<span className="wordmark-bold">elections</span>
          <span className="domain">.in</span>
        </a>
        <span className="header-purpose">Public election code. Every release.</span>
        <nav aria-label="Main navigation">
          <a href="#sources">
            The sources <Icon name="arrow-up-right" />
          </a>
          <ActionLink className="header-cta" href="#checklist">
            Read the demand <Icon name="arrow-down-right" />
          </ActionLink>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Make source code
              <br />
              of ECINet/ERONet
              <br />
              <span>public.</span>
            </h1>
            <p className="hero-deck">
              We demand that ECI open-source every part of ECINet/ERONet that implements election
              rules or mediates statutory powers—current code, future modules and every update.
            </p>
            <p className="hero-summary">
              ECI’s announced IIT/IIIT-assisted review is a start—not a substitute for public
              scrutiny.
              <a className="citation" href="#source-3" aria-label="Source 3">
                [3]
              </a>
              Publish the relevant code. Protect people’s data.
            </p>
            <ActionLink className="primary-link" href="#checklist">
              Read the demand{" "}
              <span>
                <Icon name="arrow-down" />
              </span>
            </ActionLink>
            <div className="hero-meta">
              <span>
                <Icon name="clock-3" /> A 6-minute exploration
              </span>
              <span>Evidence, not allegations</span>
            </div>
          </div>
          <CodeExplorer />
        </section>

        <ChapterNav />

        <section
          id="platform"
          className="chapter platform-section"
          aria-labelledby="platform-title"
        >
          <div className="section-heading">
            <span className="chapter-number">01 / WHY OPENNESS MATTERS</span>
            <h2 id="platform-title">
              What do the reported
              <br />
              ECINet concerns show?
            </h2>
            <p>
              ECINet integrates more than 40 apps and portals.
              <a className="citation" href="#source-1" aria-label="Source 1">
                [1]
              </a>
              <a className="citation" href="#source-2" aria-label="Source 2">
                [2]
              </a>
              These three reported concerns show why public scrutiny matters. They are examples—not
              the boundary of our demand. Future modules and changes must be open to the same
              scrutiny.
            </p>
          </div>
          <div className="concern-ledger">
            <article className="concern-row">
              <div className="concern-question">
                <Icon name="list-checks" />
                <h3>
                  Can a form add
                  <br />a new condition?
                </h3>
                <span>APPLICATION VALIDATION</span>
              </div>
              <div className="concern-evidence">
                <h4>Reported concern</h4>
                <p>
                  The Indian Express reported that the online Form 6 required an answer to an added
                  SIR-linked family question before an applicant could proceed.
                  <a className="citation" href="#source-8" aria-label="Source 8">
                    [8]
                  </a>
                </p>
              </div>
              <div className="concern-demand">
                <h4>Code to open</h4>
                <p>
                  Field definitions, mandatory checks and the rules that accept or block an
                  application.
                </p>
                <p className="audit-test">
                  <strong>The test</strong> Does each mandatory check have an identified legal
                  basis?
                </p>
              </div>
            </article>
            <article className="concern-row">
              <div className="concern-question">
                <Icon name="user-round-check" />
                <h3>
                  Who can change
                  <br />
                  the electoral roll?
                </h3>
                <span>PERMISSIONS &amp; OVERRIDES</span>
              </div>
              <div className="concern-evidence">
                <h4>Reported concern</h4>
                <p>
                  The investigation describes Commissioners questioning centralised database access
                  and reporting that field authorities lacked “proper and complete access”.
                  <a className="citation" href="#source-8" aria-label="Source 8">
                    [8]
                  </a>
                </p>
              </div>
              <div className="concern-demand">
                <h4>Code to open</h4>
                <p>
                  Role permissions, privileged operations, override rules and the audit trail for
                  changes.
                </p>
                <p className="audit-test">
                  <strong>The test</strong> Can only authorised roles act, and can their actions be
                  traced?
                </p>
              </div>
            </article>
            <article className="concern-row">
              <div className="concern-question">
                <Icon name="git-pull-request" />
                <h3>
                  Can a lawful decision
                  <br />
                  be carried out?
                </h3>
                <span>VOTER RESTORATION</span>
              </div>
              <div className="concern-evidence">
                <h4>Reported concern</h4>
                <p>
                  The paper reported that 97 people found eligible by Goa’s EROs were left off the
                  final roll after a requested restoration facility was not enabled in time.
                  <a className="citation" href="#source-8" aria-label="Source 8">
                    [8]
                  </a>
                </p>
              </div>
              <div className="concern-demand">
                <h4>Code to open</h4>
                <p>
                  Restoration state transitions, deadlines, feature controls and error-handling
                  paths.
                </p>
                <p className="audit-test">
                  <strong>The test</strong> Can an authorised officer execute a valid restoration
                  decision?
                </p>
              </div>
            </article>
          </div>
          <div className="response-note">
            <div>
              <h3>ECI’s stated response</h3>
              <p>
                Field access follows statutory powers; a review will check compliance, and
                additional flexibility will be enabled if needed.
                <a className="citation" href="#source-3" aria-label="Source 3">
                  [3]
                </a>
              </p>
            </div>
            <div>
              <h3>Unresolved in the current reporting</h3>
              <p>
                The follow-up explainer says ECI’s note did not resolve the online Form 6 question
                or explain why Goa’s restoration facility was not enabled.
                <a className="citation" href="#source-6" aria-label="Source 6">
                  [6]
                </a>
              </p>
            </div>
          </div>
          <div className="scope-note">
            <Icon name="info" />
            <p>
              <strong>Evidence boundary:</strong> these are attributed reports, not findings from
              our own inspection of ECINet or the internal notes. We make no claim about EVM vote
              recording. ECI says statutory forms prevail over conflicting digital data.
              <a className="citation" href="#source-1" aria-label="Source 1">
                [1]
              </a>
            </p>
          </div>
        </section>

        <AuthoritySection />

        <section id="review" className="chapter review-section" aria-labelledby="review-title">
          <span className="chapter-number">03 / THE SCRUTINY GAP</span>
          <h2 id="review-title">
            Is a committee
            <br />
            review enough?
          </h2>
          <div className="review-intro">
            <p>
              Expertise is not the issue.
              <br />
              Who can scrutinise the code is.
            </p>
            <p>
              On 26 September 2026, ECI announced a commission-led review including an independent
              IIT/IIIT expert, reporting to the Commission. That announcement is not a published
              audit result.
              <a className="citation" href="#source-3" aria-label="Source 3">
                [3]
              </a>
            </p>
          </div>
          <div className="comparison">
            <div className="comparison-column">
              <div className="comparison-label">
                <Icon name="scan-search" />
                <h3>A commissioned review</h3>
              </div>
              <p className="comparison-question">
                “What did the selected
                <br />
                reviewers find?”
              </p>
              <ul>
                <li>A defined group of reviewers</li>
                <li>A compliance review within a defined remit</li>
                <li>Findings submitted to the commissioning body</li>
              </ul>
              <span className="comparison-footnote">
                The announced ECINet process
                <a className="citation" href="#source-3" aria-label="Source 3">
                  [3]
                </a>
              </span>
            </div>
            <div className="comparison-column public-column">
              <div className="comparison-label">
                <Icon name="git-pull-request" />
                <h3>Public verification</h3>
              </div>
              <p className="comparison-question">
                “Can others test
                <br />
                the same claims?”
              </p>
              <ul>
                <li>Source and architecture anyone can inspect</li>
                <li>Published methods, findings and fixes</li>
                <li>Evidence linked to each software release</li>
              </ul>
              <span className="comparison-footnote">The public scrutiny we demand</span>
            </div>
          </div>
          <div className="evidence-boundary">
            <span className="boundary-label">
              <span className="status-dot"></span> WHAT WE CAN SAY
            </span>
            <p>
              We could not establish a public source repository, architecture, review report or
              reproducible-build package from the cited ECI material. This is a bounded research
              finding, not an exhaustive claim of absence.
              <strong>This is a limit on public verification—not evidence of manipulation.</strong>
            </p>
          </div>
        </section>

        <section
          id="precedents"
          className="chapter precedents-section"
          aria-labelledby="precedents-title"
        >
          <div className="section-heading">
            <span className="chapter-number">04 / THE PRECEDENTS</span>
            <h2 id="precedents-title">
              Do other democracies
              <br />
              publish election software?
            </h2>
            <p>
              Other election systems combine expert review with public disclosure. The useful
              comparison is their transparency practice—not a claim that the systems are identical.
            </p>
          </div>
          <div className="country-grid">
            <article className="country">
              <div className="country-top">
                <span className="country-code">EE</span>
                <div className="country-flag estonia-flag" role="img" aria-label="Estonian flag">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>ESTONIA</span>
              </div>
              <h3>
                Let people inspect
                <br />
                the source.
              </h3>
              <p>
                Estonia’s election authority says its internet-voting software source has been
                public for examination since July 2013. It also describes independent auditing.
                <a className="citation" href="#source-4" aria-label="Source 4">
                  [4]
                </a>
              </p>
              <blockquote className="repository-quote">
                <p>“the code that can be found here is the code that is used for election.”</p>
                <cite>
                  Estonian IVXV repository README
                  <a className="citation" href="#source-9" aria-label="Source 9">
                    [9]
                  </a>
                </cite>
              </blockquote>
              <ActionLink
                className="repo-link"
                href="https://github.com/valimised/ivxv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
                <span>
                  Estonia’s IVXV source code<small>github.com/valimised/ivxv</small>
                </span>
                <Icon name="arrow-up-right" />
                <span className="sr-only"> (opens in a new tab)</span>
              </ActionLink>
              <a
                className="text-link"
                href="https://www.valimised.ee/en/internet-voting/frequently-asked-questions/questions-about-reliability-i-voting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the election authority’s explanation
                <Icon name="arrow-up-right" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
            <article className="country">
              <div className="country-top">
                <span className="country-code">CH</span>
                <div className="country-flag swiss-flag" role="img" aria-label="Swiss flag">
                  <span></span>
                </div>
                <span>SWITZERLAND</span>
              </div>
              <h3>
                Publish the code.
                <br />
                And the path to verifying it.
              </h3>
              <p>
                Swiss Post publishes source with architecture, specifications, cryptographic proofs
                and build guidance. Its repository explicitly describes reproducible builds.
                <a className="citation" href="#source-10" aria-label="Source 10">
                  [10]
                </a>
              </p>
              <p className="country-context">
                The Federal Chancellery separately publishes independent examination reports.
                <a className="citation" href="#source-5" aria-label="Source 5">
                  [5]
                </a>
                Code publication and expert review work together.
              </p>
              <ActionLink
                className="repo-link"
                href="https://gitlab.com/swisspost-evoting/e-voting/e-voting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="code-xml" />
                <span>
                  Swiss Post’s e-voting source code<small>gitlab.com/swisspost-evoting</small>
                </span>
                <Icon name="arrow-up-right" />
                <span className="sr-only"> (opens in a new tab)</span>
              </ActionLink>
              <a
                className="text-link"
                href="https://www.bk.admin.ch/en/examination-of-systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the examination framework
                <Icon name="arrow-up-right" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </div>
          <div className="swiss-materials" aria-labelledby="swiss-materials-title">
            <div className="materials-heading">
              <h3 id="swiss-materials-title">Swiss Post publishes more than code.</h3>
              <p>
                Open the actual materials. Its Trusted Build documentation also links release hashes
                and signed build/deployment protocols.
                <a className="citation" href="#source-11" aria-label="Source 11">
                  [11]
                </a>
              </p>
            </div>
            <ul className="artifact-links">
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/blob/master/System/SwissPost_Voting_System_architecture_document.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    System architecture<small>Components, boundaries and design</small>
                  </span>
                  <span className="artifact-format">PDF</span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/blob/master/System/System_Specification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Detailed protocol specification<small>Algorithms and protocol steps</small>
                  </span>
                  <span className="artifact-format">PDF</span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/blob/master/Protocol/Swiss_Post_Voting_Protocol_Computational_proof.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Cryptographic proofs<small>Verifiability and privacy, with assumptions</small>
                  </span>
                  <span className="artifact-format">PDF</span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting/-/blob/master/BUILDING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Build instructions<small>Tools, dependencies and build steps</small>
                  </span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting/-/blob/master/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Changelog<small>Changes across published releases</small>
                  </span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/blob/master/Trusted-Build/Trusted%20Build%20of%20the%20Swiss%20Post%20Voting%20System.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Reproducible-build process
                    <small>How source, artifacts and deployment connect</small>
                  </span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/tree/master/Trusted-Build/E-Voting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Release hashes &amp; signed protocols
                    <small>Compare independently rebuilt artifacts</small>
                  </span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Supporting documentation<small>Operations, testing and security material</small>
                  </span>
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
            <p className="verification-note">
              <strong>Source → specification → reproducible build → deployment evidence.</strong>
              Researchers can examine more than a review’s conclusion. Cryptographic proofs have
              stated assumptions; matching build hashes alone do not prove what runs in production.
              <a className="citation" href="#source-10" aria-label="Source 10">
                [10]
              </a>
              <a className="citation" href="#source-11" aria-label="Source 11">
                [11]
              </a>
            </p>
          </div>
          <p className="precedent-caveat">
            <Icon name="corner-down-right" />
            These examples concern internet voting. ECINet is an election-services platform. This is
            not a proposal to introduce internet voting in India.
          </p>
        </section>

        <section className="privacy-section" aria-labelledby="privacy-title">
          <div>
            <h2 id="privacy-title">
              Can code be public
              <br />
              while voter data stays private?
            </h2>
            <p>
              The boundary is what code does—not whether it is disputed today. Publish code that
              implements election rules or mediates public powers. Keep personal records,
              credentials and live systems protected.
            </p>
          </div>
          <div className="disclosure-columns">
            <div>
              <h3>
                <Icon name="folder-open" /> Make public
              </h3>
              <ul>
                <li>Code implementing election rules and powers</li>
                <li>Architecture and role-permission rules</li>
                <li>Audit methods, findings and fixes</li>
                <li>Release history and build instructions</li>
              </ul>
            </div>
            <div>
              <h3>
                <Icon name="lock-keyhole" /> Keep protected
              </h3>
              <ul>
                <li>Personal voter and staff data</li>
                <li>Passwords and private keys</li>
                <li>Live operational credentials</li>
                <li>Exploitable details pending a safe fix</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="essay" className="chapter essay-section" aria-labelledby="essay-title">
          <div className="essay-kicker">
            <span className="chapter-number">05 / THE ARGUMENT</span>
            <p>Why election-software transparency now means more than reading the statute.</p>
          </div>
          <article className="essay-body">
            <h2 id="essay-title" className="sr-only">
              The argument for public verification
            </h2>
            <blockquote>
              <p>
                Suppose the law says an Electoral Registration Officer has a particular statutory
                power. Does the software actually allow the officer to exercise it?
              </p>
            </blockquote>
            <p className="essay-lede">
              For most of India’s history, election law was something you could largely read. The
              Representation of the People Acts told you who had authority. The Registration of
              Electors Rules told you how electoral rolls were maintained. Then power started moving
              into systems the public cannot inspect: software.
            </p>

            <ol className="essay-timeline" aria-label="Election software timeline">
              <li>
                <time dateTime="1997">1997</time>
                <div>
                  <h3>Electoral rolls begin moving behind a software layer.</h3>
                  <p>
                    The Election Commission began computerising electoral rolls, turning a
                    legal-administrative record into something also maintained through software that
                    ordinary citizens could not examine.
                    <a
                      href="https://www.eci.gov.in/voicenet/Article_leveraging_technology%20.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ECI technology overview
                    </a>
                    <a className="citation" href="#source-12" aria-label="Source 12">
                      [12]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2017">2017</time>
                <div>
                  <h3>ERO-NET puts officer decisions inside a common workflow.</h3>
                  <p>
                    ERO-NET was created to give Electoral Registration Officers a shared system for
                    voter applications, registration, correction, deletion, migration and
                    monitoring.
                    <a
                      href="https://www.eci.gov.in/voicenet/Article_leveraging_technology%20.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read ECI’s account
                    </a>
                    <a className="citation" href="#source-12" aria-label="Source 12">
                      [12]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2018">2018</time>
                <div>
                  <h3>Electoral-roll control is centralised into national infrastructure.</h3>
                  <p>
                    ERONET was introduced nationally, replacing separate state systems with common
                    infrastructure and a unified national electoral-roll database.
                    <a
                      href="https://www.eci.gov.in/eronet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      see the ERONET page
                    </a>
                    <a className="citation" href="#source-13" aria-label="Source 13">
                      [13]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2019">2019</time>
                <div>
                  <h3>Roll administration becomes dependent on undisclosed implementation.</h3>
                  <p>
                    By the general election, electoral-roll work was increasingly mediated through
                    ERONET: field verification, corrections, migration, deletion, duplicate
                    detection and ERO decision workflows.
                    <a
                      href="https://www.eci.gov.in/eronet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      review the functions ECI lists
                    </a>
                    <a className="citation" href="#source-13" aria-label="Source 13">
                      [13]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2025-05">May 2025</time>
                <div>
                  <h3>ECINet extends the software layer across election administration.</h3>
                  <p>
                    ECINet was designed to bring more than 40 existing ECI applications and websites
                    into one platform: voter services, ERONET, the BLO app, candidate information,
                    cVIGIL, permissions, observers, turnout, results and other election-management
                    systems.
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126682"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read the PIB release
                    </a>
                    <a className="citation" href="#source-1" aria-label="Source 1">
                      [1]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2025-11">Nov 2025</time>
                <div>
                  <h3>A live state election uses ECINet in beta.</h3>
                  <p>
                    A beta version was used during the Bihar election before the national launch.
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2196349"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      see the beta-use announcement
                    </a>
                    <a className="citation" href="#source-14" aria-label="Source 14">
                      [14]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2026-01">Jan 2026</time>
                <div>
                  <h3>ECINet becomes official national election infrastructure.</h3>
                  <p>
                    India moves from dozens of separate election applications toward an integrated
                    national software platform.
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2217429"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read the launch release
                    </a>
                    <a className="citation" href="#source-2" aria-label="Source 2">
                      [2]
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <time dateTime="2026-09-26">Sep 2026</time>
                <div>
                  <h3>ECI offers a review instead of public verifiability.</h3>
                  <p>
                    ECI said field officers have role-based access to ECINet according to their
                    statutory powers, and announced a committee including an independent IIT/IIIT
                    expert to review whether ECINet complies with the Acts and Rules. That is still
                    an internal process unless the public can inspect the evidence.
                    <a
                      href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2315309"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read ECI’s statement
                    </a>
                    <a className="citation" href="#source-3" aria-label="Source 3">
                      [3]
                    </a>
                  </p>
                </div>
              </li>
            </ol>

            <p>
              That is the transparency problem ECI has not answered. Software may make election
              administration faster, more consistent and more accessible. But once statutory
              processes are implemented through closed software, the public is being asked to accept
              assurances about who can change a voter record, which actions require approval, which
              validation rules block an officer, who can change those rules, and what version is
              running in production.
            </p>
            <p>
              A committee chosen to review ECINet is not the same thing as public accountability. It
              can inspect a system at a point in time and report within the scope it is given.
              Public technical scrutiny is harder to contain: if architecture, permission models,
              relevant source code, audit methodology and version history are available, outside
              experts can test the claims ECI makes about authority against the way that authority
              is actually implemented.
            </p>
            <p>
              The usual excuse does not work here. None of this requires publishing voter data,
              passwords, private keys, production credentials or sensitive infrastructure
              configuration. Other democracies already separate those things: Estonia publishes
              source code for its internet-voting system, and Switzerland publishes source code,
              specifications and verification material for its e-voting system.
              <a href="https://github.com/valimised/ivxv" target="_blank" rel="noopener noreferrer">
                Estonia IVXV repository
              </a>
              ·
              <a
                href="https://gitlab.com/swisspost-evoting/e-voting/e-voting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swiss Post e-voting repository
              </a>
              <a className="citation" href="#source-4" aria-label="Source 4">
                [4]
              </a>
              <a className="citation" href="#source-5" aria-label="Source 5">
                [5]
              </a>
              <a className="citation" href="#source-9" aria-label="Source 9">
                [9]
              </a>
              <a className="citation" href="#source-10" aria-label="Source 10">
                [10]
              </a>
            </p>
            <p>
              As India’s election software layer becomes more important, trust-us governance is not
              enough. If ECINet preserves lawful decentralised authority, ECI should be able to
              prove that in public. The question is no longer only whether we trust the people
              operating it. The more useful question is:
              <strong>What can an independent person verify for themselves?</strong>
            </p>
          </article>
        </section>

        <section
          id="checklist"
          className="chapter checklist-section"
          aria-labelledby="checklist-title"
        >
          <div className="checklist-intro">
            <span className="chapter-number">06 / OUR DEMAND</span>
            <h2 id="checklist-title">What should ECI publish?</h2>
            <p>
              ECI should adopt a standing publication policy for all code that implements election
              rules or mediates statutory powers—not only the parts questioned today. Publish
              current components, future modules and every update with the evidence needed to audit
              them.
            </p>
            <p className="checklist-caption">
              Publish code and synthetic tests before deployment. With each release, publish the
              changes, review status and signed artifacts; then record what was deployed and any
              fixes. Use an open-source licence so others can run, modify and share the code—not
              voter data, credentials or access to live systems.
            </p>
            <CopyDemand />
          </div>
          <PublicationChecklist>
            <PublicationRequirement value="source" number="01" title="Source code">
              <p>
                Maintain public repositories for every current or future component that implements
                election rules or mediates statutory powers, with required dependencies and
                synthetic tests. Publish new modules and changes before deployment, under an
                open-source licence permitting inspection, use, modification and redistribution.
                Publication must not depend on a complaint or controversy.
              </p>
              <span className="test-question">
                The test: What rules does the software actually enforce?
              </span>
            </PublicationRequirement>
            <PublicationRequirement
              value="architecture"
              number="02"
              title="Architecture & permissions"
            >
              <p>
                Publish and keep current the data flows, trust boundaries, role-permission mappings,
                overrides and appeal workflows. For every new module or change, explain which
                statutory power or election rule it implements.
              </p>
              <span className="test-question">
                The test: Who can do what—and who can override it?
              </span>
            </PublicationRequirement>
            <PublicationRequirement value="audit" number="03" title="Audit reports & remediation">
              <p>
                Publish scope, methods, versions examined, findings and fixes. Each release must
                state what has and has not been independently reviewed. Reassess changes affecting
                rules or permissions; keep a public issue and remediation history. Protect personal
                data and coordinate disclosure of exploitable vulnerabilities.
              </p>
              <span className="test-question">
                The test: What was examined, what was found, and what changed?
              </span>
            </PublicationRequirement>
            <PublicationRequirement value="history" number="04" title="Version & change history">
              <p>
                Provide tagged releases, meaningful change logs, approval records and dated
                deployment records for every update—including configuration and feature-flag changes
                that affect rules or permissions. Preserve earlier versions so past decisions remain
                auditable. Emergency fixes must also be recorded and reviewed.
              </p>
              <span className="test-question">The test: Which rules were running, and when?</span>
            </PublicationRequirement>
            <PublicationRequirement value="builds" number="05" title="Reproducible builds">
              <p>
                Publish pinned build inputs, instructions and signed hashes for every release, so
                others can rebuild the same artifact. Deployment attestations are still needed to
                connect that artifact to the running service. Keep those records available after the
                next update.
              </p>
              <span className="test-question">
                The test: Does the reviewed source match the released software?
              </span>
            </PublicationRequirement>
          </PublicationChecklist>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="closing-mark" aria-hidden="true">
            <Icon name="code-xml" />
          </div>
          <h2 id="closing-title">
            Why should public power
            <br />
            depend on secret code?
          </h2>
          <p>
            Not just the code questioned today.
            <br />
            Every component that implements election rules or statutory powers. Every future
            release.
          </p>
          <a href="#checklist" className="text-link">
            Read and share the demand. <Icon name="arrow-down-right" />
          </a>
        </section>

        <section id="sources" className="sources-section" aria-labelledby="sources-title">
          <div className="sources-heading">
            <h2 id="sources-title">The evidence desk.</h2>
            <p>Official documents, attributed reporting and clearly labelled opinion.</p>
            <span>Research checked 29 September 2026</span>
          </div>
          <ol className="source-list">
            <li id="source-1">
              <span className="source-number">[1]</span>
              <div>
                <span className="source-publisher">
                  ELECTION COMMISSION OF INDIA · PIB · 4 MAY 2025
                </span>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126682"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECI to soon launch a single-point App for stakeholders
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  40+ apps, integrated services, authorised officials and the primacy of statutory
                  forms.
                </p>
              </div>
            </li>
            <li id="source-2">
              <span className="source-number">[2]</span>
              <div>
                <span className="source-publisher">
                  ELECTION COMMISSION OF INDIA · PIB · 22 JANUARY 2026
                </span>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2217429"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECINet’s official launch <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Launch of the unified platform integrating more than 40 applications and portals.
                </p>
              </div>
            </li>
            <li id="source-3">
              <span className="source-number">[3]</span>
              <div>
                <span className="source-publisher">
                  ELECTION COMMISSION OF INDIA · PIB · 26 SEPTEMBER 2026
                </span>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2315309"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commission decisions on ECINet access and review
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Role-based access aligned with statutory powers; a commission-led review including
                  an independent IIT/IIIT expert.
                </p>
              </div>
            </li>
            <li id="source-4">
              <span className="source-number">[4]</span>
              <div>
                <span className="source-publisher">ESTONIAN ELECTION AUTHORITY</span>
                <a
                  href="https://www.valimised.ee/en/internet-voting/frequently-asked-questions/questions-about-reliability-i-voting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Questions about the reliability of i-voting
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>Public source code since July 2013 and independent auditing. See question 31.</p>
              </div>
            </li>
            <li id="source-5">
              <span className="source-number">[5]</span>
              <div>
                <span className="source-publisher">SWISS FEDERAL CHANCELLERY</span>
                <a
                  href="https://www.bk.admin.ch/en/examination-of-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Examination of systems <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Independent examinations, source and documentation disclosure, public scrutiny and
                  published reports.
                </p>
              </div>
            </li>
            <li id="source-6">
              <span className="source-number">[6]</span>
              <div>
                <span className="source-publisher">
                  THE INDIAN EXPRESS · EXPLAINER · REPORTING, NOT AN ECI DOCUMENT
                </span>
                <a
                  href="https://indianexpress.com/article/explained/election-commission-nine-new-decisions-what-changes-and-what-doesnt-10895475/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Election Commission’s nine new decisions: What changes and what doesn’t{" "}
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Explains the review announcement and unresolved questions about the online Form 6
                  field and Goa’s restoration facility.
                </p>
              </div>
            </li>
            <li id="source-7">
              <span className="source-number">[7]</span>
              <div>
                <span className="source-publisher">
                  THE INDIAN EXPRESS · EDITORIAL OPINION · 29 SEPTEMBER 2026
                </span>
                <a
                  href="https://indianexpress.com/article/opinion/editorials/cec-needs-to-correct-course-not-just-damage-control-10898169/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CEC needs to correct course, not just damage control
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Argues for institutional accountability beyond the announced changes. Context for
                  this demand, not independent technical evidence or proof of manipulation.
                </p>
              </div>
            </li>
            <li id="source-8">
              <span className="source-number">[8]</span>
              <div>
                <span className="source-publisher">
                  THE INDIAN EXPRESS · ORIGINAL INVESTIGATION · REPORTED INTERNAL RECORDS
                </span>
                <a
                  href="https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  14 times in 10 months, two Election Commissioners objected on record to poll panel
                  steps <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Reports the Form 6, access-control and Goa restoration concerns. The newspaper
                  says it examined the exchanges; this website has not independently obtained those
                  underlying records.
                </p>
              </div>
            </li>
            <li id="source-9">
              <span className="source-number">[9]</span>
              <div>
                <span className="source-publisher">
                  ESTONIAN STATE ELECTORAL OFFICE · IVXV REPOSITORY
                </span>
                <a
                  href="https://github.com/valimised/ivxv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IVXV online voting system — source and README
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  The repository states that it publishes code for public review and that the code
                  is used for elections, with development supervised by the State Electoral Office.
                  This is an attributed repository statement, not our own deployment audit.
                </p>
              </div>
            </li>
            <li id="source-10">
              <span className="source-number">[10]</span>
              <div>
                <span className="source-publisher">SWISS POST · E-VOTING SOURCE REPOSITORY</span>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swiss Post Voting System — source, build guide and changelog
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  The README links architecture, detailed specifications and cryptographic proofs,
                  describes reproducible builds, and states that Linux-build hashes are published.
                </p>
              </div>
            </li>
            <li id="source-11">
              <span className="source-number">[11]</span>
              <div>
                <span className="source-publisher">
                  SWISS POST · SYSTEM DOCUMENTATION &amp; TRUSTED BUILD
                </span>
                <a
                  href="https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation/-/tree/master/Trusted-Build"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trusted Build and Trusted Deployment documentation
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Describes independent rebuilds, hash comparisons and signed deployment evidence.
                  The index links per-release hashes and build/deployment protocols; separate System
                  and Protocol directories contain specifications and proofs.
                </p>
              </div>
            </li>
            <li id="source-12">
              <span className="source-number">[12]</span>
              <div>
                <span className="source-publisher">
                  ELECTION COMMISSION OF INDIA · TECHNOLOGY OVERVIEW
                </span>
                <a
                  href="https://www.eci.gov.in/voicenet/Article_leveraging_technology%20.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leveraging technology for electoral-roll management
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Describes electoral-roll computerisation beginning in August 1997 and ERONET as a
                  web-based platform for ERO workflows.
                </p>
              </div>
            </li>
            <li id="source-13">
              <span className="source-number">[13]</span>
              <div>
                <span className="source-publisher">ELECTION COMMISSION OF INDIA · ERONET</span>
                <a href="https://www.eci.gov.in/eronet" target="_blank" rel="noopener noreferrer">
                  ERO NET <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Describes ERONET’s unified national electoral-roll database, form processing,
                  duplicate detection and standardised e-roll printing.
                </p>
              </div>
            </li>
            <li id="source-14">
              <span className="source-number">[14]</span>
              <div>
                <span className="source-publisher">PIB · 27 NOVEMBER 2025</span>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2196349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECINet beta use during Bihar elections
                  <Icon name="arrow-up-right" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>
                  Describes the beta version of ECINet being used during the Bihar elections before
                  the January 2026 launch.
                </p>
              </div>
            </li>
          </ol>
          <Methodology>
            <p>
              ECI statements are attributed, not treated as independent proof of implementation. The
              diagrams explain concepts; they are not reverse-engineered ECINet designs. The demand
              and disclosure boundaries are our advocacy position, not a claim about an existing
              legal duty to publish source code. “Public verification” here means independent
              inspection and testing—not proof that a system is flawless.
            </p>
            <p>
              Our availability statement is a bounded research finding, not an exhaustive inventory
              of every ECI publication. The newspaper’s investigation and explainer are attributed
              reporting; its editorial is opinion. They do not substitute for the underlying
              internal documents or an independent examination of the software. PIB blocked direct
              automated retrieval during preparation; those releases were checked through
              search-indexed primary-source passages. The Estonian and Swiss pages and linked
              repository documentation were retrieved directly. We have not independently rebuilt
              these systems, verified the cryptographic proofs or audited their deployed binaries.
              Recheck the linked originals before relying on time-sensitive details.
            </p>
            <p>
              This website is independent and is not affiliated with the Election Commission of
              India. The website code is MIT-licensed; third-party source materials retain their own
              rights.
            </p>
          </Methodology>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#" className="footer-brand">
          openelections<span>.in</span>
        </a>
        <p>Public infrastructure. Public understanding.</p>
        <a
          href="https://github.com/akshatagarwl/openelections"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub <Icon name="github" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href="/LICENSE.txt">
          MIT licence <Icon name="arrow-up-right" />
        </a>
        <ActionLink href="#" className="back-to-top" aria-label="Back to top">
          <Icon name="arrow-up" />
        </ActionLink>
      </footer>
    </>
  );
}
