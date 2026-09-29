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
  { href: "#ledger", label: "The seven" },
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
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b bg-background/90 px-6 backdrop-blur">
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 py-3"
        >
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/mark.svg" alt="" width={28} height={28} />
            <span>
              openelections<span className="text-muted-foreground">.in</span>
            </span>
          </a>
          <div className="order-last -mx-2 flex w-full items-center gap-1 overflow-x-auto md:order-none md:ms-auto md:w-auto">
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
          <Button
            variant="outline"
            size="sm"
            className="ms-auto md:ms-0"
            nativeButton={false}
            render={<a href={repo} />}
          >
            GitHub
          </Button>
        </nav>
      </header>

      <main id="top">
        <article
          id="content"
          className="page prose max-w-none prose-neutral prose-headings:text-balance prose-headings:tracking-tight prose-h1:text-5xl prose-h2:text-3xl prose-p:max-w-prose prose-a:underline-offset-4 prose-lead:text-foreground sm:prose-h1:text-6xl lg:prose-h2:text-4xl"
        >
          <Content components={components} />
        </article>
      </main>

      <footer className="flex flex-col gap-4 px-6 py-10 text-sm text-muted-foreground *:mx-auto *:w-full *:max-w-6xl">
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
