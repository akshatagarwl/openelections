import {
  ArrowDown,
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Building2,
  ChartNoAxesColumnIncreasing,
  Check,
  Clock3,
  CodeXml,
  ContactRound,
  CornerDownRight,
  FileChartColumnIncreasing,
  FolderOpen,
  GitPullRequest,
  Copy,
  Info,
  Landmark,
  ListChecks,
  LockKeyhole,
  MousePointer2,
  Network,
  Pause,
  Play,
  Plus,
  ScanSearch,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const icons = {
  "arrow-down": ArrowDown,
  "arrow-down-right": ArrowDownRight,
  "arrow-up": ArrowUp,
  "arrow-up-right": ArrowUpRight,
  "building-2": Building2,
  "chart-no-axes-column-increasing": ChartNoAxesColumnIncreasing,
  check: Check,
  "clock-3": Clock3,
  "code-xml": CodeXml,
  "contact-round": ContactRound,
  "corner-down-right": CornerDownRight,
  "file-chart-column-increasing": FileChartColumnIncreasing,
  "folder-open": FolderOpen,
  "git-pull-request": GitPullRequest,
  copy: Copy,
  info: Info,
  landmark: Landmark,
  "list-checks": ListChecks,
  "lock-keyhole": LockKeyhole,
  "mouse-pointer-2": MousePointer2,
  network: Network,
  pause: Pause,
  play: Play,
  plus: Plus,
  "scan-search": ScanSearch,
  "user-round-check": UserRoundCheck,
  "users-round": UsersRound,
};

export function Icon({ name, id }: { name: keyof typeof icons | "github"; id?: string }) {
  // Lucide's current release no longer ships brand icons; retain the original ISC artwork.
  if (name === "github")
    return (
      <svg
        id={id}
        className="lucide lucide-github"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
      </svg>
    );
  const Component = icons[name];
  return <Component id={id} aria-hidden="true" />;
}
