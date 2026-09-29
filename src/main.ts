import "./style.css";
import {
  createIcons,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Clock3,
  Pause,
  Play,
  ListChecks,
  UsersRound,
  ContactRound,
  Network,
  ChartNoAxesColumnIncreasing,
  FileChartColumnIncreasing,
  Info,
  Landmark,
  Building2,
  UserRoundCheck,
  CodeXml,
  Check,
  MousePointer2,
  ScanSearch,
  GitPullRequest,
  CornerDownRight,
  FolderOpen,
  LockKeyhole,
  Copy,
  Plus,
  Github,
} from "lucide";

const icons = {
  ArrowUpRight,
  ArrowDownRight,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Clock3,
  Pause,
  Play,
  ListChecks,
  UsersRound,
  ContactRound,
  Network,
  ChartNoAxesColumnIncreasing,
  FileChartColumnIncreasing,
  Info,
  Landmark,
  Building2,
  UserRoundCheck,
  CodeXml,
  Check,
  MousePointer2,
  ScanSearch,
  GitPullRequest,
  CornerDownRight,
  FolderOpen,
  LockKeyhole,
  Copy,
  Plus,
  Github,
};
const renderIcons = () =>
  createIcons({ icons, attrs: { "aria-hidden": "true" } });
renderIcons();

const workflows: Record<
  string,
  { index: string; text: string; source?: number }
> = {
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
    text: "Our demand: publish version history and deployment records so changes to validation, permissions and restoration can be traced.",
  },
  builds: {
    index: "06",
    text: "Our demand: publish dependencies, build inputs and release hashes, with evidence connecting reviewed code to deployments.",
  },
};
const workflowButtons =
  document.querySelectorAll<HTMLButtonElement>("[data-workflow]");
workflowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = workflows[button.dataset.workflow!];
    workflowButtons.forEach((node) => {
      const selected = node === button;
      node.classList.toggle("is-selected", selected);
      node.setAttribute("aria-pressed", String(selected));
    });
    document.querySelector("#workflow-index")!.textContent =
      `${item.index} / 06`;
    const detail = document.querySelector("#workflow-detail")!;
    detail.textContent = `${item.text} `;
    if (item.source) {
      const citation = document.createElement("a");
      citation.className = "citation";
      citation.href = `#source-${item.source}`;
      citation.setAttribute("aria-label", `Source ${item.source}`);
      citation.textContent = `[${item.source}]`;
      detail.append(citation);
    }
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton =
  document.querySelector<HTMLButtonElement>("#motion-toggle")!;
let userPaused = false;
function syncMotion() {
  const paused = userPaused || reducedMotion.matches;
  document.documentElement.classList.toggle("motion-paused", paused);
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute(
    "aria-label",
    reducedMotion.matches
      ? "Animation disabled by reduced-motion preference"
      : `${paused ? "Play" : "Pause"} diagram animation`,
  );
  motionButton.disabled = reducedMotion.matches;
  motionButton.innerHTML = `<i data-lucide="${paused ? "play" : "pause"}"></i>`;
  renderIcons();
}
motionButton.addEventListener("click", () => {
  userPaused = !userPaused;
  syncMotion();
});
reducedMotion.addEventListener("change", syncMotion);
syncMotion();

