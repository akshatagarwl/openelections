import manrope from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?inline";
import { ImageResponse } from "takumi-js/response";
import OgArtwork from "../../src/og/artwork";

const font = Uint8Array.from(atob(manrope.slice(manrope.indexOf(",") + 1)), (c) => c.charCodeAt(0));
const provenance =
  "Original OpenElections.in artwork rendered from src/og/artwork.tsx with Takumi; Manrope SIL OFL. Illustrative ECINet diagram, not disclosed architecture.";

// Preserve the original image's authorship/licensing in a standard PNG tEXt chunk.
function withProvenance(png: Uint8Array) {
  const data = new TextEncoder().encode(`Description\0${provenance}`);
  const chunk = new Uint8Array(data.length + 12);
  const view = new DataView(chunk.buffer);
  view.setUint32(0, data.length);
  chunk.set([116, 69, 88, 116], 4); // tEXt
  chunk.set(data, 8);
  let crc = 0xffffffff;
  for (const byte of chunk.subarray(4, -4)) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  view.setUint32(chunk.length - 4, (crc ^ 0xffffffff) >>> 0);
  const result = new Uint8Array(png.length + chunk.length);
  result.set(png.subarray(0, -12));
  result.set(chunk, png.length - 12);
  result.set(png.subarray(-12), png.length - 12 + chunk.length);
  return result;
}

export async function GET() {
  const image = new ImageResponse(<OgArtwork />, {
    width: 1200,
    height: 630,
    fonts: [{ name: "Manrope", data: font }],
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
  return new Response(withProvenance(new Uint8Array(await image.arrayBuffer())), image);
}
