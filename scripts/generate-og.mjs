import { readFile, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

// Original vector artwork, authored for OpenElections.in. No stock or generated imagery.
// The SVG is the editable master; the PNG is committed so builds need no browser.
const font = await readFile(
  new URL(
    "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
    import.meta.url,
  ),
);
const provenance =
  "Original OpenElections.in vector artwork rendered from scripts/generate-og.mjs; Manrope SIL OFL. Illustrative ECINet diagram, not disclosed architecture.";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
<title id="title">Make source code of ECINet/ERONet public</title>
<desc id="desc">OpenElections.in. A demand for public scrutiny of election software, now and in every future release. Form 6, permissions and restoration are current examples, not the boundary of the demand.</desc>
<metadata>${provenance}</metadata>
<defs><style>
@font-face { font-family: Manrope; font-style: normal; font-weight: 200 800; src: url(data:font/woff2;base64,${font.toString("base64")}) format('woff2'); }
text { font-family: Manrope, sans-serif; }
</style></defs>
<rect width="1200" height="630" fill="#eeeee7"/>
<g fill="#243b2e"><path d="M60 43l7-4v25l-7 4zM72 35l7-4v33l-7 4zM84 47l7-4v21l-7 4z"/></g>
<text x="108" y="62" fill="#243b2e" font-size="27" font-weight="750" letter-spacing="-1">openelections<tspan font-weight="400">.in</tspan></text>
<text x="1140" y="57" text-anchor="end" fill="#626a60" font-size="14">Independent. Nonpartisan.</text>
<path d="M60 101H1140" stroke="#cccec2"/>
<g font-size="66" font-weight="580" letter-spacing="-2.5">
<text x="58" y="213" fill="#243b2e">Make source code</text>
<text x="58" y="295" fill="#243b2e">of ECINet/ERONet</text>
<text x="58" y="377" fill="#426b41">public.</text>
</g>
<text x="62" y="442" fill="#526149" font-size="21">Public code. Future modules. Every update.</text>
<rect x="806" y="151" width="334" height="334" rx="4" fill="#25392e"/>
<g fill="none" stroke="#819768" stroke-width="1">
<circle cx="973" cy="318" r="106" opacity=".3" stroke-dasharray="2 5"/>
<path d="M973 223V276M883 318H931M1015 318H1062M973 360V413"/>
<circle cx="973" cy="318" r="57" fill="#2f4434" stroke="#a5ba81"/>
</g>
<g fill="#c4dd91"><path d="M961 290l6-3v20l-6 3zM971 283l6-3v27l-6 3zM981 294l6-3v16l-6 3z"/></g>
<text x="973" y="338" text-anchor="middle" fill="#eeeee7" font-size="25" font-weight="650" letter-spacing="-1">ECINet</text>
<text x="973" y="355" text-anchor="middle" fill="#becfa9" font-size="8" letter-spacing="1">ELECTORAL ROLLS</text>
<rect x="924" y="196" width="98" height="35" rx="3" fill="#c4dd91"/>
<text x="973" y="218" text-anchor="middle" fill="#25392e" font-size="12" font-weight="650">Form 6</text>
<rect x="822" y="301" width="101" height="35" rx="3" fill="#2a3f30" stroke="#627951"/>
<text x="872" y="323" text-anchor="middle" fill="#e0e8d5" font-size="11">Permissions</text>
<rect x="1024" y="301" width="101" height="35" rx="3" fill="#2a3f30" stroke="#627951"/>
<text x="1074" y="323" text-anchor="middle" fill="#e0e8d5" font-size="11">Restoration</text>
<text x="973" y="441" text-anchor="middle" fill="#becfa9" font-size="10" letter-spacing=".7">EVERY MODULE. EVERY RELEASE.</text>
<path d="M60 520H1140" stroke="#cccec2"/>
<text x="62" y="568" fill="#243b2e" font-size="17" font-weight="650">openelections.in</text>
<text x="1140" y="568" text-anchor="end" fill="#626a60" font-size="15">Read the evidence. Share the demand.</text>
</svg>`;
await writeFile(new URL("../public/og.svg", import.meta.url), svg);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(
    `<html><head><style>html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}</style></head><body>${svg}</body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: "png" });
  // Embed provenance as a standard PNG tEXt chunk before IEND.
  const data = Buffer.from(`Description\0${provenance}`, "latin1");
  const type = Buffer.from("tEXt");
  let crc = 0xffffffff;
  for (const byte of Buffer.concat([type, data])) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++)
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  const chunk = Buffer.alloc(data.length + 12);
  chunk.writeUInt32BE(data.length, 0);
  type.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE((crc ^ 0xffffffff) >>> 0, chunk.length - 4);
  await writeFile(
    new URL("../public/og.png", import.meta.url),
    Buffer.concat([png.subarray(0, -12), chunk, png.subarray(-12)]),
  );
  console.log(
    "Generated public/og.svg and public/og.png (1200 × 630), with embedded provenance.",
  );
} finally {
  await browser.close();
}
