import type { ReactNode } from "react";
import "../src/style.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#eeeee7" />
        <meta
          name="description"
          content="Make ECINet/ERONet code that implements election rules or mediates statutory powers public—current components, future modules and every update. An enduring publication standard, not a one-time audit."
        />
        <meta
          property="og:title"
          content="Make source code of ECINet/ERONet public — OpenElections.in"
        />
        <meta
          property="og:description"
          content="Today’s concerns show why transparency matters. The demand covers every ECINet/ERONet component that implements election rules or mediates statutory powers, including future releases."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openelections.in/" />
        <meta property="og:site_name" content="OpenElections.in" />
        <meta property="og:image" content="https://openelections.in/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Make source code of ECINet/ERONet public. OpenElections.in — public scrutiny of election software, now and in every future release."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Make source code of ECINet/ERONet public" />
        <meta
          name="twitter:description"
          content="Publicly auditable election software by default: current code, future modules and every update. Protect people’s data, not the rules in code."
        />
        <meta name="twitter:image" content="https://openelections.in/og.png" />
        <meta
          name="twitter:image:alt"
          content="Make source code of ECINet/ERONet public. OpenElections.in."
        />
        <link rel="canonical" href="https://openelections.in/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Make source code of ECINet/ERONet public — OpenElections.in</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