const views = document.querySelectorAll<HTMLButtonElement>("[data-view]");
views.forEach((button) => {
  button.addEventListener("click", () => {
    const software = button.dataset.view === "software";
    views.forEach((node) =>
      node.setAttribute("aria-pressed", String(node === button)),
    );
    const figure = document.querySelector<HTMLElement>(".authority-figure")!;
    figure.dataset.perspective = software ? "software" : "authority";
    document.querySelector("#perspective-label")!.textContent = software
      ? "THE IMPLEMENTATION LAYER"
      : "THE LEGAL LAYER";
    document.querySelector("#perspective-status")!.innerHTML = software
      ? "WHAT NEEDS PUBLIC EVIDENCE"
      : 'ECI’S STATED POSITION <a class="citation" href="#source-3" aria-label="Source 3">[3]</a>';
    document.querySelector("#implementation-title")!.textContent = software
      ? "ECINet: permissions, rules and overrides"
      : "Powers remain with designated officers";
    document.querySelector("#implementation-subtitle")!.textContent = software
      ? "Who can act? Who can block? Who can change the rules?"
      : "Software should reflect—not redefine—the law.";
    document.querySelector("#authority-caption")!.textContent = software
      ? "Shared code mediates access. Public source, permission mappings and deployment evidence would let others test whether every role can exercise its lawful powers."
      : "A unified platform does not, by itself, transfer statutory authority. The question is whether its permissions preserve that authority in practice.";
    const icon = document.querySelector("#implementation-icon")!;
    const replacement = document.createElement("i");
    replacement.id = "implementation-icon";
    replacement.dataset.lucide = software ? "scan-search" : "check";
    icon.replaceWith(replacement);
    renderIcons();
  });
});

const chapters = [
  ...document.querySelectorAll<HTMLElement>("section.chapter[id]"),
];
const chapterLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>(".chapter-link"),
];
const progress = document.querySelector<HTMLElement>(".reading-progress")!;
let scheduled = false;
function updateReadingPosition() {
  scheduled = false;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0})`;
  let current = "";
  chapters.forEach((chapter) => {
    if (chapter.getBoundingClientRect().top <= window.innerHeight * 0.45)
      current = chapter.id;
  });
  chapterLinks.forEach((link) => {
    const active = link.hash === `#${current}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
function scheduleReadingUpdate() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateReadingPosition);
  }
}
window.addEventListener("scroll", scheduleReadingUpdate, { passive: true });
window.addEventListener("resize", scheduleReadingUpdate, { passive: true });
updateReadingPosition();

// One bounded reveal: the legal layer resolves as it enters the reader's field.
// Content is visible before JavaScript and never waits for an observer to appear.
const figure = document.querySelector<HTMLElement>(".authority-figure")!;
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (!reducedMotion.matches) {
          figure.animate(
            [
              { transform: "translateY(16px)", opacity: 0.65 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            { duration: 750, easing: "cubic-bezier(.16,1,.3,1)" },
          );
        }
        observer.disconnect();
      }
    }
  },
  { threshold: 0.2 },
);
observer.observe(figure);

const checklist = `OpenElections.in — our demand to the ECI\n\nOpen-source the ECINet/ERONet components that validate voter applications, control official access and restore voters, with supporting code and evidence for repeatable public audits.\n\n1. Relevant source code: publish application validation, role permissions, restoration workflows, overrides and audit-trail logic, with dependencies and an open-source licence permitting inspection, running, modification, redistribution and publication of findings. Provide synthetic test data.\n2. Architecture & permissions: disclose data flows, trust boundaries and statutory role mappings.\n3. Audit reports & remediation: publish scope, methods, versions, findings and fixes, with safety-conscious redactions.\n4. Version & change history: tag releases and document changes and deployments.\n5. Reproducible builds: publish pinned inputs, build instructions and signed hashes; connect releases to deployments with attestations.\n\nProtect personal data, passwords, private keys and live credentials. This demand concerns the relevant electoral-roll components, not every ECINet service and not public access to live systems.\nAn expert review does not replace public scrutiny. This is a nonpartisan demand, not an allegation of manipulation or a claim of an existing legal publication duty.\n\nRead and share the demand: https://openelections.in/#checklist\nPrimary sources: https://openelections.in/#sources`;
const copyButton =
  document.querySelector<HTMLButtonElement>("#copy-checklist")!;
copyButton.addEventListener("click", async () => {
  const status = document.querySelector("#copy-status")!;
  try {
    await navigator.clipboard.writeText(checklist);
    status.textContent = "Demand copied. Ready to share.";
  } catch {
    // A real downloadable fallback for denied clipboard permissions or insecure hosts.
    const blob = new Blob([checklist], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "openelections-open-code-demand.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = "Clipboard unavailable. Demand downloaded instead.";
  }
});
