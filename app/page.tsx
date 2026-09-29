import Content from "@/content/en/page.mdx";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const repo = "https://github.com/akshatagarwl/openelections";

const sections = [
  { href: "#ecinet", label: "ECINet" },
  { href: "#ledger", label: "Ledger" },
  { href: "#compare", label: "Compare" },
  { href: "#request", label: "Request" },
  { href: "#method", label: "Method" },
];

// Markdown tables render as the stock shadcn Table.
const components = {
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
};

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-background/90 px-6 backdrop-blur">
        <nav aria-label="Sections" className="mx-auto flex max-w-6xl items-center gap-2 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/mark.svg" alt="" width={28} height={28} />
            <span>
              openelections<span className="text-muted-foreground">.in</span>
            </span>
          </a>
          <div className="ms-auto hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <Button
                key={s.href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={s.href} />}
              >
                {s.label}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" nativeButton={false} render={<a href={repo} />}>
            GitHub
          </Button>
        </nav>
      </header>

      <main id="top">
        <article className="page prose max-w-none prose-neutral prose-headings:text-balance prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-p:max-w-prose prose-li:max-w-prose sm:prose-h1:text-5xl sm:prose-h2:text-4xl">
          <Content components={components} />
        </article>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground">
        <Separator />
        <p>
          Content under CC BY 4.0, code under MIT. Corrections and new sources go to{" "}
          <a className="underline underline-offset-4" href={`${repo}/issues`}>
            GitHub issues
          </a>
          .
        </p>
      </footer>
    </>
  );
}
